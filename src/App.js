import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';
import UserInfo from './UserInfo';
import Welcome from './welcome';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Appheader></Appheader>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/userinfo' element={<UserInfo/>}></Route>
        <Route path='/welcome' element={<Welcome/>}></Route>
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
