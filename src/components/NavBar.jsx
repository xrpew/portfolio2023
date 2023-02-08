import { useState } from "react";

export const NavBar = () => {
  const [pineable, setPineable] = useState(true);

  const handlePineable = () => {
    setPineable(!pineable);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={handlePineable}>
          {pineable ? (
            <i className="bi bi-pin" style={{ marginRight: 10 }}></i>
          ) : (
            <i className="bi bi-pin-fill" style={{ marginRight: 10 }}></i>
          )}
          { `Sergio Pérez />`}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#picture">
                Foto del día
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Proyectos Relevantes
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="https://horoscapus.netlify.app/" target='_blank'>
                    Horoscapus
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://generarpass.netlify.app/" target='_blank'>
                    Generador de contraseñas
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#proyecto">
                    Ver todos
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">@xrpew</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
