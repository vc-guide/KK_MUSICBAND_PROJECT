import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Preloader from './Preloader.jsx';
import './Home.css';
import Menu from './Menu.jsx';
import Menubar from './Menubar.jsx';

const Home = () => {
  const [items, setItems] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const baseUrl = 'http://127.0.0.1:8000/';
 
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const OpenShowMenu = () => {
      setShowMenu(true); 
  };      //setShowMenu(prev=>!prev);

  const CloseShowMenu = () =>{
    setShowMenu(false);
  };

 useEffect(()=>{
  const hasVisited = sessionStorage.getItem('hasVisited');
 
    axios.get(baseUrl)
      .then(res => {
        setItems(res.data.background);
        setDescriptions(res.data.description);

        if (!hasVisited){
        setTimeout(()=>{setLoading(false);
        sessionStorage.setItem('hasVisited','true');},
        2000);
        } else {
          setLoading(false);
        }})
      .catch(err => {console.error(err), setLoading(true)});
    }, []);

  /*
  useEffect(()=> {
    if (showMenu) {
      document.body.classList.add('no-scroll');
    }
    else{
     document.body.classList.remove('no-scroll');
    }
    return ()=>{
      document.body.classList.remove('no-scroll');
    }
  },[showMenu]);
  */
 useEffect(()=>{
  if (showMenu) {
    const scrollY = window.scrollY;

    document.body.style.position ='fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    

    

    return () =>{
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };

  }
 }, [showMenu]);

  
  return (
    <div>
      {loading ? <Preloader/> :(
    <div className={`container ${showMenu ? 'dimmed':''}`} >
      
      {items.map(item => (
        <div className="background"
        key={item.id}
        style={{ backgroundImage: `url(${baseUrl}${item.homeimg})` }} >
          
          <img className="top-logo" src="/kklogo1.png" alt="logo"/>
          <Menu className="menu-icon" onClick={OpenShowMenu}/>
          <div className="center-container">
            <img className="center-logo" src="/kklogomain.png" alt="center logo" />
            <h2 className="center-text"> MUSIC BAND </h2>
          </div>
        </div>
      ))}
    </div>
  ) }
  {descriptions.map(desc=>(
    <div key={desc.id}>
    <p className="descriptions" dangerouslySetInnerHTML={{__html:desc.Description}}></p>
    </div>
  ))}
    {showMenu && <div className="overlay" onClick={CloseShowMenu}></div>}
    <Menubar className={`menubarstyle ${showMenu ? 'show':''}`} onClose={CloseShowMenu}/>

    </div>
  );
};

export default Home;