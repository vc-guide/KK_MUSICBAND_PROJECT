import React from 'react'
import './Bookevent.css'

const Bookevent = () => {
  return (
    <div className="main-container">
      <div  className='book-container'>
        <form>
          <div className="input-container">
            <input type="text" placeholder="Name"/>
          </div>
          <div className="input-container">
            <input type ="text" placeholder="Phone Number"/>
            <input type ="text" placeholder="Mobile"/>
          </div>
          <div className="input-container">
            <input type = "text" placeholder = "Address"/>
          </div>
          <div className="input-container">
            <input type = "text" placeholder = "City"/>
          </div>
          <div className="input-container">
            <input type = "text" placeholder = "State"/>
          </div>
          <div className="input-container">
            <input type ="text" placeholder = "Zip"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Bookevent