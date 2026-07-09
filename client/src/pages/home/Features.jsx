import {
  FaTasks,
  FaUsers,
  FaChartLine,
  FaBell,
  FaCalendarAlt,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTasks size={24} />,
    title: "Task Management",
    description: "Create, organize and track tasks with ease.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: <FaUsers size={24} />,
    title: "Team Collaboration",
    description: "Assign work and collaborate with your team.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Progress Tracking",
    description: "Monitor project progress in real time.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: <FaBell size={24} />,
    title: "Notifications",
    description: "Stay updated with instant alerts.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: <FaCalendarAlt size={24} />,
    title: "Sprint Planning",
    description: "Plan sprints and manage deadlines efficiently.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: <FaBolt size={24} />,
    title: "Fast Workflow",
    description: "Improve productivity with a streamlined workflow.",
    color: "bg-slate-200 text-slate-700",
  },
];

function Features() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800">
            Features
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
            Powerful Features
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything your team needs to manage projects efficiently, all in one real-time workspace.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl"
            >
              <span className="absolute right-6 top-6 text-4xl font-extrabold text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className={`inline-flex rounded-xl p-4 ${feature.color}`}>
                {feature.icon}
              </div>

              <h3 className="relative mt-6 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="relative mt-3 text-slate-600">
                {feature.description}
              </p>

              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-600 group-hover:opacity-100">
                Learn more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-slate-900 to-amber-500 transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;