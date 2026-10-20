import { courses } from "../data/courses";

export function TeachingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Yale SOM</p>
          <h1>Teaching</h1>
          <p className="page-lead">
            Courses that turn managers into builders—using generative AI, agents, and modern tools.
            No prior coding experience required for the foundations course.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container course-grid">
          {courses.map((c) => (
            <article className="course" key={c.href + c.term}>
              <div className="term">{c.term}</div>
              <h2>{c.title}</h2>
              <p>{c.blurb}</p>
              <a className="btn btn-primary" href={c.href} target="_blank" rel="noreferrer">
                Open course site →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
