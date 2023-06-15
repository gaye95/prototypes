import "./CarteApp.css";
import React from "react";
import Card from 'react-bootstrap/Card';
import equipe from "../../assets/equipe.png";

function CarteApp({nom, profession, texte}) {
  return (
    <Card className="shadow mb-5 bg-body rounded" style={{ width: '18rem', border:'none' }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-center">
          <img src={equipe} alt="images" style={{ width:"75px", height:"75px", borderRadius:'50%' }}/>
        <div className="d-flex align-items-center mx-2">{nom}</div>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{profession}</Card.Subtitle>
        <Card.Text>
          {texte}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CarteApp;
