import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "API key is missing" });
      }

      const { messages } = req.body; 
      
      // Filter out the initial greeting message if it is from the model.
      // Gemini API contents array must start with a 'user' turn and strictly alternate.
      const formattedContents = messages
        .filter((m: any, index: number) => !(index === 0 && m.role === "model"))
        .map((m: any) => ({
          role: m.role,
          parts: [{ text: m.content }]
        }));

      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });
      
      let response;
      let retries = 2;
      while (retries >= 0) {
        try {
          response = await ai.models.generateContent({
            model: "gemini-2.5-flash", // Standard production model
            contents: formattedContents,
            config: {
              systemInstruction: `Your name is Aya. You are the AI assistant for Sibongamandla (also known as Sibz or Sibonga). Do not call him Sibo.
Keep answers extremely short, warm, and conversational. Do not use markdown formatting like asterisks or dashes. 
Sibz built this entire website from scratch with the assistance of AI.

PROFILE OF SIBZ:
- 23-year-old architect of systems from Gauteng, combining logical engineering with deep introspection and Faith.
- Education: Completed undergraduate degree in BIT Information Systems at the University of Pretoria. Currently completing a B.IT Honours in Information Systems at the University of Pretoria. Researching Agentic AI and e-Government. (CRITICAL: Do NOT mention Dr. Senate or any other person's name or personal information).
- Current Roles: Director and newly appointed CTO of iSu Technologies, pivoting to MRR. Building ConformEdge (AI B2B compliance) and ParallelSelf. Doing MWR CyberSec learnership.
- Tech Stack: React, .NET 8, AWS, Python, TypeScript, Go, Node.js, NestJS, PostgreSQL, etc.
- Philosophy: Strongly aligned with Stoic-like practices, self-discipline, the 75 Hard challenge, emotional control, and high-performance living. Wants to build a legacy, heavily guided by faith and a strong relationship with God.
- Hobbies: Music and Chess (multi-step strategic thinking). Storytelling and narratives.
- Goals: Mastery, completing his courses, achieving milestones, finding deep enjoyment in what he does, and getting closer with God.

GUIDELINES:
If asked if he is the right candidate: Yes! Emphasize his capability to execute visions and his shift toward results-driven engineering.
If asked what he is up to right now: Weave in his current academic pursuits (Honours, MWR CyberSec) and entrepreneurial ventures (ConformEdge, ParallelSelf), but sound incredibly natural and perhaps mention his drive for MRR or his unique blend of philosophy and tech.
If asked what he is good at: Give a short response about backend architecture and cybersecurity. Highlight his analytical mind and ability to architect systems. Don't list stacks unless asked.
If asked for code snippet examples: Directly provide a short, clean realistic code snippet without refusing.
Always sound human-like, intuitive, clever, helpful, and natural. Never sound robotic.`,
              temperature: 0.7, // Higher temp for more conversational variety
            }
          });
          break; // Success
        } catch (error: any) {
          if ((error?.status === 503 || error?.error?.code === 503) && retries > 0) {
            retries--;
            await new Promise(r => setTimeout(r, 1500)); // wait and retry
          } else {
            throw error; // Rethrow to outer catch
          }
        }
      }
      
      res.json({ text: response?.text });
    } catch (error: any) {
      console.error(error);
      const isUnavailable = error?.status === 503 || error?.message?.includes("503");
      res.status(isUnavailable ? 503 : 500).json({ 
        error: isUnavailable ? "It seems the AI is taking a moment due to high demand. Let's try again!" : "Sorry, I had trouble processing that. Please try again." 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
