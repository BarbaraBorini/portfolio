import HiddenPlaces from './projects/HiddenPlaces';
import BlaSol from './projects/BlaSol';
import Spilcafeen from './projects/Spilcafeen';
import CphFashionWeek from './projects/CphFashionWeek';

// Maps a project slug (see src/data/projects.js) to its detail-page
// component. Add an entry here once a project's case-study page is built.
export const PROJECT_PAGES = {
  'hidden-places': HiddenPlaces,
  'bla-sol-festival': BlaSol,
  spilcafeen: Spilcafeen,
  'cph-fashion-week': CphFashionWeek,
};
