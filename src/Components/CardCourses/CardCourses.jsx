import { Link } from "react-router-dom";
import "./card-courses.css";
import { useTypeCourse } from "../../Context/typeCourseContext";

function CardCourses({ index, logo, textTitle, textSubTitle, link }) {
  const { typeSelected } = useTypeCourse();

  return (
    <div className="card-courses">
      <div className="container">
        <div className="logo-course">
          <img src={logo} alt="Icon Logic" />
        </div>
        <div className="infos">
          <div className="title">
            <h3>{textTitle}</h3>
            <p>{textSubTitle}</p>
          </div>
          <div className="summary"></div>
        </div>
        <div className="see-details">
          <Link to={link} onClick={() => typeSelected(index)}>{`VER DETALHES`}</Link>
        </div>
      </div>
    </div>
  );
}

export default CardCourses;
