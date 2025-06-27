import { CgMenuRightAlt } from "react-icons/cg";
import { FaCircle } from "react-icons/fa";
import React from 'react'

const Menu = ({className,onClick}) => {
  const bar ={fontSize:"1.2rem",position:"relative",zIndex:10,color:"white",color:"#DAA520"};
  const circle = {fontSize:"2rem", position :"absolute",color:"#000",zIndex:1}
  const containerstyle = {display:"flex", justifyContent: "center", flexDirection:"column",alignItems:"center"}
  return (
    <div className={className} onClick={onClick} style={containerstyle}>
      <div style={{display:"flex",alignItems:"center",justifyContent: "center"}}>
        <FaCircle style={circle}/>
        <div style={{display:"flex",alignItems:"center",justifyContent: "center"}}><CgMenuRightAlt style={bar}/></div>
        </div>
    </div>
  )
}

export default Menu;