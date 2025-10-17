import { TaskModel } from "./TaskModel"

export type TaskStateModel = {
  task: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // Vai de 1 a 8 neste caso as bolinhas
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};