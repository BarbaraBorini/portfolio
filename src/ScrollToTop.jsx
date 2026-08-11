import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't reset scroll position on navigation, so switching
// routes otherwise keeps whatever scrollY the previous page was at (e.g.
// landing mid-page on a project's videos if the homepage was scrolled down
// to the project grid before clicking a card).
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
