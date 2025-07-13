import react from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './Medley1.css'
import {Card, CardContent, CardMedia, Grid, Typography} from '@mui/material'

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
    <div className="medley-container">
      {Medleydata.map(item=>(
        <div>
          <div className="image-container">
            <img className="image"src={`${baseUrl}${item.slider_img1}`}/>
            <div className="slider-title-container">
              <h1 className="slider-title1">{item.slider_title1}</h1>
              <h2 className="slider-title2">{item.slider_title2}</h2>
            </div>
          </div> 
          <div className="video_description">
            <p className="description" dangerouslySetInnerHTML={{__html:item.vedio_description1}}></p>
            <p className="description" dangerouslySetInnerHTML={{__html:item.vedio_description2}}></p>
            <p className="description" dangerouslySetInnerHTML={{__html:item.vedio_description3}}></p>
            <p className="description" dangerouslySetInnerHTML={{__html:item.vedio_description4}}></p>
            <p className="description" dangerouslySetInnerHTML={{__html:item.vedio_description5}}></p>
            <p className="semi-description">{item.semi_description}</p>
          </div>
          <div className="main-video-container">
            <video className="main-video" controls>
              <source src={`${baseUrl}${item.main_video}`} type='video/mp4'/>
              Your browser does not support this video
            </video>
          </div>
          <div>
            <h1 class="video-heading">The timeless melodies of Vidyasagar</h1>
          </div>
          <div style={{marginTop:"2vw",padding:"2vw"}}>
            <Grid container spacing={2} >
              {item.melody_videos.map((item, index)=>(
                <Grid key={index} size={{xs:12,sm:6, md:4}}>
                  <Card>   
                 <CardMedia>
                  <video className="videos" controls>
                    <source src={`${baseUrl}${item.cinema_malody_video}`}/>
                  </video> 
                  </CardMedia>
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pallikettu Sabarimalaikku 
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    One of the beutibul song by vidya sagar, got oscar on 2011
                  </Typography>
                  </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
          <div>
            <h2>Concert Gallery</h2>
          </div>
          <div className="image-gallery-container">
              <div className="image-gallery">
                {item.melody_images.map((item, index)=>(
                  <div className="pics" key={index}>
                    <img src={`${baseUrl}${item.cinema_malody_image}`} alt="loading..."/>
                  </div>
                ))}
              </div>
            
          </div>
        </div>
           
      ))}
    </div>
  )
};

export default Medley1;