import { useParams } from "react-router";

import experiments from "@/experiments";

export default function ExperimentsIdPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Experiment</h1>
      {
        experiments.find((experiment) => experiment.id === Number(id)) ? (
          <div>
            <h2 className="text-xl font-bold">
              {experiments.find((experiment) => experiment.id === Number(id))?.name}
            </h2>
            <p>
              {experiments.find((experiment) => experiment.id === Number(id))?.description}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">Experiment not found</h2>
            <p>The experiment you are looking for does not exist.</p>
          </div>
        )
      }
    </>
  )
}