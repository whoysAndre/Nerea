import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import ProductPages from "../pages/ProductPages"

export const NereaRoutes = () => {
  return (
    <>
  
      <Routes>
        
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/products" element = {<ProductPages/>}/>
        
      </Routes>

    </>
  )
}
