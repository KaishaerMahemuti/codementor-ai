import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tutorRouter from './routes/tutor.js';

dotenv.config();
const app = express();
console.log('🛂 CORS middleware loaded');
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET'],
  }));
app.use(express.json());

app.use('/api/tutor', tutorRouter);

app.get('/', (req, res) => {
  res.send('🚀 CodeMentor AI backend is running');
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
