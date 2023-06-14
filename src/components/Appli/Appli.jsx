import "./Appli.css";
import React from "react";
import Card from 'react-bootstrap/Card';
function Appli({photo, texte}) {
  return (
    <div className="container-fluid col-md-3 d-flex justify-content-center">
    <div className="row">
        <div className="col col-md-12 col-lg-12 col-sm-12">
          <Card style={{ width: '18rem', margin:"0 auto", border:"none" }}>
          {photo}
          <p style={{ color:"#676767" }}><strong>{texte}</strong></p>
        </Card>
        </div>
    </div>
    </div>
    
  );
};

export default Appli;