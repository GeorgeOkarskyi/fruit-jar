import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST || 'http://localhost';

app.use(cors());
app.use(express.json());

app.get('/fruits', async (_req, res) => {
  const fruits = await fetch(`${process.env.GET_FRUITS_API_URL}`);
  res.send(await fruits.json());
});

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
