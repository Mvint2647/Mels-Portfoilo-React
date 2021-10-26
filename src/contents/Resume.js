import React from "react";
import "./Resume";
import { Card, CardTitle, CardText } from "reactstrap";

function Resume() {
  return (
    <section>
      <Card className="text-dark">
        <CardTitle><h1>Resume/Credentials</h1></CardTitle>
        <CardText><h5>Associates in Graphic Design </h5></CardText>
        <CardText><h5>Certified Full Stack Web Developer From UNC Charlotte </h5></CardText>
        <CardText></CardText>
      </Card>
    </section>
  );
}

export default Resume;
