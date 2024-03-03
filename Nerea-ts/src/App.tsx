import { Route, Routes } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"

function App() {
  
  return (
    <>

      <Routes>
        <Route path="/*" element = {<AppRoutes/>}/> 
      </Routes>
      
    </>
  )
}

export default App
