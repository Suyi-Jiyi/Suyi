import Anthropic from "@anthropic-ai/sdk";
import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("."));

const client = new Anthropic();

app.post("/api/generate-poem", async (req, res) => {
  const { word } = req.body;

  if (!word || word.trim().length === 0) {
    return res.status(400).json({ error: "Word is required" });
  }

  try {
    const message = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are a master poet. Create a beautiful, original poem inspired by the word: "${word.trim()}"

The poem should:
- Be deeply evocative and sensory, engaging all five senses
- Show emotion and beauty through imagery rather than telling
- Be original and avoid clichés or common poetic phrases
- Feel like the work of a real, accomplished poet
- Be 4-8 lines long
- Use sophisticated, carefully chosen language
- Connect the user's word to universal human experiences, nature, or cosmic themes when appropriate

Write ONLY the poem itself, nothing else. No title, no explanation.`,
        },
      ],
    });

    const poem = message.content[0].type === "text" ? message.content[0].text : "";

    res.json({ poem: poem.trim() });
  } catch (error) {
    console.error("Claude API error:", error);
    res.status(500).json({ error: "Failed to generate poem" });
  }
});

app.listen(port, () => {
  console.log(`Suyiverse server running at http://localhost:${port}`);
});
