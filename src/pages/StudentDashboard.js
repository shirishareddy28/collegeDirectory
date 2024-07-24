import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [profile, setProfile] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [students, setStudents] = useState([]);
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    // Fetch profile
    const fetchProfile = async () => {
      const response = await fetch('/api/student/profile');
      const data = await response.json();
      setProfile(data);
    };

    // Fetch advisors
    const fetchAdvisors = async () => {
      const response = await fetch('/api/student/advisors');
      const data = await response.json();
      setAdvisors(data);
    };

    fetchProfile();
    fetchAdvisors();
  }, []);

  const handleSearch = async () => {
    const response = await fetch(`/api/student/search?query=${searchQuery}`);
    const data = await response.json();
    setStudents(data);
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <div>
        <h3>Profile</h3>
        <p>Name: {profile.name}</p>
        <p>Photo: <img src={profile.photo} alt="Profile" /></p>
        <p>Contact: {profile.contact}</p>
        <p>Courses: {profile.courses?.join(', ')}</p>
        <p>Grades: {profile.grades?.join(', ')}</p>
        <p>Attendance: {profile.attendance}</p>
      </div>

      <div>
        <h3>Search for Other Students</h3>
        <input
          type="text"
          placeholder="Search by name, department, or year"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Contact Faculty Advisors</h3>
        <ul>
          {advisors.map((advisor) => (
            <li key={advisor.id}>
              {advisor.name} - <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
