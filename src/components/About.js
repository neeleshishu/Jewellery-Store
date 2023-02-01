import pic1 from '../pics/gallery5.jpeg';
import { NavLink } from 'react-router-dom';
import Aboutwall from './About-Wall';


const About = ()=>{
    return(
        <>
            <Aboutwall/>
            <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h1 className='font-about'><i> About Us </i></h1>
            <p className='fontss'><i>
            We, Royal Jewellers, situated at Malad West, Mumbai, Maharashtra, are one of the leading exclusively designed jewellery showroom, focusing on giving you an awesome jewellery buying experience. We strive to provide you with possibly the largest collection of curated designs for every occasion. We are grateful to be trusted by a number of happy customers.</i>
            </p>
            <NavLink to='/Product'>
              <button className='btn btn-success button-about'>show now</button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src={pic1}
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
        </>
    )
}
export default About;