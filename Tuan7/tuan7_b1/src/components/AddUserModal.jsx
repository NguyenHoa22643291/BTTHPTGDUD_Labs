// components/AddUserModal.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddUserModal = ({ isOpen, onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    value: '',
    date: '',
    status: '',
    avatar: '/Lab_05/Avatar (1).png' // default avatar path
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:3002/customers', form);
      onAdd();
      onClose();
    } catch (error) {
      alert("Thêm thất bại");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] space-y-4">
        <h2 className="text-xl font-semibold">Add New User</h2>

        {['name', 'company', 'value', 'date', 'status'].map((field) => (
          <input
            key={field}
            name={field}
            className="w-full border p-2 rounded"
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
          />
        ))}

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
