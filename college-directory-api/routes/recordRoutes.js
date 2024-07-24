const express = require('express');
const router = express.Router();
const Record = require('../models/recordModel');

router.get('/records', async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/records', async (req, res) => {
  const newRecord = new Record(req.body);
  try {
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/records/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRecord = await Record.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedRecord);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/records/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Record.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
