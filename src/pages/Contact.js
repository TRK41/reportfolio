import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, Grid } from '@mui/material';
import "../pages/css/Contact.css"
import FormHelperText from '@mui/material/FormHelperText';

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
        <FormHelperText className='helper' id="my-helper-text">*Message is required</FormHelperText>
      </Grid>
      <Grid xs={12} item>
        <Button className='button' type='submit' variant='contained' > submit</Button>
      </Grid>
      </Grid>
    </form>
    </CardContent>
    </Card>
    </div>
  )
}

export default Contact
