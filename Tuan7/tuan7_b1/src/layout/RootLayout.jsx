import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Overview from '../components/OverviewCard';

function RootLayout() {
  return (
    <div className="container min-h-screen">
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Sidebar />
      </div>
      <div className="content space-y-4">
        <Overview />
        {/*cho hien thi muc con trong cha outlet- thay doi nd theo router*/}
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;