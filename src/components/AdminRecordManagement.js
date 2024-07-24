import React, { useState, useEffect } from 'react';
import { fetchRecords, addRecord, updateRecord, deleteRecord } from '../api'; // Adjust import based on your file structure

const AdminRecordManagement = () => {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({ name: '', role: '' });
  const [editRecord, setEditRecord] = useState(null);

  useEffect(() => {
    const getRecords = async () => {
      const data = await fetchRecords();
      setRecords(data);
    };

    getRecords();
  }, []);

  const handleAddRecord = async () => {
    await addRecord(newRecord);
    setNewRecord({ name: '', role: '' });
    alert('Record added');
  };

  const handleUpdateRecord = async () => {
    if (editRecord) {
      await updateRecord(editRecord);
      setEditRecord(null);
      alert('Record updated');
    }
  };

  const handleDeleteRecord = async (id) => {
    await deleteRecord(id);
    alert('Record deleted');
  };

  return (
    <div>
      <h2>Manage Records</h2>
      <div>
        <h3>Add Record</h3>
        <input
          type="text"
          placeholder="Name"
          value={newRecord.name}
          onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newRecord.role}
          onChange={(e) => setNewRecord({ ...newRecord, role: e.target.value })}
        />
        <button onClick={handleAddRecord}>Add Record</button>
      </div>
      
      <div>
        <h3>Records</h3>
        <ul>
          {records.map((record) => (
            <li key={record.id}>
              <p>{record.name} - {record.role}</p>
              <button onClick={() => setEditRecord(record)}>Edit</button>
              <button onClick={() => handleDeleteRecord(record.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {editRecord && (
        <div>
          <h3>Edit Record</h3>
          <input
            type="text"
            value={editRecord.name}
            onChange={(e) => setEditRecord({ ...editRecord, name: e.target.value })}
          />
          <input
            type="text"
            value={editRecord.role}
            onChange={(e) => setEditRecord({ ...editRecord, role: e.target.value })}
          />
          <button onClick={handleUpdateRecord}>Update Record</button>
        </div>
      )}
    </div>
  );
};

export default AdminRecordManagement;
