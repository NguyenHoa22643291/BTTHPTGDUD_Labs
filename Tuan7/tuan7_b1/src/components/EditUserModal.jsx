// components/EditUserModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUserModal = ({ isOpen, onClose, user, onUpdate }) => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    value: '',
    date: '',
    status: '',
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || '',
        company: user.company || '',
        value: user.value || '',
        date: user.date || '',
        status: user.status || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3002/customers/${user.id}`, form);
      onUpdate();
      onClose();
    } catch (error) {
      alert("Cập nhật thất bại");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] space-y-4">
        <h2 className="text-xl font-semibold text-pink-500">Edit User</h2>

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
          <button className="px-4 py-2 bg-blue-600 text-white rounded" >Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
