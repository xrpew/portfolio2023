import "../styles/contact.css";
export const ContactPage = () => {
  return (
    <section className="page">
      <div id="contact">
        <div>
          <a href="https://github.com/xrpew" target='_blank'>
            <i class="bi bi-github" style={{ fontSize: 32, margin: 4 }}></i>
          </a>
          <a href="https://www.linkedin.com/in/sergio-perez-frontend/" target='_blank'>
            <i class="bi bi-linkedin" style={{ fontSize: 32, margin: 4 }}></i>
          </a>
        </div>
        <h4>Contacto</h4>
        <p>spergio8@gmail.com </p>
        <a
          href="src/assets/sergioAperezP.pdf"
          download="SergioPerez-Frontend.png"
        >
          <button className="btn btn-primary">
            <i
              class="bi bi-file-earmark-person"
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
