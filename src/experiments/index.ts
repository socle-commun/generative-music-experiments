import { type FC } from "react";

import RandomMelodyGenerator from "./_RandomMelodyGenerator";

declare type Experiment = {
  id: number;
  name: string;
  description: string;
  component: FC;
}

const experiments: Experiment[] = [
  {
    id: 1,
    name: "Random melody generator",
    description: "Description of the random melody generator experiment",
    component: RandomMelodyGenerator
  },
  // {
  //   id: 2,
  //   name: "Experiment 2",
  //   description: "Description of experiment 2",
  // },
];

export default experiments;
