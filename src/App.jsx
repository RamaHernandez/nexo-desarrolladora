import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  Home,
  Hotel,
  Leaf,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Store,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

const stats = [
  { value: '+18', label: 'años de experiencia' },
  { value: '+72', label: 'obras entregadas' },
  { value: '96%', label: 'cumplimiento de plazos' },
  { value: '360°', label: 'gestión integral' },
]

const pillars = [
  {
    title: 'Planificación técnica',
    text: 'Ordenamos alcance, presupuesto, tiempos, gremios y documentación antes de iniciar la ejecución.',
    icon: Building2,
  },
  {
    title: 'Calidad constructiva',
    text: 'Supervisión en obra, control de terminaciones, materiales adecuados y seguimiento de cada etapa.',
    icon: ShieldCheck,
  },
  {
    title: 'Construcción consciente',
    text: 'Procesos eficientes, menor desperdicio, decisiones sustentables y una mirada responsable sobre cada proyecto.',
    icon: Leaf,
  },
]

const services = [
  {
    number: '01',
    title: 'Dirección y ejecución de obra',
    text: 'Coordinación integral de obra, control de avances, certificaciones, proveedores y equipos técnicos.',
  },
  {
    number: '02',
    title: 'Obras civiles y corporativas',
    text: 'Construcción de edificios residenciales, sedes empresariales, espacios comerciales y desarrollos urbanos.',
  },
  {
    number: '03',
    title: 'Reformas de alto estándar',
    text: 'Intervenciones premium, remodelaciones integrales y puesta en valor de propiedades existentes.',
  },
  {
    number: '04',
    title: 'Desarrollos inmobiliarios',
    text: 'Acompañamiento técnico para emprendimientos, edificios, loteos y proyectos de inversión.',
  },
]

const projects = [
  {
    category: 'Residencial',
    title: 'Arce 742 — Viviendas Urbanas',
    place: 'Palermo, CABA',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    description:
      'Desarrollo residencial de baja escala con unidades luminosas, balcones verdes y terminaciones de alto estándar.',
  },
  {
    category: 'Corporativo',
    title: 'Distrito Núcleo — Oficinas Flex',
    place: 'Chacarita, CABA',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop',
    description:
      'Obra corporativa con hormigón visto, piel vidriada, plantas libres y áreas comunes pensadas para equipos dinámicos.',
  },
  {
    category: 'Educación',
    title: 'Campus Norte — Edificio Académico',
    place: 'San Isidro, Buenos Aires',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
    description:
      'Ejecución integral de edificio educativo con estructura mixta, espacios colaborativos y eficiencia energética.',
  },
]

const markets = [
  { title: 'Industria', text: 'Naves, ampliaciones, depósitos y obras productivas.', icon: Factory },
  { title: 'Salud', text: 'Espacios técnicos para instituciones de alta exigencia.', icon: HeartPulse },
  { title: 'Educación', text: 'Campus, aulas flexibles y espacios colaborativos.', icon: GraduationCap },
  { title: 'Comercial', text: 'Locales, showrooms y sedes con identidad de marca.', icon: Store },
  { title: 'Vivienda', text: 'Edificios, viviendas multifamiliares y desarrollos premium.', icon: Home },
  { title: 'Hotelería', text: 'Obras orientadas a experiencia, operación y detalle.', icon: Hotel },
]

