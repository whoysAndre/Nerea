import { Route, Routes } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element = {<AppRoutes/>}/>
        <h1>hola</h1>
      </Routes>
    </>
  )
}

export default App
