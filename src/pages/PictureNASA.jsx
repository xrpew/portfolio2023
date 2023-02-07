import { useApod } from "../hooks";
import "../styles/pictureNASA.css";

export const PictureNASA = () => {
  const { picture,vaciarAll } = useApod();
  const { copyright, date, hdurl, title, url } = picture;

  return (
    <section className="page">
     
        <div id="picture">
        <h1 className="display-4">Foto del día </h1>
        <p className="display-6">¿Sabías que gracias a una API que tiene la nasa de forma gratuita, puedes consultar a diario la foto del día?</p>
        <h4>AQUÍ LA TIENES</h4>
        <a href={ hdurl } target='_blank'>
        
        <img src={ url } alt={ title } />
        </a>
        <code>{ copyright } / { date }</code>
      <h4>{ title }</h4>      
      <p><em>Cada día que abras esta página se recargará automáticamente la foto del día</em></p>
      </div>
      
    </section>
  );
};
