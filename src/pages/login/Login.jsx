import { useNavigate } from "react-router-dom";
import { useState} from "react";

import DescForm from "../../components/DescForm";
import Button from "../../components/Button";
import LupaPass from "../../components/LupaPass";

import "../../style/container.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    if (typeof user !== "object") {
      alert("Email atau Password salah");
    } else {
      navigate("/Home");
    }
  };

  return (
    <div className="container">
      <DescForm
        propUp="Masuk ke Akun"
        propDown="Yuk, lanjutin belajarmu di videobelajar."
      />
      <form action="#">
        <p>
          E-Mail <span>*</span>
        </p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>
          Kata Sandi <span>*</span>
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <LupaPass />
      <Button
        propUp="Masuk"
        propDown="Daftar"
        onClickUp={() => {
          submitLogin();
        }}
        onClickDown={() => {
          navigate("/Register");
        }}
      />
    </div>
  );
};

export default Login;