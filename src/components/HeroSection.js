import { NavLink } from "react-router-dom";
import pic1 from '../pics/main1.webp';
import pic2 from '../pics/main2.webp';

const HeroSection = () => {
 

  return (
    //   <div className="container">
    //     <div className="grid grid-two-column">
    //       <div className="hero-section-data">
    //         <p className="intro-data">Welcome to </p>
    //         <h1 className="text-transform: capitalize;
    // font-weight: bold fonts"> Jewellery Store </h1>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
    //           atque temporibus veniam doloribus libero ad error omnis voluptates
    //           animi! Suscipit sapiente.
    //         </p>
    //         <NavLink>
    //           <button className="btn btn-success button-herosection">show now</button>
    //         </NavLink>
    //       </div>
    //       {/* our homepage image  */}
    //       <div className="hero-section-image my-5">
    //         <figure>
    //           <img
    //           className="my-5 hero-section-pic"
    //             src={pic1}
    //             alt="hero-section-pic"
    //           />
    //         </figure>
    //       </div>
    //     </div>
    //   </div>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
};
export default HeroSection;

