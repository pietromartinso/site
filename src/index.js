import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CoursesPage from "./Pages/Courses/CoursesPage";
import Home from "./Pages/Home/Home";
import "./index.css";
import TypeCourseContextProvider from "./Context/typeCourseContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const root = createRoot(document.getElementById("root")); // Mudança aqui
root.render(
  <React.StrictMode>
    <Router>
      <TypeCourseContextProvider>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
        <Footer />
      </TypeCourseContextProvider>
    </Router>
  </React.StrictMode>
);