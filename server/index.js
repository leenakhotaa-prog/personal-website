import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 5000;

const hobbySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true, maxlength: 80 },
    blurb: { type: String, required: true, trim: true, maxlength: 280 },
    icon: { type: String, default: 'Sparkles', maxlength: 40 },
  },
  { timestamps: true }
);

const Hobby = mongoose.model('Hobby', hobbySchema);

app.use(express.json());

const databaseReady = () => mongoose.connection.readyState === 1;

app.get('/api/health', (_request, response) => {
  response.json({ database: databaseReady() ? 'connected' : 'not configured' });
});

app.get('/api/hobbies', async (_request, response, next) => {
  if (!databaseReady()) {
    return response.status(503).json({ message: 'MongoDB is not configured yet.' });
  }

  try {
    const hobbies = await Hobby.find().sort({ createdAt: 1, name: 1 }).lean();
    return response.json(hobbies);
  } catch (error) {
    return next(error);
  }
});

app.post('/api/hobbies', async (request, response, next) => {
  if (!databaseReady()) {
    return response.status(503).json({ message: 'MongoDB is not configured yet.' });
  }

  try {
    const hobby = await Hobby.create(request.body);
    return response.status(201).json(hobby);
  } catch (error) {
    return next(error);
  }
});

app.use((error, _request, response, _next) => {
  if (error instanceof mongoose.Error.ValidationError) {
    return response.status(400).json({ message: error.message });
  }
  if (error?.code === 11000) {
    return response.status(409).json({ message: 'A hobby with this name already exists.' });
  }
  console.error(error);
  return response.status(500).json({ message: 'Unexpected server error.' });
});

async function start() {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB.');
    } catch (error) {
      console.error('MongoDB connection failed:', error.message);
    }
  } else {
    console.warn('MONGODB_URI is not set. The app will use its built-in hobby entries.');
  }

  app.listen(port, '127.0.0.1', () => {
    console.log(`Hobbies API listening on http://127.0.0.1:${port}`);
  });
}

start();
