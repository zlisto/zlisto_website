import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/tauhid.zaman@yale.edu";

export function ConsultingPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "AI Consulting inquiry — zlisto.com");
    data.append("_template", "table");
    data.append("_captcha", "false");

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">New practice</p>
          <h1>AI Consulting</h1>
          <p className="page-lead">
            I help teams move from AI curiosity to working systems—agents, workflows, and clear
            strategy grounded in how organizations actually operate. This practice is new; engagement
            is hands-on, candid, and scoped to what creates value now.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container consult-grid">
          <div>
            <div className="section-head" style={{ marginBottom: "1.25rem" }}>
              <div>
                <p className="kicker">Services</p>
                <h2 className="section-title" style={{ fontSize: "1.7rem" }}>
                  How we can work together
                </h2>
              </div>
            </div>
            <div className="feature-grid" style={{ gridTemplateColumns: "1fr" }}>
              <div className="feature">
                <h3>AI foundations for leadership</h3>
                <p>
                  Briefings and working sessions so executives and managers understand agents,
                  evaluation, risk, and where generative AI actually pays off.
                </p>
              </div>
              <div className="feature">
                <h3>Agent & workflow design</h3>
                <p>
                  Prototype document intelligence, research agents, search, and internal tools—built
                  with modern vibe-coding practices so your team can own and extend them.
                </p>
              </div>
              <div className="feature">
                <h3>Social media & information systems</h3>
                <p>
                  Guidance at the intersection of generative AI and online platforms: content
                  systems, influence, and practical safeguards informed by research.
                </p>
              </div>
            </div>
            <p className="page-lead" style={{ marginTop: "1.5rem" }}>
              Based at Yale SOM, I bring teaching experience with non-technical builders plus research
              on networks and information operations. Ideal partners: startups, mid-market teams, and
              university or nonprofit groups ready to experiment carefully.
            </p>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <p className="kicker" style={{ margin: 0 }}>
              Inquiry
            </p>
            <h2 style={{ margin: 0, fontSize: "1.35rem" }}>Start a conversation</h2>
            <label>
              Name
              <input name="name" required autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
              />
            </label>
            <label>
              Organization
              <input name="organization" autoComplete="organization" placeholder="Company or team" />
            </label>
            <label>
              Interest
              <select name="interest" defaultValue="Agent & workflow design">
                <option>AI foundations for leadership</option>
                <option>Agent & workflow design</option>
                <option>Social media & information systems</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What are you trying to build or better understand?"
              />
            </label>
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send inquiry"}
            </button>
            {status === "sent" && (
              <p className="form-status">Thanks—your message is on its way. I&apos;ll reply by email.</p>
            )}
            {status === "error" && (
              <p className="form-status" style={{ color: "var(--pink-2)" }}>
                Something went wrong. Email me directly at{" "}
                <a href="mailto:tauhid.zaman@yale.edu">tauhid.zaman@yale.edu</a>.
              </p>
            )}
            <p className="form-note">
              Submissions go to tauhid.zaman@yale.edu. No spam—just a direct reply when I can help.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
