import { Route, Routes } from "react-router-dom"
import { AboutPage, ContactPage, HomePage, ProductPages } from "../pages"
import { Navbar } from "../../ui"



export const NereaRoutes = () => {
  return (
    <>
  
      <Navbar/>

      <Routes>
        
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/products" element = {<ProductPages/>}/>
        <Route path="/about" element = {<AboutPage/>}/>
        <Route path="/contact" element = {<ContactPage/>}/>

        
      </Routes>

    </>
  )
}
