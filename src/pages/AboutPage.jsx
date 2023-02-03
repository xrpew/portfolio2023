import "../styles/about.css";
import drums from 'src/assets/drums.jpg'

export const AboutPage = () => {
  return (
    <div className="page">
      <section id="about">
        <div className="titlediv">
          <div className="letters">
            <h2>Sobre mi</h2>
            <hr />
            <p>
              Mi principal motivación es cada día superarme, con nuevos retos,
              nuevas ideas que me permitan crecer más como profesional no estoy
              acostumbrado a decir "no lo sé hacer" soy más de "investigaré para
              saber cómo se hace" y así he ido poco a poco evolucionando tanto
              mis sitios web (portafolios) como mis proyectos personales. <br />{" "}
              <br />
              <hr />
              Me encanta la música, la programación y por si no lo notaron, los
              viajes espaciales.
            </p>
          </div>
          <hr />

          <div className="containerImg">
            <img
              src={ drums }
              class="img-fluid rounded thirth"
              alt="..."
            ></img>
            <img
              src="src/assets/code.jpg"
              class="img-fluid rounded"
              alt="..."
            ></img>
            
          </div>
        </div>
      </section>
    </div>
  );
};
