import { useEffect, useState } from "react"
import { gallery, reasons, reviews, services, site, photo } from "../data/site"

const heroShots = [
  photo("/images/hero-1.jpg"),
  photo("/images/hero-2.jpg"),
  photo("/images/hero-3.jpg"),
  photo("/images/hero-4.jpg"),
]

export function HomePage() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % heroShots.length), 5000)
    return () => window.clearInterval(t)
  }, [])

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-navy">
        {heroShots.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/25" />
        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-end px-5 pb-16 pt-32">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-teal">
            Utah · Licensed & insured · {site.years} years
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl leading-[0.95] font-semibold text-paper sm:text-7xl">
            Quality painting and remodeling.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg">
            Rocky Mountain Paint LLC brings color, craft, and a clean job site to homes and
            businesses across Utah. Interior, exterior, lacquer, epoxy, and remodel work — done
            with care.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-rust px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-paper hover:bg-rust-dark"
            >
              Free estimate
            </a>
            <a
              href="#work"
              className="rounded-full border border-paper/40 px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-paper hover:border-paper"
            >
              See the work
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rust">About us</p>
            <h2 className="font-display mt-2 text-4xl text-navy sm:text-5xl">Committed to quality and integrity</h2>
            <p className="mt-5 leading-relaxed text-muted">
              With years of experience, we deliver dependable painting and remodeling for
              residential and commercial clients across Utah. Omar and the crew bid fairly, keep
              the timeline, and leave a finish that holds up.
            </p>
            <a
              href="#services"
              className="mt-7 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-rust hover:text-navy"
            >
              More about what we do →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={photo("/images/gallery-2.jpg")} alt="Finished exterior" className="h-56 w-full rounded-xl object-cover sm:h-72" />
            <img src={photo("/images/crew.jpg")} alt="Painter on the job" className="mt-8 h-56 w-full rounded-xl object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rust">Services</p>
              <h2 className="font-display mt-2 text-4xl text-navy sm:text-5xl">Bringing new life to spaces</h2>
            </div>
            <a href="#services" className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              All services →
            </a>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <a
                key={s.id}
                href="#services"
                className="group overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-navy/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-navy">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal">
            Your next project begins here
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display max-w-xl text-4xl sm:text-5xl">Let’s bring the vision to life.</h2>
            <a
              href={site.phoneHref}
              className="rounded-full bg-rust px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-paper hover:bg-rust-dark"
            >
              Get your free quote
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rust">Recent work</p>
          <h2 className="font-display mt-2 text-4xl text-navy sm:text-5xl">Showcasing the latest jobs</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.slice(0, 8).map((shot) => (
              <a key={shot.src} href="#work" className="group relative overflow-hidden rounded-xl">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent px-3 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper">
                  {shot.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
          <img
            src={photo("/images/project-interior.jpg")}
            alt="Interior remodel and paint"
            className="h-full max-h-[32rem] w-full rounded-2xl object-cover"
          />
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rust">Why us</p>
            <h2 className="font-display mt-2 text-4xl text-navy">The Rocky Mountain difference</h2>
            <ul className="mt-8 space-y-5">
              {reasons.map((r) => (
                <li key={r.title} className="border-l-2 border-rust pl-4">
                  <h3 className="font-display text-xl text-navy">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted">{r.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rust">Testimonials</p>
          <h2 className="font-display mt-2 text-4xl text-navy">What clients say</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote key={r.name} className="rounded-2xl bg-sand p-6 ring-1 ring-navy/5">
                <p className="leading-relaxed text-ink">“{r.quote}”</p>
                <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-rust">
                  {r.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
