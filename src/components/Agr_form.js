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
            <div className='search_grp shadow-none border border-0  rounded-2 d-flex align-items-center justify-content-start py-1 px-lg-2'>
              </div>
          </div>
            <div>
            <div className="card table_card  p-0  ">
            <table class="table">
                <thead class="table-light lighblack_text">
                  <tr>
                    <th>Labour Name </th>
                    <th>ID</th>
                    <th>Area </th>
                    <th>Lane </th>
                    <th>Positive Feedback precentage </th>
                    <th>Negative Feedback precentage </th>
                    <th>Neutral Feedback precentage </th>
                    <th className='text-center'>Average Ratings</th>
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
                          <td>70%</td>
                          <td>20%</td>
                          <td>10%</td>
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
