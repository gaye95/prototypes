import "./Footer.css";
import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logofewnu from '../../assets/logofewnu.jpg'
function Footer() {
  return (
    <MDBFooter  className='bg-dark text-center text-lg-start text-muted'>
      <section className='#!'>
        <div className="container">
        <div className="row d-flex">
            <div className=" d-flex">
            <div><img src={logofewnu} alt="images" style={{ width:"70px", height:"70px" }}/></div>
            <div className="d-flex justify-content-center mx-auto"><h3 className="d-flex align-items-center text-center">Lorem you can use rows and columns</h3>
            </div>
            </div>
        </div>
        </div>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        <div>
        <a href='#!' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href='#!' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter" />
        </a>
        <a href='#!' className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='#!' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='#!' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='#!' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
        </div>
      </section>
    </MDBFooter>
  );
}

export default Footer;
