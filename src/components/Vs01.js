import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Vs01() {
  const navigate = useNavigate();
  const location = useLocation();
  const [table_array, setTableArray] = useState([]);
  const API_URL = `https://d9d6-112-134-218-60.ap.ngrok.io/table/random/${location.state.place.charAt(0).toUpperCase() + location.state.place.slice(1)}`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setTableArray(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <button className=" btn status primary_btn ms-auto d-flex align-items-center justify-content-end py-1 mb-3 ">hello</button>
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
              <table className="table">
                <thead className="table-dark">
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vs01;
