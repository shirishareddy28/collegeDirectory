import React, { useState, useEffect } from 'react';

const FacultyDashboard = () => {
  const [classList, setClassList] = useState([]);
  const [profile, setProfile] = useState({
    officeHours: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchClassList = async () => {
      const response = await fetch('/api/faculty/classlist');
      const data = await response.json();
      setClassList(data);
    };

    const fetchProfile = async () => {
      const response = await fetch('/api/faculty/profile');
      const data = await response.json();
      setProfile(data);
    };

    fetchClassList();
    fetchProfile();
  }, []);

  const handleProfileUpdate = async () => {
    const response = await fetch('/api/faculty/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    });

    const result = await response.json();
    if (result.success) {
      alert('Profile updated successfully');
    } else {
      alert('Failed to update profile');
    }
  };

  return (
    <div>
      <h2>Faculty Dashboard</h2>

      <div>
        <h3>Manage Class List</h3>
        <ul>
          {classList.map((student) => (
            <li key={student.id}>
              {student.name} - <img src={student.photo} alt="Student" />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Update Profile</h3>
        <input
          type="text"
          placeholder="Office Hours"
          value={profile.officeHours}
          onChange={(e) => setProfile({ ...profile, officeHours: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={profile.phone}
          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
        />
        <button onClick={handleProfileUpdate}>Update Profile</button>
      </div>
    </div>
  );
};

export default FacultyDashboard;
