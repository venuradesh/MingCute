import React from 'react'
import MapWrapper from"./MapWrapper"

  function SelectPlace() {
    return (
      <div className="h-100   container-fluid">
        <h3>City Map</h3>
        <div className="main_body">
          <div className="card_body container mt-5">
            <div className="p-4">
              <div className="search_locate py-2">
                <div className='border-0 rounded-2 d-flex align-items-center justify-content-between py-1 px-lg-2'>
                  <div className='d-flex align-items-center border-0 justify-content-start'>
                  </div>

                </div>
              </div>



              <div className="row mt-5">
                <MapWrapper />
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

export default SelectPlace