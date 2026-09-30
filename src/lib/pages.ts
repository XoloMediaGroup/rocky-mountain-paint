export type Page = "home" | "services" | "work" | "contact"

export function parseHash(): Page {
  const hash = window.location.hash.replace("#", "").split("?")[0]
  if (hash === "services" || hash === "work" || hash === "contact") return hash
  return "home"
}
