import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Teacher from "./pages/Teacher/Teacher.jsx";
import Student from "./pages/Student/Student.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Footer from "./components/Footer.jsx";
import ScreenWithNavbar from "./components/ScreenWithNavbar.jsx";
import ScreenWithoutNavbar from "./components/ScreenWithoutNavbar.jsx";

export default function Approuter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ScreenWithNavbar/>} >
          <Route index element={<App />} />
          </Route>
          <Route element={<ScreenWithoutNavbar/>}>
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/admin" element={<Admin/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
