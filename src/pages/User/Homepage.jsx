import Services from "../../components/User/Services.jsx"
import Hero from "../../components/User/Hero.jsx"
import Navbar from "../../components/User/Navbar.jsx"
import EquipmentsHome from "../../components/User/EquipmentsHome.jsx"
import SlotHompage from "../../components/User/SlotsHome.jsx"
import Footer from "../../components/User/Footer.jsx"


function Homepage() {
    return (
        <div className="bg-black">
            <Navbar />
            <Hero />
            <div className=" pt-10 pb-20">
                <Services />
            </div>
            <EquipmentsHome />
            <SlotHompage />
        <Footer />
        </div>
    )
}

export default Homepage
