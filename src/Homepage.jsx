import { useState } from 'react';
import './Homepage.css';

const BASE = import.meta.env.BASE_URL;
const EMAIL = 'borini.barbara@gmail.com';
const PHONE = '+45 55214857';

const ABOUT_TEXT = `Loren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsumLoren  ipsum `;

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
          <p className="hero-name">Barbara Borini</p>
        </div>

        <section className="hero" aria-label="Hero">
          <h1 className="hero-portfolio">
            PORT
            <br />
            FOLIO
          </h1>
          <p className="hero-subtitle">UI/UX DESIGN</p>
          <p className="hero-name-mobile">Barbara Borini</p>
        </section>

        <section className="about" aria-label="About me">
          <div className="about-inner">
            <div className="about-text">
              <h2>About me</h2>
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
                <img src={`${BASE}assets/line-long.svg`} alt="" className="contact-line" />
              </div>
              <button
                type="button"
                className="contact-copy"
                onClick={() => copyToClipboard(EMAIL, 'email')}
              >
                {copied === 'email' ? 'Copied!' : EMAIL}
              </button>
            </div>

            <div className="contact-item">
              <div className="contact-label">
                <span>PHONE</span>
                <img src={`${BASE}assets/line-short.svg`} alt="" className="contact-line" />
              </div>
              <button
                type="button"
                className="contact-copy"
                onClick={() => copyToClipboard(PHONE, 'phone')}
              >
                {copied === 'phone' ? 'Copied!' : PHONE}
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
