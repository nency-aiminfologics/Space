import ContactUs from "../Components/Contact Us/Contact Us";
import Footer from "../Components/Footer/Footer";
import NavbarWhite from "../Components/Navbar/NavbarWhite";
import FbaWfsPrep from "./FBA WFS PREP";

import Home from "./Home";




export default function page(){
    return(
        <>
        <NavbarWhite/>
        <Home/>
        <FbaWfsPrep/>
        <ContactUs/>
        <Footer/>
        </>
    )
}