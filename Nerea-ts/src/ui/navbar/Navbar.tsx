import { IoLogoWhatsapp, } from "react-icons/io"
import {IoCloseOutline, IoMenuOutline, } from "react-icons/io5"
import { Link } from "react-router-dom"

//Image
import myLogo from "../../assets/vela-nueva.png";
import { useUIStore } from "../../store";

export const Navbar = () => {

  const {isSideMenuOpen,openSideMenu,closeSideMenu} = useUIStore(state=>state);

  return (

    <nav className="flex px-4 py-3 sm:py-8 md:px-20 lg:px-40 justify-between items-center sticky border-b-2 mb-8">

      <div className="flex gap-4 sm:gap-7 items-center text-[1.1rem]">

        <Link to="/" className="flex items-center border-2 rounded-[50%] p-1 border-black">
          <img src={myLogo} alt="" className="w-10 sm:w-14 object-cover" />
        </Link>

        <Link to="/products" className="hidden sm:block font-semibold uppercase tracking-widest ">Catalago</Link>

      </div>


      <div className="hidden sm:flex sm:items-center gap-5 ">
        <Link to="/about" className="border-[2px] border-[#2e8b57] hover:bg-[#23613e] hover:text-white p-2 rounded-2xl font-semibold">Quienes Somos</Link>
        <Link to="/contact" className=" bg-[#2e8b57] hover:bg-[#23613e] p-[10px] rounded-2xl font-semibold flex items-center gap-2">
          <span className="text-white">Contactanos</span>
          <IoLogoWhatsapp size={20} className="text-white" />
        </Link>
      </div>


      <button className="sm:hidden bg-[#2e8b57] p-2 rounded-lg ">
        {
          !isSideMenuOpen ? (
            <IoMenuOutline size={30} className="text-white font-bold" onClick={openSideMenu}/>

          ):(
            <IoCloseOutline size={30} className="text-white font-bold" 
              onClick={closeSideMenu}
            />
          )
        }
      </button>

      


    </nav>
  )
}
