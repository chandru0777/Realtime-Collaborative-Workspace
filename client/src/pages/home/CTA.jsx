import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Start Organizing Your Projects Today.
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Organize projects, collaborate with your team, and track progress
          effortlessly—all in one place.
        </p>

        <div className="mt-10">
          <Link
            to="/register"
            className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Get Started
          </Link>
          
        </div>

      </div>
    </section>
  );
}

export default CTA;