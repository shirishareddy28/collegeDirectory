const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/profile', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const user = await User.findOne({ token });
    if (user) {
      res.json({ username: user.username, role: user.role });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
