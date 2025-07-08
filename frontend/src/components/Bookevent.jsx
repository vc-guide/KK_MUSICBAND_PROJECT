import '../App.css';
import {Button, Card, CardContent, Grid, TextField, Typography} from '@mui/material'
import './Bookevent.css'
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useState,useEffect} from "react";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


const Bookevent =()=>{
  const [selectedDate, setSelectedDate]=useState(null)
  const [addedDate, setAddedDate]=useState([])
  const [startTime, setStartTime]=useState(null)
  const [endTime,setEndTime]=useState(null)
  const handleSaveDate = () =>{
    if (selectedDate){
    setAddedDate([...addedDate,selectedDate]);
    setSelectedDate(null);
    }
  }

 return( <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    <Card style={{maxWidth:450}}>
      <Typography gutterBottom variant="h3" align="center">
      React App
    </Typography>
      <CardContent>
        <form>
        <Grid container spacing={2}>
          <Grid size={{xs:12, sm:6}} >
            <TextField label="Name" placeholder='Enter Name' variant="outlined" className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField type="number" label="Phone" placeholder='Enter phone number' variant="outlined"  className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField type="email" label="Email" placeholder='Enter phone number' variant="outlined"  className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField label="Address" placeholder='Enter Address' variant="outlined" className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField label="Event Name" placeholder='Enter Event name' variant="outlined" className='text-box' fullWidth required/>
          </Grid>
          <Grid  size={{xs:12,sm:6}}  >
            <TextField label="Committee Name" placeholder='Enter committee name' variant="outlined" className='text-box' fullWidth required/>
          </Grid>
          <Grid size={{xs:12, sm:6}}>
            <TextField label="Venue" placeholder="Enter Venue" variant="outlined" fullWidth required/>
          </Grid>
          <Grid size={{xs:12}} >
             <Typography>Select Date (You can add maximum 3 dates)</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker format="DD-MM-YYYY" onChange={(e)=>{setSelectedDate(e);}} />
              </LocalizationProvider>
              <Button size="small" className='date-button'  variant="contained" color="primary" onClick={handleSaveDate}>Save Date</Button>
          </Grid>
          <Grid size={{xs:12}}>
            {addedDate.map((date, index)=>(
                <div key={index}><h4>{date.format('DD-MM-YYYY')}</h4>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker']}>
                    <TimePicker
                      label="Starting time"
                      onChange={(e)=>{setStartTime(e);}}  
                    />                    {/*console.log(e?.format('hh:mm:a'))*/}
                    <TimePicker
                      label="Ending Time"
                      onChange={(e)=>{setEndTime(e);}}
                    />
                  </DemoContainer>
                </LocalizationProvider>
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