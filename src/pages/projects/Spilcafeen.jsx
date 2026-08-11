import { BASE } from '../../constants';
import { Tag, TagDivider, Meta } from '../CaseStudyBlocks';
import '../CaseStudy.css';

const ASSETS = `${BASE}assets/projects/spilcafeen/`;
const SHARED = `${BASE}assets/projects/shared/`;

export default function Spilcafeen() {
  return (
    <article className="case-study">
      <div className="case-frame">
        <img className="case-logo" src={`${BASE}assets/Logo.png`} alt="Barbara Borini logo" />

        <header className="case-header">
          <div className="case-title-block">
            <h1 className="case-title">Mobile App for Spilcafeen (Board Games Cafe)</h1>

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
              Alona Vlasenko, Barbara Borini, Gabriela Pencheva, Florencia Murekian, Magdalena
              Szymanska
            </Meta>
            <Meta label="Role">Lead UX/UI Designer &amp; Developer (Academic Project)</Meta>
            <Meta label="Timeline">Apr - May 2026</Meta>
          </div>

          <hr className="case-divider" />
        </header>

        <img
          className="case-image"
          style={{ aspectRatio: '800 / 520' }}
          src={`${ASSETS}proto-1.png`}
          alt="Spilcafeen app screens: splash, welcome, and welcome back"
        />

        <div className="case-image-row">
          <img
            className="case-image case-image--cover"
            style={{ aspectRatio: '220 / 1328' }}
            src={`${ASSETS}home-page.png`}
            alt="Spilcafeen home screen"
          />
          <img
            className="case-image case-image--cover"
            style={{ aspectRatio: '220 / 1601' }}
            src={`${ASSETS}all-games.png`}
            alt="Spilcafeen all games screen"
          />
          <img
            className="case-image case-image--cover"
            style={{ aspectRatio: '220 / 1601' }}
            src={`${ASSETS}most-played.png`}
            alt="Spilcafeen most played games screen"
          />
        </div>
      </div>
    </article>
  );
}
