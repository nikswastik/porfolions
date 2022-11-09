import React from 'react'
import Drawer from '@mui/material/Drawer';
import {Card,CardActionArea,CardMedia} from '@mui/material';
import "../Card//ActionAreaCard.css"

export default function DrawerPage({ name, img, description, open, stack, work }) {
  return (
    <div style={{ padding: "1em" }} >
      <Drawer
        anchor={"right"}
        open={open}
      // onClose={toggleDrawer(anchor, false)}
      >
        <Card sx={{ width: 400, height: 300 }} className="ActionAreaCard-cntr">
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="300"
              image={img}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <div style={{ margin: "1em" }}>
          <h3>{name}</h3>
          <div style={{ width: "400px" }}>
            {description}
          </div>

          <div>
            <h3>{"My Works"}</h3>
            {work?.map((point, index) => {
              return (
                <div key={index}>
                  <p>{index+1}. {" "} {point}</p>
                </div>
              )
            })}
          </div>




          <div>
            <h3>Technology used</h3>
            <div style={{ display: "flex" }}>

              {stack?.map((point, index) => {
                return (
                  <div key={index} style={{marginRight:"1em",backgroundColor:" #35ffa9",width:"40%",display:"flex",justifyContent:"center",alignItems:"center",padding:"0.4em", borderRadius:"0.5em"}}>
                    <span>{point}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}
