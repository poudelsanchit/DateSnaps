import { Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import NavBar from "./Components/NavBar"
import PhotoTest from "./PhotoTest"
import Dilog from "./Components/Dilog"


function App() {

  return (
    <>
      <Dilog/>
    <NavBar/>
  
    <Routes>
    <Route path="/" element={<Body/>}/>
    <Route path='/test' element={<PhotoTest/>} />
    </Routes>
    </>
  )

}

export default App
