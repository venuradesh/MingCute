import React from 'react'
import { Outlet  } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom';

function Dashboard(props) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className='d-flex  h-100 w-100'>
        <div className='sidebar_div primary_bg '>
            <Sidebar/>
        </div>
        <div className=' w-100  main_board  pt-3'>
            <Navbar />
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard