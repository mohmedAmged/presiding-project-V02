import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MyLayout from './components/myLayoutSec/MyLayout';
import MyHome from './pages/myHomePage/MyHome';
import InsightsPage from './pages/myInsightsPage/InsightsPage';
import SingleInsightPage from './pages/singleInsightPage/SingleInsightPage';
import ServicesPage from './pages/myServicesPage/ServicesPage';
import SubServicesPage from './pages/mySubServicesPage/SubServicesPage';
import { Toaster } from 'react-hot-toast';
import FillApplicationForm from './pages/fillApplicationForm/FillApplicationForm';
import MyCareers from './pages/myCareersPage/MyCareers';
import SingleCareer from './pages/singleCareerPage/SingleCareer';

function App() {
  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <MyLayout />,
      // errorElement: <></>,
      children: [
        { index: true, element: <MyHome /> },
        { path: 'home', element: <MyHome /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'services/:subService', element: <SubServicesPage /> },
        { path: 'insights', element: <InsightsPage /> },
        { path: 'insights/:singleInsight', element: <SingleInsightPage /> },
        { path: 'careers', element: <MyCareers /> },
        { path: 'careers/job-Details/:JobId', element: <SingleCareer /> },
        { path: 'fill-application-form', element: <FillApplicationForm /> },
      ]
    }
  ]);

  return (
    <>
    <Toaster position='right-top'/>
      <RouterProvider router={Routes}>
      </RouterProvider>
    </>
  );
};

export default App
