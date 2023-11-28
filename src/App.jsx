import { Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import NavBar from "./Components/NavBar"
import PhotoTest from "./PhotoTest"
import Dilog from "./Components/Dilog"
import InstaStories from "./Components/InstaStories"


function App() {

  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Body/>}/>
    <Route path='/test' element={<PhotoTest/>} />
    <Route path="/InstaStories" element={<InstaStories/>} />
    </Routes>
    </>
  )

}

export default App
