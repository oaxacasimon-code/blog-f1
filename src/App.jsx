import React, { useState } from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Frameworks from "./components/Frameworks";
import Agiles from "./components/Agiles";
import Contacto from "./components/Contact";
import "./App.css";

function App() {
  const [seccion, setSeccion] = useState("blog");

  return (
    <>
      {/* Video de fondo global */}
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/f1-monoplazas.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      <div className="container">
        <Menu setSeccion={setSeccion} />

        <div className="content">
          {/* Montamos y desmontamos componentes según sección */}
          {seccion === "blog" && <Blog />}
          {seccion === "frameworks" && <Frameworks />}
          {seccion === "agiles" && <Agiles />}
          {seccion === "contacto" && <Contacto />}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;