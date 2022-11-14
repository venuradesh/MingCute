import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "";

function AreaFeedList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios.get('https://66c3-123-231-61-157.in.ngrok.io/get-feedback-data')
    axios.get(API_URL).then(function (response) {
      setData(response.data);
      console.log(response);
    });
  });

  return (
    <div className="h-100   container-fluid">
      <div className="main_body vehicle_table">
        <div className="card_body leave_table container mt-5">
          <div className=" my-4 mb-5 d-flex align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center justify-content-between">
              <span>Show</span>
              <input type="text" value="3" className="mx-3 form-control pagination_input " />
              <span>Leaves</span>
            </div>
            <h5 className="add_title fw-bold">Area Feedback List</h5>
            <div className="search_grp shadow-none border border-0  rounded-2 d-flex align-items-center justify-content-start py-1 px-lg-2"></div>
          </div>
          <div>
            <div className="cover_table p-4 ">
              <div className="card table_card  p-0 ">
                <table class="table feedback">
                  <thead class="table-light lighblack_text">
                    <tr>
                      <th className="fw-normal">Name</th>
                      <th className="fw-normal">Area</th>
                      <th className="fw-normal">Comment </th>
                      <th className="text-center">Feedback Type</th>
                      <th className="text-center">Ratings Star</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 &&
                      data.map((cont, index) => (
                        <tr key={index}>
                          <td>{cont.id} </td>

                          <td>{cont.Main_Area} </td>
                          <td>{cont.Feedback} </td>
                          <td>{cont.analysis} </td>

                          <td>{cont.ratings} </td>
                        </tr>
                      ))}

                    {/* <tr >
                    <td className=''><h6 className='mb-0'>Albert@gmail.com</h6></td>
                    <td>Hallo</td>
                    <td>lorem</td>
                    <td className='text-center'> <button type='button' className='btn neutral'>Neutral</button> </td>
                    <td className='text-center'>
                    <span className='neutral d-flex align-items-center justify-content-center mx-auto'>3</span>
                          </td>
                  </tr>

                  <tr >
                    <td className=''><h6 className='mb-0'>Albert Flores</h6></td>
                    <td>Hallo</td>
                    <td>ipsum</td>
                    <td className='text-center'> <button type='button' className='btn negative'>Negative</button> </td>
                    <td className='text-center'>
                    <span className='positive d-flex align-items-center justify-content-center mx-auto'>5</span>
                          </td>
                  </tr>

                  <tr >
                    <td className=''><h6 className='mb-0'>Albert Flores</h6></td>
                    <td>Hallo</td>
                    <td>halum</td>
                    <td className='text-center'> <button type='button' className='btn positive'>Positive</button> </td>
                    <td className='text-center'>
                    <span className='negative d-flex align-items-center justify-content-center mx-auto'>2</span>
                          </td>
                  </tr>

                  <tr >
                    <td className=''><h6 className='mb-0'>Albert Flores</h6></td>
                    <td>Hallo</td>
                    <td>Lorem</td>
                    <td className='text-center'> <button type='button' className='btn neutral'>Neutral</button> </td>
                    <td className='text-center'>
                        <span className='neutral d-flex align-items-center justify-content-center mx-auto'>3</span>
                          </td>
                  </tr>

                  <tr >
                    <td className=''><h6 className='mb-0'>Albert Flores</h6></td>
                    <td>Hallo</td>
                    <td>2022.07.24 - Friday</td>
                    <td className='text-center'> <button type='button' className='btn negative'>Negative</button> </td>
                    <td className='text-center'>
                        <span className=' positive d-flex align-items-center justify-content-center mx-auto'>5</span>
                          </td>
                  </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
            <nav aria-label="Page navigation example ">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaFeedList;
