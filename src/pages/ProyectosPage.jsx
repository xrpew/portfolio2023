import React, { useState } from "react";
import { CardProyect } from "../components";
import PWGenerateIMG from '../assets/pasword.png'
import horoscapusIMG from '../assets/horoscapus.png'
import sudokuIMG from '../assets/Sudoku.png'
import bancoIMG from '../assets/BancoCl.png'
import pacmanIMG from '../assets/Pacman.png'

export const ProyectosPage = () => {
  const [showAll, setShowAll] = useState(false);

  const handleMoreProyects = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="page">
      <section id="proyecto">
        <h4>Proyectos</h4>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <CardProyect
            title="Generador de Contraseñas"
            description="Permite generar contraseñas seguras. 
            Además cuenta con la opción de copiar fácilmente tu contraseña generada, para usarla con fácilidad. "
            image={ PWGenerateIMG }
            url="https://xrpew-pasword-generator.netlify.app/"
            callToAction="Generar"
          />
          <CardProyect
            title="Horoscapus"
            description="Consulta tus astros para el día de hoy, 
            ¿Ya sabes de que color ir vestido? ¿Ya sabes tu número de la suerte?
            Qué esperas!!"
            image={ horoscapusIMG }
            url="https://horoscapus.netlify.app/"
            callToAction="Consultar"
          />
          <CardProyect
            title="Sudoku"
            description="Sudoku, creado con JavaScript, a su vez consumiendo un API que genera tableros de forma aleatoria para jugadas infinitas."
            image={ sudokuIMG }
            url="https://deft-pasca-ae2b2c.netlify.app/"
            callToAction="Jugar"
          />

          {showAll && (
            <>
              <CardProyect
                title="Clon: Banco de Chile"
                description="Esta es una réplica de la página del Banco de Chile, se adapta tanto versión escritorio como versión móvil, desarrollada en React."
                image={ bancoIMG }
                url="https://stirring-sunflower-7e4b6f.netlify.app/"
                callToAction="Visitar"
              />
              <CardProyect
                title="Pacman"
                description="En el siguiente proyecto, verás JavaScript en su máxima expresión, una vez que lo juegues querás aprender a programar"
                image={ pacmanIMG }
                url="https://pacman-js-only.netlify.app/"
                callToAction="Jugar"

              />
              
            </>
          )}
        </div>

        <button
          className="btn btn-primary"
          onClick={ handleMoreProyects }
          style={{ width: "250px" }}
        >
          {" "}
          {showAll ? "Ocultar" : "Mostrar más"}{" "}
        </button>
      </section>
    </div>
  );
};
