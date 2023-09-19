import About from "../Components/About";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Process from "../Components/Process"
export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Process/>
        <Footer/>
        </>
    )
}