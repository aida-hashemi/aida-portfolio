import "./Navbar.css";
const menuItems = [
  { name: "home", link: "#home" },
  { name: "about", link: "#about" },
  { name: "skills", link: "#skills" },
  { name: "projects", link: "#projects" },
  { name: "contact", link: "#contact" },
];

function Navbar({ isDark, setIsDark }) {
  return (
    <nav>
      <h2>Aida Portfolio</h2>

      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsDark(!isDark)}>{isDark ? "☀️" : "🌙"}</button>
    </nav>
  );
}

export default Navbar;
