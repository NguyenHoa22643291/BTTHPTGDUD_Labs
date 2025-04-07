import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Project from './pages/Projects.jsx';
import Teams from './pages/Teams.jsx';
import Analytics from './pages/Analytics.jsx';
import Messages from './pages/Message.jsx';
import Integrations from './pages/Integrations.jsx';
import RootLayout from './layout/RootLayout.jsx'; 

const router = createBrowserRouter([
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;