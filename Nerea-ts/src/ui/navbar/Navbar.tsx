import { IoLogoWhatsapp, IoMdContact } from "react-icons/io"
import { IoMenuOutline, } from "react-icons/io5"
import { Link } from "react-router-dom"


export const Navbar = () => {
  
  return (

    <nav className="flex px-40 py-10 justify-between items-center">

      <div className="flex gap-10 items-center text-[1.1rem]">
        
        <Link to="/">logo</Link>

        <p className="font-semibold uppercase tracking-widest">Catalago</p>

      </div>


      <div className="flex items-center gap-5">
        <Link to="/about" className="border-[2px] border-[#2e8b57] p-2 rounded-2xl font-semibold">Quienes Somos</Link>
        <Link to="/contact" className=" bg-[#2e8b57] p-[10px] rounded-2xl font-semibold flex items-center gap-2">
          <span className="text-white">Contactanos</span>
          <IoLogoWhatsapp size={20} className="text-white"/>
        </Link>
      </div>


      <button className="sm:hidden">
        <IoMenuOutline size={30}/>
      </button>


    </nav>
  )
}
