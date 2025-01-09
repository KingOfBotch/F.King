import { Outlet } from "react-router-dom";

import logo from "../image/Logo.png";
import net from "../image/network.png";
import "./Style/footer.css";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div className="Footer">
        <div className="Foot">
          <div>
            <img src={logo} />
            <p className="bold">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p>Jl. Tengku Umar No. 32 Karawaci, Tangerang</p>
            <p>+62-838-7908-0311</p>
          </div>
          <div className="foot">
            <div>
              <p className="bold">Kategori</p>
              <div>
                <p>Digital & Teknologi</p>
                <p>Pemasaran</p>
                <p>Manajemen Bisnis</p>
                <p>Pengembangan Diri</p>
                <p>Desain</p>
              </div>
            </div>
            <div>
              <p className="bold">Perusahaan</p>
              <div>
                <p>Tentang Kami</p>
                <p>FAQ</p>
                <p>Kebijakan Privasi</p>
                <p>Ketentuan Layanan</p>
                <p>Bantuan</p>
              </div>
            </div>
            <div>
              <p className="bold">Komunitas</p>
              <div>
                <p>Tips Sukses</p>
                <p>Blog</p>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <p>@2024 Fahrul Rozi All Rights Reserved.</p>
          <img src={net} />
        </div>
      </div>
    </div>
  );
};
export default Footer;