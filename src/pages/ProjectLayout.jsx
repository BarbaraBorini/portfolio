import { Link } from 'react-router-dom';
import { BASE, EMAIL, PHONE } from '../constants';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import './ProjectLayout.css';

// Shared chrome for every project case-study page: a non-sticky navbar and
// footer (unlike the homepage's fixed versions) wrapping the page-specific
// content passed in as `children`.
export default function ProjectLayout({ children }) {
  const [copiedId, copy] = useCopyToClipboard();

  return (
    <div className="project-page">
      <nav className="project-navbar" aria-label="Site header">
        <div className="project-navbar-headline">
          <p>MULTIMEDIA DESIGNER</p>
          <p>BASED IN AARHUS — DENMARK</p>
        </div>
        <Link to="/" className="project-navbar-name">
          Barbara Borini
        </Link>
      </nav>

      <main className="project-content">{children}</main>

      <footer className="project-footer">
        <div className="project-contact-details">
          <div className="project-contact-item">
            <div className="project-contact-label">
              <span>EMAIL</span>
              <span className="project-contact-line" aria-hidden="true" />
            </div>
            <button
              type="button"
              className="project-contact-copy"
              onClick={() => copy(EMAIL, 'email')}
            >
              <span className="project-contact-copy-text" style={{ visibility: copiedId === 'email' ? 'hidden' : 'visible' }}>
                {EMAIL}
              </span>
              <span className="project-contact-copy-text" style={{ visibility: copiedId === 'email' ? 'visible' : 'hidden' }}>
                Copied!
              </span>
            </button>
          </div>

          <div className="project-contact-item">
            <div className="project-contact-label">
              <span>PHONE</span>
              <span className="project-contact-line" aria-hidden="true" />
            </div>
            <button
              type="button"
              className="project-contact-copy"
              onClick={() => copy(PHONE, 'phone')}
            >
              <span className="project-contact-copy-text" style={{ visibility: copiedId === 'phone' ? 'hidden' : 'visible' }}>
                {PHONE}
              </span>
              <span className="project-contact-copy-text" style={{ visibility: copiedId === 'phone' ? 'visible' : 'hidden' }}>
                Copied!
              </span>
            </button>
          </div>
        </div>

        <div className="project-contact-links">
          <a href="https://linkedin.com/in/barbara-borini/" target="_blank" rel="noopener noreferrer">
            LINKEDIN →
          </a>
          <span className="project-contact-divider">\</span>
          <a href={`${BASE}resume.pdf`} download>
            RESUME ↓
          </a>
        </div>
      </footer>
    </div>
  );
}
