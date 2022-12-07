import React from "react";
import "../style/Beranda.css";

const Beranda = () => {
  return (
    <div className="container">
      <div className="header">
        <img style={{ marginLeft: 10 }} src={require('../image/bm.png')} width="140" height="130" alt="logo" color="white" />
        <div style={{ textAlign: "center", marginRight: 20, marginTop: 10 }}>
          <h3>Sistem Informasi Akademik</h3>
          <p style={{ letterSpacing: 2, fontSize: 12 }}>"Budi Murni 2 Medan"</p>
        </div>
      </div>

      <div className="body">
        <div className="navbar">
          <img src={require('../image/home.png')} width="15" height="15"/>
          <p>Beranda</p>
        </div>
        <div className="navbar">
          <img src={require('../image/calendar.png')} width="15" height="15" />
          <p>Kalender akademik</p>
        </div>
        <div className="navbar">
          <img src={require('../image/enter.png')} width="15" height="15" />
          <p>Login</p>
        </div>
      </div>

      <div className="content">
        <div className="isi-content">
          <h3>Berita terbaru</h3>
          <div>
            <p style={{fontSize: '12px'}}>1. SURAT EDARAN UKT SEMESTER GANJIL TAHUN AKADEMIK 2022/2023</p>
          </div>
        </div>
      </div>

      <div className="footer">
          <p style={{textAlign: 'center', color:'white', fontSize:'10px'}}>Copyright © 2022 Budi Murni 2 Medan</p>
      </div>
    </div>
  );
};

export default
