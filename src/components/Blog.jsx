import React, { useEffect, useMemo, useState } from "react";

function Blog() {
  const storageKey = useMemo(() => "blog_posts", []);

  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem("blog_posts");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(posts));
    } catch {}
  }, [posts, storageKey]);

  const addPost = (e) => {
    e.preventDefault();

    const title = newTitle.trim();
    const content = newContent.trim();
    if (!title || !content) return;

    const next = [
      {
        id: crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()),
        title,
        content,
        createdAt: new Date().toISOString(),
      },
      ...posts,
    ];

    setPosts(next);
    setNewTitle("");
    setNewContent("");
    setIsAdding(false);
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <h1 className="title">Blog Dinámico – Fórmula 1</h1>

      {/* ================= POSTS DINÁMICOS ================= */}
      <section>
        <h2>Posts</h2>

        {!isAdding && (
          <button
            type="button"
            className="btn-primary"
            onClick={() => setIsAdding(true)}
          >
            Agregar post
          </button>
        )}

        {isAdding && (
          <div
            className="modal-overlay"
            role="dialog"
            aria-modal="true"
            onClick={() => setIsAdding(false)}
          >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Nuevo post</h3>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setIsAdding(false)}
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>

              <form onSubmit={addPost} className="post-form">
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Título"
                />

                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Contenido"
                  rows={5}
                />

                <div className="post-form-actions">
                  <button type="submit" className="btn-primary">
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIsAdding(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {posts.length === 0 ? (
          <p>Aún no hay posts creados.</p>
        ) : (
          posts.map((post) => (
            <article key={post.id}>
              <h3>{post.title}</h3>

              <small className="post-date">
                🗓️{" "}
                {new Date(post.createdAt).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </small>

              <p>{post.content}</p>

              <button
                type="button"
                className="btn-danger"
                onClick={() => deletePost(post.id)}
              >
                Eliminar post
              </button>
            </article>
          ))
        )}
      </section>

      {/* ================= BLOQUE 1 ================= */}
      <section>
        <h2>¿Qué es la Fórmula 1? Y Reglas basicas para principiantes.</h2>
        <p>
          “La Fórmula 1 es la categoría más rápida y avanzada del automovilismo.
          Aquí compiten los mejores pilotos del mundo en autos diseñados con
          tecnología extrema. Cada auto cuesta millones y cada detalle está
          creado para ganar milésimas de segundo. Detrás hay equipos enormes
          trabajando en <br />
          estrategia, mecánica y aerodinámica. Es velocidad, precisión y
          competencia al máximo nivel.”
          <br />
          <br />
          “En la F1 compiten 20 pilotos y 10 equipos. Cada carrera da puntos según
          la posición en la que terminas, y el campeón es quien más puntos tiene
          al final del año. También hay puntos extra por vuelta rápida y por
          sprint. Los autos cambian cada temporada por reglas nuevas que pueden
          afectar <br />
          totalmente el rendimiento. La F1 es velocidad, estrategia y decisiones
          que cambian todo en segundos.”
        </p>

        <div className="video-grid">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@zaza_30913/video/7585572637556903175"
            data-video-id="7585572637556903175"
          >
            <section></section>
          </blockquote>

          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@zaza_30913/video/7585572973394889992"
            data-video-id="7585572973394889992"
          >
            <section></section>
          </blockquote>
        </div>
      </section>

      {/* ================= BLOQUE 2 ================= */}
      <section>
        <h2>
          ¿Cómo se decide un campeón? Y ¿Como funciona un fin de semana de
          carrera?.
        </h2>
        <p>
          “El campeón de la F1 es quien suma más puntos durante toda la
          temporada. No importa si gana menos carreras: lo importante es ser
          constante. Cada carrera da puntos y también puedes ganar uno extra por
          la vuelta rápida. En las carreras sprint también se suman puntos.
          <br />
          Un mal fin de semana puede cambiar todo el campeonato. Por eso la F1 es
          tan emocionante: nada está asegurado hasta la última carrera.”
          <br />
          <br />
          “El fin de semana de F1 tiene tres partes: prácticas, clasificación y
          carrera. En prácticas los pilotos prueban el auto y ajustan todo. En
          clasificación buscan la vuelta más rápida para asegurar la mejor
          posición de salida.
          <br />
          Y el domingo es la carrera, donde todo se decide: estrategia, llantas,
          clima, errores… cualquier cosa puede cambiar el resultado. Cada día es
          importante para ganar.”
        </p>

        <div className="video-grid">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@zaza_30913/video/7585573281328123144"
            data-video-id="7585573281328123144"
          >
            <section></section>
          </blockquote>

          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@zaza_30913/video/7585573584064531719"
            data-video-id="7585573584064531719"
          >
            <section></section>
          </blockquote>
        </div>
      </section>

      {/* ================= BLOQUE 3 ================= */}
      <section>
        <h2>Los autos de F1, ¿Que hace un equipo de F1?.</h2>
        <p>
          “Los autos de F1 son máquinas diseñadas al extremo: motores híbridos
          súper potentes, aerodinámica hecha para pegar el auto al suelo, frenos
          increíbles y neumáticos que duran muy poco pero rinden muchísimo.
          <br />
          Cada parte se diseña para ganar milésimas de segundo. Un pequeño cambio
          puede mejorar o arruinar todo el rendimiento. Es ingeniería al límite.”
          <br />
          <br />
          “Un equipo de F1 no es solo un piloto y un mecánico. Son cientos de
          personas: ingenieros, estrategas, analistas de datos, especialistas en
          aerodinámica, mecánicos y directores.
          <br />
          Todos trabajan para que el auto sea lo más rápido y estable posible.
          Desde la fábrica hasta el pit crew, cada decisión afecta el resultado.
          La F1 es un trabajo en equipo gigante.”
        </p>

        <div className="video-grid">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@zaza_30913/video/7586461540136586503"
            data-video-id="7586461540136586503"
          >
            <section></section>
          </blockquote>

          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@zaza_30913/video/7586462348559322375"
            data-video-id="7586462348559322375"
          >
            <section></section>
          </blockquote>
        </div>
      </section>

      {/* ================= BLOQUE 4 ================= */}
      <section>
        <h2>Formación de pilotos desde el karting Y Jovenes promesa de la F1.</h2>
        <p>
          “Los pilotos normalmente empiezan en karting desde niños. Luego pasan
          por categorías como F4, F3 y F2, donde compiten contra los mejores
          jóvenes del mundo. Solo unos pocos llegan a la F1, y llegar no garantiza
          quedarse. Cada nivel es más difícil, más caro y más competitivo.
          <br />
          Ser piloto profesional requiere talento, disciplina y muchísima
          preparación.”
          <br />
          <br />
          “En la F1 hay varios jóvenes que podrían dominar el futuro: Piastri,
          Antonelli, Bearman y Hadjar son algunos de los nombres más fuertes.
          Tienen talento, resultados y equipos que creen en ellos.
          <br />
          Muchos de ellos vienen de categorías inferiores donde ya demostraron de
          lo que son capaces. En los próximos años podrían ser protagonistas de
          campeonatos.”
        </p>

        <div className="video-grid">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@zaza_30913/video/7586463103890541831"
            data-video-id="7586463103890541831"
          >
            <section></section>
          </blockquote>

          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@zaza_30913/video/7586464032513608978"
            data-video-id="7586464032513608978"
          >
            <section></section>
          </blockquote>
        </div>
      </section>
    </>
  );
}

export default Blog;