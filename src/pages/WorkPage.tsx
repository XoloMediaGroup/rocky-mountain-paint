import { gallery } from "../data/site"

export function WorkPage() {
  return (
    <div className="bg-paper pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rust">Portfolio</p>
        <h1 className="font-display mt-2 text-5xl text-navy sm:text-6xl">The work</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Real jobs from Rocky Mountain Paint — interiors, exteriors, stain, lacquer, and floors.
          These are Omar’s photos from the field.
        </p>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((shot) => (
            <figure key={shot.src} className="mb-4 break-inside-avoid overflow-hidden rounded-xl">
              <img src={shot.src} alt={shot.alt} className="w-full object-cover" />
              <figcaption className="bg-sand px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-navy px-8 py-10 text-center text-paper">
          <h2 className="font-display text-3xl">Ready for yours?</h2>
          <p className="mx-auto mt-2 max-w-lg text-paper/75">
            Free, no-obligation estimate. Call or send a note and we’ll walk the job.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-full bg-rust px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-paper hover:bg-rust-dark"
          >
            Get a quote
          </a>
        </div>
      </div>
    </div>
  )
}
