import React from "react";

function Frameworks() {
  return (
    <>
      <h1 className="title">Frameworks</h1>

      <div className="youtube-grid">

        {/* VIDEO 1 */}
        <div className="youtube-card">
          <div className="youtube-wrapper">
            <iframe
              src="https://www.youtube.com/embed/0O5lhAKf5a4"
              title="Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="youtube-info">
            Si estás empezando en Python, conocer los tipos de datos es muy importante para entender cómo se construyen los programas.
Los más básicos son números, cadenas, booleanos y listas.
Los números se usan para realizar cálculos y manejar valores numéricos.
Las cadenas sirven para trabajar con texto, palabras y mensajes.
Los booleanos solo pueden ser True o False y se usan para tomar decisiones dentro del código.
Las listas permiten guardar varios valores en una sola variable y facilitan la organización de la información.
Elegir correctamente el tipo de dato hace que el código sea más ordenado, fácil de leer y de mantener con el tiempo.
          </p>
        </div>

        {/* VIDEO 2 */}
        <div className="youtube-card">
          <div className="youtube-wrapper">
            <iframe
              src="https://www.youtube.com/embed/4xHBUKTn630"
              title="Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="youtube-info">
            Una de las cosas más importantes en Python son las funciones.
Una función es un bloque de código que se ejecuta cuando la llamas y que tiene una tarea específica.
Sirve para evitar repetir código, organizar mejor tu programa y hacerlo más fácil de leer y mantener.
Por ejemplo, si necesitas sumar dos números muchas veces, puedes crear una función que lo haga por ti.
Las funciones pueden recibir datos, procesarlos y devolver un resultado que luego puedes usar.
También ayudan a dividir un programa grande en partes más pequeñas y fáciles de entender.
Mientras más crece tu programa, más útiles se vuelven.
Aprender a usar funciones te ayuda a pensar como programador y a escribir código más limpio y profesional.
          </p>
        </div>

        {/* VIDEO 3 */}
        <div className="youtube-card">
          <div className="youtube-wrapper">
            <iframe
              src="https://www.youtube.com/embed/8d7dPW9YUvE"
              title="Video 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="youtube-info">
            Las estructuras de datos son fundamentales para cualquier proyecto en Python, ya que permiten organizar y manejar la información de forma eficiente.
Las principales son listas, tuplas, diccionarios y sets.
Las listas son ordenadas y modificables, ideales para guardar colecciones de datos.
Las tuplas son similares a las listas, pero no se pueden cambiar una vez creadas.
Los diccionarios funcionan con claves y valores, como una agenda donde buscas información por un nombre.
Los sets almacenan elementos sin repetir y son útiles para eliminar duplicados.
Cada estructura sirve para algo diferente, y elegir la correcta hace que el código sea más rápido y fácil de mantener.
Dominar estas estructuras te permite crear programas más organizados y avanzar hacia proyectos más complejos.
          </p>
        </div>

      </div>
    </>
  );
}

export default Frameworks;