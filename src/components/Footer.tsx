import { site, photo } from "../data/site"

export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={photo("/images/logo.png")} alt="" className="h-14 w-auto rounded-md bg-paper px-2 py-1" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/70">
            Licensed and insured painting and remodeling across Utah. Interior, exterior stain,
            lacquer, epoxy floors, and clear coat — done on time, done right.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wide text-rust">Visit</h2>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>{site.area}</li>
            <li>
              <a className="hover:text-paper" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
            <li>
              <a className="break-all hover:text-paper" href={site.emailHref}>
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wide text-rust">Site</h2>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <a href="#home" className="hover:text-paper">
                Home
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-paper">
                Work
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-paper">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-paper">
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-rust">
              Facebook
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-rust">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Rocky Mountain Paint LLC. All rights reserved.</p>
          <p>Photos from completed jobs.</p>
        </div>
      </div>
    </footer>
  )
}
