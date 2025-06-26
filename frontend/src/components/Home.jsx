import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Preloader from './Preloader.jsx';
import './Home.css';
import Menu from './Menu.jsx';

const Home = () => {
  const [items, setItems] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const baseUrl = 'http://127.0.0.1:8000/';
 
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    axios.get(baseUrl)
      .then(res => {
        setItems(res.data.background);
        setDescriptions(res.data.description)
         const timer = setTimeout(()=>setLoading(false),2000);
         return () => clearTimeout(timer)
        })
      .catch(err => {console.error(err), setLoading(true)});
    }, []);

  
  return (
    <div>
      {loading ? <Preloader/> :
    <div className="container" >
      
      {items.map(item => (
        <div className="background"
        key={item.id}
        style={{ backgroundImage: `url(${baseUrl}${item.homeimg})` }} >
          
          <img className="top-logo" src="/kklogo1.png" alt="logo"/>
          <Menu className="menu-icon"/>
          <div className="center-container">
            <img className="center-logo" src="/kklogomain.png" alt="center logo" />
            <h2 className="center-text"> MUSIC BAND </h2>
          </div>
        </div>
      ))}
    </div>
  }
  {descriptions.map(desc=>(
    <div key={desc.id}>
    <p className="descriptions" dangerouslySetInnerHTML={{__html:desc.Description}}></p>
    </div>
  ))}
 
    </div>
  );
};

export default Home;