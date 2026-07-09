import {
  FaBuilding,
  FaProjectDiagram,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaBuilding size={30} />,
    title: "Create Workspace",
    description: "Set up a workspace for your organization or team.",
  },
  {
    icon: <FaProjectDiagram size={30} />,
    title: "Create Project",
    description: "Organize your work by creating multiple projects.",
  },
  {
    icon: <FaTasks size={30} />,
    title: "Manage Tasks",
    description: "Assign tasks, set priorities, and track progress.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Monitor Progress",
    description: "Analyze productivity with real-time updates.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            How It Works
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Complete your project in four simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border bg-gray-50 p-8 text-center transition hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {step.description}
              </p>

              <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {index + 1}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;