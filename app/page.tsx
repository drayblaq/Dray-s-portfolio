"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile, projects, skills } from "@/lib/content";
import { translations, type Lang } from "@/lib/i18n";

const LANG_KEY = "lang";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === "en" || saved === "fr") setLang(saved);
    } catch {
      // ignore unavailable storage
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function changeLang(next: Lang) {
    setLang(next);
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {
      // ignore unavailable storage
    }
  }

  const t = translations[lang];

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
          <a href="#about">{t.nav.about}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? "is-active" : ""}
              onClick={() => changeLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <span>/</span>
            <button
              type="button"
              className={lang === "fr" ? "is-active" : ""}
              onClick={() => changeLang("fr")}
              aria-pressed={lang === "fr"}
            >
              FR
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="eyebrow">
          <span>{profile.school}</span>
          <span className="dot" />
          <span>{t.eyebrow.role}</span>
          <span className="dot" />
          <span>{t.eyebrow.experience}</span>
        </div>
        <h1>{profile.name}</h1>
        <p>{t.hero.lead}</p>
        {profile.available ? (
          <div className="badge">
            <span className="badge__pulse" />
            {t.hero.available}
          </div>
        ) : null}
        <div className="cta-row">
          <a className="btn" href={`mailto:${profile.email}`}>
            {t.hero.cta}
          </a>
        </div>
      </header>

      <section id="about" className="section about">
        <div className="about__col">
          <h2 className="section__label" style={{ margin: 0 }}>
            {t.about.title}
          </h2>
          <p className="about__lead">{t.about.lead}</p>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
        <div className="facts">
          <div className="facts__row">
            <span>{t.about.facts.school}</span>
            <span>{profile.school}</span>
          </div>
          <div className="facts__row">
            <span>{t.about.facts.role}</span>
            <span>{t.about.facts.roleValue}</span>
          </div>
          <div className="facts__row">
            <span>{t.about.facts.basedIn}</span>
            <span>{profile.location}</span>
          </div>
          <div className="facts__row">
            <span>{t.about.facts.languages}</span>
            <span>{t.about.facts.languagesValue}</span>
          </div>
        </div>
      </section>

      <section id="work" className="section--open">
        <div className="work__head">
          <h2 className="section__label" style={{ margin: 0 }}>
            {t.work.title}
          </h2>
          <span className="work__count">03</span>
        </div>

        <article className="flagship">
          <div className="flagship__grid">
            <div className="flagship__body">
              <div className="flagship__title">
                <h3>Sedo</h3>
                <span className="tag">{t.work.sedo.tag}</span>
                <span className="note">{t.work.sedo.note}</span>
              </div>
              <a
                className="link-out"
                href="https://www.sedochap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                sedochap.com <span style={{ color: "var(--accent-strong)" }}>-&gt;</span>
              </a>
              <p>{t.work.sedo.body}</p>
              <ul className="bullets">
                {t.work.sedo.bullets.map((b) => (
                  <li key={b}>
                    <span>+</span>
                    {b}
                  </li>
                ))}
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
              <p>{p.body[lang]}</p>
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
        <h2 className="section__label">{t.skills.title}</h2>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill" key={s}>
              {s}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section--open">
        <h2 className="section__label">{t.contact.title}</h2>
        <div className="contact">
          <p className="contact__lead">{t.contact.lead}</p>
          <div className="contact__grid">
            <div className="contact__item">
              <span>{t.contact.labels.email}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact__item">
              <span>{t.contact.labels.linkedin}</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                alabi-damilare
              </a>
            </div>
            <div className="contact__item">
              <span>{t.contact.labels.instagram}</span>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
                dray_blaq
              </a>
            </div>
            <div className="contact__item">
              <span>{t.contact.labels.location}</span>
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
