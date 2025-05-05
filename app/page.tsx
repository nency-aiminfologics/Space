import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Fulfillment from "./Components/Fulfillment/Fulfillment";
import Services from "./Components/Services/Services";
import Aboutus from "./Components/About us/About us";
import Blog from "./Components/Blog/Blog";
import Frequently from "./Components/Frequently/Frequently";
import Spacecityprep from "./Components/Space city prep/Space city prep";
import ContactUs from "./Components/Contact Us/Contact Us";
import Footer from "./Components/Footer/Footer";



export default function Home() {
  return (
 <section className="bg-[#ffffff] " id="#">
  <div className="h-[1078px] ">
  <Navbar/>
  <Fulfillment/>
  </div>
  <Services/>
  <Aboutus/>
  <Blog/>
  <Frequently/>
  <Spacecityprep/>
  <div id="contact-us">
  <ContactUs/>
  </div>
  <Footer/>

 </section>
  );
}
