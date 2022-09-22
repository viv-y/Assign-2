import {useState} from 'react'
import Login from "./components/login";
import Register from "./components/register";
import Homepage from "./components/homepage";
import {BrowserRouter,Router,Routes,Route,Switch} from 'react-router-dom';
import Contact from "./components/contact";
import Exp from "./components/exp";
import Skill from "./components/skill";
import About from "./components/about";
import Navbar from './components/navbar'

function App() {

  const [user,setLoginUser] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/"  element={user==true?<Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}></Route>
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path='/About' element={<About/>}>
          </Route>
          <Route path='/Skill' element={<Skill/>}></Route>
          <Route path='/Exp' element={<Exp/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          
        </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
