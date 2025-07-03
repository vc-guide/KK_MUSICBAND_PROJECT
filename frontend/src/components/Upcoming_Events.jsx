import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import './Upcoming_Events.css'
import { IoIosArrowForward, IoIosImage } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Upcoming_Events = () => {
  const eventUrl = 'http://127.0.0.1:8000/events/';
  const baseUrl ='http://127.0.0.1:8000/'
  const [eventData, setEventData] = useState([])
   const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(()=>{
    axios.get(eventUrl).then(res=>
      setEventData(res.data.eventslists)
    ).catch(err=>console.log(err))
  },[]);
 
  const handleForward = () =>{
    if (currentIndex < ((eventData.length)-1)){
    setCurrentIndex(currentIndex+1);
    }
  }
  const handleBackward = () =>{
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex-1)
    }
  }

  return (
    <div>
      {eventData.length > 0 && (
        <>
        <div className="maincontainer">
      <div className="event-container">
        <div className="event-background"  style={{ backgroundImage: `url(${baseUrl}${eventData[currentIndex].event_image})` }}></div>
        <div className="event-front">
           <div>    <button className="backward-button" onClick={handleBackward} disabled = {currentIndex === 0}> <IoIosArrowBack /> </button>  </div>
          <img className="event-image"  src={`${baseUrl}${eventData[currentIndex].event_image}`}  alt = "Event loading"/>
          <div>    <button className="forward-button" onClick={handleForward} disabled ={currentIndex === eventData.length - 1}><IoIosArrowForward /> </button> </div>
        </div>
      </div>
      </div>
      <div className="event-description-container">
     <p className="event-description">{eventData[currentIndex].description}</p>
      </div>
    <div className="grid-container">
  {eventData[currentIndex].media.map((element) => (
    <React.Fragment key={element.id}>
      {element.image && (
        <div className="grid-element">
          <img
            src={`${baseUrl}${element.image}`}
            alt="loading"
            style={{ height: '40vh', width: '100%' }}
          />
        </div>
      )}
      {element.video && (
        <div className="grid-element">
          <video controls style={{ height: '40vh', width: '100%' }}>
            <source src={`${baseUrl}${element.video}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </React.Fragment>
  ))}
</div>
       
      </>
    )}

    </div> 
  
  );
  /*
  return (
    <div><h1>Upcoming_Events</h1>
    {eventData.map(item =>(
      <div key={item.id}>
        <img src={`${baseUrl}${item.event_image}`} alt="loading image" />
        <h4>{item.event}</h4>
        <h5>{item.description}</h5>
        {item.media.map((element)=>(
          <div key={element.id}>
            <img src={`${baseUrl}${element.image}`} alt='loading image'/>
            <video style={{height:"590px",width:"300px"}} controls >
              <source src = {`${baseUrl}${element.video}`} type="video/mp4" />
              Your browser does not supports
            </video>
          </div>
        ))}

      </div>
    ))}</div>
  )
    */
};


export default Upcoming_Events;