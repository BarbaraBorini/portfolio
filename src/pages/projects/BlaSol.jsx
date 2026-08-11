import { BASE } from '../../constants';
import { Tag, TagDivider, Meta, Section } from '../CaseStudyBlocks';
import '../CaseStudy.css';

const ASSETS = `${BASE}assets/projects/bla-sol-festival/`;
const SHARED = `${BASE}assets/projects/shared/`;

export default function BlaSol() {
  return (
    <article className="case-study">
      <div className="case-frame">
        <img className="case-logo" src={`${BASE}assets/Logo.png`} alt="Barbara Borini logo" />

        <div className="case-body-content">
          <header className="case-header">
            <div className="case-title-block">
              <h1 className="case-title">Blå Sol Festival: Map feature for mobile app</h1>

              <div className="case-tags">
                <Tag>UX/UI Design</Tag>
                <Tag>User Research</Tag>
                <Tag>Usability testing</Tag>
                <Tag icon={`${SHARED}figma-icon.png`}>Figma Prototyping</Tag>
                <Tag icon={`${SHARED}code-icon.svg`}>React</Tag>
                <TagDivider />
              </div>
            </div>

            <div className="case-meta">
              <Meta label="Author">
                Barbara Borini, Bibiana Tonková, Omar Yahir Caloca Hernández, Razvan-Mihai Radu
              </Meta>
              <Meta label="Role">Lead UX/UI Designer &amp; Developer (Academic Project)</Meta>
              <Meta label="Timeline">Apr - May 2026</Meta>
            </div>

            <hr className="case-divider" />
          </header>

          <div className="case-content">
            <Section title="Overview">
              <p>
                This project is a map feature for the Blå Sol festival app, that offers the
                festival&apos;s attendees a solution that facilitates navigation around the
                festival, helps find main locations, addresses the frustrations about long queues
                and big crowds, and reduces time attenders use to find their companions around the
                festival.
              </p>
            </Section>

            <img className="case-image" style={{ aspectRatio: '800 / 298' }} src={`${ASSETS}mockups-row.png`} alt="Map feature mockups" />

            <Section>
              <p>
                <a
                  href="https://www.figma.com/design/72KpB53cGOVd8RvmTbNsO1/Bla--Sol---Exam-project?node-id=278-834&t=YinS4370FEkYmU8w-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to complete Figma prototypes.
                </a>
              </p>
            </Section>

            <Section title="Research and discovery">
              <p>
                To understand the needs of Blå Sol festival attenders, we interviewed 12 people
                within their target group.
              </p>
              <h4 className="case-section-subtitle">Key Research Insights</h4>
              <ul>
                <li>Hanging out with friends is the main motivation when attending a festival.</li>
                <li>Finding their friends during the festival is a main frustration.</li>
                <li>
                  Attendees want to have clear information about the locations of present
                  facilities and stages.
                </li>
                <li>Overcrowding and long queues is one of the main pain-points for attenders.</li>
              </ul>
            </Section>

            <Section title="Problem statement">
              <p>
                How may we create a feature for Blå Sol Festival that facilitates the attendees&apos;
                navigation around the area, reduces the struggle of finding their friends, and
                addresses their frustrations about crowded areas and long queues?
              </p>
            </Section>

            <Section title="Target Persona">
              <p>
                To keep the target user at the center of all design decisions, we built the persona
                Mette, a 23yo Danish student, who looks forward for every summer, because that
                means she will meet her old friend at their favorite festival.
              </p>
              <img className="case-image case-image--cover" style={{ aspectRatio: '1062 / 556' }} src={`${ASSETS}persona.png`} alt="Persona: Mette, 23, Danish student" />
            </Section>

            <Section title="Ideation">
              <p>
                The research helped us identify the main need: Clear information about the
                location of facilities, stages and chill areas in-hand during the festival.
              </p>
              <p>
                Our main solution is an interactive map, that contains multiple features to address
                the individual issues:
              </p>
              <img className="case-image case-image--cover" style={{ aspectRatio: '667 / 645' }} src={`${ASSETS}solution-overview.png`} alt="Problem and solution overview" />
            </Section>

            <Section title="Map design">
              <p>
                To create the map for our solution, we started from the map that was provided by
                the client.
              </p>
              <p>
                First, we identified all the featured areas and components. (Like stages, open
                areas, toilets, staff areas, etc.)
              </p>
              <p>
                Next, we simplified it by categorizing the locations, and deciding which ones are
                relevant for the user.
              </p>
              <p>Lastly, we stylized the map, considering readability and accessibility.</p>
            </Section>

            <img className="case-image case-image--cover" style={{ aspectRatio: '800 / 419' }} src={`${ASSETS}map-design.png`} alt="Map design iterations" />

            <Section title="Conclusion">
              <p>
                This solution allows users to create private groups and track their friend&apos;s
                location, reducing time and frustration trying to find them.
              </p>
              <p>
                By identifying the energy in different areas of the festival, it allows users to
                find high energy, crowded spaces, or calm, resting areas, depending on their mood.
              </p>
              <p>
                We addressed the user frustrations about long queues by indicating facilities with
                shorter and longer queues.
              </p>
            </Section>

            <Section title="Project disclaimer" muted>
              <p>
                This project is an academic conceptual project developed as part of the Multimedia
                Design program at Business Academy Aarhus. This project was created independently
                for educational purposes, in collaboration with Blå Sol Festival.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </article>
  );
}
