import { app } from "./app.js";
import connectDb from "./database/database.js";

connectDb();
const PORT = process.env.port;
app.listen(PORT, () => {
  console.log("The app started on port", PORT);
});
