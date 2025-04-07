import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const DataTableComponents  =()=>{
    const [data, setData] = useState([]);
    // lay gia tri tu file data.json
    useEffect(() => {
      fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error loading data:', error));
    }, []);

      //truyen tham so cho cot, moi doi tuong trong mang dai dien cho mot cot
      const columns = [
        // {
        //   name: '',
        //   selector: row => row.avatar,
        //   cell: row => (
        //     <input type="checkbox" className="py-2" />
        //   ),
        // },
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
          selector: row => row.name,
          cell: () => (
            <img src="/Lab_05/create.png" alt="Action Button" />
          ),
        },
      ];
    
      //cau hinh datatable
// columns: Dữ liệu cột mà bạn đã cấu hình ở trên.

// data: Dữ liệu bạn muốn hiển thị trong bảng (dữ liệu từ data).

// pagination: Thêm tính năng phân trang cho bảng. Khi dữ liệu quá lớn, bảng sẽ chia thành nhiều trang nhỏ.

// highlightOnHover: Khi người dùng di chuột qua hàng, hàng đó sẽ thay đổi màu sắc để dễ dàng nhận diện.

// striped: Thêm hiệu ứng sọc cho bảng, giúp dễ dàng phân biệt các dòng dữ liệu.

// responsive: Làm cho bảng có thể cuộn ngang khi thu nhỏ trên màn hình di động, giúp đảm bảo giao diện vẫn đẹp khi xem trên các thiết bị nhỏ.

      return (
        <div className="w-full overflow-x-auto shadow-sm p-4">
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
        </div>
      );
};
export default DataTableComponents;