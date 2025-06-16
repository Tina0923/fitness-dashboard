// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Ollama API endpoint
app.post("/api/ollama", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3",
      prompt,
      stream: false
    });
    res.json({ response: response.data.response });
  } catch (error) {
    console.error("Ollama Error:", error.message);
    res.status(500).json({ error: "Failed to call Ollama" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
