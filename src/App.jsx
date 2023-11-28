import { Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import NavBar from "./Components/NavBar"
import PhotoTest from "./PhotoTest"
import InstaStories from "./Components/InstaStories"
import { useEffect, useState } from "react"


function App() {
  const [imagePreview,setImagePreview]= useState([]);
  const handleDisplayImage=(imageUrl)=>{
    console.log(imageUrl)
    setImagePreview(imageUrl)
  }

  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Body handleDisplayImage={handleDisplayImage} imagePreview={imagePreview} />}/>
    <Route path='/test' element={<PhotoTest/>} />
    <Route path="/InstaStories" element={<InstaStories/>} />
    </Routes>
    </>
  )

}

export default App
