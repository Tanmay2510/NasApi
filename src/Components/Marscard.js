import React from 'react'
import Card from '@mui/material/Card';
import {motion} from "framer-motion"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';

import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Marscard.css";
function Marscard(props) {
  const theme = createMuiTheme({
    typography: {
      fontSize:14,
      fontFamily: [
        'Cormorant',
        'serif',
      ].join(','),
  },});
  return (
    <motion.div  whileHover={{scale:1.2,transition: { duration: 0.3}}}>
    <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: 345 }}  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={props.imgg}
        alt={props.alt}
      />
      <CardContent className="who">
        <Typography gutterBottom variant="h5" component="div">
          {props.titl}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.cont}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="secondary">
        {props.but}
      </Button>
    </CardActions>
  </Card>
  </ThemeProvider>
    
    </motion.div>
  )
}

export default Marscard