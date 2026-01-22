import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Accommodation from '../pages/Accommodation';
import Dining from '../pages/Dining';
import Experiences from '../pages/Experiences';
import MeetingsEvents from '../pages/MeetingsEvents';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/accommodation',
    element: <Accommodation />,
  },
  {
    path: '/dining',
    element: <Dining />,
  },
  {
    path: '/experiences',
    element: <Experiences />,
  },
  {
    path: '/meetings-events',
    element: <MeetingsEvents />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

export default router;
