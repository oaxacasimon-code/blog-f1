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
            <h2>Python</h2>
            Si estás empezando en Python, conocer los tipos de datos es fundamental para comprender cómo el lenguaje almacena y maneja la información.
Los tipos de datos indican qué tipo de valor guarda una variable y qué operaciones se pueden realizar con ella.
Los más básicos son números, cadenas, booleanos y listas, y se usan en casi todos los programas.
Los números permiten realizar cálculos, operaciones matemáticas y comparaciones lógicas.
Las cadenas se utilizan para trabajar con texto, mostrar mensajes al usuario y manejar información escrita.
Los booleanos solo pueden ser True o False y son esenciales para controlar condiciones y flujos del programa.
Las listas permiten guardar varios valores en una sola variable, recorrerlos con ciclos y modificarlos fácilmente.
Comprender bien estos tipos de datos ayuda a evitar errores comunes y a escribir programas más claros, eficientes y fáciles de entender.
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
            <h2>Función</h2>
            Las funciones son una parte clave de la programación en Python y se utilizan en prácticamente cualquier proyecto.
Una función es un bloque de código que realiza una tarea específica y se ejecuta cuando se le llama.
Su principal ventaja es que permiten reutilizar código, evitando escribir las mismas instrucciones varias veces.
Esto ayuda a reducir errores y a mantener el programa más ordenado.
Las funciones permiten dividir un programa grande en partes pequeñas y manejables.
Pueden recibir datos como parámetros, trabajar con ellos y devolver un resultado.
También facilitan las pruebas y correcciones, ya que cada función cumple una tarea concreta.
A medida que tus programas crecen, las funciones se vuelven indispensables para mantener un código claro, organizado y fácil de modificar.
Aprender a usarlas correctamente te ayuda a pensar de forma lógica y a escribir código más profesional.
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
            <h2>Estructuras de Datos</h2>
            Las estructuras de datos son esenciales para almacenar y organizar información en Python de manera eficiente.
Permiten manejar grandes cantidades de datos de forma ordenada y accesible.
Las principales estructuras son listas, tuplas, diccionarios y sets, y cada una tiene características específicas.
Las listas son ordenadas y modificables, ideales para datos que cambian con el tiempo.
Las tuplas son similares a las listas, pero se usan cuando los valores deben mantenerse fijos.
Los diccionarios almacenan información en pares de clave y valor, lo que permite búsquedas rápidas y precisas.
Los sets guardan elementos únicos y ayudan a eliminar duplicados.
Elegir la estructura adecuada mejora el rendimiento del programa y hace el código más claro y eficiente.
Dominar estas estructuras te permite trabajar con datos de forma más inteligente y desarrollar programas más completos y avanzados.
          </p>
        </div>

      </div>
    </>
  );
}

export default Frameworks;