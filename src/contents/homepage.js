import React from "react";
import "./homepage.css";
import { Card, CardTitle, CardText } from "reactstrap";

function homepage() {
  return (
    <section>
      <Card className="text-dark">
        <CardTitle><h1>Welcome!</h1></CardTitle>
        <CardText><h5>Hello, my name is Mel</h5></CardText>
        <CardText>Click one of the four options on the upper right :D</CardText>
      </Card>
    </section>
  );
}

export default homepage;
