import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Required to use __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve the current directory (static files)
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.send("✅ Data server is running. Try /10k.json");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
