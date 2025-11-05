import { content } from "@/contants/content";

export default function Footer() {
  const navLinks = content.nav.links;
  const contact = content.contact;
  const site = content.site;
  return (
    <footer className="relative z-20 w-full border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-5xl px-6">
        {/* Top: 3 columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-xl font-semibold text-lime-300">{site.name}</div>
            <p className="mt-2 text-sm text-white/80">
              Hand‑Pulled Noodles • Since 2013. We simmer broths low and slow and pull every noodle to order for texture you can feel.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <div className="text-sm uppercase tracking-wider text-white/60">Quick Links</div>
            <ul className="mt-3 space-y-2 text-white/85">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    className="transition-colors hover:text-lime-300"
                    href={`#${l.id}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <div className="text-sm uppercase tracking-wider text-white/60">Contact</div>
            <div className="mt-3 space-y-2 text-white/85">
              <div>
                {contact.addressLines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              <div>
                <span className="text-white/60">Phone:</span> {contact.phone}
              </div>
              <div>
                <span className="text-white/60">Email:</span> {contact.email}
              </div>
              <div className="text-white/60">Hours</div>
              <div className="grid grid-cols-2 gap-2 text-white/80">
                {contact.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span>{h.label}</span>
                    <span className="text-white/70">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div>Made with care in Bangkok.</div>
        </div>
      </div>
    </footer>
  );
}
