// Small, reusable presentational building blocks shared across every
// project case-study page, so each project file only needs to describe its
// own content (see src/pages/projects/HiddenPlaces.jsx for an example).

export function Tag({ icon, children }) {
  return (
    <span className="case-tag">
      {icon && <img src={icon} alt="" />}
      {children}
    </span>
  );
}

export function TagDivider() {
  return <span className="case-tag-divider" aria-hidden="true" />;
}

export function Meta({ label, children }) {
  return (
    <p>
      <strong>{label}:</strong> {children}
    </p>
  );
}

export function Section({ title, subtitle, muted, children }) {
  return (
    <section className={`case-section${muted ? ' case-section--muted' : ''}`}>
      {title && <h3 className="case-section-title">{title}</h3>}
      {subtitle && <h4 className="case-section-subtitle">{subtitle}</h4>}
      {children}
    </section>
  );
}

export function ImagePair({ children }) {
  return <div className="case-image-pair">{children}</div>;
}
