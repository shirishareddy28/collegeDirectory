const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('collegeDirectory'); // This line specifies the database
    const usersCollection = database.collection('users');

    const users = [
      { username: 'student1', password: 'password', role: 'Student', name: 'Student One', email: 'student1@example.com', phone: '1234567890' },
      { username: 'faculty1', password: 'password', role: 'FacultyMember', name: 'Faculty One', email: 'faculty1@example.com', phone: '0987654321' },
      { username: 'admin1', password: 'password', role: 'Administrator', name: 'Admin One', email: 'admin1@example.com', phone: '1122334455' }
    ];

    const result = await usersCollection.insertMany(users);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
