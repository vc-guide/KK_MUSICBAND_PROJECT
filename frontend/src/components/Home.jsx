import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Preloader from './Preloader.jsx';

const Home = () => {
  const [items, setItems] = useState([]);
  const baseUrl = 'http://127.0.0.1:8000/';
 
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    axios.get(baseUrl)
      .then(res => {
        setItems(res.data)
         const timer = setTimeout(()=>setLoading(false),2000);
         return () => clearTimeout(timer)
        })
      .catch(err => {console.error(err), setLoading(true)});
    }, []);

  
  return (
    <div>
      {loading ? <Preloader/> :
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      {items.map(item => (
        <div
          key={item.id}
          style={{
            backgroundImage: `url(${baseUrl}${item.homeimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            position: "relative",
          }}
        >
          
          <img 
            src="/kklogo1.png" 
            alt="logo" 
            style={{
              width: "5vw", 
              height: "auto", 
              position: "fixed", 
              top: "3%", 
              left: "1%", 
              zIndex: 10 
            }} 
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: 2
            }}
          >
           
            <img 
              src="/kklogomain.png" 
              alt="center logo" 
              style={{
                width: "20vw",
                height: "auto",
                marginBottom: "2vh"
              }} 
            />

            <h2
              style={{
                color: "white",
                fontSize: "4vw",
                textShadow: "2px 2px 5px black",
                margin: 0
              }}
            >
              MUSIC BAND
            </h2>
          </div>
        </div>
      ))}
    </div>
  }
    </div>
  );
};

export default Home;
