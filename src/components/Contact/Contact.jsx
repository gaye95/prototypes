import "./Contact.css";
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

    <div class="container-fluid large">
    <div class="row">
        <div class="col-md  d-flex justify-content-end">
          <div className="d-flex">
            <BsEnvelopeFill className="my-1" style={{ color: "#0bcad4" }} /><h6 className="mx-1 my-1">contact.fewnu@gmail.com</h6>
          </div>
      </div>
        <div class="col-md d-flex">
          <div className="d-flex">
            <FcPhoneAndroid className="my-1" style={{ color:"#0bcad4" }} /><h6 className="my-1">+221781646424</h6>
          </div>
        </div>
      <div class="col-md d-flex justify-content-end">
      <h6 className="my-1 d-flex align-items-center">Nous suivre</h6>
      {
        icones.map((icone)=><div className="mx-1 my-2">{icone}</div>)
      }
      </div>
      <div class="col-md d-flex justify-content-end">
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

)};

export default Contact;
