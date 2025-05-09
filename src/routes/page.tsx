import experiments from "@/experiments";

import cn from "@/utilities/cn";

export default function RootPage() {
  return (
    <>
      <h1 className={cn("")}>Welcome</h1>
      {
        experiments.map((experiment) => (
          <div key={experiment.id} className={cn("mb-4")}>
            <h2 className={cn("text-xl font-bold")}>{experiment.name}</h2>
            <p>{experiment.description}</p>
            <a href={`experiments/${experiment.id}`} className={cn("text-blue-500 underline")}>
              View Experiment
            </a>
          </div>
        ))
      }
    </>
  )
}