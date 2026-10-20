import { publications } from "../data/publications";

export function PublicationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Writing</p>
          <h1>Publications</h1>
          <p className="page-lead">
            Peer-reviewed research on social media, information operations, AI-adjacent systems, and
            network science.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container pub-list">
          {publications.map((p) => (
            <article className="pub-item" key={p.title + p.year}>
              <div className="pub-meta">
                <span className="pub-year">{p.year}</span>
                <span>—</span>
                <span>{p.journal}</span>
              </div>
              <a href={p.href} target="_blank" rel="noreferrer">
                {p.title}
              </a>
              <div className="pub-authors">{p.authors}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
