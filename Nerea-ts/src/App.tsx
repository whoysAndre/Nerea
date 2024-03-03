import { Route, Routes } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"

function App() {
<<<<<<< HEAD
  return (
    <>
      <p>no borres</p>
      <h1>hola</h1>
=======
  
  return (
    <>

      <Routes>
        <Route path="/*" element = {<AppRoutes/>}/> 
      </Routes>
      
>>>>>>> 652f0c46fd3b145b8421ced18e205c263022c707
    </>
  )
}

export default App
