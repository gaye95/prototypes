import "./CarteEquip.css";
import React from "react";
import Card from 'react-bootstrap/Card';
import equipe from '../../assets/equipe.png';
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
function CarteEquip({ nom, profession }) {
  const icones = [<CiFacebook size="35px"/>, <CiInstagram size="35px" />, <CiLinkedin size="35px" />, <CiTwitter size="35px" />];
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className="my-3 mx-auto" variant="top" src={equipe} alt="equipe" style={{ width:"16rem" }} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          <strong>{profession}</strong>
        </Card.Text>
        <div className="d-flex justify-content-evenly justify-content-center my-2 mx-2">
        {
          icones.map((icone)=>icone)
        }
        </div>
      </Card.Body>
    </Card>
  );
};

export default CarteEquip;