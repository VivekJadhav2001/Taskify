import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text, deadline, createdAt } = action.payload;
      const newTodo = {
        id: nanoid(),
        text,
        completed: false,
        createdAt,
        deadline,
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    toggleComplete: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) todo.text = text;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, editTodo, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
