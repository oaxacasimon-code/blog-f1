function Menu({ setSeccion }) {
  return (
    <nav className="menu">
      <ul>
        <li onClick={() => setSeccion("blog")}>Blog</li>
        <li onClick={() => setSeccion("frameworks")}>Frameworks</li>
        <li onClick={() => setSeccion("agiles")}>Metodologías Agiles</li>
        <li onClick={() => setSeccion("contacto")}>Contacto</li>
      </ul>
    </nav>
  );
}

export default Menu;
