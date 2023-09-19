import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Predict from './Pages/Predict';
import Items from './Pages/Items';
import Login from './Components/Login';
import Register from './Components/Register';



function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about/" element={<About/>}></Route>
        <Route path="/predict/" element={<Predict/>}></Route>
        <Route path="/items/:item" element={<Items/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
