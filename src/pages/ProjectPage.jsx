import { Navigate, useParams } from 'react-router-dom';
import ProjectLayout from './ProjectLayout';
import { PROJECT_PAGES } from './projectRegistry';

// Route entry point for /project/:slug — looks up the matching case-study
// component and renders it inside the shared, non-sticky layout. Falls back
// to the homepage if the slug has no detail page yet.
export default function ProjectPage() {
  const { slug } = useParams();
  const Page = PROJECT_PAGES[slug];

  if (!Page) {
    return <Navigate to="/" replace />;
  }

  return (
    <ProjectLayout>
      <Page />
    </ProjectLayout>
  );
}
