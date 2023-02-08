import { useBreakingBad } from "../hooks";
import "../styles/quote.css";

export const Quote = () => {
  const { brBadQ, changeQuote, isLoading } = useBreakingBad();

  const handleQuote = () => {
    changeQuote();
  };
  if (isLoading) {
    return (
      <section className="page">
        <div id="quote">
      <i className="bi bi-incognito" style={{fontSize:24}}></i>

          <p>Frases grandiosas de Breaking Bad (consumidas a travez de una API)</p>

          <h4>Cargando..</h4>
          <br />
          <code>Cargando..</code>
          <br />
          <button className="btn btn-secondary"> Cargando </button>
          <br />
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <div id="quote">
      <i className="bi bi-incognito" style={{fontSize:24}}></i>
        <p>Frases grandiosas de Breaking Bad (consumidas a travez de una API)</p>

        <h4>{brBadQ[0]?.quote}</h4>
        <code>{brBadQ[0]?.author}</code>
        <br />
        <button className="btn btn-light" onClick={handleQuote}>
          {" "}
          Otra frase{" "}
        </button>
        <br />
      </div>
    </section>
  );
};
