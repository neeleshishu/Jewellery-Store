import pic1 from '../pics/product1.webp';
import pic2 from '../pics/product2.webp';
import pic3 from '../pics/product3.webp';
import pic4 from '../pics/product4.webp';
import pic5 from '../pics/product5.webp';
import { NavLink } from 'react-router-dom';

const Product = ()=>{
    return(
        <>
        <div className=''>
        <br/>
        <h1 className=' text-center fontss color'><i>Products</i></h1>
        <br/>
        <br/>
        <div className='product-responsive'>
        
        <NavLink to='/Product/Ruby_Earring'>
           <div className="card my-2 mx-3 products1 products">
  {/* <img src={pic1}  style={{width: '24rem'}} className="card-img-top imageproduct " alt="..."/> */}
  
</div> 
<h4 className='text-center fontsweight text-dark  text-decoration-none fontss'>Ruby Earring - ₹26,000</h4>
</NavLink>
<NavLink to='/Product/Chain'>
<div className="card mx-3 my-2 products2  products">
  {/* <img src={pic2}  style={{width: '24rem'}} className="card-img-top" alt="..."/> */}
 
</div> 
 <h4 className='text-center fontsweight  text-dark  text-decoration-none fontss'>Chain - ₹37,500</h4>
</NavLink>
<NavLink to='/Product/Golden_Bangel'>
<div className="card mx-3 my-2 products3  products">
  {/* <img src={pic3}  style={{width: '24rem'}} className="card-img-top" alt="..."/> */}
  
</div> 
<h4 className='text-center fontsweight text-dark  text-decoration-none fontss'>Golden Bangel - ₹56,000</h4>
</NavLink>
</div>
<br/>
        <br/>
        <div className='product-responsive d-flex'>
        <NavLink to='/Product/Platinum_Earring'>
           <div className="card mx-3 my-2 products4  products">
  {/* <img src={pic4}   style={{width: '24rem'}} className="card-img-top" alt="..."/> */}
 
</div> 
 <h4 className='text-center fontsweight text-dark  text-decoration-none fontss'>Platinum wire Earring - ₹46,000</h4>
</NavLink>
<NavLink to='/Product/Silver_Bangel'>
<div className="card mx-3 my-2 products5  products">
  {/* <img src={pic5}  style={{width: '24rem'}} className="card-img-top" alt="..."/> */}
 
</div> 
 <h4 className='text-center fontsweight text-dark  text-decoration-none fontss'>Silver Bangel - ₹23,500</h4>
</NavLink>
</div>
<br/>
<br/>
</div>
        </>
    )
}

export default Product;