import { Route, Routes } from "react-router-dom"
import { NereaRoutes } from "../nerea"



export const AppRoutes = () => {
  return (
    <>

      <Routes>

        {/* Nerea */}
        <Route path="/*" element ={<NereaRoutes/>}/>

      </Routes>
      
    </>
  )
}
