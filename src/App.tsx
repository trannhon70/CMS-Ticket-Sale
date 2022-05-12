import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import DoiSoatVe from './Components/Pages/DoiSoatVe/DoiSoatVe';
import GoiDichVu from './Components/Pages/GoiDichVu/GoiDichVu';
import QuanLyVe from './Components/Pages/QuanLyVe/QuanLyVe';
import TrangChu from './Components/Pages/TrangChu/TrangChu';
import Sidebar from './Components/Template/MenuLeft/Sidebar';

function App() {
  return (
    <div className="App" >
        <BrowserRouter>
            <Routes>
              <Route path='/' element={< Sidebar />}>
                    <Route path='/' element={< TrangChu />} />
                    <Route path='/quanlyve' element={< QuanLyVe />} />
                    <Route path='/goidichvu' element={< GoiDichVu />} />
                    <Route path='/doisoatve' element={< DoiSoatVe />} />
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
