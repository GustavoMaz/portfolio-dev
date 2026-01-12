import WavePattern from "@/components/WavePattern";
import '@/styles/MainFooter.css'
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
      <footer className="reverse-bg">
        <h2 className="section-title">Entre em contato</h2>
        <nav className="contact-container">
          <ul className="contact-list">
            <li><a href="#" rel="external" className="contact-link"><AiFillMail></AiFillMail></a></li>
            <li><a href="#" rel="external" className="contact-link"><AiFillLinkedin></AiFillLinkedin></a></li>
            <li><a href="#" rel="external" className="contact-link"><AiFillPhone></AiFillPhone></a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default MainFooter;
