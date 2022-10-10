import React from 'react'

function LabourReg2() {
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
               <span className='rounded-circle number bg_white fw-bold'>2</span>
            </div>

            <form className='p-4'>
                <h5 className='mb-4'>Details of Working Area</h5>
                <div className='ipt_grp my-2 row d-flex   align-items-center justify-content-start'>
                        <div className='col-md-4'>Division : </div>
                        <div className='col-md-8'>Dematagodda </div>
                </div>
                <div className='ipt_grp my-2 row d-flex align-items-center justify-content-start'>
                        <div className='col-md-4'>Devision Number  : </div>
                        <div className='col-md-8'>808 </div>
                </div>

                <div className='ipt_grp my-2 row d-flex  align-items-start justify-content-start'>
                        <div className='col-md-4 pt-3'>Working Locations  : </div>
                        <div className='col-md-8'>
                            <div className='card lbr_card border-0 p-4'>
                                <div className='row'>
                                    <div className='col-md-6 d-flex  align-items-center justify-content-start'> 
                                    <input type="checkbox" className=' me-3'/>
                                    <label>Detagoda</label>
                                     </div>
                                     <div className='col-md-6 d-flex  align-items-center justify-content-start'> 
                                    <input type="checkbox" className=' me-3' />
                                    <label>Detagoda</label>
                                     </div>
                                     <div className='col-md-6 d-flex  align-items-center justify-content-start'> 
                                    <input type="checkbox" className=' me-3' />
                                    <label>Detagoda</label>
                                     </div>
                                     <div className='col-md-6 d-flex  align-items-center justify-content-start'> 
                                    <input type="checkbox" className=' me-3' />
                                    <label>Detagoda</label>
                                     </div>
                                     <div className='col-md-6 d-flex  align-items-center justify-content-start'> 
                                    <input type="checkbox" className=' me-3'/>
                                    <label>Detagoda</label>
                                     </div>
                                     <div className='col-md-6 d-flex  align-items-center justify-content-start'> 
                                    <input type="checkbox" className=' me-3' />
                                    <label>Detagoda</label>
                                     </div>
                                     <div className='col-md-6 d-flex  align-items-center justify-content-start'> 
                                    <input type="checkbox" className=' me-3' />
                                    <label>Detagoda</label>
                                     </div>
                                     <div className='col-md-6 d-flex  align-items-center justify-content-start'> 
                                    <input type="checkbox" className=' me-3' />
                                    <label>Detagoda</label>
                                     </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className='d-flex mt-4 text-center align-items-center justify-content-end'>
                    <button className='btn update_btn fw-bold light_text px-3 '>Submit</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default LabourReg2