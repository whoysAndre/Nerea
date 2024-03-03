import { useUIStore } from "../../../store";

export const Opacity = () => {
  
  const {isSideMenuOpen} = useUIStore(state=>state);
  
  return (
    
    <>

      {
        isSideMenuOpen && (
          <div className="block fixed top-[78px] left-0 w-screen h-screen z-10 bg-black opacity-30  sm:hidden"/>
        )
      }

    </>

    
  )
}
