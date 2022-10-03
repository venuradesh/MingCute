import React from 'react'

function LabourReg() {
  return (
    
    <div className='container'>
        <h4 className='my-4 fw-bold ms-5'>Registration</h4>
        <div className='reg_form mx-auto mb-4 card border-0 bg_gray'>
            <div className='ipt_grp  w-100  '>
                <span className='d-flex p-4 align-items-center justify-content-start'>
                    <label for="cat" className='me-4'>Select Job Category :</label>
                    <select className='form-select w-25 rounded-0 border-0' >
                        <option hidden selected disabled>Garbage Collector</option>
                        <option>Something</option>
                        <option>Something</option>
                        <option>Something</option>
                    </select>
                </span>
            </div>
            <hr style={{color:"black"}}/>

            <div className='d-flex  text-center align-items-center justify-content-center'>
               <span className='rounded-circle number bg_white fw-bold'>1</span>
            </div>

            <form className='p-4'>
                <h4 className='mb-4'>Personal Details</h4>
                <div className='ipt_grp my-2 d-flex  text-center align-items-center justify-content-between'>
                        <label>Full Name</label>
                        <input className='personal_inpt form-control w-75' type='text'/>
                </div>
                <div className='ipt_grp my-2 d-flex  text-center align-items-center justify-content-between'>
                        <label>Address</label>
                        <input className='personal_inpt form-control w-75' type='text'/>
                </div>
                <div className='ipt_grp my-2 d-flex  text-center align-items-center justify-content-between'>
                        <label>NIC</label>
                        <input className='personal_inpt form-control w-75' type='text'/>
                </div>
                <div className='ipt_grp my-2 d-flex  text-center align-items-center justify-content-between'>
                        <label>Date of Birth</label>
                        <input className='personal_inpt form-control w-75' type='text'/>
                </div>
                <div className='ipt_grp my-2 d-flex  text-center align-items-center justify-content-between'>
                <label>Gender</label>
                    <span className='d-flex form-check'>
                        <input className='form-check-input me-3' type='radio'/>
                        <label className='form-check-label'>Female</label>
                    </span>
                    <span className='d-flex form-check'>
                        <input className='form-check-input checked me-3' type='radio'/>
                        <label className='form-check-label'>Male</label>
                    </span>
                </div>
                <div className='ipt_grp my-2 d-flex  text-center align-items-center justify-content-between'>
                        <label>Phone Number</label>
                        <input className='personal_inpt form-control w-75' type='text'/>
                </div>
                <div className='ipt_grp my-2 d-flex  text-center align-items-center justify-content-between'>
                        <label>Password</label>
                        <input className='personal_inpt form-control w-75' type='text'/>
                </div>
                <div className='ipt_grp my-2 d-flex  text-center align-items-center justify-content-between'>
                        <label>Confirm Password</label>
                        <input className='personal_inpt form-control w-75' type='text'/>
                </div>

                <div className='d-flex mt-4 text-center align-items-center justify-content-end'>
                    <button className='btn update_btn fw-bold light_text px-3 '>Next</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default LabourReg