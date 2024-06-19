const timeline = [
  {
    name: "Cimentación & Estructura",
    description: "Se termina la cimentación y estructura del edificio.",
    date: "Mar 2025",
    dateTime: "2025-03",
  },
  {
    name: "Acabados de unidades residenciales",
    description: "Se terminan los acabados de las unidades residenciales.",
    date: "Oct 2025",
    dateTime: "2025-10",
  },
  {
    name: "Entrega de apartamentos & parqueaderos",
    description: "Se entregan los apartamentos y parqueaderos.",
    date: "Dec 2025",
    dateTime: "2025-12",
  },
];

export default function Timeline() {
  return (
    <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {timeline.map((item) => (
          <div key={item.name}>
            <time
              dateTime={item.dateTime}
              className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {item.name}
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
