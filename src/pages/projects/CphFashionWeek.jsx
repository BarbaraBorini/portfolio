import { BASE } from '../../constants';
import { Tag, TagDivider, Meta } from '../CaseStudyBlocks';
import '../CaseStudy.css';

const ASSETS = `${BASE}assets/projects/cph-fashion-week/`;
const SHARED = `${BASE}assets/projects/shared/`;

export default function CphFashionWeek() {
  return (
    <article className="case-study">
      <div className="case-frame">
        <img className="case-logo" src={`${BASE}assets/Logo.png`} alt="Barbara Borini logo" />

        <header className="case-header">
          <div className="case-title-block">
            <h1 className="case-title">InfoScreen for Copenhagen Fashion Week</h1>

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
              Alona Vlasenko, Bibiana Tonková, Barbara Borini, Karel Hána, Kateryna Mishchenko
            </Meta>
            <Meta label="Role">Lead UX/UI Designer &amp; Developer (Academic Project)</Meta>
            <Meta label="Timeline">Apr - May 2026</Meta>
          </div>

          <hr className="case-divider" />
        </header>

        <img
          className="case-image"
          style={{ aspectRatio: '800 / 432' }}
          src={`${ASSETS}proto-1.png`}
          alt="Copenhagen Fashion Week InfoScreen — runways and schedule"
        />
        <img
          className="case-image"
          style={{ aspectRatio: '800 / 440' }}
          src={`${ASSETS}proto-2.png`}
          alt="Copenhagen Fashion Week InfoScreen — upcoming events and venue map"
        />
      </div>
    </article>
  );
}
