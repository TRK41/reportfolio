import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { CardContent, Grid } from '@mui/material';


function Contact() {
  return (
    <div>
    <CardContent>  
    <form>
      <Grid>
        <TextField label = "Name" placeholder='Enter Name' variant='outlined' fullWidth required/>
      </Grid>
      <Grid>
        <TextField label = "Email Address" placeholder='Email Address' variant='outlined' fullWidth required/>
      </Grid>
    </form>
    </CardContent>
    </div>
  )
}

export default Contact
