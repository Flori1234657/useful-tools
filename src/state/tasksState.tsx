import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import setTask from "../utils/tasks/setTask";
import { TasksState } from "../ts/interface/tasksState";

export const useTaskStore = create<TasksState>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        taskSetup: {
          newUser: true,
        },
        taskActions: {
          filterTasks: undefined,
          searchTasks: undefined,
        },
        setTasks: (task) =>
          set((state) => setTask(state, task), false, "Set or edit task"), // Kjo InshaaAllah do perdoret edhe per edit
        removeTask: (id) =>
          set(
            (state) => ({ tasks: state.tasks.filter((el) => el.id !== id) }),
            false,
            "Remove task"
          ),
      }),
      { name: "tasks-state" }
    )
  )
);
