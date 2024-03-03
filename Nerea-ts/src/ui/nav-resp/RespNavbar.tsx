import { IoLogoWhatsapp } from "react-icons/io"
import { Link } from "react-router-dom"
import { useUIStore } from "../../store";
import clsx from "clsx";

export const RespNavbar = () => {
  
  const {isSideMenuOpen} = useUIStore(state=>state); 
  
  return (

    <>

      
          <nav 
            className= {
              clsx(
                "fixed bg-white z-40 top-[77px] w-[300px] right-0 h-[290px] px-5 sm:hidden transform transition-all duration-300",
                {
                  "translate-x-full": !isSideMenuOpen
                }
              )
            }
          >
            <div className="mt-10 flex flex-col gap-10 text-[1.2rem]">
              <Link to="/products" className="hover:text-[#2e8b57] hover:font-extrabold">Catalago</Link>
              <Link to= "/" className="hover:text-[#2e8b57] hover:font-extrabold">Destacados</Link>
            </div>

            <div className="w-full bg-gray-300 h-[2px] mt-5" />

            <div className="mt-10 flex gap-2 ">
              <Link to="/about" className="rounded-lg flex items-center p-1 justify-center border-[2px] border-[#2e8b57] hover:bg-[#23613e] hover:text-white font-semibold">Quienes Somos</Link>
              <Link to="/contact" className="rounded-lg bg-[#2e8b57] hover:bg-[#23613e] tex-white flex gap-2 p-1 items-center justify-center text-white">
                <span className="">Contactanos</span>
                <IoLogoWhatsapp size={20} className="text-white" />
              </Link>
            </div>
          </nav>
      
    </>
  )
}
