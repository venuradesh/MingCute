import React from 'react'
import { useNavigate } from "react-router-dom";

const table_array=[1,2,3,4,5,6,7,8]

function Vcm03() {
  
  const navigate = useNavigate();
  
  function leaveRequest() {
    navigate("../schedule/frame4");
  }
  return (
    <div className="h-100   container-fluid">
    <div className="main_body vehicle_table">
      <div className="card_body leave_table container mt-5">
          <div className=' my-4 d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-between'>
            <span>Show</span>
            <input type="text"  value="3" className='mx-3 form-control pagination_input '/>
            <span>Leaves</span>
          </div>
          <h5 className='add_title fw-bold'>Employee Leave Management</h5>
            <div className=' shadow-none border border-0  rounded-2 d-flex align-items-center justify-content-start py-1 px-lg-2'>
              </div>
          </div>
            <div>
            <div className="card table_card  p-0  ">
            <table class="table">
                <thead class="table-light lighblack_text">
                  <tr>
                    <th>Name</th>
                    <th>Employee ID</th>
                    <th>Start Date </th>
                    <th className='text-center'>Status</th>
                    <th className='text-center'>View Request</th>
                  </tr>
                </thead>
                <tbody>
                {
                      table_array.map((cont,index)=>(
                  <tr className='clickable' onClick={leaveRequest}>
                    <td className=''><h6 className='mb-0'>Albert Flores</h6> <small className='secondary_text'>Garbage Collector</small></td>
                    <td>IT1918038089</td>
                    <td>2022.07.24 - Friday</td>
                    <td className='text-center'> <button type='button' className='btn pending'>Pending</button> </td>
                    <td className='text-center'>
                      
                      <svg className='clickable' onClick={leaveRequest} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00001 6.50001C4.74401 6.50001 4.48801 6.40201 4.29301 6.20701L0.293006 2.20701C-0.0979941 1.81601 -0.0979941 1.18401 0.293006 0.793006C0.684006 0.402006 1.31601 0.402006 1.70701 0.793006L5.01201 4.09801L8.30501 0.918006C8.70401 0.535006 9.33501 0.546006 9.71901 0.943006C10.103 1.34001 10.092 1.97401 9.69501 2.35701L5.69501 6.21901C5.50001 6.40701 5.25001 6.50001 5.00001 6.50001Z" 
                          fill="#828282"/>
                          </svg>
                          </td>
                  </tr>
                      ))
                    }
                </tbody>
              </table>


            </div>
              <nav aria-label="Page navigation example ">
                <ul class="pagination justify-content-end">
                  <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
    </div>
    </div>
    </div>
  )
}

export default Vcm03