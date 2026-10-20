import { asset } from "../lib/asset";

export function MetaversePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">mvw/0.1</p>
          <h1>Metaverse Web</h1>
          <p className="page-lead">
            The Metaverse Web treats 3D worlds like web pages: portals instead of links, spawn points
            instead of anchors, and a public registry instead of a closed platform. Anyone can host a
            world, link to anyone else, and show up in Metaverse Square—no central server required.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container meta-grid">
          <article className="shot-card">
            <img
              src={asset("assets/metaverse/metaverse-square.png")}
              alt="Metaverse Square with Labubuldore"
            />
            <h3>Metaverse Square</h3>
            <p>
              The plaza hub. Every world in the registry gets a portal in the ring. Talk to
              Labubuldore to search and travel, or walk through a doorway yourself.
            </p>
            <a
              className="btn btn-primary"
              href="https://zlisto.github.io/hub_world/?spawn=by_starter_world"
              target="_blank"
              rel="noreferrer"
            >
              Enter the Square →
            </a>
          </article>

          <article className="shot-card">
            <img
              src={asset("assets/metaverse/starter-world.png")}
              alt="Starter World room with portal"
            />
            <h3>Starter World</h3>
            <p>
              An empty room waiting to become yours. Talk to Tauhid for a tour of the protocol, then
              walk the pink portal to Metaverse Square. Copy this template to ship your own world.
            </p>
            <a
              className="btn btn-primary"
              href="https://zlisto.github.io/world_starter/?spawn=default"
              target="_blank"
              rel="noreferrer"
            >
              Open Starter World →
            </a>
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">How it works</p>
              <h2 className="section-title">Protocol in plain language</h2>
            </div>
          </div>
          <div className="feature-grid">
            <div className="feature">
              <h3>Worlds = sites</h3>
              <p>
                A world is a normal website you walk around in. It serves a manifest at{" "}
                <code>/.well-known/metaverse.json</code> with its name, spawn points, and portals.
              </p>
            </div>
            <div className="feature">
              <h3>Portals = links</h3>
              <p>
                Walk through a doorway and you arrive at another world&apos;s URL with{" "}
                <code>?spawn=…</code>. Worlds work alone in a tab or inside the Metaverse Browser.
              </p>
            </div>
            <div className="feature">
              <h3>Registry = directory</h3>
              <p>
                The public registry is one JSON file. Metaverse Square reads it live and builds a
                portal for every listed world.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <a
              className="btn btn-ghost"
              href="https://github.com/zlisto/metaverse_registry"
              target="_blank"
              rel="noreferrer"
            >
              Registry on GitHub →
            </a>{" "}
            <a
              className="btn btn-ghost"
              href="https://github.com/zlisto/metaverse_web/blob/main/PROTOCOL.md"
              target="_blank"
              rel="noreferrer"
            >
              Read the protocol →
            </a>
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">For vibe coders</p>
              <h2 className="section-title">Add your own world</h2>
            </div>
          </div>
          <div className="steps">
            <article className="step">
              <h3>Copy the starter</h3>
              <p>
                Use the{" "}
                <a href="https://github.com/zlisto/world_starter" target="_blank" rel="noreferrer">
                  world_starter
                </a>{" "}
                template (or ask a vibe coder / AI assistant to fork it). Rename the world in{" "}
                <code>App.jsx</code> and <code>public/.well-known/metaverse.json</code>, then shape
                the room in <code>layout.js</code> / <code>World.jsx</code>.
              </p>
            </article>
            <article className="step">
              <h3>Host it anywhere</h3>
              <p>
                Deploy as a static site (GitHub Pages works). Keep a <code>.nojekyll</code> file so
                the <code>.well-known</code> manifest is served. Open your world alone, then open it
                in the Metaverse Browser to confirm name, presence, and portals.
              </p>
            </article>
            <article className="step">
              <h3>List it in the registry</h3>
              <p>
                Open a pull request adding one entry to <code>worlds.json</code>. If you only add
                your own world with a public https address, it can merge automatically after checks
                pass—then your portal appears in Metaverse Square within minutes.
              </p>
              <pre className="code-block">{`{
  "id": "your_world_id",
  "name": "Your World Name",
  "address": "https://you.github.io/your_world/",
  "owner": "your_github"
}`}</pre>
            </article>
            <article className="step">
              <h3>Link both ways</h3>
              <p>
                Put a portal in your world to Metaverse Square (or any friend&apos;s world), and make
                sure your manifest has a spawn for people arriving from the square. That&apos;s the
                whole handshake—no permission required.
              </p>
            </article>
          </div>
          <div className="actions" style={{ marginTop: "1.75rem" }}>
            <a
              className="btn btn-primary"
              href="https://github.com/zlisto/world_starter"
              target="_blank"
              rel="noreferrer"
            >
              Starter template →
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/zlisto/metaverse_registry#add-your-world"
              target="_blank"
              rel="noreferrer"
            >
              How to get listed →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
