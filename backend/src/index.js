import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// This file initializes the database connection and starts the Express server on the specified port.
// It imports the application from `app.js` and the database connection function from `db/index 