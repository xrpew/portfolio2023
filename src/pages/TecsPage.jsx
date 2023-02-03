import "../styles/tecs.css";
import javaScriptIMG from '../assets/js.png'
import cssIMG from '../assets/css-3.png'
import reactIMG from '../assets/react.png'
import htmlIMG from '../assets/html.png'

export const TecsPage = () => {
  return (
    <section className="page">
      <div id="tecs">
        <p style={{ alignSelf: "center", fontFamily: "Roboto" }}>
          Estas son las tecnologías que manejo
        </p>
        <div className="containerTecs">
          <div style={{ textAlign: "center" }}>
            <img src={ javaScriptIMG } class="imageTecs" alt="Javascript" />
            <p>javaScript</p>
          </div>

          <div style={{ textAlign: "center", color: "white" }}>
            <img src={ cssIMG } class="imageTecs" alt="css" />
            <p>CSS</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img src={ reactIMG } class="imageTecs" alt="react" />
            <p>React</p>
          </div>

          <div style={{ textAlign: "center", color: "white" }}>
            <img src={ htmlIMG } class="imageTecs" alt="html" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </section>
  );
};
