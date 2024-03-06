import "./card-exclusive.css";


function CardExclusive({ title, img}) {
  return (
    <div className="card-exclusive">
      <div className="container">
        <div className="logo-course">
            <img src={img} alt="Icon Logic" />
        </div>
        <div className="infos">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="summary"></div>
        </div>
      </div>
    </div>
  );
}

export default CardExclusive;