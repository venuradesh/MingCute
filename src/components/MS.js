import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MS() {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  function veiwSchedule(data) {
    navigate("../schedule/frame7", { state: { place: data } });
  }
  function veiwTime() {
    navigate("../schedule/frame9");
  }
  function veiwMeeting() {
    navigate("../schedule/frame10");
  }

  function callAPI(type) {
    axios
      .get(`https://36ae-112-134-219-1.in.ngrok.io/table/random/${type}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  function handleChange(e, name) {
    console.log(e.target.value);
    setValues({ ...values, [name]: e.target.value });
  }
  console.log(values);

  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
  }

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    axios
      .get(`https://a249-112-134-219-1.ap.ngrok.io/table/random/${values.municipal_ward}`)
      .then((res) => {
        console.log(values);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoading]);

  console.log(values);
  console.log("values");

  return (
    <div className="h-100 manage_schedule container-fluid">
      <div className="card_body container mt-5">
        <div className="card mx-auto shadow my-2 ">
          <div className="inner_card mx-auto">
            <h5 className="req_title py-3 text-center add_title">Schedule For this Week</h5>
            <div className="req_form">
              <h5 className="fw-bold">Date ( Valid Period ) :</h5>
              <div className=" row mb-3 d-flex align-items-center justify-content-between">
                <div className="col-md-6 col-lg-5 ps-3 input_grp d-flex align-items-center justify-content-between">
                  <label for="phone" className="fw-bold form-label">
                    From -
                  </label>
                  <input id="phone" type="date" className="px-2 w-75 py-1 form-control" />
                </div>
                <div className="col-md-6 col-lg-5 pe-3 input_grp d-flex align-items-center justify-content-between">
                  <label for="date" className="fw-bold form-label">
                    To -
                  </label>
                  <input type="text" id="date" className="px-2 w-75 py-1 form-control" />
                </div>
              </div>

              <h5 className="fw-bold">Time Period :</h5>
              <div className=" row  mb-3 d-flex align-items-center justify-content-between">
                <div className="col-md-6 col-lg-5 ps-3 input_grp d-flex align-items-center justify-content-between">
                  <label for="phone" className="fw-bold form-label">
                    Start -
                  </label>
                  <input id="phone" type="time" className="px-2 w-75 py-1 form-control" />
                </div>
                <div className="col-md-6 col-lg-5 pe-3 input_grp d-flex align-items-center justify-content-between">
                  <label for="date" className="fw-bold form-label">
                    End -
                  </label>
                  <input type="time" id="date" className="px-2 w-75 py-1 form-control" />
                </div>
              </div>

              <div className="input_grp mb-3 d-flex align-items-center justify-content-between ">
                <label for="Division" className="fw-bold form-label">
                  Number of working Employees:
                </label>
                <select id="Division" type="text" className="px-2 py-1 ms-3 w-75 form-control" placeholder="Number of Employees">
                  <option selected disabled hidden>
                    4
                  </option>
                </select>
              </div>

              <div className="input_grp mb-3 d-flex align-items-center justify-content-between ">
                <label for="Division" className="fw-bold form-label">
                  Number of working Trucks:
                </label>
                <select id="Division" type="text" className="px-2 w-75 ms-3 py-1 form-control" placeholder="Number of Employees">
                  <option selected disabled hidden>
                    10
                  </option>
                </select>
              </div>
              <div className="input_grp mb-3 d-flex align-items-center justify-content-between ">
                <label for="Division" className="fw-bold form-label">
                  Addition Garbage Requests for week:
                </label>
                <select id="Division" type="text" className="px-2 ms-3 w-75 py-1 form-control" placeholder="Number of Employees">
                  <option selected disabled hidden>
                    4
                  </option>
                </select>
              </div>

              <div className="input_grp mb-3 d-flex align-items-center justify-content-between ">
                <label for="Wards" className="fw-bold form-label">
                  Municipal Wards:
                </label>
                <select value={values.municipal_ward} onChange={(e) => handleChange(e, "municipal_ward")} id="Wards" type="text" className="px-2 w-75 ms-3 py-1 form-control" placeholder="Municipal Wards">
                  <option selected disabled hidden>{`Municipal Wards`}</option>
                  <option value={"Dematagoda"}>{`Dematagoda`}</option>
                  <option value={"Wanathamulla"}>{`Wanathamulla`}</option>
                  <option value={"Kuppiyawatte East"}>{`Kuppiyawatte East`}</option>
                  <option value={"Kuppiyawatte West"}>{`Kuppiyawatte West`}</option>
                  <option value={"Cinnoman Garden"}>{`Cinnoman Garden`}</option>
                  <option value={"Borella South"}>{`Borella South`}</option>
                  <option value={"Borella North"}>{`Borella North`}</option>
                </select>
              </div>

              {/* <div className="input_grp mb-4 d-flex align-items-center justify-content-between ">
              <label for="Division" className="fw-bold form-label">
              Events Plan for this Week:
              </label>
              <div className='d-flex align-items-center justify-content-center w-75'>
              <button onClick={veiwTime} className=" btn primary_btn  mx-4 px-4 py-1 ">
              10 Times.com
            </button>
            <button onClick={veiwMeeting}  className=" btn primary_btn  mx-4 px-4 py-1  ">
            Meetups.com
            </button>
              </div>
            </div> */}
            </div>

            <div className="bottom w-100 flex-wrap d-flex align-items-center justify-content-center  mt-2">
              {/* <a href='https://57b8-112-134-221-151.ap.ngrok.io/table/random/<mainPlace>'> */}
              <button onClick={onSubmit} className=" btn primary_btn proceed_btn mx-auto px-4 py-1 mb-3 ">
                {`Generate Time Table`}
              </button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>

      <h6 className="mt-4">{`Municipal Wards :`}</h6>
      <div className="wards d-flex align-items-center justify-content-center flex-wrap ">
        <button onClick={() => veiwSchedule("dematagoda")} style={{ backgroundColor: "#B4D6F1" }} className=" clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
          {`Dematagoda`}
        </button>
        <button onClick={() => veiwSchedule("wanathamulla")} style={{ backgroundColor: "#B4D6F1" }} className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
          {`Wanathamulla`}
        </button>
        <button onClick={() => veiwSchedule("Kuppiyawatte%20-%20EAST")} style={{ backgroundColor: "#B4D6F1" }} className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
          {`Kuppiyawatte East`}
        </button>
        <button onClick={() => veiwSchedule("Kuppiyawaththe%20-%20West")} style={{ backgroundColor: "#B4D6F1" }} className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
          {`Kuppiyawatte West`}
        </button>
        <button onClick={() => veiwSchedule("Greenpath")} style={{ backgroundColor: "#B4D6F1" }} className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
          {`Cinnoman Garden`}
        </button>
        <button onClick={() => veiwSchedule("Borella%20South")} style={{ backgroundColor: "#B4D6F1" }} className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
          {`Borella South`}
        </button>
        <button onClick={() => veiwSchedule("Borella%20North")} style={{ backgroundColor: "#B4D6F1" }} className="clickable btn primary_btn mx-4 px-4 py-1 mb-3 ">
          {`Borella North`}
        </button>
      </div>
      <div className="top w-100 event-btn-place">
        <a href="http://localhost:3000/admin/schedule/frameevent">
          <button className="place_btn ml-16 h6 py-1">events</button>
        </a>
        <a href="http://localhost:3000/admin/schedule/frameaditional">
          {" "}
          <button className="place_btn ml-16 h6 py-1">Additional Garbage Request</button>
        </a>
      </div>
    </div>
  );
}

export default MS;
