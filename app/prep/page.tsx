import ContactUs from "../Components/Contact Us/Contact Us";
import Footer from "../Components/Footer/Footer";
import Frequently from "../Components/Frequently/Frequently";
import NavbarWhite from "../Components/Navbar/NavbarWhite";
import WhyChoosing from "../fulfilment/Why Choosing";
import BoostYourOnlineSales from "./Boost Your Online Sales";
import FBAWalmart from "./FBAWalmart";
import FBAWFSPrep from "./FBAWFS Prep";
import Home from "./Home";
import PrepServices from "./PrepServices";



export default function PrepPage() {
    return(
        <>

        <NavbarWhite/>
        <Home/>
        <BoostYourOnlineSales/>
        <FBAWalmart/>
        <WhyChoosing/>
        <FBAWFSPrep/>
        <PrepServices/>
        <Frequently/>
        <ContactUs/>
        <Footer/>
        
        </>
    )
}