import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center gap-16 px-6 py-16 lg:flex-row lg:justify-center lg:gap-20">
        {/* Left Content */}
        <div className="max-w-4xl text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
            </span>
            Real-time collaboration, built in
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
            Manage Projects.
            <br />
            Collaborate Better.
            <br />
            Deliver{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Faster.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-600 lg:mx-0">
            Plan projects, assign tasks, track progress, and collaborate with
            your team in one powerful, real-time workspace.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/register"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-amber-500 hover:text-slate-900 hover:shadow-md"
            >
              Get Started
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>

            <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50">
              Learn More
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <div className="flex -space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-xs font-semibold text-white">
                AR
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-xs font-semibold text-white">
                JK
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-xs font-semibold text-white">
                MP
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-semibold text-slate-600">
                +5
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Trusted by <span className="font-semibold text-slate-800">500+ teams</span> already shipping faster
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative hidden  w-full items-center justify-center lg:flex">
          {/* Decorative background blobs */}
          <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-amber-200 opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-10 left-0 h-72 w-72 rounded-full bg-slate-300 opacity-30 blur-3xl"></div>

          {/* Floating notification card */}
          <div className="absolute -left-6 top-6 z-20 hidden -rotate-3 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-xl transition-transform duration-300 hover:rotate-0 xl:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">12 tasks completed</p>
              <p className="text-xs text-slate-500">Updated just now</p>
            </div>
          </div>

          {/* Board card */}
          <div className="relative z-10 w-[520px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-transform duration-300 hover:-translate-y-1">
            {/* Flow accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-slate-900 via-amber-500 to-slate-900"></div>

            <div className="p-5">
              {/* Board Header */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Website Redesign</h3>
                  <p className="text-xs text-slate-400">4 members · Updated 2m ago</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-[10px] font-semibold text-white">
                      AR
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-[10px] font-semibold text-white">
                      JK
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                    Active
                  </span>
                </div>
              </div>

              {/* Kanban Columns */}
              <div className="grid grid-cols-3 gap-3">
                {/* Todo */}
                <div className="rounded-xl bg-slate-100 p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Todo</h4>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-slate-500">2</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
                      <p className="text-xs font-medium text-slate-700">🎨 Design Landing Page</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">Design</span>
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[9px] font-semibold text-white">JK</div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
                      <p className="text-xs font-medium text-slate-700">🔑 Login UI</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">Frontend</span>
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[9px] font-semibold text-white">AR</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* In Progress */}
                <div className="rounded-xl bg-blue-50 p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-blue-600">In Progress</h4>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-blue-600">2</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="rounded-lg border-l-4 border-blue-600 bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
                      <p className="text-xs font-medium text-slate-700">⚙️ JWT Authentication</p>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-2/3 rounded-full bg-blue-500"></div>
                      </div>
                      <div className="mt-1.5 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">2/3 subtasks</span>
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-semibold text-white">MP</div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
                      <p className="text-xs font-medium text-slate-700">📦 Product API</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-600">Backend</span>
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[9px] font-semibold text-white">AR</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Done */}
                <div className="rounded-xl bg-emerald-50 p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Done</h4>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-emerald-600">2</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="rounded-lg border-l-4 border-emerald-500 bg-white p-2.5 shadow-sm ring-1 ring-slate-100 opacity-80">
                      <p className="text-xs font-medium text-slate-500">✅ Navbar</p>
                    </div>

                    <div className="rounded-lg border-l-4 border-emerald-500 bg-white p-2.5 shadow-sm ring-1 ring-slate-100 opacity-80">
                      <p className="text-xs font-medium text-slate-500">✅ Footer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;