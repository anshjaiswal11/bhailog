import dotenv from 'dotenv';
dotenv.config(); // ✅ Load env variables BEFORE anything else
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import Authro from './Routes/Authro.js'; // Import the Authro module
import './modules/db.js'; // now Mongo_url will be defined

const app = express();
const port = 3000;

app.use(cors());

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(bodyParser.json());

app.use('/auth', Authro)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
