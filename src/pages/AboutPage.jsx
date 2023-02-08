import "../styles/about.css";
import drums from "../assets/drums.jpg";
import code from "../assets/code.jpg";

export const AboutPage = () => {
  return (
    <div className="page">
      <section id="about">
        <div className="titlediv">
          <div className="letters">
            <h2>Sobre mi</h2>
            <hr />
            <p>
              Desarrollador web junior con habilidades en HTML, CSS, JavaScript
              y experiencia en el desarrollo de aplicaciones web. Busca unirse a
              un equipo para continuar creciendo y aplicar sus habilidades para
              contribuir al éxito de proyectos enfocados en el usuario. <br />{" "}
              <br />
              </p>

              <hr />
              <p>
              Me encanta la música, la programación y por si no lo notaron, los
              viajes espaciales.
            </p>
          </div>
          <hr />
          <div className="containerImg">
            <img src={drums} className="img-fluid rounded thirth" alt="drum"></img>
            <img src={code} className="img-fluid rounded" alt="coding"></img>
          </div>
        </div>
      </section>
    </div>
  );
};
