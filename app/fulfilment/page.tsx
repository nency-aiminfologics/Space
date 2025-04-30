import ContactUs from "../Components/Contact Us/Contact Us";
import Footer from "../Components/Footer/Footer";
import Frequently from "../Components/Frequently/Frequently";
import NavbarWhite from "../Components/Navbar/NavbarWhite";
import FulfillmentProcess from "./Fulfillment Process";
import FulfillmentService from "./Fulfillment Service";
import FulfillmentServices from "./Fulfillment Services";
import Home from "./Home";
import OurBenefits from "./Our Benefits";
import WhyChoosing from "./Why Choosing";


export default function  Fulfilmentpage (){
    return(
        <>
        <NavbarWhite/>
        <Home/>
        <FulfillmentService/>
        <FulfillmentProcess/>
        <WhyChoosing/>
        <FulfillmentServices/>
        <OurBenefits/>
        <Frequently/>
        <ContactUs/>
        <Footer/>
        </>
    )
}