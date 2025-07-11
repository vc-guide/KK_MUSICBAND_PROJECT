import '../App.css';
import {Button, Card, CardContent, Grid, TextField, Typography} from '@mui/material'
import './Bookevent.css'
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useState,useEffect} from "react";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import axios from 'axios';



const Bookevent =()=>{
  const [selectedDate, setSelectedDate]=useState(null)
  const [startTime, setStartTime]=useState(null)
  const [endTime,setEndTime]=useState(null)
  const [eventSchedule, setEventSchedule] = useState([])
  const handleSaveDate = () =>{
    if ( selectedDate && startTime && endTime && eventSchedule.length < 3){
    setEventSchedule([...eventSchedule,{date :selectedDate, start_time : startTime, end_time : endTime }]);
    setSelectedDate(null);
    setStartTime(null);
    setEndTime(null);
    }
  }

  const [BookingData ,setBookingData] = useState({
    name : '',
    phone : '',
    email : '',
    address : '',
    event_name : '',
    committee_name : '', 
    venue : '',
  })
  const addValue = (e) =>{
    const {name, value} = e.target;
    setBookingData(prev =>({...prev, [name]:value}));
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    const formattedSchedule = eventSchedule.map(item=>({
      date : dayjs(item.date).format('YYYY-MM-DD'),
      start_time : dayjs(item.start_time).format('HH:mm:ss'),
      end_time: dayjs(item.end_time).format('HH:mm:ss'),
    }));
    const finalData ={
      ...BookingData,
      schedule : formattedSchedule
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/bookings/',finalData);
      console.log('Booking successful:',response.data);
    } catch (error) {
      console.error('Error creating booking:', error.response?.data || error.message);
    }
  };

    return( 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100vw",backgroundImage:'linear-gradient(#fab800,white)'}}>
    
    <Card style={{maxWidth:450, backgroundImage: 'linear-gradient(#f9eed0,white)', borderRadius:'0.6rem', marginTop:'1rem'}}>
      <Typography gutterBottom variant="h5" align="center" sx={{fontWeight:'bold',fontFamily:'Montserrat, sans-serif',margin:"1rem 0 0 0"}}>
      Add Booking details here
    </Typography>
      <CardContent>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{xs:12, sm:6}} >
            <TextField  label="Name" name='name' placeholder='Enter Name' variant="outlined" className='text-box' value={BookingData.name} onChange ={addValue} fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField type="number" name='phone' label="Phone" placeholder='Enter phone number' variant="outlined"  className='text-box' value={BookingData.phone} onChange ={addValue} fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField type="email" name='email' label="Email" placeholder='Enter phone number' variant="outlined"  className='text-box' value={BookingData.email} onChange ={addValue} fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField name='address' label="Address" placeholder='Enter Address' variant="outlined" className='text-box' value={BookingData.address} onChange ={addValue} fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField name='event_name' label="Event Name" placeholder='Enter Event name' variant="outlined" className='text-box' value={BookingData.event_name} onChange ={addValue} fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField name='committee_name' label="Committee Name" placeholder='Enter committee name' variant="outlined" className='text-box' value={BookingData.committee_name} onChange ={addValue} fullWidth required/>
          </Grid>
          <Grid size={{xs:12}}>
            <TextField name='venue' label="Venue" placeholder="Enter Venue" variant="outlined" className="text-box" value={BookingData.venue} onChange ={addValue} fullWidth required/>
          </Grid>
          <Grid size={{xs:12}} >
             <Typography>Select Date </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div style={{display:'flex',gap : '0.5rem', alignItems: 'center'}}>
                <DatePicker value={selectedDate} format="DD-MM-YYYY" onChange={(e)=>{setSelectedDate(e);}} slotProps={{textField:{size:'small', sx:{width: '9rem','& .MuiSvgIcon-root':{fontSize:'1.1rem'} }}}} 
                  disabled={eventSchedule.length >= 3}/>
                  
                    <TimePicker
                      value={startTime}
                       label="Start time"
                      onChange={(e)=>{setStartTime(e);}}  
                      slotProps={{textField:{
                        size: 'small', sx:{width:'8rem',
                          '& .MuiSvgIcon-root':{fontSize:'1.1rem'}
                        }}
                      }}
                      disabled={eventSchedule.length >= 3}
                    />                    {/*console.log(e?.format('hh:mm:a'))*/}
                    <TimePicker
                      value={endTime}
                       label="End Time"
                      onChange={(e)=>{setEndTime(e);}}
                       slotProps={{textField:{
                        size: 'small', sx:{width:'8rem',
                          '& .MuiSvgIcon-root':{fontSize:'1.1rem'}
                        }}
                      }}
                      disabled={eventSchedule.length >= 3}
                    />
                  
                  </div>
                </LocalizationProvider>
                <Button size="small" className='date-button' fullWidth variant="contained" color="primary" onClick={handleSaveDate}>Save Date</Button>
              
            {eventSchedule.map((item, index)=>(<div key={index} className="date-display">
              <h5>{dayjs(item.date).format('DD-MM-YYYY')}  &nbsp;&nbsp;{dayjs(item.start_time).format('hh:mm A')} to {dayjs(item.end_time).format('hh:mm A')}</h5>
              </div>
            ))}
           
          </Grid>
          <Grid size={{xs:12}}>
            <Button type="submit" className='submit-button' size="medium" variant="contained" sx={{ backgroundColor:'#fab800',color:'#fffef0' }} fullWidth>Submit</Button>
          </Grid>
        </Grid>
        </form>
      </CardContent>
    </Card>
    
  </div>
 )
}
export default Bookevent