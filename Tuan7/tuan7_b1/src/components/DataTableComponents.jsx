import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import EditUserModal from './EditUserModal'; // import modal nếu cùng thư mục
import AddUserModal from './AddUserModal';

const DataTableComponents = () => {
  const [data, setData] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const fetchData = () => {
    fetch("http://localhost:3002/customers")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error loading data:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditOpen(true);
  };

  const handleUpdate = () => {
    fetchData(); // reload lại data sau khi edit
  };

  const columns = [
    {
      name: 'Customer Name',
      selector: row => row.name,
      cell: row => (
        <div className="flex items-center gap-2">
          <img src={row.avatar} alt={row.name} className="rounded-full w-10 h-10 object-cover" />
          <span>{row.name}</span>
        </div>
      ),
    },
    {
      name: 'Company',
      selector: row => row.company,
    },
    {
      name: 'Order Value',
      selector: row => row.value,
    },
    {
      name: 'Order Date',
      selector: row => row.date,
    },
    {
      name: 'Status',
      selector: row => row.status,
      cell: row => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            row.status === 'New'
              ? 'bg-blue-100 text-blue-600'
              : row.status === 'In-progress'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: '',
      cell: row => (
        <button
          onClick={() => handleEdit(row)}
          className="hover:scale-105 transition-transform duration-200"
        >
          <img src="/Lab_05/create.png" alt="Edit" className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow-sm p-4">
      <div className="flex justify-end mb-2">
      <button
        onClick={() => setIsAddOpen(true)}
        className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition"
        >
            Add New
      </button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        responsive
        noDataComponent="Không có dữ liệu để hiển thị"
        selectableRows
        onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
      />
    <div className="text-sm text-gray-600 text-right pr-2">
      Result: <span className="font-semibold">{data.length}</span>
    </div>
      <EditUserModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        user={selectedUser}
        onUpdate={handleUpdate}
      />

      <AddUserModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={fetchData} // gọi lại fetchData để reload danh sách
      />
    </div>
    
  );
};

export default DataTableComponents;
