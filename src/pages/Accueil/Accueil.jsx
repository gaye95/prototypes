import "./Accueil.css";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import Contact from "../../components/Contact/Contact";
import CarteFewnu from "../../components/CarteFewnu/CarteFewnu";
import Navebar from "../../components/Navebar/Navebar";
import Appli from "../../components/Appli/Appli";
import tel from "../../assets/tel.png";
import Ellipse1 from "../../assets/Ellipse1.png";
import Ellipse2 from "../../assets/Ellipse2.png";
import images from "../../assets/images.png";
import logofewnu from "../../assets/logofewnu.jpg";
import CarteEquip from "../../components/CarteEquip/CarteEquip";
function Accueil() {
  const applications = [
    { photo: <img src={logofewnu} alt="logo" style={{ width: "120px", margin: "0 auto" }} />, texte: "faciliter de bien gerer l'activité economique d'une entreprise" },
    { photo: <img src={logofewnu} alt="logo" style={{ width: "120px", margin: "0 auto" }} />, texte: "faciliter de bien gerer l'activité economique d'une entreprise" },
    { photo: <img src={logofewnu} alt="logo" style={{ width: "120px", margin: "0 auto" }} />, texte: "faciliter de bien gerer l'activité economique d'une entreprise" }
  ];
  const fewnu = [

    { icone: <FaHandHoldingHeart style={{ margin: "0 auto" }} size="50" />, titre: "Simplicité d'usage", texte: "en imprimerie, une suite de mots sans signification" },
    { icone: <FaHandHoldingHeart style={{ margin: "0 auto" }} size="50" />, titre: "Accécibilité en ligne", texte: "en imprimerie, une suite de mots sans signification" },
    { icone: <FaHandHoldingHeart style={{ margin: "0 auto" }} size="50" />, titre: "Suivie commerciale", texte: "en imprimerie, une suite de mots sans signification" }
  ];

  const equipe = [{ nom: "Daouda Senghor", profession: "web developpement" },
                  { nom: "Ndiaga Sall", profession: "ui/ux design" },
                  {nom:"Mouhamed Badiane", profession:"Graphic, ui/ux design"},
                  {nom:"Daouda Senghor", profession:"web developpement"}
  
  ];
  return (
    <div className="accueil">
      <section><div><Contact /></div></section>
      <section><div><Navebar /></div></section>
      <div
            className = "image"
            style = {{
               height: "668px",
               width: "100%",
               backgroundImage: `url(${tel})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}
         >
        <div className="container">
          <div className="row">
          <div className="col-8">
          <div style={{ marginTop:"100px" }}>
          <h1 className=" text-white text-start" style={{ fontSize:"50px" }}><strong>Bienvenue sur Fewnu App</strong></h1>
          <h1 className="display-6 text-white text-start"><strong>Votre suite de logiciel</strong></h1>
                <p className=" text-white text-start" style={{ fontSize:"20px" }}>
                  <strong>
                  Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                  utilisée à titre provisoire pour calibrer une mise en page, le
                  texte définitif venant remplacer le faux-
                  </strong>
                </p>
                <div className="d-flex">
                <div style={{ marginLeft: "-50px" }}>
                <img id="dessus" src={Ellipse2} alt="image1"/>
                <img id="dessous" src={Ellipse1} alt="image2" />
                </div>
                <p className="text-white text-start m-4" style={{ fontSize: "20px" }}>
                    <strong>
                    Le lorem ipsum est, en imprimerie
                    </strong>
                </p>
                </div>
          </div>
          </div>
          </div>
          <div className="d-flex my-5" style={{ backgroundColor :"white" , borderRadius:"50px", width:"40%"}}>
          <button className="p-4" style={{ backgroundColor:"#005368", color:"white", border:"none", borderRadius:"50px"}}><FaArrowRight/></button>
          <div className="p-2 d-flex align-items-center" style={{ color:"#39d4dc", border:"none", borderRadius:"20px"}}><h3>Regarder la présentation</h3></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-6 text-start">
            <h4>
              <strong>Voluptatem une mise en page, le
              texte définitif venant remplacer le faux venant remplacer</strong>
            </h4>
            <p>
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                  utilisée à titre provisoire est, en imprimerie
            </p>
            <div className="d-flex">
            <BsCheckCircle className="my-1" style={{ color:"#0bcad4" }}/><p className="mx-1">Le lorem ipsum provisoire est, en imprimerie est, en imprimerie</p>
            </div>
            <div className="d-flex">
            <BsCheckCircle className="my-1" style={{ color:"#0bcad4" }}/><p className="mx-1">Le lorem ipsum provisoire est, en imprimerie est, en imprimerie</p>
            </div>
            <div className="d-flex">
            <BsCheckCircle className="my-1" style={{ color:"#0bcad4" }}/><p className="mx-1">Le provisoire est, en imprimerie lorem ipsum est, en imprimerie</p>
            </div>
            <div>
            <p>
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification
            utilisée à titre provisoire est, en imprimerie Le lorem ipsum est, en imprimerie, une suite de mots sans signification
            utilisée à titre m est, en imprimerieu tilisée à titre provisoire est, en imprimerie
            </p>
            </div>
            <div className="text-center p-1 text-white" style={{ backgroundColor:"#0bcad4", width:"45%", borderRadius:"50px" }}>
            <h5>Commencer maintenant</h5>
            </div>
          </div>
          <div className="col-6" style={{ backgroundColor:"#f5f5f5" }}>
            <img src={images} alt="images"/>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div><h4 className="text-start"><strong>Nos applications</strong></h4></div>
          <div className="d-flex justify-content-between p-5">
            {
              applications.map((el)=><Appli photo={el.photo} titre={el.titre} texte={el.texte}/>)
            }
          </div>
        </div>
      </div>
      <section>a</section>
      <div className="container py-5">
        <div className="row">
          <div><h4 className="text-start"><strong>Pourquoi Fewnu </strong></h4></div>
          <div className="d-flex justify-content-between p-5">
            {
              fewnu.map((el)=><CarteFewnu icone={el.icone} titre={el.titre} texte={el.texte}/>)
            }
          </div>
        </div>
      </div>
      <section>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center justify-content-evenly">
            {
              equipe.map((carte)=><CarteEquip nom={carte.nom} profession={carte.profession}/>)
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;