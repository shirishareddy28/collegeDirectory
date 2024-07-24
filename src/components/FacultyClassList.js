import React, { useState, useEffect } from 'react';
import { fetchClassList } from '../api'; // Adjust import based on your file structure

const FacultyClassList = () => {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    const getClassList = async () => {
      const data = await fetchClassList();
      setClassList(data);
    };

    getClassList();
  }, []);

  return (
    <div>
      <h2>Class List</h2>
      <ul>
        {classList.map((student) => (
          <li key={student.id}>
            <img src={student.photo} alt={student.name} />
            <p>{student.name}</p>
            <p>Email: {student.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyClassList;
