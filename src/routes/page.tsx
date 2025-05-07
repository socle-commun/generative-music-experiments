import cn from "@/utilities/cn";

declare type Experiment = {
  id: string;
  name: string;
  description: string;
  url: string;
}

const experiments: Experiment[] = [
  {
    id: crypto.randomUUID(),
    name: "Experiment 1",
    description: "Description of experiment 1",
    url: "https://example.com/experiment1",
  },
  {
    id: "2",
    name: "Experiment 2",
    description: "Description of experiment 2",
    url: "https://example.com/experiment2",
  },
];

export default function RootPage() {
  return (
    <>
      <h1>Welcome</h1>
      {
        experiments.map((experiment) => (
          <div key={experiment.id} className={cn("mb-4")}>
            <h2 className={cn("text-xl font-bold")}>{experiment.name}</h2>
            <p>{experiment.description}</p>
            <a href={experiment.url} className={cn("text-blue-500 underline")}>
              View Experiment
            </a>
          </div>
        ))
      }
    </>
  )
}