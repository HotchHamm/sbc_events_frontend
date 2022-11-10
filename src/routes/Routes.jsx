import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Home from "../pages/Home.jsx";
import Login from "../components/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import RegisterParent from "../pages/Register/RegisterParent.jsx";
import RegisterStudent from "../pages/Register/RegisterStudent";
import RegisterVolunteer from "../pages/Register/RegisterVolunteer";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register">
          <Route index element={<Register />} />
          <Route path="student" element={<RegisterStudent />} />
          <Route path="parent" element={<RegisterParent />} />
          <Route path="volunteer" element={<RegisterVolunteer />} />
        </Route>
      </Routes>
    </>
  );
}
