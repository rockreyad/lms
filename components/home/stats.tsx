import React from "react";

const stats = [
  { id: 1, name: "Families on our platform", value: "10,000+" },
  {
    id: 2,
    name: "Affordable pricing",
    value: "Low-cost courses for every budget.",
  },
  {
    id: 3,
    name: "Quality assurance",
    value: "Ensuring 100% course satisfaction.",
  },
  {
    id: 4,
    name: "Invested in children's future",
    value: "Over $100M paid to educators.",
  },
];
const Stats = () => {
  return (
    <div className="bg-sky-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              <span className="text-cyan-400"> Trusted by</span> parents
              worldwide
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-800">
              Bringing quality digital education to children.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col bg-white p-6 rounded-lg"
              >
                <dt className="text-lg font-semibold leading-6 text-gray-700">
                  {stat.name}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
