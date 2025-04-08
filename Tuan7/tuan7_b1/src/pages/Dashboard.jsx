import React from 'react';
import sqare from '/Lab_05/Squares four 1.png'
import down from '/Lab_05/Download.png'
import move from '/Lab_05/Move up.png'
import DataTableComponents from '../components/DataTableComponents';

function Dashboard() {
  return (
    <div >
        <div className='flex'>
      <div className='flex gap-x-2 mt-2 mb-2'>
        <img src={sqare} alt="" />
        <h2 className='font-bold text-xl'>Detailed report</h2>  
        <div className="space-x-2 flex ml-150">
              <button className=" flex border px-3 py-1 rounded text-pink-600">
                <img src={down} alt="" />
                <span>Import</span> </button>
              <button className="flex border px-3 py-1 rounded text-pink-600">
                 <img src={move} alt="" />
              <span className='mr-2'>Export</span> 
              </button>
            </div>
      </div>
      </div>
        <div className='w-full text-left shadow-sm divide-y'>
      <DataTableComponents></DataTableComponents>
      </div>
     
    </div>
  );
}

export default Dashboard;