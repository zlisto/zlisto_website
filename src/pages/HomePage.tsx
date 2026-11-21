import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden>
          <img src={asset("assets/brand/tauhid-hero-dbz.jpg")} alt="" />
        </div>
        <div className="hero-content">
          <p className="kicker">Yale School of Management</p>
          <h1>
            Tauhid <span>Zaman</span>
          </h1>
          <p className="hero-title">
            Lecturer and Special Advisor for AI Initiatives at Yale School of Management.
          </p>
          <p className="hero-lead">
            I teach managers how to build with AI and put it to work across their organizations.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/consulting">
              AI Consulting
            </Link>
            <Link className="btn btn-ghost" to="/teaching">
              View Teaching
            </Link>
          </div>
          <div className="interest-row">
            <div className="label">Focus areas</div>
            <span>AI Strategy</span>
            <span>Agents & Workflows</span>
            <span>AI Content Creation</span>
            <span>Rapid Prototyping with Vibe Coding</span>
            <span>Social Networks</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">What I do</p>
              <h2 className="section-title">Build the AI future</h2>
            </div>
          </div>
          <div className="feature-grid">
            <Link className="feature" to="/teaching">
              <h3>Teaching</h3>
              <p>
                Hands-on Yale SOM courses on AI foundations and generative AI for social media—built
                for managers, not CS majors.
              </p>
            </Link>
            <Link className="feature" to="/metaverse">
              <h3>Metaverse Web</h3>
              <p>
                An open protocol for 3D worlds on the web: portals instead of links, a public
                registry, and a vibe-coder-friendly starter world.
              </p>
            </Link>
            <Link className="feature" to="/consulting">
              <h3>AI Consulting</h3>
              <p>
                Practical help designing agents, workflows, and AI strategy for teams that want
                results without the hype.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
