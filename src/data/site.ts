export function photo(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}

export const site = {
  name: "Rocky Mountain Paint LLC",
  phone: "+1 (385) 253-0094",
  phoneHref: "tel:+13852530094",
  email: "rockymontainpaintllc@gmail.com",
  emailHref: "mailto:rockymontainpaintllc@gmail.com",
  hours: "Monday – Friday, 8:00 AM – 5:00 PM",
  area: "Salt Lake City & surrounding Utah",
  facebook: "https://www.facebook.com/rockymountainpaintllc",
  instagram: "https://www.instagram.com/rockymountainpaintllc/",
  years: "6+",
}

export const services = [
  {
    id: "interior",
    title: "Interior Painting",
    image: photo("/images/gallery-5.jpg"),
    blurb: "Rich color, clean lines, and a finish that lasts.",
    body: "From prep and color selection to a smooth, even coat — we handle walls, trim, built-ins, and doors with the same care. High-quality paint, tidy job sites, and a room that feels new when we leave.",
  },
  {
    id: "stain",
    title: "Exterior Stain",
    image: photo("/images/hero-1.jpg"),
    blurb: "Wood that looks like wood, and holds up to Utah weather.",
    body: "Siding, decks, fences, and pergolas. Premium stains that show the grain and protect against sun and snow. We prep properly — wash, repair, and coat so the job doesn’t fail in a season.",
  },
  {
    id: "lacquer",
    title: "Lacquer",
    image: photo("/images/project-lacquer.jpg"),
    blurb: "A hard, polished finish for cabinets and woodwork.",
    body: "Cabinets, furniture, and millwork get a sleek, durable lacquer that resists wear. Clean edges, even sheen, and a finish that looks built-in — not brushed on.",
  },
  {
    id: "epoxy",
    title: "Epoxy Floors",
    image: photo("/images/gallery-2.jpg"),
    blurb: "Garage, basement, and shop floors that can take a beating.",
    body: "Chemical-resistant epoxy coatings for garages, basements, and commercial spaces. Easy to clean, built to last, and available in more than one finish.",
  },
  {
    id: "clearcoat",
    title: "Interior Clear Coat",
    image: photo("/images/gallery-4.jpg"),
    blurb: "A protective layer that keeps painted rooms looking fresh.",
    body: "A transparent coat that preserves color, adds a light sheen, and stands up to dirt, moisture, and high-traffic wear. Built for hallways, kitchens, and rooms that get used.",
  },
  {
    id: "remodel",
    title: "Remodeling",
    image: photo("/images/project-interior.jpg"),
    blurb: "Painting plus the work around it — patch, repair, and refresh.",
    body: "One room or a whole property. We focus on function and finish so the space matches the vision, from planning through the last coat.",
  },
]

export const process = [
  { n: "01", title: "Listen", image: photo("/images/process-1.jpg"), body: "We walk the job, hear what you want, and bid it straight." },
  { n: "02", title: "Prep", image: photo("/images/process-2.jpg"), body: "Wash, patch, sand, and protect. The coat is only as good as the surface." },
  { n: "03", title: "Paint", image: photo("/images/process-3.png"), body: "Premium materials, even coverage, and a crew that stays on the timeline." },
  { n: "04", title: "Finish", image: photo("/images/process-4.png"), body: "Walkthrough, touch-ups, and a space you can live in the same day." },
]

export const gallery = [
  { src: photo("/images/hero-1.jpg"), alt: "Exterior stain on a wood deck and fence", label: "Exterior stain" },
  { src: photo("/images/hero-2.jpg"), alt: "Freshly painted interior living room", label: "Interior" },
  { src: photo("/images/hero-3.jpg"), alt: "Interior walls and woodwork", label: "Interior" },
  { src: photo("/images/hero-4.jpg"), alt: "Finished painting project", label: "Recent work" },
  { src: photo("/images/gallery-1.jpg"), alt: "Painter working on site", label: "On the job" },
  { src: photo("/images/gallery-2.jpg"), alt: "Epoxy garage floor", label: "Epoxy floor" },
  { src: photo("/images/gallery-3.jpg"), alt: "Interior painting project", label: "Interior" },
  { src: photo("/images/gallery-4.jpg"), alt: "Interior walls after a clean coat", label: "Interior" },
  { src: photo("/images/gallery-5.jpg"), alt: "Completed paint job", label: "Finish" },
  { src: photo("/images/project-lacquer.jpg"), alt: "Cabinet lacquer finish", label: "Lacquer" },
  { src: photo("/images/project-interior.jpg"), alt: "Interior remodeling and paint", label: "Remodel" },
  { src: photo("/images/crew.jpg"), alt: "Painter at work", label: "The crew" },
]

export const reviews = [
  {
    quote:
      "Omar and his team were great! Great quality. We had everything from our walls, trim, built-ins and doors painted. They also kept to the timeline provided.",
    name: "Alex Wenner",
  },
  {
    quote:
      "Over the last few years I have had the pleasure of working with Rocky Mountain Paint, and I am beyond impressed. Omar’s integrity shows from the bid to the last coat.",
    name: "Danny Lee",
  },
  {
    quote: "Excellent work and customer service.",
    name: "Emma Barba",
  },
]

export const reasons = [
  {
    title: "Licensed & insured",
    body: "Safe, compliant work on every residential and commercial job.",
  },
  {
    title: "Quality materials",
    body: "Premium paints and coatings chosen to last in Utah weather.",
  },
  {
    title: "Skilled crew",
    body: "Years of hands-on painting, staining, lacquer, and remodel work.",
  },
  {
    title: "On time",
    body: "Clear communication, a timeline we keep, and a site we leave clean.",
  },
]
