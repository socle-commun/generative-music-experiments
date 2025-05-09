import { useParams } from "react-router";

import experiments from "@/experiments";

export default function ExperimentsIdPage() {
  const { id } = useParams();

  const experiment = experiments.find((experiment) => experiment.id === Number(id));
  
  if (!experiment) {
    return (
      <div>
        <h1 className="text-xl font-bold">Experiment not found</h1>
        <p>The experiment you are looking for does not exist.</p>
      </div>
    );
  }
  else {
    return (
      <>
        <h1>Experiment</h1>
        <div>
          <h2 className="text-xl font-bold">
            {experiment.name}
          </h2>
          <p>
            {experiment.description}
          </p>
        </div>
      </>
    )
  }
}