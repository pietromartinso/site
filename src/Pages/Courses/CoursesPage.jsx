import { useState } from "react";
import infosPagesCourses from "../../Data/infos-courses-pages";
import "./courses-page.css";
import Ebook from "./CoursesComponents/SubPages/Ebook/Ebook";
import Faq from "./CoursesComponents/SubPages/Faq/Faq";
import Why from "./CoursesComponents/SubPages/Why/Why";

function CoursesPage() {
  const type = localStorage.getItem("page");
  const [subPages, setSubPages] = useState("ebook");

  const handleClickSubPages = (changeSubPage) => {
    setSubPages(changeSubPage);
  };

  return (
    <div className="courses-page" id="inicio">
      <h1>{infosPagesCourses[type].title1}</h1>
      <section>
        <div className="video">
          <div>
            <iframe
              src={infosPagesCourses[type].video}
              title="video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="button">
            <button>QUERO O E-BOOK, EXERCÍCIOS, CERTIFICADO e BÔNUS</button>
          </div>
        </div>
      </section>
      <section>
        <div className="sub-pages">
          <div className="navbar">
            <p
              className={subPages === "ebook" ? "active" : ""}
              onClick={() => handleClickSubPages("ebook")}
            >
              Ebook
            </p>
            <p
              className={subPages === "why" ? "active" : ""}
              onClick={() => handleClickSubPages("why")}
            >
              Porque adquirir
            </p>
            <p
              className={subPages === "faq" ? "active" : ""}
              onClick={() => handleClickSubPages("faq")}
            >
              FAQ
            </p>
          </div>
          <div className="content">
            {subPages === "ebook" && <Ebook />}
            {subPages === "why" && <Why />}
            {subPages === "faq" && <Faq />}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;
