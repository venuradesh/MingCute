import React from 'react'


function UpdateProfile() {
  return (
    <div className='p-4'>
        <h3 className='fw-bold'>Update Profile</h3>
        <div className='container'>
            <div className='profile_form mx-auto my-4'>
                <div className='input_grp row my-4 d-flex align-items-center justify-content-center'>
                <lable for="name" className="col-md-4"><h5 className="fw-bold">Full Name      :</h5></lable>
                <div className='col-md-8'>
                <input style={{backgroundColor:"rgba(191, 191, 191, 0.26)"}} id='name' type='text' className='form-control  border-0 px-2'/>
                </div>
                </div>

                <div className='input_grp row my-4 d-flex align-items-center justify-content-center'>
                <lable for="name" className="col-md-4"><h5 className="fw-bold">Date of Birth       :</h5></lable>
                <div className='col-md-8'>
                <input style={{backgroundColor:"rgba(191, 191, 191, 0.26)"}} id='name' type='text' className='form-control  border-0 px-2'/>
                </div>
                </div>

                <div className='input_grp row my-4 d-flex align-items-center justify-content-center'>
                <lable for="name" className="col-md-4"><h5 className="fw-bold">NIC        :</h5></lable>
                <div className='col-md-8'>
                <input style={{backgroundColor:"rgba(191, 191, 191, 0.26)"}} id='name' type='text' className='form-control  border-0 px-2'/>
                </div>
                </div>

                <div className='input_grp row my-4 d-flex align-items-center justify-content-center'>
                <lable for="name" className="col-md-4"><h5 className="fw-bold">Address      :</h5></lable>
                <div className='col-md-8'>
                <input style={{backgroundColor:"rgba(191, 191, 191, 0.26)"}} id='name' type='text' className='form-control  border-0 px-2'/>
                </div>
                </div>

                <div className='input_grp row my-4 d-flex align-items-center justify-content-center'>
                <lable for="name" className="col-md-4"><h5 className="fw-bold">Phone Number :</h5></lable>
                <div className='col-md-8'>
                <input style={{backgroundColor:"rgba(191, 191, 191, 0.26)"}} id='name' type='text' className='form-control  border-0 px-2'/>
                </div>
                </div>

                <div className='input_grp row my-4 d-flex align-items-center justify-content-center'>
                <lable for="name" className="col-md-4"><h5 className="fw-bold">Email      :</h5></lable>
                <div className='col-md-8'>
                <input style={{backgroundColor:"rgba(191, 191, 191, 0.26)"}} id='name' type='text' className='form-control  border-0 px-2'/>
                </div>
                </div>
            </div>
        </div>
        <duv className="mt-5 d-flex align-items-center justify-content-evenly">
            <button className='back_btn light_text p-2 px-5 border-0 fs-5 fw-bold'>Back</button>
            <button className='update_btn light_text p-2 px-5 border-0 fs-5 fw-bold'>Update</button>
        </duv>
    </div>
  )
}

export default UpdateProfile