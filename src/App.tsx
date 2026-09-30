import { useEffect, useState } from "react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { parseHash, type Page } from "./lib/pages"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"
import { ServicesPage } from "./pages/ServicesPage"
import { WorkPage } from "./pages/WorkPage"

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    typeof window === "undefined" ? "home" : parseHash(),
  )

  useEffect(() => {
    const onHash = () => {
      setPage(parseHash())
      window.scrollTo({ top: 0, behavior: "auto" })
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return (
    <>
      <Header page={page} />
      <main id="main">
        {page === "home" && <HomePage />}
        {page === "services" && <ServicesPage />}
        {page === "work" && <WorkPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer />
    </>
  )
}
