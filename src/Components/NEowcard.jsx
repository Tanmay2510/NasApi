import React from 'react'
import "./NEowcard.css"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import {  CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function NEowcard(props) {
  return (
    
    <div  className="all">
    <Card sx={{ maxWidth: 345 }}  >
    <CardActionArea>
    <CardContent >
    <Typography gutterBottom variant="h5" component="div">
    <p>{props.name}</p>
      
    </Typography>
    <Typography variant="body2" color="text.secondary">
    
    <p>{props.ab}</p><br></br>
    <p>{props.mi}</p><br></br>
    <p>{props.is}</p><br></br>
    <p>{props.cl}</p><br></br>
    <p>{props.cr}</p><br></br>
    <p>{props.ms}</p><br></br>
    <p>{props.or}</p><br></br>
    

    </Typography>
  </CardContent>
</CardActionArea>      
</Card>
    
    </div>
   
  )
}

export default NEowcard