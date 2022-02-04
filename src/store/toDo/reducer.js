import { ADD_TODO } from "./constants";
import { DELETE_TODO } from "./constants";
import { TOGGLE_TODO } from "./constants";
import { EDIT_TODO } from "./constants";
import { initialState } from "./constants";
import nextId from "react-id-generator";

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nextId(), title: action.payload, isCompleted: false },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isCompleted: !todo.isCompleted };
          }
          return todo;
        }),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, title: action.payload.title };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
