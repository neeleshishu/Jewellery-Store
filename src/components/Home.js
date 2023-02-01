import Features from "./Features";
import Herosection from "./HeroSection";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Trusted from "./Trusted";
import Wallpaper from "./Wallpaper";

const Home = ()=>{
    return(
        <>
            <Herosection/>
            <br/>
            <br/>
            <Wallpaper/>
            <br/>
            <br/>
            <Features/>
            <br/>
            <br/>
            <Services/>
            <br/>
            <br/>
            <br/>
            <Testimonials/>
            <br/>
            <br/>
            <Trusted/>
            <br/>
            <br/>
        </>
    )
}

export default Home;