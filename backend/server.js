const app = require("./app/app.js");
const connectDatabase = require("./app/db/db.js");

// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
});

// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../backend/app/config/.env" });
}

// connect to database
connectDatabase();

// create server
const server = app.listen(process.env.PORT, () => {
  console.log("Server is working on http://localhost:" + process.env.PORT);
});

// handling unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
