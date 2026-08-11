// Single source of truth for the project grid on the homepage and the
// case-study detail pages. Add a new entry here (and a matching component
// in `src/pages/projects/`, registered in `src/pages/projectRegistry.js`)
// to scale the case-study feature to the remaining projects.
export const PROJECTS = [
  {
    slug: 'hidden-places',
    title: 'Hidden places: Discovering Aarhus’ techno scene',
    video: 'AarhusTechno-video.mp4',
    hasDetailPage: true,
  },
  {
    slug: 'bla-sol-festival',
    title: 'Blå Sol Festival: Map feature for mobile app',
    video: 'BlaSol-video.mp4',
    hasDetailPage: true,
  },
  {
    slug: 'spilcafeen',
    title: 'Mobile App for Spilcafeen (Board Games Cafe)',
    video: 'Spilcafeen-video.mp4',
    hasDetailPage: true,
  },
  {
    slug: 'cph-fashion-week',
    title: 'InfoScreen for Copenhagen Fashion Week',
    video: 'CPHFW-video.mp4',
    hasDetailPage: true,
  },
];

export const getProjectPath = (slug) => `/project/${slug}`;