const process = [
  'Relevamiento del proyecto y objetivos comerciales',
  'Presupuesto, planificación y cronograma de obra',
  'Ejecución con control técnico y reportes de avance',
  'Entrega final, documentación y seguimiento post obra',
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#101010]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-copper/40 bg-copper text-sm font-black text-white shadow-[0_0_40px_rgba(183,122,75,0.35)]">
            NX
          </span>
          <span className="leading-tight text-white">
            <strong className="block text-sm tracking-[0.24em]">NEXO</strong>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">Constructora</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-white/65 transition hover:text-copper">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5491112345678"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-copper px-5 py-3 text-sm font-black text-white transition hover:bg-white hover:text-ink lg:inline-flex"
        >
          Cotizar obra
        </a>

        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/80">
                {item.label}
              </a>
            ))}
            <a href="https://wa.me/5491112345678" className="rounded-full bg-copper px-5 py-3 text-center text-sm font-black text-white">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function SectionLabel({ children, dark = false }) {
  return (
    <span
      className={`mb-5 inline-flex rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.24em] ${
        dark
          ? 'border-white/10 bg-white/5 text-sand'
          : 'border-copper/25 bg-copper/10 text-copper'
      }`}
    >
      {children}
    </span>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-ink font-body text-cloud">
      <Header />

      <main>
        <section id="inicio" className="relative overflow-hidden bg-ink pt-28 text-white">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover opacity-35"
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1800&auto=format&fit=crop"
              alt="Obra en construcción"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/45" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(183,122,75,0.32),transparent_34%)]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-28">
            <div className="max-w-4xl">
              <p className="mb-6 flex items-center gap-3 text-sm font-black uppercase tracking-[0.32em] text-copper">
                <HardHat size={18} /> Construcción · Desarrollo · Dirección
              </p>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Obras sólidas para proyectos que miran a largo plazo.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-sand/75 md:text-xl">
                Constructora especializada en proyectos residenciales, corporativos e institucionales. Planificamos, ejecutamos y entregamos obras con método, control y calidad técnica.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#proyectos" className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-ink">
                  Ver proyectos <ArrowUpRight size={18} />
                </a>
                <a href="#contacto" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-black text-white transition hover:border-copper hover:bg-copper/10">
                  Cotizar una obra
                </a>
              </div>
            </div>

            <div className="self-end rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft backdrop-blur-md">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-ink/70 p-5">
                    <strong className="block text-3xl font-black text-white">{stat.value}</strong>
                    <span className="mt-2 block text-sm leading-5 text-sand/60">{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-[1.5rem] border border-copper/20 bg-copper/10 p-5 text-sm leading-6 text-sand/75">
                Gestión integral con trazabilidad, control presupuestario y comunicación activa entre cliente, dirección técnica y equipos de ejecución.
              </p>
            </div>
          </div>
        </section>

        <section id="empresa" className="relative overflow-hidden bg-[#171717] py-20 lg:py-28">
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-copper/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionLabel dark>La constructora</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Construcción consciente, dirección real y ejecución profesional.</h2>
            </div>
            <div className="space-y-7 text-lg leading-8 text-sand/70">
              <p>
                Una buena obra no se mide solamente por el resultado final, sino por cómo se llega a ese resultado: planificación, criterio técnico, orden, seguridad y respeto por los recursos.
              </p>
              <p>
                Trabajamos con arquitectos, desarrolladores, empresas y propietarios que buscan ejecutar proyectos de alto estándar, con procesos claros y una mirada integral sobre diseño, presupuesto y plazo.
              </p>

              <div className="grid gap-4 pt-4 md:grid-cols-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon
                  return (
                    <article key={pillar.title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-copper/40 hover:bg-white/[0.07]">
                      <Icon className="mb-5 text-copper" size={30} />
                      <h3 className="text-lg font-black text-white">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-sand/60">{pillar.text}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel dark>Servicios</SectionLabel>
                <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">Gestión integral para obras que necesitan precisión.</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-sand/60">
                Desde el anteproyecto hasta la entrega, ordenamos cada decisión para transformar ideas arquitectónicas en obras reales.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 transition hover:-translate-y-1 hover:border-copper/40 hover:bg-copper/10">
                  <span className="text-sm font-black text-copper">{service.number}</span>
                  <h3 className="mt-8 text-2xl font-black leading-tight text-white">{service.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-sand/60">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-[#171717] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <SectionLabel dark>Proyectos</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Obras que combinan ingeniería, diseño y ejecución.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-ink shadow-soft">
                  <div className="relative h-72 overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-ink/75 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sand backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="mb-4 flex items-center gap-2 text-sm text-sand/50">
                      <MapPin size={16} /> {project.place}
                    </div>
                    <h3 className="text-2xl font-black leading-tight text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-sand/60">{project.description}</p>
                    <button className="mt-6 inline-flex items-center gap-2 text-sm font-black text-copper">
                      Ver caso de obra <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <SectionLabel dark>Mercados</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Construimos para distintas industrias y escalas.</h2>
              </div>
              <p className="text-lg leading-8 text-sand/60">
                Adaptamos equipos, procesos y soluciones técnicas según el tipo de obra: industrial, salud, educación, vivienda, hotelería o espacios comerciales.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {markets.map((market) => {
                const Icon = market.icon
                return (
                  <article key={market.title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 transition hover:-translate-y-1 hover:border-copper/40 hover:bg-white/[0.075]">
                    <Icon className="mb-8 text-copper" size={34} />
                    <h3 className="text-2xl font-black text-white">{market.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-sand/60">{market.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#171717] py-20 lg:py-28">
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-copper/15 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
            <div>
              <SectionLabel dark>Metodología</SectionLabel>
              <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">Procesos claros para reducir incertidumbre.</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-sand/65">
                Cada obra cuenta con planificación inicial, tablero de avance, control documental y reuniones de seguimiento. La meta es que el cliente sepa qué está pasando, qué falta y qué decisión tomar en cada etapa.
              </p>
            </div>

            <div className="rounded-[2.3rem] border border-white/10 bg-ink p-7 shadow-soft">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-copper text-white">
                  <Users />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Trabajo colaborativo</h3>
                  <p className="text-sm text-sand/55">Cliente + arquitectura + dirección + obra</p>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {process.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold text-sand/70">
                    <CheckCircle2 className="shrink-0 text-copper" size={19} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-ink px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#171717] text-white shadow-soft lg:grid-cols-[1fr_0.8fr]">
            <div className="relative overflow-hidden p-8 md:p-12 lg:p-16">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-copper/20 blur-3xl" />
              <div className="relative">
                <SectionLabel dark>Contacto</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight md:text-6xl">Contanos qué obra querés construir.</h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-sand/65">
                  Podemos evaluar alcance, tiempos, presupuesto estimado y la mejor estrategia de ejecución para tu próximo proyecto.
                </p>
                <div className="mt-10 grid gap-4 text-sm text-sand/70 md:grid-cols-2">
                  <a href="tel:+541112345678" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-copper/40 hover:bg-copper/10">
                    <Phone size={19} /> +54 11 1234-5678
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-copper/40 hover:bg-copper/10">
                    <MapPin size={19} /> Buenos Aires, Argentina
                  </a>
                </div>
              </div>
            </div>

            <form className="border-t border-white/10 bg-ink p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-16" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4">
                <input className="rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 text-white outline-none placeholder:text-sand/35 focus:border-copper" placeholder="Nombre y apellido" />
                <input className="rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 text-white outline-none placeholder:text-sand/35 focus:border-copper" placeholder="Teléfono / WhatsApp" />
                <input className="rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 text-white outline-none placeholder:text-sand/35 focus:border-copper" placeholder="Tipo de proyecto" />
                <textarea className="min-h-36 rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 text-white outline-none placeholder:text-sand/35 focus:border-copper" placeholder="Contanos brevemente qué necesitás" />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-ink">
                  Enviar consulta <ArrowUpRight size={18} />
                </button>
                <p className="text-xs leading-5 text-sand/45">
                  Demo visual. Para producción se puede conectar a WhatsApp, Formspree, Supabase, Airtable, HubSpot o un CRM propio.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#101010] py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 text-sm text-sand/50 md:flex-row md:items-center lg:px-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-copper text-xs font-black text-white">NX</span>
            <span>Nexo Constructora © 2026</span>
          </div>
          <div className="flex gap-5">
            <a href="#inicio" className="hover:text-copper">Inicio</a>
            <a href="#proyectos" className="hover:text-copper">Proyectos</a>
            <a href="#contacto" className="hover:text-copper">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
