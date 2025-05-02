import Footer from "../Components/Footer/Footer";
import NavbarWhite from "../Components/Navbar/NavbarWhite";
import Faq from "./Faq";
import Home from "./Home";



export default function page(){
    return(
        <>

        <NavbarWhite/>
        <Home/>
        <Faq/>
        <Footer/>
        
        </>
    )
}