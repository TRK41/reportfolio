import React from 'react'
import TextField from '@mui/material/TextField';
import { Card, CardContent, Grid } from '@mui/material';
import "../pages/css/Contact.css"

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
  <Card className='card'>
    <CardContent>  
    <form>
      <Grid container spacing={4}>
      <Grid xs={12} sm={6} item>
        <TextField label = "Name" placeholder='Enter Name' variant='filled' fullWidth required/>
      </Grid>
      <Grid xs={12} item>
        <TextField label = "Email Address" placeholder='Email Address' variant='outlined' fullWidth required/>
      </Grid>
      <Grid xs={12} item>
        <TextField label = "Type your message here" multiline rows={8} placeholder='Message' variant='outlined' fullWidth required/>
      </Grid>
      </Grid>
    </form>
    </CardContent>
    </Card>
    </div>
  )
}

export default Contact
