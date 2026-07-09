import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          {/* Kanban-mark: three columns, middle one "in progress" and taller */}
          <span className="flex items-end gap-[3px]" aria-hidden="true">
            <span className="h-3.5 w-1.5 rounded-full bg-slate-900 transition-all duration-300 group-hover:h-4" />
            <span className="h-5 w-1.5 rounded-full bg-amber-500 transition-all duration-300 group-hover:h-6" />
            <span className="h-2.5 w-1.5 rounded-full bg-slate-400 transition-all duration-300 group-hover:h-3.5" />
          </span>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            Agile<span className="text-amber-500">Flow</span>
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Log in
          </Link>

          <Link
            to="/register"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-amber-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;