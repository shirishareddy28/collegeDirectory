import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const AdminDashboard = () => {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch('/api/admin/records');
      const data = await response.json();
      setRecords(data);
    };

    const fetchData = async () => {
      const response = await fetch('/api/admin/dashboard-data');
      const data = await response.json();
      setData(data);
    };

    fetchRecords();
    fetchData();
  }, []);

  const handleAddRecord = async () => {
    // Add record logic
  };

  const handleUpdateRecord = async () => {
    // Update record logic
  };

  const handleDeleteRecord = async () => {
    // Delete record logic
  };

  const chartData = {
    labels: data.labels || [],
    datasets: [
      {
        label: 'Enrollment Trends',
        data: data.values || [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Administrator Dashboard</h2>

      <div>
        <h3>Manage Student and Faculty Records</h3>
        <button onClick={handleAddRecord}>Add Record</button>
        <button onClick={handleUpdateRecord}>Update Record</button>
        <button onClick={handleDeleteRecord}>Delete Record</button>
        <ul>
          {records.map((record) => (
            <li key={record.id}>{record.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Dashboard with Graphs</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
