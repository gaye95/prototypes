import "./CarteFewnu.css";
import React from "react";
import Card from 'react-bootstrap/Card';

function Fewnu({icone, titre, texte}) {
  return (
          <Card className="my-3" style={{ width: '18rem', height:"18rem", margin:"0 auto", border:"none", backgroundColor:'#f2f2f2' }}>
          <div className="my-auto">
          {icone}
            <h3>{titre}</h3>
          <p style={{ color:"#676767" }}><strong>{texte}</strong></p>
          <button style={{ border:"solid #62d9df 2px", color:"#62d9df", borderRadius:"25px", backgroundColor:"white", width:"100px", margin:"0 auto" }}>Lire plus</button>
          </div>
          </Card>
  );
};

export default Fewnu;
