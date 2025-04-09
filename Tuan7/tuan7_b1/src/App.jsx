import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Project from './pages/Projects.jsx';
import Teams from './pages/Teams.jsx';
import Analytics from './pages/Analytics.jsx';
import Messages from './pages/Message.jsx';
import Integrations from './pages/Integrations.jsx';
import RootLayout from './layout/RootLayout.jsx'; 

const router = createBrowserRouter([
  //Khi chuyển trang không bị load lại toàn bộ.
// phai chay json-server --watch src/api/dbTable.json --port 3002 de lay du lieu
  //khi vao / se render den RootLayout, trong root se co cac route con
  //cac route nay se hien thi trong outlet
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'projects', element: <Project /> },
      { path: 'teams', element: <Teams /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'message', element: <Messages /> },
      { path: 'integrations', element: <Integrations /> }
    ]
  }
]);

//toan bo app se duoc chay theo router o tren
function App() {
  return <RouterProvider router={router} />;
}

export default App;