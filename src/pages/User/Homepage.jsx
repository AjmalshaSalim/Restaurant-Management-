import Services from "../../components/User/Services.jsx"
import Hero from "../../components/User/Hero.jsx"
import  Navbar  from "../../components/User/Navbar.jsx"
import EquipmentsHome from "../../components/User/EquipmentsHome.jsx"


function Homepage() {
    return (
        <div className="bg-black">
            <Navbar />
            <Hero />
            <div className="bg-white">
            <Services />
            </div>
            <EquipmentsHome />

        </div>
    )
}

export default Homepage
