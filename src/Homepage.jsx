import { useState } from 'react';
import './Homepage.css';

const BASE = import.meta.env.BASE_URL;
const EMAIL = 'borini.barbara@gmail.com';
const PHONE = '+45 55214857';

const ABOUT_TEXT = `I’m a Multimedia & UX Design student at Aarhus Business Academy, with an analytical heart and a deeply creative mind. As an INTP, I thrive at the intersection of logic and creativity—whether that’s building robust Figma design systems, structuring advanced interactive prototypes, or exploring design through fine art, fashion, and architecture.
I look at UX design like a master building set: every component, variable, and interaction needs to connect seamlessly to create a complete, scalable experience. Focused on quality assurance and objective problem-solving, I love learning the rules of a system, and knowing precisely when and how to break them to innovate. ;) `;

export default function Homepage() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      <nav className="navbar" aria-label="Site header">
        <div className="navbar-headline">
          <p>MULTIMEDIA DESIGNER</p>
          <p>BASED IN AARHUS — DENMARK</p>
        </div>
      </nav>

      <div className="homepage-content">
        <div className="hero-name-track" aria-hidden="false">
          <button type="button" className="hero-name" onClick={scrollToTop}>
            Barbara Borini
          </button>
        </div>

        <section className="hero" aria-label="Hero">
          <h1 className="hero-portfolio">
            PORT
            <br />
            FOLIO
          </h1>
          <p className="hero-subtitle">UI/UX DESIGN</p>
          <button type="button" className="hero-name-mobile" onClick={scrollToTop}>
            Barbara Borini
          </button>
        </section>

        <section className="about" aria-label="About me">
          <div className="about-inner">
            <div className="about-text">
              <h2>Get to know me</h2>
              <p>{ABOUT_TEXT}</p>
            </div>
            <div className="about-photo">
              <img
                src={`${BASE}assets/profile.jpg`}
                alt="Barbara Borini portrait"
              />
            </div>
          </div>
        </section>

        <div className="content-placeholder" aria-hidden="true" />
      </div>

      <footer className="contact">
        <div className="contact-inner">
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-label">
                <span>EMAIL</span>
                <span className="contact-line" aria-hidden="true" />
              </div>
              <button
                type="button"
                className="contact-copy"
                onClick={() => copyToClipboard(EMAIL, 'email')}
              >
                <span className="contact-copy-text" style={{ visibility: copied === 'email' ? 'hidden' : 'visible' }}>
                  {EMAIL}
                </span>
                <span className="contact-copy-text" style={{ visibility: copied === 'email' ? 'visible' : 'hidden' }}>
                  Copied!
                </span>
              </button>
            </div>

            <div className="contact-item">
              <div className="contact-label">
                <span>PHONE</span>
                <span className="contact-line" aria-hidden="true" />
              </div>
              <button
                type="button"
                className="contact-copy"
                onClick={() => copyToClipboard(PHONE, 'phone')}
              >
                <span className="contact-copy-text" style={{ visibility: copied === 'phone' ? 'hidden' : 'visible' }}>
                  {PHONE}
                </span>
                <span className="contact-copy-text" style={{ visibility: copied === 'phone' ? 'visible' : 'hidden' }}>
                  Copied!
                </span>
              </button>
            </div>
          </div>

          <div className="contact-links">
            <a href="https://linkedin.com/in/barbara-borini/" target="_blank" rel="noopener noreferrer">
              LINKEDIN →
            </a>
            <span className="contact-divider">\</span>
            <a href={`${BASE}resume.pdf`} download>
              RESUME ↓
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
