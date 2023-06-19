import "./Contact.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import { FcPhoneAndroid } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import france from "../../assets/france.jpg"
function Contact() {
  const icones = [<CiFacebook />, <CiInstagram />, <CiLinkedin />, <CiTwitter />];
  return (
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 d-flex align-items-center">
          <BsEnvelopeFill className="my-1" style={{ color:"#0bcad4" }} /><h6 className="mx-1 my-1">contact.fewnu@gmail.com</h6>
          <FcPhoneAndroid className="my-1 mx-2" style={{ color:"#0bcad4" }} /><h6 className="my-1">+221781646424</h6>
          <div className="d-flex mx-auto align-items-center">
            <h6 className="my-1">Nous suivre</h6>
            {
              icones.map((icone)=><div className="d-flex my-2 mx-2">{icone}</div>)
            }
        </div>
        <div className="d-flex justify-content-end">
        <img style={{ height: "25px", width: "25px" }} src={france} alt="langues" />
        <form action="#">
          <select style={{ border:"none" }} name="languages" id="lang">
            <option value=""><strong>Fr</strong></option>
            <option value=""><strong>An</strong></option>
            <option value=""><strong>Ar</strong></option>
            <option value=""><strong>Es</strong></option>
          </select>
        </form>
      </div>
        </div>
        
        </div>
        </div>
  );
};

export default Contact;
