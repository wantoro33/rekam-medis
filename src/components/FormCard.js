import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function FormCard(props) {
  return (
    <div>
      <Card variant="outlined">
        <CardContent>{props.formContent}</CardContent>
      </Card>
    </div>
  );
}

export default FormCard;
