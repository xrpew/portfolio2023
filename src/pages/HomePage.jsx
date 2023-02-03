import spaceship from '../assets/spaceship.jpg'

export const HomePage = () => {
  return (
      <div className="page">
        <section id="home">
            <div className="imagenFondo">
              <img src={ spaceship } alt="spaceship" />
            </div>
            <div>

            <h1>Hola, soy Sergio!</h1>
        <h3><span className="fondocolor">Desarrollador Web</span> <br />
        Y apasionado por el espacio</h3>
            </div>


</section>
</div>
  );
};
