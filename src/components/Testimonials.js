import pic1 from '../pics/review1.jpeg';
import pic2 from '../pics/review2.jpeg';
import pic3 from '../pics/review3.jpeg';

const Testimonials = ()=>{
    return(
        <>
        

       
<div className='container'>
<hr/>
        <h1 className="text-center text-decoration-underline fonts">Testimonials</h1>
        <br/>
<br/>


<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden text-dark">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden text-dark">Next</span>
  </button>
</div>
</div>
            

           
        </>
    )
}

export default Testimonials;