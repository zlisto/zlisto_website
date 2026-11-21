import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

const features = [
  {
    to: "/teaching",
    icon: "assets/icons/teaching.png",
    title: "Teaching",
    text: "Hands-on Yale SOM courses on AI foundations and generative AI for social media—built for managers, not CS majors.",
  },
  {
    to: "/arcade",
    icon: "assets/icons/arcade.png",
    title: "Arcade of Alexandria",
    text: "An online library of educational video games built from course textbooks—students play through the material instead of just reading it.",
  },
  {
    to: "/metaverse",
    icon: "assets/icons/metaverse.png",
    title: "Metaverse Web",
    text: "An open protocol for 3D worlds on the web: portals instead of links, a public registry, and a vibe-coder-friendly starter world.",
  },
  {
    to: "/consulting",
    icon: "assets/icons/consulting.png",
    title: "AI Consulting",
    text: "Practical help designing agents, workflows, and AI strategy for teams that want results without the hype.",
  },
];

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
            Special Advisor for AI Initiatives at Yale School of Management.
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
          <div className="feature-grid feature-grid-2">
            {features.map((f) => (
              <Link className="feature feature-with-icon" to={f.to} key={f.to}>
                <img className="feature-icon" src={asset(f.icon)} alt="" />
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
