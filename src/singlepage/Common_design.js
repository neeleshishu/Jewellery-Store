import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Common_design = (props)=>{
    return(
        <>
        <br/>
            <br/>
            
            <div className="container common-style">
                <div className="grid grid-two-column">
                <div>
                    <img className='my-5 singleproductpage' src={props.img} alt='Product'/>
                </div>
                <div className=''>
                
                    <h3>{props.title}</h3>
                    <h2>{props.price}</h2>

                    <form className="">
  <div >

  <br/>


    <text className='mx-2'>Delivery <LocationOnIcon/> </text>
    <div className="input-group">
      <input  type="text" className="form-control my-1" id="inlineFormInputGroupUsername" placeholder='Enter Pincode'/>
    </div>
  </div>
  <p className='my-1'>Delivery by Jan 29, Sunday by 12:30 PM</p>
  <p>Enter pincode for exact delivery dates and charge</p>
<br/>
<div className='addtocart-style'>
  <button className='btn btn-info'><ShoppingCartIcon/> Add to Cart</button>
  <button className='btn btn-info mx-2'><ShoppingBagIcon/> Buy Now</button>
  </div>
 
</form>
                </div>

                </div>
            </div>
            <br/>
            <br/>
        </>
    )
}

export default Common_design;