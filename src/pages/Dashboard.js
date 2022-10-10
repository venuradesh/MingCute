import React from 'react'
import { Outlet  } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom';
import Sidebar2 from '../components/Sidebar2';
import Sidebar3 from '../components/Sidebar3';
import Sidebar4 from '../components/Sidebar4';

function Dashboard(props) {
  const location = useLocation();
  const currentPath=location.pathname
  const parentPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
  console.log(parentPath);
  return (
    <div className='d-flex  h-100 w-100'>
        <div className='sidebar_div primary_bg '>
          {
            //  ( location.pathname!== "/admin/schedule/frame6" || "/admin/schedule/frame5" || "/admin/schedule/frame3" || "/admin/schedule/frame11" 
            //  || "/admin/schedule/frame14" || "/admin/schedule/frame13" || "/admin/schedule/frame4" || "/admin/schedule/frame7" || "/admin/schedule/frame8"
            //  || "/admin/schedule/frame9" || "/admin/schedule/frame10" || "/admin/schedule/frame15" || "/admin/schedule/frame12") &&
            //  (location.pathname!=="/admin/ad/frame16" || "/admin/ad/frame17" || "/admin/ad/frame17" || "/admin/ad/frame18" || "/admin/ad/frame19"
            //  || "/admin/ad/frame20" || "/admin/ad/frame21" )&&
             location.pathname==="/admin/frame1" &&
            parentPath==="/admin" &&
            <Sidebar2/>
          }
          {
            //  ( location.pathname!== "/admin/schedule/frame6" || "/admin/schedule/frame5" || "/admin/schedule/frame3" || "/admin/schedule/frame11" 
            //  || "/admin/schedule/frame14" || "/admin/schedule/frame13" || "/admin/schedule/frame4" || "/admin/schedule/frame7" || "/admin/schedule/frame8"
            //  || "/admin/schedule/frame9" || "/admin/schedule/frame10" || "/admin/schedule/frame15" || "/admin/schedule/frame12") &&
            location.pathname==="/admin/frame2" &&
            parentPath==="/admin" &&
            <Sidebar/>
          }
          {
          //   location.pathname!=="/admin/frame1" && location.pathname!=="/admin/frame2" &&
          //   (location.pathname!=="/admin/ad/frame16" || "/admin/ad/frame17" || "/admin/ad/frame17" || "/admin/ad/frame18" || "/admin/ad/frame19"
          //   || "/admin/ad/frame20" || "/admin/ad/frame21" ) &&
          //  ( location.pathname=== "/admin/schedule/frame6" || "/admin/schedule/frame5" || "/admin/schedule/frame3" || "/admin/schedule/frame11" 
          //  || "/admin/schedule/frame14" || "/admin/schedule/frame13" || "/admin/schedule/frame4" || "/admin/schedule/frame7" || "/admin/schedule/frame8"
          //  || "/admin/schedule/frame9" || "/admin/schedule/frame10" || "/admin/schedule/frame15" || "/admin/schedule/frame12") &&
          parentPath==="/admin/schedule" &&
            <Sidebar3/>
          }
           {
          //  location.pathname!=="/admin/frame1" && location.pathname!=="/admin/frame2" &&
          //  ( location.pathname!== "/admin/schedule/frame6" || "/admin/schedule/frame5" || "/admin/schedule/frame3" || "/admin/schedule/frame11" 
          //  || "/admin/schedule/frame14" || "/admin/schedule/frame13" || "/admin/schedule/frame4" || "/admin/schedule/frame7" || "/admin/schedule/frame8"
          //  || "/admin/schedule/frame9" || "/admin/schedule/frame10" || "/admin/schedule/frame15" || "/admin/schedule/frame12") &&
          //   (location.pathname==="/admin/ad/frame16" || "/admin/ad/frame17" || "/admin/ad/frame17" || "/admin/ad/frame18" || "/admin/ad/frame19"
          //   || "/admin/ad/frame20" || "/admin/ad/frame21" ) &&
          parentPath==="/admin/ad" &&
            <Sidebar4/>
          }
        </div>
        <div className=' w-100  main_board  pt-3'>
            <Navbar />
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard