
import { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"

import * as authService from './services/authService';
import Header from "./components/Header/Header"
import Home from "./components/home/Home"
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/game-create/GameCreate"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
// import GameDetails from "./components/game-details/GameDetails"
import { useState } from "react"
import AuthContext from "./contexts/authContext"
import Path from "./paths";
import Logout from "./components/logout/Logout";
import GameEdit from "./components/game-edit/GameEdit";
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from "./components/guards/AuthGuard";

import { AuthProvider } from './contexts/authContext';
const GameDetails=lazy(()=> import('./components/game-details/GameDetails'))


function App() {
  const navigate=useNavigate();
 const [auth, setAuth]=useState(()=>{
    localStorage.removeItem('accessToken');

    return {};
 });

 const loginSubmitHandler=async(values)=>{
 const result= await authService.login(values.email, values.password);

 setAuth(result);
 localStorage.setItem('accessToken', result.accessToken);
 navigate(Path.Home);
 };

 const registerSubmitHandler=async (values)=>{
      const result= await authService.register(values.email, values.password);
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home);

 }
 const logoutHandler=()=>{
  setAuth({});
  localStorage.removeItem('accessToken');
  navigate(Path.Home);
 }

 const values={
  loginSubmitHandler,
  registerSubmitHandler,
  logoutHandler,
  username: auth.username || auth.email,
  email: auth.email,
  isAuthenticated: !!auth.email,
 }

  return (
    <ErrorBoundary>
    <AuthProvider>
        <div id="box">
            <Header />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/games/:gameId" element={<GameDetails />} />

                    <Route element={<AuthGuard />}>
                        <Route path="/games/create" element={<GameCreate />}/>
                        <Route path={Path.GameEdit} element={<GameEdit />} />
                        <Route path={Path.Logout} element={<Logout />} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    </AuthProvider>
</ErrorBoundary>
  )
}

export default App;
