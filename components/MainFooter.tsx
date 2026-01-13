import WavePattern from "@/components/WavePattern";
import "@/styles/MainFooter.css";
import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";

function MainFooter() {
  return (
    <div
      className="footer-container"
      style={{
        overflowX: "hidden",
      }}
    >
      <WavePattern colorHex="000" />
      <footer className="reverse-bg" id="contact">
        <h2 className="section-title">Entre em contato</h2>
        <nav className="contact-container">
          <ul className="contact-list">
            <li>
              <a
                href="https://mailto:gmazurkiewitz@gmail.com"
                rel="external"
                target="_blank"
                className="contact-link"
              >
                <AiFillMail></AiFillMail>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gustavo-mazurkiewitz-665058301/"
                rel="external"
                target="_blank"
                className="contact-link"
              >
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5551997775860"
                rel="external"
                target="_blank"
                className="contact-link"
              >
                <AiFillPhone></AiFillPhone>
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright">Gustavo Mazurkiewitz &copy; 2026</div>
      </footer>
    </div>
  );
}

export default MainFooter;
