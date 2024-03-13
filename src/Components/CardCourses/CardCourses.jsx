import "./card-courses.css";


function CardCourses({ logo, textTitle, textSubTitle}) {
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
            <button>{`VER DETALHES`}</button>
        </div>
      </div>
    </div>
  );
}

export default CardCourses;
