import pic1 from '../pics/mainpic1.webp';
import pic2 from '../pics/mainpic2.webp';
import pic3 from '../pics/mainpic3.webp';


const Wallpaper = () =>{
    return(
    <>
    <div class="active">
      <img src={pic1} class="d-block w-100" alt="..."/>
    </div>
    <br/>
    <div class="active">
      <img src={pic2} class="d-block w-100" alt="..."/>
    </div>
    <br/>
    <div class="active">
      <img src={pic3} class="d-block w-100" alt="..."/>
    </div>
</>
);
}

export default Wallpaper;