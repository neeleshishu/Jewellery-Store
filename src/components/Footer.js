import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  return (
    <>
        {/* <section className="contact-short bg-light">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <button className="btn btn-info">
                <NavLink className="text-dark text-decoration-none" to="/contact"> Get Started </NavLink>
              </button>
            </div>
          </div>
        </section>
        {/* footer section */}

       {/*} <footer className=" bg-dark">
          
          <div className="footer-bottom--section text-light">
          
          <div className="footer-social d-flex">
          <p className="footer-phonenumber font-monospace">Call Us at 0000-0000-00</p>
          <div className="socialsites flex-row">
              <h3>Follow Us</h3>
              <div className="footer-social--icons ">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <NavLink
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Jewellery Store. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer> */}


        <div className="bg-dark">

  <footer className="text-center text-lg-start text-light">
          
    <section className="d-flex justify-content-between text-white bg-primary p-4">
             
      <div className="getconnectedfooter">
        <span>Get connected with us on social networks:</span>
      </div>
   
      <div className="socialmediafooter">
        <a href="" className="text-white me-4">
          <i className="fab fa-facebook-f"><FacebookIcon/></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-twitter"><TwitterIcon/></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-Youtube"><FaYoutube/></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-instagram"><FaInstagram/></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-Discord"><FaDiscord/></i>
        </a>
      </div>

    </section>
    
    <section className="">
      <div className="container text-center text-md-start mt-5">
       
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 storenamefooter">
        
            <h6 className="text-uppercase fw-bold">Jewellery Store</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                
                />
            {/* <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p> */}
          </div>
       
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                
                />
            <p>
              <p className="text-light">Earrings</p>
            </p>
            <p>
              <p className="text-light">Chains</p>
            </p>
            <p>
              <p className="text-light">Bangels</p>
            </p>
            <p>
              <p className="text-light">Braclaets</p>
            </p>
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
           
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                
                />
            <p><i className="fas fa-home mr-3"></i> New York, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
       
      </div>
    </section>
    <hr/>

  
    <div
         className="text-center p-3"
               >
      © 2023 Copyright:
       Jewellery Store
    </div>
   
  </footer>
  
</div>
     
    </>
  );
};

export default Footer;