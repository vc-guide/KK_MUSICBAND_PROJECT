import * as React from 'react';
import {Grid, Avatar, TextField, FormControlLabel, Checkbox, Button, Link, Paper, Tabs, Tab, Typography, Box} from '@mui/material';
import { IoIosLock } from "react-icons/io";
import { RiUserFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import { useTheme } from '@mui/material/styles';
import {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const UserLoginContainer = () => {
  const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const boxstyle = {display:'flex', alignItems:'center', gap:2};
    const avatarStyle = { backgroundColor: '#fab800', width:'1.7rem', height: '1.7rem'}
    const boxStyle = {border:'1px solid rgb(157 171 181 / 42%)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.2rem', borderRadius:'10px', backgroundColor:'rgb(226 229 231 / 20%)', margin: '1rem auto', '&:hover':{backgroundColor: 'rgb(226 229 231 / 60%)', transform: 'scale(1.02)'}}
    const paperStyle = { height: '600px', width: '340px', margin: '10 auto'}
    
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const userUrl = 'http://127.0.0.1:8000/register/'

    const [ userData, setUserData ] = useState({
      username: '',
      email: '', 
      password: ''
    })  
    const [error, setError] = useState({})

    const [loginData, setLoginData] = useState({
      username: '',
      password: '',
    })

    const addValue = (e) =>{
      const {name, value}= e.target
      setUserData((prev)=>({...prev, [name]: value}))   
    };
    
    const addloginvalue = (e) =>{
      const {name, value} = e.target
      setLoginData((prev)=>({...prev, [name]: value}))
    }

    const handleUserSubmit = async(e) =>{
      e.preventDefault();
      if (password1 && password2){
        if ( password1 === password2 ){
          if (userData.username && userData.email ){
              userData.password = password1
              console.log(userData);
              try {
                const response = await axios.post( userUrl, userData);
                console.log("response.data==>", response.data)
                alert('Registered successfully');
                setUserData({
                  username: '',
                  email: '',
                  phone: '',
                  password: ''
                })
                setError({})
              }
              catch(error) {
                console.error("Registration error:", error.response.data)
                setError(error.response.data)
            }
          }
          else{ alert('Add all details')}
        }
        else {alert(' Password should be same ')}
      }
      else( alert('Fill both password columns'))
    }

  const handleLoginSubmit = async (e) => {
  e.preventDefault();
  if (!loginData.username || !loginData.password) {
    alert("Please fill in both fields");
    return;
  }

  try {
    const response = await axios.post(loginUrl, loginData);
    const { access, refresh } = response.data;
    
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    alert("Login successful!");
    
  } catch (err) {
    if (err.response) {
      console.error("Login failed:", err.response.data);
      alert("Login failed: " + JSON.stringify(err.response.data));
    } else {
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
  }
};


  return (
    <div style={{display:'flex', justifyContent:'center', marginBottom: '100px'}}>
      <Paper elevation={20} sx={paperStyle}>
      <div >
         <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{style: {backgroundColor: '#fab800'}}}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Sign in" {...a11yProps(0)} />
          <Tab label="Sign up" {...a11yProps(1)} />
          
        </Tabs>
      </div>
      <div>
        <TabPanel value={value} index={0} dir={theme.direction} >
          <Grid align="center" sx={{marginTop: '-0.5rem'}}>
            <Avatar style = {avatarStyle}><IoIosLock /></Avatar>
            <h2 style={{marginTop: '2px'}}>Sign in</h2>
          </Grid>
       <Box
         sx={{display:'flex', alignItems:'center', gap:2}}>
        <RiUserFill style={{fontSize: '28px'}}/><TextField name="username" value={loginData.username} label='username' placeholder='Username' variant="outlined" size='small' onChange={addloginvalue} fullWidth required className="text-box"/>
       </Box>
       <br/>
       <Box sx={{display:'flex', alignItems:'center', gap:2}}>
          <RiLockPasswordFill style={{fontSize: '28px'}}/><TextField name="password" value={loginData.password} label='password' placeholder='Password' variant="outlined" size='small' fullWidth required onChange={addloginvalue} className="text-box" />
       </Box>
       <br/>
       <FormControlLabel
          label="Remember me"
        
          control={
            <Checkbox
              name = 'checkedB'
              color = 'primary'
              sx={{'&.MuiSvgIcon-root':{fontSize : 3}}}
            />
          }
        />
       <Button onClick={handleLoginSubmit}  sx={{
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

      </TabPanel>
       <TabPanel value={value} index={1} dir={theme.direction}>
       <Grid align='center' sx={{marginTop: '-0.5rem'}}>
        <Avatar style={avatarStyle}></Avatar>
         <h2 style={{marginTop: '2px'}}>Sign up</h2>
      </Grid>
        
        <form onSubmit={handleUserSubmit}>
          <Box sx={boxstyle}>
            <RiUserFill style={{fontSize: '28px'}}/>
            <TextField name='username' value={userData.username} label='Name' placeholder="Name" size='small' onChange={addValue} fullWidth required className="text-box"/>
            <small>{error.username && <div color="red">{error.username}</div>}</small>
          </Box>
          <br/>
          <Box sx={boxstyle}>
            <RiMailFill style={{fontSize: '28px'}}/>
            <TextField name='email' value={userData.email} label='Email' placeholder="Email" size='small' onChange={addValue} fullWidth required className="text-box"/>
            <small>{error.username && <div color="red">{error.email}</div>}</small>
          </Box>
          <br/>
          <Box sx={boxstyle}>
            <RiLockPasswordFill style={{fontSize: '28px'}}/>
            <TextField name="password1" value={password1} label='Password' placeholder="Password" size='small' onChange={(e)=>setPassword1(e.target.value)} fullWidth required className="text-box"/>
          </Box>
          <br/>
          <Box sx={boxstyle}>
            <RiLockPasswordFill style={{fontSize: '28px'}}/>
            <TextField name='password2' value={password2} label='Confirm password' placeholder="Confirm Password" size='small' onChange={(e)=>setPassword2(e.target.value)}  error={password2 !== "" && password1 !== password2}
            helperText={password2 !== "" && password1 !== password2 ? "Passwords do not match" : ""} fullWidth required className="text-box"/>
            <small>{error.username && <div color="red">{error.password}</div>}</small>
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
            '&:hover': {transform: 'scale(1.02)'}}} variant="contained" fullWidth>Sign up
          </Button>
        </form>
  </TabPanel>
  </div>
  </Paper>
  </div>
  )
}

export default UserLoginContainer;