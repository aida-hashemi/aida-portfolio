import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Aida Portfolio</h3>

      <p>Built with React</p>

      <div className="footer-links">
        <a href="#" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aida-hasheminasab-246142b2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="mailto:aida.hasheminasab@email.com">Email</a>
      </div>

      <p className="copyright">© 2026 Aida. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
