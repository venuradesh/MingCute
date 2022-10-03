import React from 'react'

function Vcm02() {
  return (
    <div className="h-100  container-fluid">
    <div className="main_body">
      <div className="card_body container mt-5">
        <div className="top w-100 ">
            <button className=" btn status primary_btn ms-auto d-flex align-items-center justify-content-end py-1 mb-3 ">
              View Status
            </button>
          </div>
        <div className="card req_card mx-auto shadow my-3 px-4">
          <h5 className="req_title py-3 text-center add_title">
          Vehicle Condition Monitoring
          </h5>
          <div className="req_form">
            {/* <h5 className="fancy_title">Details of Applicant :</h5> */}
            <div className="input_grp mb-3">
              <label for="Name" className="fw-bold form-label">
              Vehicle Number :
              </label>
              <br />
              <input
                id="Name"
                type="text"
                className="px-2 py-1 form-control"
                placeholder="Vehicle Number"
              />
            </div>
            <div className="input_grp mb-3">
              <label for="Division" className="fw-bold form-label">
              Department/Division  :
              </label>
              <br />
              <input
                id="Division"
                type="text"
                className="px-2 py-1 form-control"
                placeholder="Division"
              />
            </div>

            <div className="input_grp mb-3">
              <label for="address" className="fw-bold form-label">
              Reporter’s Name  :
              </label>
              <br />
              <input
                id="address"
                type="text"
                className="px-2 py-1 form-control"
                placeholder="Employee Number"
              />
            </div>

            <div className="input_grp mb-3">
              <label for="address" className="fw-bold form-label">
              Reporter’s Employee Number  :
              </label>
              <br />
              <input
                id="address"
                type="text"
                className="px-2 py-1 form-control"
                placeholder="Position"
              />
            </div>
            
            <div className="input_grp mb-3">
              <label for="address" className="fw-bold form-label">
              Problem  :
              </label>
              <br />
              <input
                id="address"
                type="text"
                className="px-2 py-1 form-control"
                placeholder="Enter the problem"
              />
            </div>

            <div className="input_grp mb-3">
              <label for="address" className="fw-bold form-label">
              Upload a photo of the vehicle  :
              </label>
              <br />
              <input
                id="address"
                type="file"
                className="px-2 py-1 form-control"
              />
            </div>
            
          </div>

          <div className="bottom w-100 text-center mt-2">
            <button style={{backgroundColor:"#18AB56"}} className=" btn primary_btn  mx-auto py-1 px-5 mb-3 ">
            Noted
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Vcm02