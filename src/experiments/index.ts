import { type ReactNode } from "react";

declare type Experiment = {
  id: number;
  name: string;
  description: string;
  component?: ReactNode;
}

const experiments: Experiment[] = [
  {
    id: 1,
    name: "Experiment 1",
    description: "Description of experiment 1",
  },
  {
    id: 2,
    name: "Experiment 2",
    description: "Description of experiment 2",
  },
];

export default experiments;
