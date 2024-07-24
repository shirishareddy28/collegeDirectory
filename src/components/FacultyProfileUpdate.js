import React, { useState, useEffect } from 'react';
import { fetchFacultyProfile, updateFacultyProfile } from '../api'; // Adjust import based on your file structure

const FacultyProfileUpdate = () => {
  const [profile, setProfile] = useState({
    officeHours: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const getProfile = async () => {
      const data = await fetchFacultyProfile();
      setProfile(data);
    };

    getProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    await updateFacultyProfile(profile);
    alert('Profile updated successfully');
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <input
        type="text"
        name="officeHours"
        value={profile.officeHours}
        onChange={handleChange}
        placeholder="Office Hours"
      />
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default FacultyProfileUpdate;
