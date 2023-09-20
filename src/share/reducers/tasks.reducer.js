import { createSlice } from '@reduxjs/toolkit';

// title, completed, id
function getAllTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const taskSlice = createSlice({
  name: 'tasks',

  initialState: {
    tasks: [...getAllTasks()],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [
        ...state.tasks,
        { title: action.payload, completed: false, id: Date.now() },
      ];
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      const arr = state.tasks.filter((item) => item.id !== id);
      state.tasks = [...arr];
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    editCompleted: (state, action) => {
      if (action.payload.title === '') {
        const id = action.payload.id;
        const index = state.tasks.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.tasks[index] = {
            ...state.tasks[index],
            completed: !state.tasks[index].completed,
          };
          localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
      }
    },
    editTask: (state, action) => {
      if (action.payload.title !== '') {
        const id = action.payload.id;
        const index = state.tasks.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.tasks[index] = {
            ...state.tasks[index],            
            title: action.payload.title,
            completed: action.payload.completed,
          };
          localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
      }
    }

  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editCompleted, editTask } = taskSlice.actions;

export default taskSlice.reducer;
