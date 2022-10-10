import React from 'react'
import { useNavigate } from "react-router-dom";

function MS() {

  const navigate = useNavigate();
  
  function veiwSchedule() {
    navigate("../schedule/frame7");
  }
  function veiwTime() {
    navigate("../schedule/frame9");
  }
  function veiwMeeting() {
    navigate("../schedule/frame10");
  }
  return (
    <div className="h-100 manage_schedule container-fluid">
      <div className="card_body container mt-5">
        <div className="card mx-auto shadow my-2 ">
        <div className='inner_card mx-auto'>
          <h5 className="req_title py-3 text-center add_title">
          Schedule For this Week
          </h5>
          <div className="req_form">
            <h5 className="fw-bold">Date ( Valid Period ) :</h5>
            <div className=" row mb-3 d-flex align-items-center justify-content-between">
              <div className="col-md-6 col-lg-5 ps-3 input_grp d-flex align-items-center justify-content-between">
                <label for="phone" className="fw-bold form-label">
                From - 
                </label>
                <input
                  id="phone"
                  type="date"
                  className="px-2 w-75 py-1 form-control"
                />
              </div>
              <div className="col-md-6 col-lg-5 pe-3 input_grp d-flex align-items-center justify-content-between">
                <label for="date" className="fw-bold form-label">
                To - 
                </label>
                <input
                  type="text"
                  id="date"
                  className="px-2 w-75 py-1 form-control"
                />
              </div>
              
            </div>

            <h5 className="fw-bold">Time Period :</h5>
            <div className=" row  mb-3 d-flex align-items-center justify-content-between">
              <div className="col-md-6 col-lg-5 ps-3 input_grp d-flex align-items-center justify-content-between">
                <label for="phone" className="fw-bold form-label">
                Start - 
                </label>
                <input
                  id="phone"
                  type="date"
                  className="px-2 w-75 py-1 form-control"
                />
              </div>
              <div className="col-md-6 col-lg-5 pe-3 input_grp d-flex align-items-center justify-content-between">
                <label for="date" className="fw-bold form-label">
                End - 
                </label>
                <input
                  type="date"
                  id="date"
                  className="px-2 w-75 py-1 form-control"
                />
              </div>
              
            </div>


            <div className="input_grp mb-3 d-flex align-items-center justify-content-between ">
              <label for="Division" className="fw-bold form-label">
              Number of working Employees:
              </label>
              <select
                id="Division"
                type="text"
                className="px-2 py-1 ms-3 w-75 form-control"
                placeholder="Number of Employees"
              >
                <option selected disabled hidden>Number of Employees</option>
                  <option>3</option>
                  <option>3</option>
                  <option>3</option>
              </select>
            </div>

            <div className="input_grp mb-3 d-flex align-items-center justify-content-between ">
              <label for="Division" className="fw-bold form-label">
              Number of working Trucks:
              </label>
              <select
                id="Division"
                type="text"
                className="px-2 w-75 ms-3 py-1 form-control"
                placeholder="Number of Employees"
              >
                <option selected disabled hidden>Number of Trucks</option>
                  <option>3</option>
                  <option>3</option>
                  <option>3</option>
              </select>
            </div>
            <div className="input_grp mb-3 d-flex align-items-center justify-content-between ">
              <label for="Division" className="fw-bold form-label">
              Addition Garbage Requests for week:
              </label>
              <select
                id="Division"
                type="text"
                className="px-2 ms-3 w-75 py-1 form-control"
                placeholder="Number of Employees"
              >
                <option selected disabled hidden>Location</option>
                  <option>3</option>
                  <option>3</option>
                  <option>3</option>
              </select>
            </div>

            <div className="input_grp mb-4 d-flex align-items-center justify-content-between ">
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
            </div>

          </div>

          <div className="bottom w-100 flex-wrap d-flex align-items-center justify-content-center  mt-2">
            <button  className=" btn primary_btn proceed_btn mx-auto px-4 py-1 mb-3 ">
            Generate Time Table
            </button>
          </div>
        </div>
      </div>
      </div>


      <h6 className='mt-4'>Municipal Wards :</h6>
      <div className='wards d-flex align-items-center justify-content-center flex-wrap '>
      <button onClick={veiwSchedule} style={{backgroundColor:"#B4D6F1"}}  className=" clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
      Dematagoda
        </button>
        <button onClick={veiwSchedule} style={{backgroundColor:"#B4D6F1"}}  className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
      Dematagoda
        </button>
        <button onClick={veiwSchedule} style={{backgroundColor:"#B4D6F1"}}  className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
      Dematagoda
        </button>
        <button onClick={veiwSchedule} style={{backgroundColor:"#B4D6F1"}}  className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
      Dematagoda
        </button>
        <button onClick={veiwSchedule} style={{backgroundColor:"#B4D6F1"}}  className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
      Dematagoda
        </button>
        <button onClick={veiwSchedule} style={{backgroundColor:"#B4D6F1"}}  className="clickable btn primary_btn  mx-4 px-4 py-1 mb-3 ">
      Dematagoda
        </button>
        <button onClick={veiwSchedule} style={{backgroundColor:"#B4D6F1"}}  className="clickable btn primary_btn mx-4 px-4 py-1 mb-3 ">
      Dematagoda
        </button>
      </div>
  </div>
  )
}

export default MS