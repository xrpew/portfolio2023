import { NavBar } from "./components/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { PictureNASA } from "./pages/PictureNASA";
import { ProyectosPage } from "./pages/ProyectosPage";
import { Quote } from "./pages/Quote";
import { TecsPage } from "./pages/TecsPage";
import './styles/global.css'


function App() {

  return (
    <>
      <NavBar/>
      <HomePage />
      <ProyectosPage />
      <AboutPage />
      <PictureNASA/>
      <TecsPage/>
      <Quote/>
      <ContactPage/>
    </>
  );
}

export default App;
