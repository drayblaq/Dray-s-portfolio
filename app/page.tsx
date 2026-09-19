import Image from "next/image";
import { profile, projects, skills } from "@/lib/content";

export default function Home() {
  return (
    <main className="shell">
      <nav className="nav">
        <div className="nav__name">
          <strong>{profile.shortName}</strong>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-faint)" }}>
            Paris, FR
          </span>
        </div>
        <div className="nav__links">
          <a href="#about">about</a>
          <a href="#work">work</a>
          <a href="#skills">skills</a>
          <a href="#contact">contact</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="eyebrow">
          <span>Epitech Paris / PGE4</span>
          <span className="dot" />
          <span>Full stack, mobile first</span>
          <span className="dot" />
          <span>1 to 2 years building products</span>
        </div>
        <h1>{profile.name}</h1>
        <p>
          I build and ship real products, not classroom exercises. Flutter, Next.js and Supabase
          developer based in Paris, currently studying at Epitech.
        </p>
        {profile.available ? (
          <div className="badge">
            <span className="badge__pulse" />
            Open to internships and freelance work
          </div>
        ) : null}
        <div className="cta-row">
          <a className="btn" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
            View GitHub
          </a>
        </div>
      </header>

      <section id="about" className="section about">
        <div className="about__col">
          <h2 className="section__label" style={{ margin: 0 }}>
            Who am I?
          </h2>
          <p className="about__lead">A developer who ships what he builds</p>
          <p>
            Junior full stack and mobile developer based in Paris, studying at Epitech (PGE4), with 1
            to 2 years of hands on experience building products that real people use.
          </p>
          <p>
            I am Alabi Damilare. I treat code as a craft and a product decision at the same time:
            clean interfaces, fast apps, and a backend I can trust in production. Founder of Sedo, a
            parcel delivery app live for Cotonou, Benin.
          </p>
          <p>
            I work across the full stack, from Flutter mobile apps to Next.js web apps and Supabase
            or Firebase backends, and I keep shipping side projects to stay sharp.
          </p>
        </div>
        <div className="facts">
          <div className="facts__row">
            <span>school</span>
            <span>{profile.school}</span>
          </div>
          <div className="facts__row">
            <span>role</span>
            <span>Founder, Sedo</span>
          </div>
          <div className="facts__row">
            <span>based in</span>
            <span>{profile.location}</span>
          </div>
          <div className="facts__row">
            <span>languages</span>
            <span>French, English</span>
          </div>
        </div>
      </section>

      <section id="work" className="section--open">
        <div className="work__head">
          <h2 className="section__label" style={{ margin: 0 }}>
            Selected work
          </h2>
          <span className="work__count">03</span>
        </div>

        <article className="flagship">
          <div className="flagship__grid">
            <div className="flagship__body">
              <div className="flagship__title">
                <h3>Sedo</h3>
                <span className="tag">Founder</span>
                <span className="note">launching on Google Play and the App Store</span>
              </div>
              <a
                className="link-out"
                href="https://www.sedochap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                sedochap.com <span style={{ color: "var(--accent-strong)" }}>-&gt;</span>
              </a>
              <p>
                A parcel delivery app connecting customers with independent riders in Cotonou, Benin.
                I designed the product, built the Flutter apps for customers and riders, the Supabase
                backend and the Next.js landing site, and I am now preparing the store launch.
              </p>
              <ul className="bullets">
                <li>
                  <span>+</span>Live order tracking and rider assignment
                </li>
                <li>
                  <span>+</span>Auth, pricing and delivery state machine on Supabase
                </li>
                <li>
                  <span>+</span>Built for a market where most deliveries are still arranged by phone
                </li>
              </ul>
              <div className="chips">
                {["Flutter", "Supabase", "Next.js", "Dart"].map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flagship__shot">
              <Image
                src="/sedo-home.jpeg"
                alt="Sedo customer app home screen with live map and parcel actions"
                width={1600}
                height={1200}
                style={{ width: "100%", maxWidth: 360, height: "auto", borderRadius: 10 }}
                priority
              />
            </div>
          </div>
        </article>

        <div className="cards">
          {projects.map((p) => (
            <article className="card" key={p.name}>
              <h3>
                {p.name}
                {p.badge ? <span className="tag">{p.badge}</span> : null}
              </h3>
              <p>{p.body}</p>
              <a className="link-out" href={p.url} target="_blank" rel="noopener noreferrer">
                {p.urlLabel} <span style={{ color: "var(--accent-strong)" }}>-&gt;</span>
              </a>
              <div className="chips">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="section__label">Skills</h2>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill" key={s}>
              {s}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section--open">
        <h2 className="section__label">Contact</h2>
        <div className="contact">
          <p className="contact__lead">
            Looking for a developer who ships. Happy to talk about internships, freelance work or
            Sedo.
          </p>
          <div className="contact__grid">
            <div className="contact__item">
              <span>email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact__item">
              <span>linkedin</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                alabi-damilare
              </a>
            </div>
            <div className="contact__item">
              <span>instagram</span>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
                dray_blaq
              </a>
            </div>
            <div className="contact__item">
              <span>github</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                drayblaq
              </a>
            </div>
            <div className="contact__item">
              <span>location</span>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>{profile.name}, 2026</span>
        <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
          instagram
        </a>
      </footer>
    </main>
  );
}
