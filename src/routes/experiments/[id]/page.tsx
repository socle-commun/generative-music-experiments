import { useParams } from "react-router";

import experiments from "@/experiments";

import cn from "@/utilities/cn";

export default function ExperimentsIdPage() {
  const { id } = useParams();

  const experiment = experiments.find((experiment) => experiment.id === Number(id));
  
  if (!experiment) {
    return (
      <div>
        <h1 className={cn("text-xl font-bold")}>Experiment not found</h1>
        <p className={cn("")}>The experiment you are looking for does not exist.</p>
      </div>
    );
  }
  else {
    return (
      <>
        <h1 className={cn("text-xl font-bold")}>Experiment</h1>
        <div>
          <h2 className={cn("font-bold")}>
            {experiment.name}
          </h2>
          <p className={cn("")}>
            {experiment.description}
          </p>
          <experiment.component />
        </div>
      </>
    )
  }
}