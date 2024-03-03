import { Route, Routes } from "react-router-dom"
import { AboutPage, ContactPage, HomePage, ProductPage, ProductsPage } from "../pages"
import { Navbar, RespNavbar } from "../../ui"



export const NereaRoutes = () => {
  return (
    <>
  
      <Navbar/>
      
      <RespNavbar/>

      
      <Routes>
        
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/products" element = {<ProductsPage/>}/>
        <Route path="/product/:slug" element = {<ProductPage/>}/>
        <Route path="/about" element = {<AboutPage/>}/>
        <Route path="/contact" element = {<ContactPage/>}/>

        
      </Routes>

    </>
  )
}
