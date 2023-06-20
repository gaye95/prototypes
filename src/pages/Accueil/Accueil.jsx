import "./Accueil.css";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
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
import Footer from "../../components/Footer/Footer";
import bakeli from "../../assets/bakeli.png";
import elikia from "../../assets/elikia.png";
import redteam from "../../assets/redteam.png";
import store from "../../assets/store.png";
import tayeur from "../../assets/tayeur.png";
import volkeno from "../../assets/volkeno.png";
import ambassadeur from "../../assets/ambassadeur.png";
import CarteApp from "../../components/CarteApp/CarteApp";
import Carouselle from "../../components/Carouselle/Carouselle"
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
  
  const carteapps= [
    { nom:"Alkaly Badji", profession:"Dev Backend", texte:'Le lorem ipsum est en ,imprimerie une suite de mots sans significationc utilisée à titre provisoire pour calibrer une mise en page le texte définitif venant remplacer le faux' },
    { nom:"Oumy", profession:"Dev, web", texte:'Le lorem ipsum est en ,imprimerie une suite de mots sans significationc utilisée à titre provisoire pour calibrer une mise en page le texte définitif venant remplacer le faux' },
    { nom:"Mahmoud Barry", profession:"Dev Back-end", texte:'Le lorem ipsum est en ,imprimerie une suite de mots sans significationc utilisée à titre provisoire pour calibrer une mise en page le texte définitif venant remplacer le faux' }
  ];

  const equipe = [
                  { nom: "Daouda Senghor", profession: "web developpement" },
                  { nom: "Ndiaga Sall", profession: "ui/ux design" },
                  { nom:"Mouhamed Badiane", profession:"Graphic, ui/ux design"},
                  { nom:"Daouda Senghor", profession:"web developpement"}
  ];

  const logos = [
    <img src={volkeno} alt="images" />,
    <img src={bakeli} alt="images" />,
    <img src={elikia} alt="images" />,
    <img src={redteam} alt="images" />,
    <img src={store} alt="images" />,
    <img src={tayeur} alt="images" />
  ];

  return ( 
    <div className="accueil">
      <section>
        <Contact/>
      </section>
      <section><Navebar /></section>
      <section>
      <div
            className = "container-fluid p-5"
            style = {{
               backgroundImage: `url(${tel})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition:"none"
            }}
         >
          <div className="row">
          <div className="col-8">
          <div style={{ marginTop:"100px" }}>
          <h1 className=" text-white text-start" style={{ fontSize:"50px" }}><strong>Bienvenue sur Fewnu App</strong></h1>
          <h1 className="display-6 text-white text-start"><strong>Votre suite de logiciel</strong></h1>
                <p className=" text-white text-start" style={{ fontSize:"20px" }}>
                  <strong>
                  Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                  utilisée à titre provisoire pour calibrer une mise en page, le
                  texte définitif venant remplacer le faux
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
          <div className="row">
          <div className="d-flex text-center p-1 text-white" style={{ backgroundColor:"#0bcad4", width:"25%", borderRadius:"50px" }}>
          <button className="p-4" style={{ backgroundColor:"#005368", color:"white", border:"none", borderRadius:"50px"}}><FaArrowRight/></button>
          <div className="d-flex align-items-center text-center p-1 text-white" style={{ backgroundColor:"#0bcad4", width:"", borderRadius:"50px" }}>
            <h5 className="">Regarder la presentation</h5>
          </div>
          </div>
          </div>
      </div>
      </section>
      <section>
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-md-6 text-start">
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
          <div className="col-md-6" style={{ backgroundColor:"#f5f5f5" }}>
            <img src={images} alt="images"/>
          </div>
        </div>
      </div>
      </section>
      <section>
      <div className="container p-5">
        <div>
          <h4 className="text-start"><strong>Nos applications</strong></h4>
        </div>
        <div className="row d-flex justify-content-center justify-content-evenly p-5">
            {
              applications.map((el)=><Appli photo={el.photo} titre={el.titre} texte={el.texte}/>)
            }
        </div>
      </div>
      </section>
      <section  className="animé">
        
      </section>
      <section style={{backgroundColor:'#f2f2f2'}}>
      <div className="container p-5" style={{backgroundColor:'#f2f2f2'}}>
      <div><h4 className="text-start"><strong>Pourquoi Fewnu </strong></h4></div>
        <div className="row d-flex justify-content-center justify-content-evenly p-5"> 
            {
              fewnu.map((el)=><CarteFewnu icone={el.icone} titre={el.titre} texte={el.texte}/>)
            }
        </div>
      </div>
      </section>
      <section className="p-5">
        <div className="container">
        <div><h4 className="text-start"><strong>Notre équipe</strong></h4></div>
          <div className="row d-flex justify-content-center justify-content-evenly py-4">
            {
              equipe.map((carte)=><CarteEquip nom={carte.nom} profession={carte.profession}/>)
            }
          </div>
        </div>
      </section>
      <section style={{ backgroundColor:"#f2f2f2" }}>
        <div className="container">
          <div className="row p-4">
          <h3 className="text-start">Nos partenaires</h3>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className=" d-flex justify-content-center justify-content-evenly align-items-center">
            {
              logos.map((logo) => <div>{ logo}</div>)
            }
          </div>
        </div>
      </section>
      <section className="p-5" style={{ backgroundColor: "#f2f2f2" }}>
            
            <div className="container-fluid">
              <div className="row">
              <h2 className="text-start">Nos ambassadeurs</h2>
                <div className="container">
                <div className="row d-flex">
                  <div className=" col-7 col-sm ambassadeur">
                    <h3>
                    <strong>Devenez un ambassadeur et gagnez des <span style={{ color:"#0bcad4" }}>récompenses !</span></strong>
                    </h3>
                    <p className="text-start">
                      <strong>
                      Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum
                      </strong>
                    </p>
                    <div className="d-flex">
                      <BsCheckCircle className="my-1" style={{ color:"#0bcad4", width:"200px" }}/>
                      <p className="text-start">
                      <strong>
                      Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                      utilisée à titre provisoire pour calibrer une mise en page, le
                      texte définitif venant remplacer le faux Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                      utilisée à titre provisoire pour calibrer une mise en page, le
                      texte définitif venant remplacer le faux Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                      utilisée à titre provisoire pour calibrer une mise en page, le
                      texte définitif venant remplacer le faux
                      </strong>
                      </p>
                    </div>
                    <div className="pluse d-flex">
                    <div>
                    <button className=" text-white p-2" style={{ backgroundColor:"#0bcad4", borderRadius:"50px" }}>
                      SAVOIR PLUS
                    </button>
                    </div>
                    <div className="d-flex">
                    <button className="mx-3" style={{backgroundColor:"white", border:"solid #c7c7c7 2px", height:"45px", width:"45px", borderRadius:"50%" }}>
                    <TbPhoneCall className="mx-auto" style={{ color:"#0bcad4" }}/>
                    </button>
                    <div className="text-start">
                      <p>Hotline<br/><strong>781646424</strong></p>
                    </div>
                    </div>
                    </div>
                  </div>
                <div className=" col-sm position-relative d-flex justify-content-end align-items-center images"
                  >
                    <img className='' src={ambassadeur} alt="images" style={{
                      marginTop:"-25px"
                  }}/>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-5">
          <div className="container">
          <div><h4 className="text-start"><strong>Notre équipe</strong></h4></div>
            <div className="row d-flex justify-content-center justify-content-evenly py-4">
              {
                carteapps.map((carte) => <CarteApp nom={carte.nom} profession={carte.profession} texte={carte.texte} />)
              }
            </div>
          </div>
        </section>
        <section className="animé p-5" style={{ backgroundColor:"#f2f2f2" }}>
        <Carouselle/>
        </section>
          <section className="bg-dark p-3">
            <div className="container">
            <Footer/>
            </div>
          </section>
    </div>
  );
};

export default Accueil;
