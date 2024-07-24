const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5004; // Ensure this port is available

app.use(bodyParser.json());
app.use(cors());

// Mock database
const users = [
  { username: 'student1', password: 'password', role: 'Student', token: 'student-token' },
  { username: 'faculty1', password: 'password', role: 'Faculty', token: 'faculty-token' },
  { username: 'admin1', password: 'password', role: 'Administrator', token: 'admin-token' },
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the College Directory API');
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password, role } = req.body;
  const user = users.find((u) => u.username === username && u.password === password && u.role === role);

  if (user) {
    res.json({ token: user.token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Fetch profile endpoint (mock)
app.get('/profile', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const user = users.find((u) => u.token === token);

  if (user) {
    res.json({ username: user.username, role: user.role });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Mock data for records (for demonstration purposes)
let records = [
  { id: 1, name: 'John Doe', role: 'Student' },
  { id: 2, name: 'Jane Smith', role: 'Faculty' },
];

// CRUD operations for records
app.get('/records', (req, res) => {
  res.json(records);
});

app.post('/records', (req, res) => {
  const newRecord = req.body;
  newRecord.id = records.length + 1;
  records.push(newRecord);
  res.status(201).json(newRecord);
});

app.put('/records/:id', (req, res) => {
  const { id } = req.params;
  const updatedRecord = req.body;
  records = records.map((r) => (r.id === parseInt(id) ? updatedRecord : r));
  res.json(updatedRecord);
});

app.delete('/records/:id', (req, res) => {
  const { id } = req.params;
  records = records.filter((r) => r.id !== parseInt(id));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
