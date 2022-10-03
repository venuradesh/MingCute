import React from "react";

const table_array=[1,2,3,4,5,6,7,8]

function AgrForm() {
  return (
    <div className="h-100   container-fluid">
    <div className="main_body vehicle_table">
      <div className="card_body leave_table container mt-5">
        <h6>List of Garbage Collectors</h6>
          <div className=' my-4 d-flex align-items-center justify-content-between flex-wrap'>
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
                  <input type='text' placeholder='Search Status'  />
              </div>
          </div>
            <div>
            <div className="card table_card  p-0  ">
            <table class="table">
                <thead class="table-light lighblack_text">
                  <tr>
                    <th>Labour Name </th>
                    <th>ID</th>
                    <th>Devision </th>
                    <th>Location </th>
                    <th>Positive Feedback precentage </th>
                    <th>Negative Feedback precentage </th>
                    <th className='text-center'>Overall Ratings</th>
                    <th className='text-center'>Earn Badge</th>
                  </tr>
                </thead>
                <tbody>
                {
                      table_array.map((cont,index)=>(
                  <tr >
                    <td className=''><h6 className='mb-0'>Albert Flores</h6></td>
                    <td>GC003</td>
                    <td>Dematagoda</td>
                    <td className='text-center'>Aramya Place(L001)
                        Seelarathna Lane(L002)
                        Aramya Road(L003)
                        Dharmarama Road(L004)
                          </td>
                          <td>75%</td>
                          <td>25%</td>
                          <td>4</td>
                          <td>Gold Badge</td>
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
  );
}

export default AgrForm;
