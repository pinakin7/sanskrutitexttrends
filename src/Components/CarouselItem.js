import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export default function CarouselItem(props) {
  return (
    <Paper elevation={2}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={props.item.img}
            alt={props.item.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign="center">
              {props.item.heading}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {props.item.content}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
}
