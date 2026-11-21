import { courses } from "../data/courses";
import { asset } from "../lib/asset";

export function TeachingPage() {
  return (
    <>
      <section className="fire-band">
        <img
          className="fire-band-img"
          src={asset("assets/brand/prometheus-band.jpg")}
          alt=""
          aria-hidden
        />
        <div className="container fire-band-content">
          <p className="kicker">Yale SOM</p>
          <h1>Teaching</h1>
          <p className="page-lead">
            Courses that turn managers into builders—using generative AI, agents, and modern tools.
            No prior coding experience required for the foundations course.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container course-grid">
          {courses.map((c) => (
            <article className="course" key={c.title + c.term}>
              <div className="term">{c.term}</div>
              <h2>{c.title}</h2>
              <p>{c.blurb}</p>
              {c.href ? (
                <a className="btn btn-primary" href={c.href} target="_blank" rel="noreferrer">
                  Open course site →
                </a>
              ) : (
                <span className="btn btn-ghost" aria-disabled="true">
                  Course site coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
