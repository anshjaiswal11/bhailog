import dotenv from 'dotenv';
dotenv.config(); // Load env variables here too

import mongoose from 'mongoose';

const Mongo_url="mongodb+srv://Anshj8707:Anshj8707@database.hzruv7z.mongodb.net/?retryWrites=true&w=majority&appName=database"


if (!Mongo_url) {
  console.error('❌ Mongo_url is undefined. Check your .env file and environment setup.');
  process.exit(1); // Stop execution
}

mongoose.connect(Mongo_url)
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ Error connecting to MongoDB:', err);
});
