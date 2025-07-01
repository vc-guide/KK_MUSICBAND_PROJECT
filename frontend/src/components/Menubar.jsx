import './Menubar.css'
import { MdClear } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Menubar =({className,onClose}) =>{

  return (
  <div className={className}>
    <div className="menuContainer">
      <div className="imagebox">
        <MdClear className="clearstyle" onClick={onClose}/>
        <div className="imagebackground">
          <img className="imagestyle" src="kklogo.png"/>
        </div>
      </div>
      <div className="contentbox" style={{color:"#fab800"}}>Home</div>
      <div className="contentbox"><Link to="/Events">Upcoming Events</Link></div>
      <div className="contentbox">Cinema Melody 2</div>
      <div className="contentbox">Cinema Melody 3</div>
      <div className="contentbox">babu</div>
      <div className="contentbox">Babu</div>
      <div className="contentbox"></div>
      <div className="contentbox"></div>
      <div className="contentbox"></div>
      <div className="contentbox">
      <div className="socialmediabox">
        <div className="icon-background">
          <FaCircle className="circlestyle"/>
          <div className="icon-container">
            <AiFillInstagram className="icon-style"/>
          </div>
        </div>
        <div className="icon-background">
          <FaCircle className="circlestyle"/>
          <div className="icon-container">
            <FaTelegramPlane className="icon-style" />
          </div>
        </div>
        <div className="icon-background">
          <FaCircle className="circlestyle"/>
          <div className="icon-container">
            <IoIosMail className="icon-style"/>
          </div>
        </div>
        <div className="icon-background">
          <FaCircle className="circlestyle"/>
          <div className="icon-container">
            <FaYoutube className="icon-style"/>
          </div>
        </div>
      </div>
      </div>
        
      <div className="bookbutton">Book Events</div>
    </div>
    </div>
  )
};

export default Menubar;