import React from 'react'
import "./NEowcard.css"
import Grid from '@mui/material/Grid';

function NEowcard(props) {
  console.log(props.nn)
  return (
    <Grid container rowSpacing  = {2} spacing={{ xs: 2, md: 1}} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={3}>
    <div>
    <p>{props.nn}</p>
    <p>h222</p>
   

    
    </div>
    </Grid>
    
    </Grid>
  )
}

export default NEowcard