import { useState, type FormEvent } from "react"
import { site } from "../data/site"

export function ContactPage() {
  const [sentHint, setSentHint] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "")
    const phone = String(data.get("phone") || "")
    const email = String(data.get("email") || "")
    const message = String(data.get("message") || "")
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`,
    )
    const subject = encodeURIComponent(`Estimate request from ${name || "website"}`)
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`
    setSentHint(true)
  }

  return (
    <div className="bg-paper pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rust">Contact</p>
        <h1 className="font-display mt-2 text-5xl text-navy sm:text-6xl">Keep in touch</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Questions or a new project — we’ll talk it through and give you a free estimate.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-sand p-6">
              <h2 className="font-display text-2xl text-navy">Areas we serve</h2>
              <p className="mt-2 text-muted">{site.area}</p>
            </div>
            <div className="rounded-2xl bg-sand p-6">
              <h2 className="font-display text-2xl text-navy">Phone</h2>
              <a href={site.phoneHref} className="mt-2 block text-rust hover:text-navy">
                {site.phone}
              </a>
              <p className="mt-1 text-sm text-muted">{site.hours}</p>
            </div>
            <div className="rounded-2xl bg-sand p-6">
              <h2 className="font-display text-2xl text-navy">Email</h2>
              <a href={site.emailHref} className="mt-2 block break-all text-rust hover:text-navy">
                {site.email}
              </a>
            </div>
            <div className="flex gap-4 px-1 text-sm font-semibold uppercase tracking-[0.14em]">
              <a href={site.facebook} target="_blank" rel="noreferrer" className="text-navy hover:text-rust">
                Facebook
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="text-navy hover:text-rust">
                Instagram
              </a>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="rounded-2xl bg-sand p-6 sm:p-8 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-navy">
                Name
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-navy/10 bg-paper px-3 py-2.5 outline-none focus:ring-2 focus:ring-rust"
                />
              </label>
              <label className="block text-sm font-medium text-navy">
                Phone
                <input
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full rounded-lg border border-navy/10 bg-paper px-3 py-2.5 outline-none focus:ring-2 focus:ring-rust"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-navy">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-navy/10 bg-paper px-3 py-2.5 outline-none focus:ring-2 focus:ring-rust"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-navy">
              Message
              <textarea
                name="message"
                rows={6}
                required
                className="mt-1 w-full rounded-lg border border-navy/10 bg-paper px-3 py-2.5 outline-none focus:ring-2 focus:ring-rust"
              />
            </label>
            <button
              type="submit"
              className="mt-6 rounded-full bg-rust px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-paper hover:bg-rust-dark"
            >
              Send message
            </button>
            {sentHint && (
              <p className="mt-3 text-sm text-muted">
                Your email app should open with the message ready. If it doesn’t, write us at{" "}
                <a className="text-rust" href={site.emailHref}>
                  {site.email}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
