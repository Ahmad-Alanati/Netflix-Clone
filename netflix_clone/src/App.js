import './App.css';
import Home from './components/Home/Home'
import Favorite from './components/FavList/FavList'
import NavBar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FavList' element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
