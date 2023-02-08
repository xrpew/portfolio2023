import "../styles/contact.css";
import CVDownload from '../assets/sergioAperezP.pdf'

export const ContactPage = () => {
  return (
    <section className="page">
      <div id="contact">
        <div>
          <a href="https://github.com/xrpew" target='_blank'>
            <i className="bi bi-github" style={{ fontSize: 32, margin: 4 }}></i>
          </a>
          <a href="https://www.linkedin.com/in/sergio-perez-frontend/" target='_blank'>
            <i className="bi bi-linkedin" style={{ fontSize: 32, margin: 4 }}></i>
          </a>
        </div>
        <h4>Contacto</h4>
        <p>spergio8@gmail.com </p>
        <a
          href={ CVDownload }
          download="SergioPerez-Frontend.pdf"
        >
          <button className="btn btn-primary">
            <i
              className="bi bi-file-earmark-person"
              style={{ fontSize: 20, margin: 4 }}
            ></i>
            Descargar CV
          </button>
        </a>
        <hr />
      </div>
    </section>
  );
};
