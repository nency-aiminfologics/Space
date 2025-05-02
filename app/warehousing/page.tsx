import ContactUs from "../Components/Contact Us/Contact Us";
import Footer from "../Components/Footer/Footer";
import Frequently from "../Components/Frequently/Frequently";
import NavbarWhite from "../Components/Navbar/NavbarWhite";
import WhyChoosing from "../fulfilment/Why Choosing";
import Home from "./Home";
import Warehousfuture from "./Warehous future";
import Warehousing from "./Warehousing";
import WarehousingService from "./Warehousing Service";



export default function page(){
    return(
        <>

        <NavbarWhite/>
        <Home/>
        <Warehousing/>
        <Warehousfuture/>
        <WhyChoosing/>
        <WarehousingService/>
        <Frequently/>
        <div id="contact-us">
        <ContactUs/>
        </div>
        <Footer/>
        </>
    )
}