import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST || 'http://localhost';

app.use(cors());
app.use(express.json());

app.get('/fruits', async (req, res) => {
    const fruits = await fetch(`${process.env.VITE_GET_FRUITS_API_URL}`);
    res.send(await fruits.json());
});

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
