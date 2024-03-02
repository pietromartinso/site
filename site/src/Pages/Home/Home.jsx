import CardCourses from "../../Components/CardCourses/CardCourses";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <section>
        <h1>Conheça nossos cursos</h1>
        <CardCourses />
      </section>
    </div>
  );
}

export default Home;
