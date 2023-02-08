import "../styles/tecs.css";
import javaScriptIMG from '../assets/js.png'
import cssIMG from '../assets/css-3.png'
import reactIMG from '../assets/react.png'
import htmlIMG from '../assets/html.png'

export const TecsPage = () => {
  return (
    <section className="page">
      <div id="tecs">
        <div className="containerTecs">
          
          <div style={{ textAlign: "center", color: "white" }}>
            <img src={ htmlIMG } className="imageTecs" alt="html" />
            <p>HTML</p>
          </div>

          <div style={{ textAlign: "center"}}>
            <img src={ cssIMG } className="imageTecs" alt="css" />
            <p>CSS</p>
          </div>

          <div style={{ textAlign: "center" , color: "white" }}>
            <img src={ javaScriptIMG } className="imageTecs" alt="Javascript" />
            <p>javaScript</p>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <img src={ reactIMG } className="imageTecs" alt="react" />
            <p>React</p>
          </div>

        </div>
      </div>
    </section>
  );
};
