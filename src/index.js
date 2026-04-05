import express from 'express';
import {config} from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Running perfectly!');
});

app.listen(PORT,() => {
     console.log(`Server is running on port ${PORT}`);
     // http://localhost:1000/
})