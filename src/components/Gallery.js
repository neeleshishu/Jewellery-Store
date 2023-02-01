import pic1 from '../pics/gallery1.webp';
import pic2 from '../pics/gallery2.webp';
import pic3 from '../pics/gallery3.jpg';
import pic4 from '../pics/gallery4.jpeg';
import pic5 from '../pics/gallery5.jpeg';
import pic6 from '../pics/Herosectionpic.jpg';

const Gallery = ()=>{
    return(
        <>
        <br/>
        <h1 className='text-center fonts color'><i>Gallery</i></h1>
        <br/>
        <br/>
        <div className=' gallery-style d-flex'>
        
           <div className="card mx-5">
  <img src={pic1}  style={{width: '24rem'}} className="card-img-top" alt="..."/>
</div> 
<div className="card mx-5">
  <img src={pic2}  style={{width: '24rem'}} className="card-img-top" alt="..."/>
</div> 
<div className="card mx-5">
  <img src={pic3}  style={{width: '24rem'}} className="card-img-top" alt="..."/>
</div> 
</div>
<br/>
        <br/>
        <div className='gallery-style d-flex'>
        
           <div className="card mx-5">
  <img src={pic4}   style={{width: '24rem'}} className="card-img-top" alt="..."/>
</div> 
<div className="card mx-5">
  <img src={pic5}  style={{width: '24rem'}} className="card-img-top" alt="..."/>
</div> 
<div className="card mx-5">
  <img src={pic1}  style={{width: '24rem'}} className="card-img-top" alt="..."/>
</div> 
</div>
<br/>
        <br/>
        <div className='gallery-style d-flex'>
        
           <div className="card mx-5">
  <img src={pic1} style={{width: '24rem'}} className="card-img-top" alt="..."/>
</div> 
<div className="card mx-5">
  <img src={pic2} style={{width: '24rem'}} className="card-img-top" alt="..."/>
</div> 
<div className="card mx-5">
  <img src={pic4} style={{width: '24rem'}} className="card-img-top" alt="..."/>
</div> 
</div>
<br/>
<br/>
        </>
    )
}

export default Gallery;