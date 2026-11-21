import { asset } from "../lib/asset";

const ARCADE_URL = "https://zlisto.github.io/arcade_of_alexandria/?spawn=from_square";

const games = [
  {
    title: "The Legend of Valence",
    course: "Organic Chemistry",
    book: "John McMurry, Organic Chemistry (OpenStax), Chapters 1–12",
    image: "assets/arcade/valence-forge.jpg",
    alt: "The Legend of Valence: Kai in the Forge of Hybrids, with signs for ethylene and acetylene bonds",
    description:
      "A 3D action-adventure across the Kingdom of Valence. Each of 12 dungeons is a chapter of the book: you learn bonding, hybridization and reaction mechanisms by using them to solve puzzles and beat bosses.",
    url: "https://zlisto.github.io/legend-of-valence/",
  },
  {
    title: "Mini Max",
    course: "Game Theory",
    book: "Osborne & Rubinstein, A Course in Game Theory",
    image: "assets/arcade/minimax.jpg",
    alt: "Mini Max gameplay: Lisa in the Casino Arcade stage, Chapter 3: Mixed strategies",
    description:
      "A hand-drawn, side-scrolling beat 'em up. Every enemy follows a real strategy from the book, so winning means reading the game: best responses, mixed strategies and Nash equilibria become fighting moves.",
    url: "https://zlisto.github.io/mini-max/",
  },
  {
    title: "Winding World",
    course: "Algebraic Topology",
    book: "Allen Hatcher, Algebraic Topology",
    image: "assets/arcade/winding-world.jpg",
    alt: "Winding World gameplay: Torus Terraces level, where Emmy Boundary explains how maps carry loops",
    description:
      "Shape can change, topology can't. As the courier Gyroid, you stretch paths, wind loops and push them through maps to stop Count Null from collapsing the world, so homotopy and the fundamental group become the core mechanics.",
    url: "https://zlisto.github.io/game_algebraic_topology/",
  },
];

export function ArcadePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Library of playable knowledge</p>
          <h1>Arcade of Alexandria</h1>
          <p className="page-lead">
            An online library of educational video games built from course textbooks. A team of AI
            agents reads a book, maps what it teaches, and builds a game where the ideas are the
            gameplay, not trivia bolted onto it. Walk the hall, find a cabinet, and play the course.
          </p>
          <div className="actions" style={{ marginTop: "1.5rem" }}>
            <a className="btn btn-primary" href={ARCADE_URL} target="_blank" rel="noreferrer">
              Enter the Arcade →
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Now playing</p>
              <h2 className="section-title">Games in the arcade</h2>
            </div>
          </div>
          <div className="arcade-games">
            {games.map((g) => (
              <article className="shot-card" key={g.title}>
                <img src={asset(g.image)} alt={g.alt} loading="lazy" />
                <p className="kicker" style={{ margin: "0 0 0.35rem" }}>
                  {g.course}
                </p>
                <h3>{g.title}</h3>
                <p>{g.description}</p>
                <p className="game-source">Based on {g.book}</p>
                <a className="btn btn-primary" href={g.url} target="_blank" rel="noreferrer">
                  Play {g.title} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">How it works</p>
              <h2 className="section-title">From textbook to game</h2>
            </div>
          </div>
          <div className="feature-grid">
            <div className="feature">
              <h3>Read the book</h3>
              <p>
                AI agents pull the chapters, definitions and examples out of a textbook and build a
                map of which ideas depend on which.
              </p>
            </div>
            <div className="feature">
              <h3>Turn ideas into mechanics</h3>
              <p>
                Each concept becomes something you do in the game, so playing well means
                understanding the material.
              </p>
            </div>
            <div className="feature">
              <h3>Stay true to the source</h3>
              <p>
                Every puzzle and rule traces back to the book, and each game credits its authors so
                they can share in what it earns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
