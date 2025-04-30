import ContactUs from "../Components/Contact Us/Contact Us";
import Footer from "../Components/Footer/Footer";
import Frequently from "../Components/Frequently/Frequently";
import NavbarWhite from "../Components/Navbar/NavbarWhite";
import Home from "./Home";
import OurComittment from "./Our Comittment";
import OurVision from "./Our Vision";
import Spacecity from "./Space city";
import Whyus from "./Why us";

export default function AboutUsPage() {
  return (
    <>
      <NavbarWhite />
     
        <Home />
        <Spacecity />
        <OurComittment />
        <Whyus />
        <OurVision/>
        <Frequently/>
        <ContactUs/>
        <Footer/>
     
    </>
  );
}