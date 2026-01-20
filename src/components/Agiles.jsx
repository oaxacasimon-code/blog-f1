import React from "react";
import "../App.css";  // si App.css está en src/

export default function BlogInstagram() {
  const reels = [
    "https://www.instagram.com/reel/DTYbNuBEmRQ/embed",
    "https://www.instagram.com/reel/DSi4XX5DLzm/embed",
    "https://www.instagram.com/reel/DSi5Z7GDBmi/embed",
    "https://www.instagram.com/reel/DTYa1mmEujo/embed",
    "https://www.instagram.com/reel/DTYbAfQknKp/embed",
    "https://www.instagram.com/reel/DSi8McjjCcf/embed",
    "https://www.instagram.com/reel/DTYapHGklzT/embed" // ← REEL 7
  ];

  return (
    <div className="container">
      <h1 className="title">Metodologias Agiles</h1>

      {/* BLOQUE 1 */}
      <section>
        <h2>Jira</h2>
        <p>
          Jira es una de las herramientas ágiles más usadas en el desarrollo de software.<br></br>
          Se utiliza principalmente para trabajar con Scrum y Kanban.
          En Jira puedes crear historias de usuario, tareas y bugs.
          También puedes organizar el trabajo en sprints.
          Esto ayuda a ver qué se está haciendo y qué falta por terminar.
          Por eso es muy popular en equipos profesionales.
          <br></br>
        </p>
        
        <h2>Tipos de Metodologias</h2>
        <p>
          “En tecnología usamos metodologías para organizar proyectos. Las más conocidas son las ágiles y las tradicionales. Las ágiles, como Scrum, funcionan por etapas cortas donde vas mejorando sobre la marcha. Son perfectas cuando el proyecto cambia mucho. <br></br>
          Las tradicionales siguen un plan fijo paso por paso, y funcionan mejor cuando ya sabes exactamente qué vas a construir. No hay una mejor o peor: cada una sirve según el tipo de proyecto que tengas.”
        </p>

        <div className="video-grid">
          {reels.slice(0, 2).map((url, index) => (
            <div className="video-card" key={index}>
              <iframe
                src={url}
                width="350"
                height="710"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="fullscreen"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUE 2 */}
      <section>
        <h2>¿Qué es una Metodología?</h2>
        <p>
          “Una metodología es básicamente la forma en la que organizas tu proyecto para que todos sepan qué hacer. Define pasos, tiempos, roles y cómo se avanza. <br></br>
          Sin metodología, cada quien trabaja por su lado y se vuelve un caos. En programación ayuda muchísimo porque te mantiene ordenado, te permite medir tu progreso y facilita que tu equipo entienda lo que está pasando. No es solo teoría: te ayuda a trabajar mejor y más rápido.”
          <br></br>
        </p>
        
        <h2>¿Qué es Kanban?</h2>
        <p>
          Kanban es una metodología ágil enfocada en la organización visual del trabajo.
          Se utiliza un tablero con columnas que muestran el estado de cada tarea.
          Esto permite identificar problemas y retrasos fácilmente.<br></br>
          Kanban no trabaja por sprints, sino por flujo continuo. 
          Es ideal para equipos que manejan muchas tareas al mismo tiempo.
          Su enfoque es mejorar la eficiencia.
        </p>

        <div className="video-grid">
          {reels.slice(2, 4).map((url, index) => (
            <div className="video-card" key={index}>
              <iframe
                src={url}
                width="350"
                height="710"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="fullscreen"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUE 3 */}
      <section>
        <h2>¿Qué es XP?</h2>
        <p>
          Extreme Programming, también conocida como XP, se enfoca en la calidad del software.
          Promueve prácticas como pruebas frecuentes y programación en pareja.
          La comunicación constante es clave en esta metodología.
          XP permite adaptarse rápido a los cambios del cliente.<br></br>
          Su principal objetivo es reducir errores.
          Así se logra un software más confiable.
          <br></br>
        </p>
          
        <h2>¿Qué son los Diagramas de Flujo?</h2>
        <p>
          “Un diagrama de flujo es una herramienta visual que te ayuda a entender qué va a hacer tu programa antes de escribir una sola línea de código. Dibujas paso por paso lo que debe pasar: si esto ocurre, <br></br>
          entonces haz esto otro. Es perfecto para evitar errores y aclarar ideas. Cuando empiezas a programar, te ayuda muchísimo a planear y resolver problemas sin atorarte. Es como tener un mapa antes de entrar al código.”
        </p>

        <div className="video-grid">
          {reels.slice(4, 6).map((url, index) => (
            <div className="video-card" key={index}>
              <iframe
                src={url}
                width="350"
                height="710"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="fullscreen"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUE 4 – 7mo video */}
      <section>
        <h2>Scrum</h2>
        <p>
         Scrum divide el trabajo en periodos cortos llamados sprints, que duran normalmente dos semanas.
         Aquí todos tienen un rol claro: el Product Owner decide qué se hace, el Scrum Master ayuda al equipo y los desarrolladores construyen el producto.
         La idea es entregar avances rápidos, recibir retroalimentación y mejorar constantemente.<br></br>
         Por eso Scrum es ideal para proyectos donde los cambios son frecuentes.
        </p>

        <div className="video-grid">
          <div className="video-card">
            <iframe
              src={reels[6]}
              width="350"
              height="710"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}