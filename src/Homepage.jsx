import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE, EMAIL, PHONE } from './constants';
import { PROJECTS, getProjectPath } from './data/projects';
import { useCopyToClipboard } from './hooks/useCopyToClipboard';
import './Homepage.css';

export default function Homepage() {
  const [copied, copyToClipboard] = useCopyToClipboard();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Custom wheel-driven section snapping. Replaces native CSS scroll-snap so
  // the transition speed can be controlled directly, and so the Projects
  // section's resting point can be nudged to clear the fixed navbar/footer.
  useEffect(() => {
    const SNAP_MIN_WIDTH = 900; // matches the layout breakpoint where the footer stops being fixed
    const SCROLL_DURATION = 1200; // ms — ~50% slower than a typical native snap transition
    const EPSILON = 4;

    let animationFrame = null;
    let isAnimating = false;

    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const getTargets = () => {
      const about = document.querySelector('.about');
      const projects = document.querySelector('.projects');
      const navbar = document.querySelector('.navbar');
      const vh = window.innerHeight;
      const navbarH = navbar ? navbar.offsetHeight : 0;
      const maxScroll = document.documentElement.scrollHeight - vh;

      const targets = [0];
      // Visual top offset (distance from viewport top) the About section's
      // *heading* lands at once centered — Projects reuses this same offset
      // so both headings sit at the same height below the navbar when snapped.
      let headingTopOffset = navbarH + 56 + 56;

      if (about) {
        const centered = about.offsetTop + about.offsetHeight / 2 - vh / 2;
        targets.push(clamp(centered, 0, maxScroll));
        const aboutPaddingTop = parseFloat(getComputedStyle(about).paddingTop) || 0;
        headingTopOffset = vh / 2 - about.offsetHeight / 2 + aboutPaddingTop;
      }

      if (projects) {
        const projectsPaddingTop = parseFloat(getComputedStyle(projects).paddingTop) || 0;
        const target = projects.offsetTop + projectsPaddingTop - headingTopOffset;
        targets.push(clamp(target, 0, maxScroll));
      }

      return targets;
    };

    const animateScrollTo = (targetY) => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      const startY = window.scrollY;
      const distance = targetY - startY;
      if (Math.abs(distance) < 1) return;
      const startTime = performance.now();
      isAnimating = true;

      const step = (now) => {
        const t = Math.min((now - startTime) / SCROLL_DURATION, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(t));
        if (t < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          isAnimating = false;
          animationFrame = null;
        }
      };
      animationFrame = requestAnimationFrame(step);
    };

    const handleWheel = (event) => {
      if (window.innerWidth <= SNAP_MIN_WIDTH) return;

      if (isAnimating) {
        event.preventDefault();
        return;
      }

      const targets = getTargets();
      const currentY = window.scrollY;
      const direction = event.deltaY > 0 ? 1 : -1;
      const lastIndex = targets.length - 1;

      // At or past the last managed target and scrolling further down: let
      // native scrolling take over so the page can still reach its true end.
      if (direction === 1 && currentY >= targets[lastIndex] - EPSILON) return;

      // Past the last managed target and scrolling back up (e.g. from the
      // true bottom of the page): return to that target first, rather than
      // jumping straight past it to the previous section.
      if (direction === -1 && currentY > targets[lastIndex] + EPSILON) {
        event.preventDefault();
        animateScrollTo(targets[lastIndex]);
        return;
      }

      // At the very top already: let scrolling up continue natively (no-op).
      if (direction === -1 && currentY <= targets[0] + EPSILON) return;

      let currentIndex = 0;
      let smallestDiff = Infinity;
      targets.forEach((y, i) => {
        const diff = Math.abs(y - currentY);
        if (diff < smallestDiff) {
          smallestDiff = diff;
          currentIndex = i;
        }
      });

      const nextIndex = clamp(currentIndex + direction, 0, lastIndex);
      event.preventDefault();
      animateScrollTo(targets[nextIndex]);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

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
            <div className="about-photo">
              <img
                src={`${BASE}assets/profile.jpg`}
                alt="Barbara Borini portrait"
              />
            </div>
            <div className="about-text">
              <h2>Get to know me</h2>
              <div className="about-copy">
                <p>
                  I’m a Multimedia &amp; UX Design student at Aarhus Business Academy, with an{' '}
                  <strong>analytical heart</strong> and a <strong>creative mind</strong>.
                </p>
                <p>
                  As an INTP, I thrive at the intersection of <strong>logic and creativity</strong>
                  —whether that’s building robust Figma design systems, structuring advanced
                  interactive prototypes, or exploring design through fine art, fashion, and
                  architecture.
                </p>
                <p>
                  I look at UX design like a master building set: every component, variable, and
                  interaction needs to connect seamlessly to create a complete, scalable
                  experience. Focused on <strong>quality assurance</strong> and objective{' '}
                  <strong>problem-solving</strong>, I love learning the rules of a system, and
                  knowing precisely when and how to <strong>break them to innovate</strong>.{' '}
                  <strong>;)</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="projects" aria-label="Projects">
          <h2 className="projects-heading">My projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((project) => {
              const cover = (
                <>
                  <div className="project-cover">
                    <video
                      src={`${BASE}assets/${project.video}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <p className="project-title">{project.title}</p>
                </>
              );

              return project.hasDetailPage ? (
                <Link
                  to={getProjectPath(project.slug)}
                  className="project-card project-card--clickable"
                  key={project.slug}
                >
                  {cover}
                </Link>
              ) : (
                <article className="project-card" key={project.slug}>
                  {cover}
                </article>
              );
            })}
          </div>
        </section>
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
