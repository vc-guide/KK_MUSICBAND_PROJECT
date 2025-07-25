import { Avatar, Grid, Paper, Typography, TextField, Checkbox, Button, Box } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RiUserFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";



const Sign_up = () => {
  const paperStyle = {padding: '20px', height: '630px', width: '300px', margin: '10 auto'}
  const avatarStyle = { backgroundColor: '#fab800'}
  const textStyle = {}
  const boxstyle = {display:'flex', alignItems:'center', gap:2};


  
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center' >
            <Avatar style={avatarStyle}></Avatar>
            <Typography sx={{marginTop:'-10px', marginBottom:'-5px' }}>
              <h2 >Sign up</h2>
            </Typography>
          </Grid>
            
            <form>
              <Box sx={boxstyle}>
                <RiUserFill style={{fontSize: '28px'}}/>
                <TextField sx={textStyle} label='Name' placeholder="Name" fullWidth required className="text-box"/>
              </Box>
              <br/>
              <Box sx={boxstyle}>
                <RiMailFill style={{fontSize: '28px'}}/>
                <TextField sx={textStyle} label='Email' placeholder="Email" fullWidth required className="text-box"/>
              </Box>
              <br/>
              <Box sx={boxstyle}>
                <RiPhoneFill style={{fontSize: '28px'}}/>
                <TextField sx={textStyle} label='Phone' placeholder="Phone" fullWidth required className="text-box"/>
              </Box>
              <br/>
              <Box sx={boxstyle}><FormControl component="fieldset">
                <FormLabel id="demo-row-radio-buttons-group-label" component="legend">Gender</FormLabel>
                <RadioGroup
                 aria-label = 'gender' name='gender1' style={{display:'initial'}}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                 
                </RadioGroup>
              </FormControl>
              </Box>
              <br/>
              <Box sx={boxstyle}>
                <RiLockPasswordFill style={{fontSize: '28px'}}/>
                <TextField sx={textStyle} label='Password' placeholder="Password" fullWidth required className="text-box"/>
              </Box>
              <br/>
              <Box sx={boxstyle}>
                <RiLockPasswordFill style={{fontSize: '28px'}}/>
                <TextField sx={textStyle} label='Confirm password' placeholder="Confirm Password" fullWidth required className="text-box"/>
              </Box>
              <br/>
              <FormControlLabel
                label="I accept the terms and conditions"
                control={
                  <Checkbox 
                  />
                }
              />
              <Button type= "submit"  sx={{
                background: 'linear-gradient(to bottom,#454444e8, black)',
                borderRadius: '0.5rem',
                color: 'white',
                border: '1px solid #ccc',
                '&:hover': {transform: 'scale(1.02)'}}} variant="contained" fullWidth>Sign in
              </Button>
            </form>
          
        </Paper>
      </Grid>
    </div>
  )
}

export default Sign_up;
