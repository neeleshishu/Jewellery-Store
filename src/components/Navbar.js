import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Header() {
  return (
   
    <header className="section-header">  
    <div className=" bg-dark">
    <div className="container align-content-center d-flex contactnav">
        <p className="text-light justify-content-start">Phone Number - 0000-0000-0000</p>
        <p className=" text-light position-absolute right">Email - abcdefg@gmail.com</p>
    </div>
    </div>
    
    <div className="">
    <section className="header-main container">
    <div className="container">
        <div className=" gy-3 p-4 navbarstyle">
        <div className="col-lg-2 col-sm-4 col-4">
            <a href="#" className="navbar-brand">
            <h3 className="fontss">Jewellery Store</h3>
            </a> 
        </div>
        <div className="">
            <form action="#" className="responsivrsearch">
                    <div className="input-group search-header">
                    <input type="search" className="form-control" style={{width:"55%"}} placeholder="Search" />
                    <button className="btn btn-primary">
                        <i className="fa fa-search"><SearchIcon/></i> 
                    </button>
                    </div> 
                </form>
        </div>
        <div className="order-lg-last col-lg-5 col-sm-8 col-8">
            <div className="float-end">
            <a href="#" className="btn btn-light"> 
                <i className="fa fa-user"></i>  <span className="ms-1"><AccountCircleIcon/> Sign in  </span> 
            </a>
            <NavLink to='/contact' className="btn btn-light"> 
                <i className="fa fa-heart"></i>  <span className="ms-1 d-none d-sm-inline-block"><AddBusinessIcon/> Address</span>   
            </NavLink>
            <a href="#" className="btn btn-light"> 
                <i className="fa fa-shopping-cart"></i> <span className="ms-1"><ShoppingCartIcon/> My cart </span> 
            </a>
                </div>
        </div> 
        
        
        </div> 
    </div> 
    </section> 
  <div className="container">
  <div className=" py-1 mb-2">
    <nav className="nav d-flex justify-content-between text-dark">
      <NavLink className="p-2 link-dark text-decoration-none fontss" to="/">Home</NavLink>
      <NavLink className="p-2 link-dark text-decoration-none fontss" to="/about">About Us</NavLink>
      <NavLink className="p-2 link-dark text-decoration-none fontss" to="/contact">Contact Us</NavLink>
      <NavLink className="p-2 link-dark text-decoration-none fontss" to="/Product">Products</NavLink>
      <NavLink className="p-2 link-dark text-decoration-none fontss" to="/Gallery">Gallery</NavLink>
      <div class="dropdown">
  <button class="btn btn-light text-dark fontss dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item text-dark fontss" href="#">Rings </a></li>
    <li><a class="dropdown-item text-dark fontss" href="#">Bangels </a></li>
    <li><a class="dropdown-item text-dark fontss" href="#">Pandents </a></li>
    <li><a class="dropdown-item text-dark fontss" href="#">Braclets </a></li>
    <li><a class="dropdown-item text-dark fontss" href="#">Dimonds </a></li>
    <li><a class="dropdown-item text-dark fontss" href="#">Ruby Stones </a></li>
  </ul>
  
</div>
    </nav>
  </div>
</div>
</div>
</header> 
    
     
  );
}
export default Header;