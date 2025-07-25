import React from 'react';
import {Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link, Box} from '@mui/material';
import { IoIosLock } from "react-icons/io";
import { RiUserFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { transform } from 'framer-motion';


const Login = () => {
  const paperStyle = {padding: '20px', height: '630px', width: '300px',}
  const avatarStyle = { backgroundColor: '#fab800', marginTop: '10px'}
  const boxStyle = {border:'1px solid rgb(157 171 181 / 42%)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.2rem', borderRadius:'10px', backgroundColor:'rgb(226 229 231 / 20%)', margin: '1rem auto', '&:hover':{backgroundColor: 'rgb(226 229 231 / 60%)', transform: 'scale(1.02)'}}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
       <Grid align="center">
         <Avatar style = {avatarStyle}><IoIosLock /></Avatar>
        <Typography sx={{marginTop:'-10px'}}><h2>Sign in</h2></Typography>
       </Grid>
       <Box
       sx={{display:'flex', alignItems:'center', gap:2}}>
        <RiUserFill style={{fontSize: '28px'}}/><TextField label='username' placeholder='Username' variant="outlined" fullWidth required className="text-box"/>
       </Box>
       <br/>
       <Box sx={{display:'flex', alignItems:'center', gap:2}}>
       <RiLockPasswordFill style={{fontSize: '28px'}}/><TextField label='password' placeholder='Password' variant="outlined" fullWidth required className="text-box" />
       </Box>
       <br/>
       <FormControlLabel
          label="Remember me"
          control={
            <Checkbox
              name = 'checkedB'
              color = 'primary'
            />
          }
        />
       <Button type= "submit"  sx={{
          background: 'linear-gradient(to bottom,#454444e8, black)',
          borderRadius: '0.5rem',
          color: 'white',
          border: '1px solid #ccc',
          margin: '8px 0',
          '&:hover': {transform: 'scale(1.02)'}}} variant="contained" fullWidth>Sign in
       </Button>
       <Typography align="center"><Link href="#" sx={{ color: '#1976d2 !important' }}>Forgot password</Link></Typography>
       <Typography align='center' sx={{margin:'3px 0px -2px 0px'}}>or</Typography>
       <Box sx={boxStyle}>
        <img src="google3.webp" width="30"/>
        <Typography align='center' sx={{fontSize:"1rem", marginLeft:"0.1rem" }}> Sign in with Google</Typography>
       </Box>
       <Box sx={boxStyle}>
        <img src="facebook2.png" width="20"/>
        <Typography align='center' sx={{fontSize:"1rem", marginLeft:"0.5rem" }}> Sign in with Facebook</Typography>
       </Box>
       <Typography align='center'>
        Don't have an account?{' '}
        <Link href="#"  sx={{ color: '#1976d2 !important' }}>
          Sign Up
        </Link>
      </Typography>
      <br/>
      </Paper>
    </Grid>
  )
}

export default Login;