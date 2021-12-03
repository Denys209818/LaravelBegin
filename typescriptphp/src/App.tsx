import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './containers/DefaultLayout';
import Main from './components/Default/Main';
import Login from './components/Default/Login';
import Register from './components/Default/Register';
import NoMatch from './components/Default/NoMatch';
import Navbar from './components/Navbar';
const App : React.FC = () => {
  return (
   <>
  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
