import "./Carouselle.css";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import equipe from '../../assets/equipe.png'
function Carouselle() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="container carouselle">
    <Carousel responsive={responsive}>
        <div className="card mx-auto p-2" style={{ width:"50%" }}>
          <img className="image--product" src={equipe} alt="equipe" />
          <p>Le lorem ipsum est en ,imprimerie une suite de mots sans significationc utilisée à titre provisoire pour calibrer une mise en page le texte définitif venant remplacer le faux</p>
        </div>
        <div className="card mx-auto p-2" style={{ width:"50%" }}>
          <img className="image--product" src={equipe} alt="equipe" />
          <p>Le lorem ipsum est en ,imprimerie une suite de mots sans significationc utilisée à titre provisoire pour calibrer une mise en page le texte définitif venant remplacer le faux</p>
        </div>
      <div className="card mx-auto p-2" style={{ width:"50%" }}>
        <img className="image--product" src={equipe} alt="equipe" />
        <p>Le lorem ipsum est en ,imprimerie une suite de mots sans significationc utilisée à titre provisoire pour calibrer une mise en page le texte définitif venant remplacer le faux</p>
    </div>
    <div className="card mx-auto p-2" style={{ width:"50%" }}>
          <img className="image--product" src={equipe} alt="equipe" />
          <p>Le lorem ipsum  titre provisoire  définitif venant remplacer le faux</p>
        </div>
  </Carousel>
    </div>
  );
};

export default Carouselle;
