import express from 'express'
import cors from 'cors'
import donenv from 'dotenv';

donenv.config()

const app = express();
const PORT = process.env.PORT || 8282;

// routes
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})