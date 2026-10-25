# Stayfinder

A simple travel-stay listing app built with Express, EJS, and MongoDB. Browse stays, add a listing, view its details, edit it, or delete it.

## Features

- Browse sample and user-created stays
- Create, view, edit, and delete listings
- Store listing details in MongoDB with Mongoose
- Responsive interface with custom CSS styling

## Tech stack

- Node.js and Express
- EJS and EJS-Mate
- MongoDB and Mongoose
- HTML and CSS

## Run locally

### Requirements

- Node.js
- MongoDB running locally, or a MongoDB connection string

### Setup

1. Clone the repository and open its folder.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Start MongoDB. The app uses `mongodb://127.0.0.1:27017/myapp` by default. To use another database, set `MONGO_URI` before starting the app.

   PowerShell:

   ```powershell
   $env:MONGO_URI = "your-mongodb-connection-string"
   ```

   macOS/Linux:

   ```sh
   export MONGO_URI="your-mongodb-connection-string"
   ```

4. Start the app:

   ```sh
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000). Set `PORT` to use a different port.

## Sample data

To load the sample listings, run:

```sh
npm run seed
```

**Warning:** Seeding deletes the existing listings in the database selected by `MONGO_URI` before inserting sample data. Use a development database, not a database containing data you want to keep.

## Tests

Run the model validation tests with:

```sh
npm test
```

## Project structure

```text
.
├── public/
│   └── css/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── seed/
├── views/
│   ├── includes/
│   ├── layouts/
│   └── listings/
├── server.js
└── package.json
```

## Learning and design

I built this as a learning project while following a web-development tutorial. I used AI assistance for the visual styling, then adapted the interface as part of the project.
