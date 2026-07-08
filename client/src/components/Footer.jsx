import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    { title: "Product", links: [
      { label: "Boards", to: "/boards" },
      { label: "Backlog", to: "/backlog" },
      { label: "Reports", to: "/reports" },
      { label: "Integrations", to: "/integrations" },
    ]},
    { title: "Resources", links: [
      { label: "Documentation", to: "/docs" },
      { label: "API reference", to: "/docs/api" },
      { label: "Changelog", to: "/changelog" },
      { label: "Status", to: "/status" },
    ]},
    { title: "Company", links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ]},
    { title: "Legal", links: [
      { label: "Privacy policy", to: "/privacy" },
      { label: "Terms of service", to: "/terms" },
      { label: "Security", to: "/security" },
    ]},
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="group inline-flex items-center gap-2.5">
              <span className="flex items-end gap-[3px]" aria-hidden="true">
                <span className="h-3.5 w-1.5 rounded-full bg-slate-900"></span>
                <span className="h-5 w-1.5 rounded-full bg-amber-500"></span>
                <span className="h-2.5 w-1.5 rounded-full bg-slate-400"></span>
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Agile<span className="text-amber-500">Flow</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Real-time boards, backlog, and team visibility, built for teams that ship together.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 transition-colors duration-200 hover:border-slate-300 hover:text-slate-900">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z"></path>
                </svg>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 transition-colors duration-200 hover:border-slate-300 hover:text-slate-900">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 1.5h3.7l-8.1 9.3L24 22.5h-7.4l-5.8-7.6-6.6 7.6H.5l8.7-9.9L0 1.5h7.6l5.3 6.9 6-6.9Zm-1.3 18.8h2L6.5 3.6h-2.1l13.2 16.7Z"></path>
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 transition-colors duration-200 hover:border-slate-300 hover:text-slate-900">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">© {year} AgileFlow. All rights reserved.</p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;