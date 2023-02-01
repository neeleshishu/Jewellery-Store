import React from 'react';
import {Route,Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import Product from './components/Product';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Ruby from './singlepage/Ruby';
import Chain from './singlepage/Chain';
import Golden_Bangel from './singlepage/Golden_Bangel';
import Platinum_Earring from './singlepage/Platinum_Earring';
import Silver_Bangel from './singlepage/Silver_Bangel';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


const App = ()=>{
    return(
        <>
        <Navbar/>
        
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/Product' element={<Product/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Product/Ruby_Earring' element={<Ruby/>}/>
            <Route path='/Product/Chain' element={<Chain/>}/>
            <Route path='/Product/Golden_Bangel' element={<Golden_Bangel/>}/>
            <Route path='/Product/Platinum_Earring' element={<Platinum_Earring/>}/>
            <Route path='/Product/Silver_Bangel' element={<Silver_Bangel/>}/>
            <Route path="*" element={<Error/>} />
        </Routes>

         <Footer/>
        
                
        </>
    )
}

export default App;
