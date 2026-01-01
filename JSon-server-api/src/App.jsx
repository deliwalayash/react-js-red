import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Edit from "./components/Edit"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Login from "./components/Login"


const App = () => {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/edit/:id" element={<Edit></Edit>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      </BrowserRouter>

    
    </div>
  )
}

export default App
