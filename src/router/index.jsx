import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Accommodation from '../pages/Accommodation';
import AccommodationDetails from '../pages/AccommodationDetails';
import Dining from '../pages/Dining';
import ExploringMedina from '../pages/ExploringMedina';
import LeVerdoyant from '../pages/LeVerdoyant';
import LeVerdoyantRooftop from '../pages/LeVerdoyantRooftop';
import LeVerdoyantCoffeeShop from '../pages/LeVerdoyantCoffeeShop';
import Medina from "../pages/Medina";
import Monuments from "../pages/Monuments";
import Souks from "../pages/Souks";
import Experiences from '../pages/Experiences';
import ExperienceDetail from '../pages/ExperienceDetail';
import MeetingsEvents from '../pages/MeetingsEvents';
import RequestQuote from '../pages/request-quote';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import RootLayout from "../layouts/RootLayout";


const router = createBrowserRouter([
  {
    element: <RootLayout />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/accommodation',
        element: <Accommodation />,
      },
      {
        path: '/rooms/:id', 
        element: <AccommodationDetails />,
      },
      {
        path: '/dining',
        element: <Dining />,
      },
      {
        path: '/dining/LeVerdoyant',
        element: <LeVerdoyant />,
      },
      {
        path: '/dining/LeVerdoyantRooftop',
        element: <LeVerdoyantRooftop />,
      },
      {
        path: '/dining/LeVerdoyantCoffeeShop',
        element: <LeVerdoyantCoffeeShop />,
      },
      {
        path: '/exploring-medina',
        element: <ExploringMedina />,
      },
      {
        path: "/exploring-medina/medina",
        element: <Medina />,
      },
      {
        path: "/exploring-medina/monuments",
        element: <Monuments />,
      },
      {
        path: "/exploring-medina/souks",
        element: <Souks />,
      },
      {
        path: '/experiences',
        element: <Experiences />,
      },
      {
        path: '/experiences/:id', 
        element: <ExperienceDetail  />,
      },
      {
        path: '/meetings-events',
        element: <MeetingsEvents />,
      },
      {
        path: '/request-quote',
        element: <RequestQuote />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router; 



