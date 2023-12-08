import {Routes, Route} from 'react-router-dom';
import  Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';
import NotFound from './components/NotFound';
function App() {
    return (
    <>
    <Navigation/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/about/*" element={<About/>}/>
       <Route path="/contacts" element={<Contacts/>}/>
       <Route path="/charactersList" element={<CharactersList/>}/>
       <Route path="/characters/:id" element={<CharacterDetails/>}/>
       <Route path='*' element={<NotFound/>} />
    </Routes>
    <footer>All rights reserved &copy;</footer>
    </>
  )
}

export default App
