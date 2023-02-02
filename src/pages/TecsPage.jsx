import '../styles/tecs.css'

export const TecsPage = () => {
  return (
    <section className="page">
        <div id="tecs">

<p style={{alignSelf:'center', fontFamily:'Roboto'}}>Estas son las tecnologías que manejo</p>
        <div className="containerTecs">

        <div style={{textAlign:'center'}}>
        <img src="src/assets/js.png" class="imageTecs" alt="Javascript" />
        <p>javaScript</p>
        </div>

        <div style={{textAlign:'center', color:'white'}}>
        <img src="src/assets/css-3.png" class="imageTecs" alt="css" />
        <p>CSS</p>
        </div>

        <div style={{textAlign:'center'}}>
        <img src="src/assets/react.png" class="imageTecs" alt="react" />
        <p>React</p>
        </div>

        <div style={{textAlign:'center',  color:'white'}}>
        <img src="src/assets/html.png" class="imageTecs" alt="html" />
        <p>HTML</p>
        </div>

        </div>
        </div>
    </section>
  )
}
