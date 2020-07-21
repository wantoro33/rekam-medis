import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function CounterCards({ label, hitung }) {
  return (
    <div className="counter-card">
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom>{label}</Typography>
          <Typography variant="h2" component="h2">
            {hitung}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Detail</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CounterCards;