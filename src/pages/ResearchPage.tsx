import { research } from "../data/research";
import { asset } from "../lib/asset";

export function ResearchPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Projects</p>
          <h1>Research</h1>
          <p className="page-lead">
            Information operations, social networks, machine learning, and decision-making under
            uncertainty.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {research.map((item) => (
            <article className="research-item" key={item.title}>
              <details>
                <summary>
                  <div className="research-journal">{item.journal || "Working paper"}</div>
                  <h2>{item.title}</h2>
                  <div className="research-authors">{item.authors}</div>
                  {item.paper ? (
                    <a
                      className="chip"
                      href={item.paper}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Paper
                    </a>
                  ) : null}
                </summary>
                {(item.abstract || item.img) && (
                  <div className="research-body">
                    {item.abstract ? <p>{item.abstract}</p> : <div />}
                    {item.img ? <img src={asset(item.img)} alt="" loading="lazy" /> : null}
                  </div>
                )}
              </details>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
