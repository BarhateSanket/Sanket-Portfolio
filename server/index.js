const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');
const healthRoutes = require('./routes/health');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '1mb' }));
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || 'http://localhost:4173',
  })
);

app.use('/api/contact', contactRoutes);
app.use('/api/health', healthRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
