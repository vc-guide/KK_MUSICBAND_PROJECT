import react from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Medley1 =()=>{
  const [Medleydata, setMedleydata] = useState([])
  const baseUrl ='http://127.0.0.1:8000/'
  const Medleyurl = "http://127.0.0.1:8000/cinemamelody/"

  useEffect(()=>{
    axios.get(Medleyurl).then(res=>{
      setMedleydata(res.data.melodylist);
     
    }).catch(err=>{
      console.log(err)
    })
  },[])
  
  return(
    <div>
      <h1>{Medleydata.length > 0 ? Medleydata[0].slug : 'Loading......'}</h1>
    </div>
  )
};

export default Medley1;