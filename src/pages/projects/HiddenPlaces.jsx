import { BASE } from '../../constants';
import { Tag, TagDivider, Meta, Section, ImagePair } from '../CaseStudyBlocks';
import '../CaseStudy.css';

const ASSETS = `${BASE}assets/projects/hidden-places/`;
const SHARED = `${BASE}assets/projects/shared/`;

export default function HiddenPlaces() {
  return (
    <article className="case-study">
      <div className="case-frame">
        <img className="case-logo" src={`${BASE}assets/Logo.png`} alt="Barbara Borini logo" />

        <div className="case-body-content">
          <header className="case-header">
            <div className="case-title-block">
              <h1 className="case-title">Hidden places: Discovering Aarhus’ techno scene</h1>

              <div className="case-tags">
                <Tag>UX/UI Design</Tag>
                <Tag>User Research</Tag>
                <Tag>Usability testing</Tag>
                <Tag icon={`${SHARED}figma-icon.png`}>Figma Prototyping</Tag>
                <Tag icon={`${SHARED}code-icon.svg`}>HTML/CSS/JS</Tag>
                <TagDivider />
              </div>
            </div>

            <div className="case-meta">
              <Meta label="Author">Barbara Borini</Meta>
              <Meta label="Role">Lead UX/UI Designer &amp; Developer (Academic Project)</Meta>
              <Meta label="Timeline">Dec 2025 - Jan 2026</Meta>
            </div>

            <hr className="case-divider" />
          </header>

          <div className="case-content">
            <Section title="Overview">
              <p>
                When searching for techno venues in Aarhus, traditional search engines usually
                point users to commercial nightclubs. However, the authentic underground techno
                scene thrives in multi-purpose, non-profit cultural spaces like Institut for X,
                Volume Village, and Turkis. Because these venues rely heavily on word-of-mouth and
                sporadic social media updates, newcomers struggle to discover them.
              </p>
              <p>
                This project is a web platform designed to bridge this gap. It centralizes event
                information while actively onboarding users into the community&apos;s core values:
                respect, safety, inclusivity, and consent.
              </p>
            </Section>

            <video
              className="case-video"
              src={`${BASE}assets/AarhusTechno-video-detail1.mp4`}
              controls
              preload="metadata"
            />
            <video
              className="case-video"
              src={`${BASE}assets/AarhusTechno-video-detail2.mp4`}
              controls
              preload="metadata"
            />

            <Section>
              <p>
                <a
                  href="https://www.figma.com/design/Qdze4uA56407L1y0J3Vihn/Design-Exam-Project---Hidden-Places?node-id=2-2&t=4ht4Vsi7lzntgWgO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to complete Figma prototypes.
                </a>
              </p>
            </Section>

            <Section title="Research and discovery">
              <p>
                To understand both venue operators and partygoers, I conducted desk research,
                on-site field observations, and 8 qualitative interviews.
              </p>
              <h4 className="case-section-subtitle">Key findings</h4>
              <ul>
                <li>
                  Culture Over Commercialism: The community prioritizes non-judgmental spaces,
                  zero-tolerance for harassment, high-quality sound systems, and local DJ lineups.
                </li>
                <li>
                  Dispersed Information: Event details are scattered across Instagram, Facebook,
                  and word-of-mouth, often subject to last-minute venue changes.
                </li>
              </ul>
            </Section>

            <Section title="Challenge">
              <p>
                From the research, I concluded that there’s a desire to keep the events
                &ldquo;underground&rdquo;, avoiding them becoming mainstream and commercial, to
                prevent people who don&apos;t understand the culture from coming, making sure that
                everybody that joins respects the values of community.
              </p>
              <p>
                This presents a challenge: How can I make the venues easier to discover, but
                maintaining the underground, non-commercial identity at the same time?
              </p>
            </Section>

            <Section title="Breaking the rules">
              <p>
                In standard digital product design, rule #1 is efficiency: give users what they
                want immediately with minimal friction. But instead, I intentionally located the
                event calendar and event cards at the <strong>bottom of the pages</strong>.
              </p>
              <p>
                Users must scroll past the Community introduction and &ldquo;Attitude Code&rdquo;
                before reaching event dates. This creates both a{' '}
                <strong>literal and symbolic boundary</strong>: you must understand and accept the
                culture before you can join the party.
              </p>
            </Section>

            <Section title="Target Persona">
              <p>
                To keep the target user at the center of all design decisions, I built the persona
                Jonas (26), an international music student who feels disconnected from mainstream
                nightlife and seeks authentic, value-driven music communities.
              </p>
              <img
                className="case-persona-image"
                src={`${ASSETS}persona.png`}
                alt="Persona: Jonas, 26, international music student"
              />
            </Section>

            <Section title="Ideation & Testing">
              <p>
                I mapped out an Object-Oriented UX (OOUX) structure connecting Places (venues) and
                Events in a one-to-many relationship.
              </p>

              <ImagePair>
                <img className="case-image case-image--cover" style={{ aspectRatio: '474 / 250' }} src={`${ASSETS}screenshot-1.png`} alt="OOUX structure diagram" />
                <img className="case-image case-image--cover" style={{ aspectRatio: '302 / 250' }} src={`${ASSETS}screenshot-2.png`} alt="Places and Events relationship diagram" />
              </ImagePair>

              <p>
                I tested the early low-fidelity prototypes with 5 target users using the Thinking
                Aloud method.
              </p>

              <h4 className="case-section-subtitle">Iterations Based on User Testing (before and after)</h4>
              <p>
                Renamed Sections: Changed &ldquo;Values&rdquo; to &ldquo;Attitude Code&rdquo; to
                make policy expectations clearer and bolder.
              </p>

              <ImagePair>
                <img className="case-image case-image--contain" style={{ aspectRatio: '314 / 104' }} src={`${ASSETS}screenshot-3.png`} alt="Before: Values section" />
                <img className="case-image case-image--contain" style={{ aspectRatio: '426 / 116' }} src={`${ASSETS}screenshot-4.png`} alt="After: Attitude Code section" />
              </ImagePair>

              <p>
                Clarified Terminology: Replaced &ldquo;Recurrent Events&rdquo; with &ldquo;Upcoming
                Events&rdquo; to avoid user confusion.
              </p>

              <ImagePair>
                <img className="case-image case-image--cover" style={{ aspectRatio: '435 / 229' }} src={`${ASSETS}screenshot-5.png`} alt="Before: Recurrent Events" />
                <img className="case-image case-image--contain" style={{ aspectRatio: '302 / 203' }} src={`${ASSETS}screenshot-6.png`} alt="After: Upcoming Events" />
              </ImagePair>

              <p>
                Audio Control: Added an intuitive sound ON/OFF toggle in the header following user
                requests for background music controls.
              </p>

              <ImagePair>
                <img className="case-image case-image--cover" style={{ aspectRatio: '384 / 202' }} src={`${ASSETS}screenshot-7.png`} alt="Before: header without audio control" />
                <img className="case-image case-image--contain" style={{ aspectRatio: '256 / 133' }} src={`${ASSETS}screenshot-8.png`} alt="After: header with audio toggle" />
              </ImagePair>
            </Section>

            <Section title="UI & Design System">
              <h4 className="case-section-subtitle">Moodboard</h4>
              <img className="case-image case-image--cover" style={{ aspectRatio: '2230 / 1800' }} src={`${ASSETS}moodboard.png`} alt="Moodboard" />

              <h4 className="case-section-subtitle">Color palette</h4>
              <p>
                Combined signature brand accent colors from each featured venue into smooth color
                gradients, (Yellow for Institut for X, turquoise for Turkis, and orange for Volume
                Village), evoking LED party lights against dark backgrounds that mirror the
                atmosphere of late-night underground events:
              </p>

              <h4 className="case-section-subtitle">Typography</h4>
              <p>
                Bold, futuristic display headers paired with clean, readable body copy for
                accessible long-form reading.
              </p>

              <h4 className="case-section-subtitle">Style tile</h4>
              <img className="case-image case-image--cover" style={{ aspectRatio: '1428 / 925' }} src={`${ASSETS}style-tile-1.png`} alt="Style tile" />
            </Section>

            <Section title="Final Deliverable & Code Implementation">
              <p>
                The final prototype was translated into a functional, fully responsive website
                built with vanilla HTML5, CSS3, and JavaScript.
              </p>
              <p>
                Links:{' '}
                <a href="https://github.com/BarbaraBorini/Exam-project" target="_blank" rel="noopener noreferrer">
                  GitHub repository
                </a>
                <br />
                and{' '}
                <a href="https://barbaraborini.github.io/Exam-project/" target="_blank" rel="noopener noreferrer">
                  published version
                </a>
                .
              </p>
            </Section>

            <Section title="Conclusion">
              <p>
                By challenging conventional UX patterns, this project successfully balances
                discovery with subcultural preservation. It provides newcomers with an inviting
                entry point into Aarhus&apos; techno scene while safeguarding the values, safety,
                and community intimacy that make these venues special.
              </p>
            </Section>

            <img className="case-image case-image--cover" style={{ aspectRatio: '1428 / 925' }} src={`${ASSETS}style-tile-2.png`} alt="Style tile" />

            <Section title="Project disclaimer" muted>
              <p>
                This project is an academic conceptual project developed as part of the Multimedia
                Design program at Business Academy Aarhus. While on-site observation and research
                were conducted at venues like Institut for X, Turkis, and Volume Village, this
                project was created independently for educational purposes and is not directly
                affiliated with or commissioned by these organizations.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </article>
  );
}
