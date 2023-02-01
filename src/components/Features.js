import pic1 from '../pics/bangal2.webp';
import pic2 from '../pics/rings.webp';
import pic3 from '../pics/pandant.webp';
import pic4 from '../pics/necklace.webp';
import pic5 from '../pics/bracelets.webp';
import pic6 from '../pics/earing.webp';
import { NavLink } from 'react-router-dom';

const Features = () => {
  return (
    <>
      <div className="container">
      <hr/>
        <h1 className="common-heading text-decoration-underline text-center fonts"><i>Category</i></h1>
        <br />
        <br />
        <div className="gridd grid-three-column my-3">
        <NavLink className=' text-decoration-none img-center' to='/Product'>
          <div>
            <img
              className='img-features'
              src={pic1}
              alt='products'
              height={180}
            />
            <h2 className='my-2 text-center fonts'><i>Bangles</i></h2>
          </div>
          </NavLink>
          <NavLink className=' text-decoration-none img-center' to='/Product'>
          <div>
            <img
              className='img-features'
              src={pic2}
              alt='products'
              height={180}
            />
            <h2 className='my-2 text-center fonts'><i>Rings</i></h2>
          </div>
          </NavLink>
          <NavLink className=' text-decoration-none img-center' to='/Product'>
          <div>
            <img
              className='img-features'
              src={pic3}
              alt='products'
              height={180}
            />
            <h2 className='my-2 text-center fonts'><i>pandants</i></h2>
            </div>
            
          </NavLink>
          </div>
          <div className='gridd grid-three-column'>
          <NavLink className=' text-decoration-none img-center' to='/Product'>
          <div className=" ">
          <div>
            <img
              className='img-features'
              src={pic4}
              alt='products'
              height={180}
            />
            <h2 className='my-2 text-center fonts'><i>necklace</i></h2>
          </div>
          </div>
          </NavLink>
          <NavLink className=' text-decoration-none img-center' to='/Product'>
          <div>
            <img
              className='img-features'
              src={pic5}
              alt='products'
              height={180}
            />
          <h2 className='my-2 text-center fonts'><i>bracelets</i></h2>
          </div>
          </NavLink>
          <NavLink className=' text-decoration-none img-center' to='/Product'>
          <div>
            <img
              className='img-features'
              src={pic6}
              alt='products'
              height={180}
            />
            <h2 className='my-2 text-center fonts'><i>Earings</i></h2>
          </div>
          </NavLink>
          </div>
          </div>

    </>
  )
}

export default Features;