const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Todo API is running' });
});

app.get('/health', (req, res) => {
  try {
    res.status(200).json({
      status: 'ok',
      message: 'Todo App is up',
      uptime: process.uptime(),
      timestamp: Date.now(),
      version: process.env.npm_package_version || 'unknown'
    });
  } catch (err) {
    console.error('Health check error:', err);
    res.status(202).json({ status: 'error' });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
