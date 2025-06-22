import React from 'react'
import { useState, useEffect } from 'react'
import { jsx } from 'react/jsx-runtime'
import axios from 'axios'

const Home = () => {

  const [items, setItems] = useState([]);

  const baseUrl = 'http://127.0.0.1:8000/';

  useEffect(()=>{
    axios.get(baseUrl).then(
      res=> setItems(res.data)
    ).catch(
      err => console.error(err)
    );
  },[]);

  return (
    <div>
      {items.map(item => (
        <div key = {item.id}>
          <img src={`${baseUrl}${item.homeimg}`} 
            alt="kk_img" style={{height:"300px", width:"auto",margin:'-10px'}}/>
        </div>
      ))}
    </div>
  )
};

export default Home;