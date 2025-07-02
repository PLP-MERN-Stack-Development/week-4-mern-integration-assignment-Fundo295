const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user (replace with real DB in production)
const user = { id: 1, username: 'admin', password: 'password' };

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;