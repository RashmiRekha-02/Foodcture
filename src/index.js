import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import Demo from './views/dashboard/Table';
import AdminLogin from "./views/Login/AdminLogin";
import Home from "./views/C-Dashboard/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/dashboard" element={<Demo />} />
      <Route path="/cldashboard" element={<Home />} />
    </Routes>
  </BrowserRouter>
);