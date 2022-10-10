import React from 'react'
import { useNavigate } from "react-router-dom";


const table_array=[1,2,3,4,5,6,7,8]

function Vs01() {
  const navigate = useNavigate();
  
  function viewSummary() {
    navigate("../schedule/frame7");
  }
  function viewSchedule() {
    navigate("../schedule/frame8");
  }
  return (
    <div className="h-100   container-fluid">
    <div className="main_body">
      <div className="card_body shedule_table container mt-5">
      <div className="top w-100 ">
            <button className=" btn status primary_btn ms-auto d-flex align-items-center justify-content-end py-1 mb-3 ">
              hello
            </button>
          </div>
            <div>
            <div className="mt-3 schedules d-flex align-items-center justify-content-between ">
                <div onClick={viewSummary} className="schedule clickable h6 mb-0 py-2 title_tab text-center">
                    Schedule
                </div>
                <div onClick={viewSchedule} className="summary clickable h6 mb-0 py-2 title_tab text-center">
                    Summary
                </div>
            </div>
            <div className="card table_card py-3 px-4">
            <table class="table">
                <thead class="table-dark">
                  <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunnday</th>
                  </tr>
                </thead>
                <tbody>
                {
                      table_array.map((cont,index)=>(
                  <tr >
                    {
                      table_array.map((cont,index)=>(
                        <td key={index}>Text </td>
                      ))
                    }
                  </tr>
                      ))
                    }
                </tbody>
              </table>
            </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default Vs01