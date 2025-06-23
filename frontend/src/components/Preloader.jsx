import React from 'react'

const Preloader = () => {
  const prestyle = {
    background:"#000",
    top:"0", 
    left:"0", 
    backgroundImage:"url('kkpreloader.gif')", 
    backgroundRepeat:"no-repeat", 
    backgroundPosition:"center center",
    backgroundSize:'25%', 
    height: '100vh', 
    width:'100%',
    position:'fixed',
    zIndex:100
  };

  return (
    <div>
      <div id="preloader" style={prestyle}></div>
    </div>
  )
}

export default Preloader;