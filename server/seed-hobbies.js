import 'dotenv/config';
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Set MONGODB_URI in .env before seeding hobbies.');
}

const seedHobbies = [
  { name: 'Reading Books', blurb: 'Biographies, business, and the occasional novel.', icon: 'BookOpen' },
  { name: 'Traveling', blurb: 'New places, new perspectives, new data points.', icon: 'Plane' },
  { name: 'Music', blurb: 'A soundtrack for focus, reflection, and energy.', icon: 'Music' },
  { name: 'Movies', blurb: 'Stories that move and ideas that stick.', icon: 'Film' },
  { name: 'Photography', blurb: 'Finding composition in everyday moments.', icon: 'Camera' },
  { name: 'Learning AI', blurb: 'Following where machine intelligence is heading.', icon: 'Sparkles' },
  { name: 'Exploring Tech', blurb: 'Hands-on with new tools and emerging tech.', icon: 'Cpu' },
];

const hobbySchema = new mongoose.Schema({
  name: String,
  blurb: String,
  icon: String,
});
const Hobby = mongoose.model('Hobby', hobbySchema);

await mongoose.connect(process.env.MONGODB_URI);
await Hobby.bulkWrite(
  seedHobbies.map((hobby) => ({
    updateOne: {
      filter: { name: hobby.name },
      update: { $set: hobby },
      upsert: true,
    },
  }))
);
console.log(`Seeded ${seedHobbies.length} hobbies.`);
await mongoose.disconnect();
