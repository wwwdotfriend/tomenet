// imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import 'rpg-awesome/css/rpg-awesome.min.css'

// pages
import Home from './pages/HomePage.tsx'
import Academics from './pages/Academics.tsx'
import CampusLife from './pages/CampusLife.tsx'
import SocialHub from './pages/SocialHub.tsx'
import MyTomeNet from './pages/MyTomeNet.tsx'
import AboutECU from './pages/AboutECU.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <NotFoundPage />,
  },
  {
    path:  '/about-ecu',
    element: <AboutECU />,
  },
  {
    path:  '/academics',
    element: <Academics />,
  },
  {
    path:  '/campus-life',
    element: <CampusLife />,
  },
  {
    path:  '/social-hub',
    element: <SocialHub />,
  },
  {
    path:  '/my-tomenet',
    element: <MyTomeNet />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
