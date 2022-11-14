import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { data } from "../constants";
const check = "/mainIcons/check-circle.svg"
const cross = "/mainIcons/x-circle.svg"

const table_array = [1, 2, 3, 4, 5, 6, 7, 8];

function Vs02() {
  const navigate = useNavigate();
  const location = useLocation();


  function viewSummary() {
    navigate("../schedule/frame7");
  }
  function viewSchedule() {
    navigate("../schedule/frame8", { state: { location } });
  }
  console.log(location.state.data.place);

  return (
    <div className="h-100 container-fluid">
      <div className="main_body">
        <div className="card_body shedule_table container mt-5">
          <div className="top w-100 ">
            <button className=" btn status primary_btn ms-auto d-flex align-items-center justify-content-end py-1 mb-3 ">
              back
            </button>
          </div>
          <div className="mt-3 schedules d-flex align-items-center justify-content-between ">
            <div onClick={viewSummary} className="schedule clickable h6 mb-0 py-2 title_tab text-center">
              Schedule
            </div>
            <div onClick={viewSchedule} className="summary clickable h6 mb-0 py-2 title_tab text-center">
              Summary
            </div>
          </div>
          <div className="card table_card py-3 px-4">
            <h5 className="add_title text-center">Summary</h5>
            <table class="table summary table-bordered">
              <thead class="table-light">
                <tr>
                  <th>Road Name</th>
                  <th>Once a day</th>
                  <th>Twice a week</th>
                  <th>{`Thrice a week`}</th>
                </tr>
              </thead>
              <tbody>
                {data[location.state.data.place].map((item, index) => (
                  <tr>
                    <td>{item.road}</td>
                    <td className="text-center">
                      <img src={item.once} alt={"once"} />
                    </td>
                    <td className="text-center">
                      <img src={item.twice} alt={"twice"} />
                    </td>
                    <td className="text-center">
                      <img src={item.thrice} alt={"thrice"} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vs02;
