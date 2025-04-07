import { useLocation, useNavigate } from 'react-router-dom';
import sqare from '/Lab_05/Squares four 1.png'
import folder from '/Lab_05/Folder.png'
import group from '/Lab_05/Groups.png'
import pie from '/Lab_05/Pie chart.png'
import chat from '/Lab_05/Chat.png'
import code from '/Lab_05/Code.png'
import gr from '/Lab_05/Group.png'

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/', icon: sqare },
    { label: 'Projects', path: '/projects', icon: folder },
    { label: 'Teams', path: '/teams', icon: group },
    { label: 'Analytics', path: '/analytics', icon: pie },
    { label: 'Messages', path: '/messages', icon: chat },
    { label: 'Integrations', path: '/integrations', icon: code },
  ];

  const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg w-60 transition-colors duration-200";
const activeClasses = "bg-gray-100 text-white font-bold";
const inactiveClasses = "bg-gray-100 text-black hover:bg-pink-300";

  return (
    <div className="menu mt-6 space-y-2 border-r">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
  >
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        );
      })}

      {/* Khúc cuối khuyến mãi */}
      <div className='bg-blue-300 mt-20 p-6 mr-0.5'>
         <img src={gr} alt="" className='mt-25' />
         <button className='space-x-2 border-2 bg-blue-100  text-blue-600 h-10 w-1110 mt-5 rounded-lg'>
          <span>Try now</span>
         </button>
         </div>
    </div>
  );
};

export default Sidebar;
