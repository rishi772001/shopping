import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PurchaseCard(props) {
  return (
    <Card sx={{ width: "500%" }}>
      <CardContent>
        {props.products.map((product) => (
         <CardMedia component="img" height="50" image={product.img} />
        ))}
        
        <Typography gutterBottom variant="h5" component="div">
          Purchased On {new Date(props.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total : {props.total}
        </Typography>
      </CardContent>
    </Card>
  );
}
