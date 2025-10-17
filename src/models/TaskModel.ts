import { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  starDate: number;
  completeDate: number | null; //quando o timer chega ao final
  interruptDate: number |null; //quando a data for interrompida
  type: keyof TaskStateModel['config'];
};