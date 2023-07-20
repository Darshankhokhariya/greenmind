import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signin from './Pages/Signin';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin/>} />
      </Routes>

    </>
  );
}

export default App;
