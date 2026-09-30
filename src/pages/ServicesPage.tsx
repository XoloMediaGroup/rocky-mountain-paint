import { process, services, site } from "../data/site"

export function ServicesPage() {
  return (
    <div className="bg-paper pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rust">What we offer</p>
        <h1 className="font-display mt-2 text-5xl text-navy sm:text-6xl">Our services</h1>
        <p className="mt-4 max-w-2xl text-muted">
          High-quality painting and remodeling for homes and businesses. Every job is prepped
          properly, coated with premium materials, and finished so it lasts.
        </p>

        <div className="mt-14 space-y-16">
          {services.map((s, idx) => (
            <article
              key={s.id}
              id={s.id}
              className={`grid items-center gap-8 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:[&>img]:order-2" : ""}`}
            >
              <img src={s.image} alt="" className="h-80 w-full rounded-2xl object-cover lg:h-[26rem]" />
              <div>
                <h2 className="font-display text-4xl text-navy">{s.title}</h2>
                <p className="mt-2 text-rust">{s.blurb}</p>
                <p className="mt-4 leading-relaxed text-muted">{s.body}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-navy hover:text-rust"
                >
                  Request this service →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rust">How we work</p>
          <h2 className="font-display mt-2 text-4xl text-navy">From idea to lasting finish</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <figure key={step.n} className="overflow-hidden rounded-2xl bg-sand">
                <img src={step.image} alt="" className="aspect-[4/5] w-full bg-sand object-contain" />
                <figcaption className="p-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-rust">{step.n}</p>
                  <h3 className="font-display mt-1 text-2xl text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted">{step.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl bg-navy p-8 text-paper md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-3xl">Residential</h2>
            <p className="mt-3 text-paper/80">
              Interiors to exteriors — we help homeowners transform living spaces with precision
              and care, and leave lasting value in every room.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl">Commercial</h2>
            <p className="mt-3 text-paper/80">
              Durable coatings and a schedule that respects your hours. We work efficiently to
              keep downtime down and the finish professional.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={site.phoneHref}
            className="inline-block rounded-full bg-rust px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-paper hover:bg-rust-dark"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
