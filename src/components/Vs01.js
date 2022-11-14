import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";


// https://a249-112-134-219-1.ap.ngrok.io/time-table/Dematagoda
function Vs01() {
  const navigate = useNavigate();
  const location = useLocation();
  const [table_array, setTableArray] = useState([]);

  function viewSummary() {
    navigate("../schedule/frame7");
  }
  function viewSchedule() {
    navigate("../schedule/frame8", { state: { data: location.state } });
  }

  useEffect(() => {
    axios
      .get(`https://09f4-112-135-71-163.in.ngrok.io/table/random/Dematagoda`)
      .then((response) => {
        setTableArray(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




  return (
    <div className="h-100   container-fluid">
      <div className="main_body">
        <div className="card_body shedule_table container mt-5">
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

                {table_array.map((cont, index) => (
                    <tr key={index}>
                      <td>{Object.keys(cont)[0]}</td>
                      {cont[Object.keys(cont)[0]].map((datas, key) => (
                        <td key={key}>
                          {datas.map((data) => (
                            <p>
                              {`${data["Tuck Number"]}, ${data["Driver's Name"]}`}
                              <br /> {`Road - ${data["Road"]}`}
                              <br />
                              {`Emp - ${data["Employee Name"]}`}
                            </p>
                          ))}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* {data.length > 0 &&
                    data.map((cont, index) => (
                      <tr >
                        <td >"sad"
                        {(cont.Monday && cont.Monday.length > 0) && cont.Monday.map((item,index)=><div key={index+"0"}>
                          <div>
                          {Object.keys(item)[0]}

                          </div>
                          {item[Object.keys(item)[0]].map((bale)=>(<div className={"ml-5 pl-5"}>{bale["Driver's Name"]}</div>))}
                          
                          </div>
                          
                          )}
                           </td>
                        <td >Text </td>
                        <td >Text </td>
                        <td >Text </td>
                        <td >Text </td>
                        <td >Text </td>
                        <td >Text </td>
                      </tr>
                    ))
                  } */}
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