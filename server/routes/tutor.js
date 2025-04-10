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
    const { message, language, lesson} = req.body;

    const systemPrompt = `
    You are a professional programming tutor for ${language.toUpperCase()}.
    
    Your job is to teach the following specific lesson: "${lesson}"
    
    Do not assume the user is starting from the beginning. Teach only the current topic.
    Explain the concept in clear, simple terms.
    Use a short, real-world code example.
    Then ask the user a related question to engage them.
    
    If they seem confused, explain it differently with another example.
    If they ask to move on, you can continue to the next lesson.
    
    Avoid repeating previous lessons like "Variables" or "What is JavaScript?"
    Only focus on: "${lesson}"
    
    Keep responses short, friendly, and focused on helping them understand this one topic.
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
