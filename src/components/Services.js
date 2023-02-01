import pic1 from '../pics/delivery.jpg';
import pic2 from '../pics/refund.jpg';
import pic3 from '../pics/quality.jpg';


const Services = () => {
  return (
  <>
    
      {/* <div className="container">
      <hr/>
      <br/>
      <br/>
      <h1 className="fonts text-decoration-underline text-center ">Our Services</h1>
      <br/>
      <br/>
        <div className="grid grid-three-column">
          <div className=" services-1 Services">
            <div>
              <TbTruckDelivery
              
              className="icon" />
              <h3 className="hover"> Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2 Services">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3 className="hover">100% Genuine Products</h3>
              </div>
            </div>
          </div>

          <div className="services-3 Services">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3 className="hover">Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div> */}


      
<div className=" container">
<hr/>
      <br/>
      <br/>
      <h1 className="fonts text-decoration-underline text-center ">Our Services</h1>
      <br/>
      <br/>
    <div className="row featurette">
      <div className="col-md-7 services-style">
        <h2 className="featurette-heading fontsweight lh-1">Fast Delivery <span className="text-muted">Itll blow your mind.</span></h2>
      </div>
      <div className="col-md-5">
      <img src={pic1}
       className="img-service"
          alt='100% refund'
        />

      </div>
    </div>

    

    <div className="row featurette">
      <div className="col-md-7 order-md-2  services-style">
        <h2 className="featurette-heading fontsweight lh-1">100% Refund if any damage <span className="text-muted">See for yourself.</span></h2>
      </div>
      <div className="col-md-5 order-md-1">
      <img src={pic2}
       className="img-service"
          alt='100% refund'
        />

      </div>
    </div>

    

    <div className="row featurette">
      <div className="col-md-7  services-style">
        <h2 className="featurette-heading fontsweight lh-1"> Quality Assured <span className="text-muted">And lastly, this one.</span></h2>
      </div>
      <div className="col-md-5">
      <img src={pic3}
       className="img-service"
          alt='quality assured'
        />

      </div>
    </div>
    </div>

    

</>  
  )
}

export default Services;