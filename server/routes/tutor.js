import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req, res) => {
  try {
    const { message, language } = req.body;

    const systemPrompt = `
    You are a professional coding tutor teaching a complete beginner the programming language: ${language}.
    Your job is to guide them step-by-step through a structured, interactive curriculum.
    
    Start by giving a short explanation of what ${language} is used for, and follow up with a simple, hands-on example.
    Ask short, beginner-friendly questions and wait for user replies.
    After each response, continue the lesson in a clear sequence:
    - Give short explanations
    - Provide code examples
    - Ask small, low-pressure questions
    
    If the user says "I don't know" or "I'm new", don't repeat your last question.
    Instead, explain it again in a different way and move forward gently.
    
    Avoid asking open-ended questions like "What do you want to learn?"
    Instead, lead the learning path. Keep it friendly, warm, and structured.
    
    Output should be short, friendly, and actionable. Include simple code snippets when helpful.
    `;
    

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
    });

    const reply = chatCompletion.choices[0]?.message?.content;
    res.json({ reply });
  } catch (error) {
    console.error('🔴 OpenAI error:', error);

    if (error.response) {
      console.error('🛑 OpenAI response data:', error.response.data);
    }

    res.status(500).json({ error: 'Something went wrong with AI response.' });
  }
});

export default router;
