import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CoursesPage from "./Pages/Courses/CoursesPage";
import Home from "./Pages/Home/Home";
import "./index.css";
import TypeCourseContextProvider from "./Context/typeCourseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TypeCourseContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
        <Footer />
      </TypeCourseContextProvider>
    </Router>
  </React.StrictMode>
);
