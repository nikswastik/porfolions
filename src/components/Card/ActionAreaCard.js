import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./ActionAreaCard.css"
import DrawerPage from '../Drawer/DrawerPage';

export default function ActionAreaCard({name,img,description,stack,works}) {
  const [isOpen,setOpen]=useState(false)
  const drawerHandler=()=>{
    setOpen(!isOpen)
  }
  return (
    <Card sx={{ maxWidth: 345,height:300 }} className="ActionAreaCard-cntr" onClick={drawerHandler}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
      
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <DrawerPage name={name} description={description} open={isOpen} img={img} stack={stack} work={works}/>
    </Card>
  );
}
