export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/70 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold text-lime-300">Khuay Teui Thai</div>
          <div className="text-sm text-white/70">Hand‑Pulled Noodles • Since 2013</div>
        </div>
        <div className="text-white/60 text-sm">
          © {new Date().getFullYear()} Khuay Teui Thai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

