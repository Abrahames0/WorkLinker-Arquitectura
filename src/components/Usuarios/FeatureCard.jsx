import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FeatureCard = ({ icon, title, desc }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        {icon}
      </Typography>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Typography color="#5d4fc6">
        {desc}
      </Typography>
    </CardContent>
  </Card>
);

export default FeatureCard;
