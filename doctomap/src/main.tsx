import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.tsx'
import './assets/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Doctors from './Pages/Doctors/Doctors.tsx'
import Doctor from './Pages/Doctors/Doctor.tsx'
import DoctorEdit from './Pages/Doctors/DoctorEdit.tsx'
import DoctorDelete from './Pages/Doctors/DoctorDelete.tsx'
import Hospitals from './Pages/Hospitals/Hospitals.tsx'
import Hospital from './Pages/Hospitals/Hospital.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/doctors',
    element: <Doctors />,
  },
  {
    path: '/doctor/:id',
    element: <Doctor />,
  },
  {
    path: '/doctor/:id/edit',
    element: <DoctorEdit />,
  },
  {
    path: '/doctor/:id/delete',
    element: <DoctorDelete />,
  },
  {
    path: '/hospitals',
    element: <Hospitals />,
  },
  {
    path: '/hospital/:id',
    element: <Hospital />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
