import React from 'react';
import sqare from '/Lab_05/Squares four 1.png'
import DataTableComponents from '../components/DataTableComponents';

function Dashboard() {
  return (
    <div>
      <div className='flex gap-x-2 mt-2 mb-2'>
        <img src={sqare} alt="" />
        <h2 className='font-bold text-xl'>Dashboard</h2>
      
      </div>
        <div className='w-full text-left shadow-sm divide-y'>
      <DataTableComponents></DataTableComponents>
      </div>
     
    </div>
  );
}

export default Dashboard;