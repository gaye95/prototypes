import "./Appli.css";
import React from "react";
import Card from 'react-bootstrap/Card';
function Appli({photo, texte}) {
  return (
          <Card className="my-3" style={{ width: '18rem', margin:"0 auto", border:"none" }}>
          {photo}
          <p style={{ color:"#676767" }}><strong>{texte}</strong></p>
        </Card>
  );
};

export default Appli;