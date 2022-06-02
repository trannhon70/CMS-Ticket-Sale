import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import DoiSoatVeDS from './Components/Pages/DoiSoatVe/DoiSoatVe';
import DanhSachGoiDichVu from './Components/Pages/GoiDichVu/GoiDichVu';
import ListQuanLyVe from './Components/Pages/QuanLyVe/ListQuanLyVe';
import TrangChu from './Components/Pages/TrangChu/TrangChu';
import DatePK from './Components/Template/DatePicker/DatePk';

import Sidebar from './Components/Template/MenuLeft/Sidebar';



function App() {
 const trangChu = {
   title :'Thống kê'
 }
  const QLV = {
    danhSach:'Danh sách vé '
  }
  const DSV = {
    doiSoat:'Đổi soát vé',
    locVe:'Lọc vé'
  }
  const GDV = {
    danhSach:'Danh sách gói vé'
  }
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Sidebar />}>
            <Route path='/' element={< TrangChu name={trangChu} />} />
            <Route path='/quanlyve' element={< ListQuanLyVe name={QLV} />} />
            <Route path='/goidichvu' element={< DanhSachGoiDichVu name ={GDV}/>} />
            <Route path='/doisoatve' element={< DoiSoatVeDS name={DSV} />} >
              {/* <Route path='/goidichvu/themdichvu' element={<ThemGoiDichVu />} />   */}
            </Route>

          </Route>
          <Route path='/date' element={< DatePK />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
