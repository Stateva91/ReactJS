import { Routes, Route, useNavigate } from "react-router-dom"

import * as authService from './services/authService';
import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/game-create/GameCreate"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameDetails from "./components/game-details/GameDetails"
import { useState } from "react"
import AuthContext from "./contexts/authContext"
import Path from "./paths";


function App() {
  const navigate=useNavigate();
 const [auth, setAuth]=useState({});

 const loginSubmitHandler=async(values)=>{
 const result= await authService.login(values.email, values.password);

 setAuth(result);
 navigate(Path.Home);
 };

 const registerSubmitHandler=async (values)=>{
      const result= await authService.register(values.email, values.password);
      setAuth(result);
      navigate(Path.Home);

 }

 const values={
  loginSubmitHandler,
  registerSubmitHandler,
  username: auth.username || auth.email,
  email: auth.email,
  isAuthenticated: !!auth.email,
 }

  return (
    <AuthContext.Provider value={{values}}>
    <div id="box">
    <Header/>
    <Routes>
     <Route path={Path.Home} element={<Home/>}></Route>
     <Route path="/games" element={<GameList/>}></Route>
     <Route path="/games/create" element={<GameCreate/>}></Route>
     <Route path="/games/:gameId" element={<GameDetails/>}></Route>
     <Route path="/login" element={<Login />}></Route>
     <Route path="/register" element={<Register/>}></Route>

    </Routes>
    
    </div>
    </AuthContext.Provider>
  )
}

export default App
