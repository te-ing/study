import { createContext, ReactChild, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface Task {
  id: string;
  content: string;
  complete: boolean;
}

interface ITaskContext {
  tasks: Task[];
  addTask(content: string): void;
  updateTask(id: string, status: boolean): void;
  removeTask(id: string): void;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);
export const useTasks = () => useContext(TaskContext);

interface Props {
  children: ReactChild;
}

// const TaskProvider = ({ children }: Props) => {
//   const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
//   return (
//     <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
//   );
// };

// export default TaskProvider;
