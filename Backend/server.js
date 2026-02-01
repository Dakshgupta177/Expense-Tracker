import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app is listening on the port ${port}`);
})