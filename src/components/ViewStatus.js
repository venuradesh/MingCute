import React from 'react'
const table_array=[1,2,3,4,5,6,7,8]

function ViewStatus() {
  return (
    <div className="h-100   container-fluid">
    <div className="main_body vehicle_table">
      <div className="card_body shedule_table container mt-5">
      <div className="top w-100 ">
            <button className=" btn status primary_btn ms-auto d-flex align-items-center justify-content-end py-1 mb-3 ">
            Submit Issue
            </button>
          </div>
          <div className=' my-4 d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-between'>
            <span>Show</span>
            <input type="text"  value="3" className='mx-3 form-control pagination_input '/>
            <span>Leaves</span>
          </div>
            <div className=' shadow-none border border-0 rounded-2 d-flex align-items-center justify-content-start py-1 px-lg-2'>
              </div>
          </div>
            <div>
            <div className="card table_card py-3 px-4">
            <table class="table">
                <thead class="table-light">
                  <tr>
                    <th>Vehicle Number</th>
                    <th>Reporter</th>
                    <th>Date </th>
                    <th className=' d-flex align-items-center justify-content-end'>Status</th>
                  </tr>
                </thead>
                <tbody>
                {
                      table_array.map((cont,index)=>(
                  <tr >
                    <td>ABCD-12345</td>
                    <td>Ariyasena</td>
                    <td>2022.07.24 - Friday</td>
                    <td className=' d-flex align-items-center justify-content-end'> <button type='button' className='btn pending'>Pending</button> </td>
                  </tr>
                      ))
                    }
                     {
                      table_array.map((cont,index)=>(
                  <tr className='note_row'>
                    <td>ABCD-12345</td>
                    <td>Ariyasena</td>
                    <td>2022.07.24 - Friday</td>
                    <td className=' d-flex align-items-center justify-content-end'> <button type='button' className='btn noted'>Noted</button> </td>
                  </tr>
                      ))
                    }
                </tbody>
              </table>

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
    </div>
  )
}

export default ViewStatus