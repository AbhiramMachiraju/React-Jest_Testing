import React from 'react'

 const Application = () => {
  return (
    <>
    <h1>Job Application Form</h1>
    <h2>Sections</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
      <div data-testid="custom-element">Custom HTML element</div>

    <form style={{padding:'15px'}}>
       <div className='row'>
       <div className='col-md-3'> <label htmlFor='name'>Name :</label>  </div>
       <div className='col-md-9'>  <input type="text" id="name" placeholder='Fullname' value="Abhiram"
            onChange={() => {}} />  </div>
       </div>

       <div className='row'>
       <div className='col-md-3'> <label htmlFor='adres'>Address :</label>  </div>
       <div className='col-md-9'>  <textarea  id="adres"/>  </div>
       </div>


       <div className='row'>
       <div className='col-md-3'> <label htmlFor='jobloc'>Job Location</label> </div>
       <div className='col-md-9'> <select  id="jobloc"> 
        <option value="HYD">HYDERABAD</option>
        <option value="BAG">BENGULURU</option>
        <option value="CHN">CHENNAI</option>
        </select></div>
       </div>

       <div className='row' >
       <div className='col-md-12'> <input type="checkbox" id="tc" /> &nbsp; <label htmlFor='tc'>I agree to the terms and conditions</label></div> 
       </div>


       <div className='row' > 
       <div className='col-md-6'></div>
       <div className='col-md-6'><button >SUBMIT</button></div></div>


    </form></>
  )
}


export default Application;