// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home.jsx';
import Login from '../src/Pages/Login/Login.jsx';
import Users from '../src/Pages/Users/Users.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
