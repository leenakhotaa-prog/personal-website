# personal-website

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-9eiswhf7)

## MongoDB hobbies

The site can load hobbies from MongoDB through a local API. Until the database is configured, it safely displays the built-in hobby entries.

1. Create a MongoDB Atlas database and copy its connection URI.
2. Copy `.env.example` to `.env`, then set `MONGODB_URI`.
3. Run `npm run seed:hobbies` to add the starter hobby records.
4. Run `npm run server` in one terminal and `npm run dev` in another.

The API exposes `GET /api/hobbies` and `POST /api/hobbies` for the local site. It listens only on `127.0.0.1`; do not expose it publicly without adding authentication.

## Deploy to Render

The included `render.yaml` deploys the website and API as one Render web service.

1. Push the project to GitHub.
2. In Render, create a new Blueprint and select this repository.
3. Set the `MONGODB_URI` environment variable in Render to the same Atlas connection string used locally.
4. Deploy the service.

Do not copy the local `.env` file to GitHub or Render. Add the MongoDB URI only through Render's environment-variable screen.
