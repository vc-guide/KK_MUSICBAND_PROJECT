import '../App.css';
import {Button, Card, CardContent, Grid, TextField, Typography} from '@mui/material'
import './Bookevent.css'
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useState,useEffect} from "react";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';



const Bookevent =()=>{
  const [selectedDate, setSelectedDate]=useState(null)
  const [startTime, setStartTime]=useState(null)
  const [endTime,setEndTime]=useState(null)
  const [eventSchedule, setEventSchedule] = useState([])
  const handleSaveDate = () =>{
    if ( eventSchedule.length < 3){
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

    return( 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100vw"}}>
    
    <Card style={{maxWidth:450}}>
      <Typography gutterBottom variant="h5" align="center" sx={{fontWeight:'bold',fontFamily:'Montserrat, sans-serif',margin:"1rem 0 0 0"}}>
      Add Booking details here
    </Typography>
      <CardContent>
        <form>
        <Grid container spacing={2}>
          <Grid size={{xs:12, sm:6}} >
            <TextField  label="Name" name='name' placeholder='Enter Name' variant="outlined" className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField type="number" name='phone' label="Phone" placeholder='Enter phone number' variant="outlined"  className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField type="email" name='email' label="Email" placeholder='Enter phone number' variant="outlined"  className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField name='address' label="Address" placeholder='Enter Address' variant="outlined" className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField name='event_name' label="Event Name" placeholder='Enter Event name' variant="outlined" className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField name='committee_name' label="Committee Name" placeholder='Enter committee name' variant="outlined" className='text-box' fullWidth required/>
          </Grid>
          <Grid size={{xs:12}}>
            <TextField name='venue' label="Venue" placeholder="Enter Venue" variant="outlined" className="text-box" fullWidth required/>
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
                </Grid>
                
          <Grid size={{xs:12}}>
            {eventSchedule.map((item, index)=>(<div key={index}>
              <h1>{dayjs(item.date).format('DD-MM_YYYY')}--{dayjs(item.start_time).format('hh:mm A')} to {dayjs(item.end_time).format('hh:mm A')}</h1>
              </div>
            ))}
           
          </Grid>
          <Grid size={{xs:12}}>
            <Button type="submit" className='submit-button' size="medium" variant="contained" color="warning" fullWidth>Submit</Button>
          </Grid>
        </Grid>
        </form>
      </CardContent>
    </Card>
    
  </div>
 )
}
export default Bookevent