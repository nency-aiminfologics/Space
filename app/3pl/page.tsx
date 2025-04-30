import ContactUs from "../Components/Contact Us/Contact Us";
import Footer from "../Components/Footer/Footer";
import Frequently from "../Components/Frequently/Frequently";
import NavbarWhite from "../Components/Navbar/NavbarWhite";
import WhyChoosing from "../fulfilment/Why Choosing";
import Pl from "./3pl";
import Home from "./Home";
import OurFeatures from "./Our Features";
import ThirdParty from "./ThirdParty";



export default function plpage (){
    return(
        <>
        <NavbarWhite/>
        <Home/>
        <Pl/>
        <OurFeatures/>
        <WhyChoosing/>
        <ThirdParty/>
        <Frequently/>
        <ContactUs/>
        <Footer/>
        </>
    )
}