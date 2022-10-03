import React from "react";

function Agr() {
  return (
    <div className="h-100  container-fluid">
      <div className="main_body">
        <div className="card_body container mt-5">
        <div className="top w-100 ">
            <button className=" btn status primary_btn ms-auto d-flex align-items-center justify-content-end py-1 mb-3 ">
              View Request
            </button>
          </div>
          <div className="card req_card mx-auto shadow my-2 px-4">
            <h5 className="req_title py-3 text-center add_title">
            Employee Leave Management
            </h5>
            <div className="req_form">
              {/* <h5 className="fancy_title">Details of Applicant :</h5> */}
              <div className="input_grp mb-3">
                <label for="Name" className="fw-bold form-label">
                Employee Name :
                </label>
                <br />
                <input
                  id="Name"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Name"
                />
              </div>
              <div className="input_grp mb-3">
                <label for="Name" className="fw-bold form-label">
                Department/Division  :
                </label>
                <br />
                <input
                  id="Name"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Division 3"
                />
              </div>
              <div className="input_grp mb-3">
                <label for="Name" className="fw-bold form-label">
                Employee Number  :
                </label>
                <br />
                <input
                  id="Name"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Division 3"
                />
              </div>
              <div className="input_grp mb-3">
                <label for="Division" className="fw-bold form-label">
                Position  :
                </label>
                <br />
                <input
                  id="Division"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Garbage Collector"
                />
              </div>

             

              <label className="fw-bold form-label">
              Reason for Leave  :
              </label>
              <br />
              <div className="px-3 mb-3 d-flex align-items-center justify-content-start flex-wrap">
                <div className="input_grp me-4">
                  <input
                    id="plas"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable fro="plas" className="lh-base ms-2">
                  Annual  
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="plas"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable fro="plas" className="lh-base ms-2">
                    Plastic{" "}
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="plas"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable fro="plas" className="lh-base ms-2">
                  Medical  
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="glass"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable for="glass" className="lh-base ms-2">
                  Casual  
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="organic"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable for="organic" className="lh-base ms-2">
                  Casual{" "}
                  </lable>
                </div>
              </div>

              <div className="input_grp d-flex align-items-center justify-content-start mb-3">
                <div for="Name" className="form-label">
                  Others :
                </div>
                <input
                  id="Name"
                  type="text"
                  className="px-2 ms-4 py-1 form-control w-75"
                  placeholder="Enter the reason"
                />
              </div>

              
              <div className=" row mb-3">
                <div className="col-md-6 col-lg-5 pe-3 input_grp ">
                  <label for="date" className="fw-bold form-label">
                  Start Date  :
                  </label>
                  <input
                    type="text"
                    id="date"
                    className="px-2 py-1 form-control"
                    placeholder="07/23/2022"
                  />
                </div>
                <div className="col-md-6 col-lg-5 ps-3 input_grp">
                  <label for="phone" className="fw-bold form-label">
                  End Date  :
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="px-2 py-1 form-control"
                    placeholder="07/23/2022"
                  />
                </div>
                <div className="col-lg-2  ps-3 input_grp">
                  <label for="phone" className="fw-bold form-label">
                  Total  :
                  </label>
                  <select
                    id="phone"
                    type="text"
                    className="px-2 py-1 form-control"
                    placeholder="07/23/2022"
                  >
                    <option selected disabled hidden>2</option>
                    <option>3</option>
                    <option>3</option>
                    <option>3</option>
                  </select>
                </div>
              </div>

            </div>

            <div className="bottom w-100 flex-wrap d-flex align-items-center justify-content-evenly  mt-2">
              <button style={{backgroundColor:"#2AC670",color:"white",minWidth:"200px"}} className=" btn primary_btn mx-auto px-4 py-1 mb-3 ">
              Approve
              </button>
              <button style={{backgroundColor:"#FF0000",color:"white",minWidth:"200px"}} className=" btn primary_btn mx-auto px-4 py-1 mb-3 ">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agr;
