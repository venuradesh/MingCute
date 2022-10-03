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
            <div className='search_grp shadow-none border border-1  rounded-2 d-flex align-items-center justify-content-start py-1 px-lg-2'>
              <svg className='mx-1' width='24px' height='24px' viewBox='0 0 24 24' version='1.1' >
                  <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                      <g id='File' transform='translate(-960.000000, 0.000000)'>
                          <g id='search_line' transform='translate(960.000000, 0.000000)'>
                              <rect id='矩形' fill-rule='nonzero' x='0' y='0' width='24' height='24'></rect>
                              <path d='M10.5,2 C5.80558,2 2,5.80558 2,10.5 C2,15.1944 5.80558,19 10.5,19 C12.4869,19 14.3146,18.3183 15.7619,17.176 L19.4142,20.8283 C19.8047,21.2188 20.4379,21.2188 20.8284,20.8283 C21.2189,20.4378 21.2189,19.8046 20.8284,19.4141 L17.1761,15.7618 C18.3183,14.3145 19,12.4868 19,10.5 C19,5.80558 15.1944,2 10.5,2 Z M4,10.5 C4,6.91015 6.91015,4 10.5,4 C14.0899,4 17,6.91015 17,10.5 C17,14.0899 14.0899,17 10.5,17 C6.91015,17 4,14.0899 4,10.5 Z' id='形状' fill='#09244BFF'>
                  </path></g></g></g>
                  </svg>
                  <input type='text' placeholder='Search Vehicle Number'  />
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