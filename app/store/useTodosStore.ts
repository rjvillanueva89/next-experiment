import { create } from 'zustand';

type Todo = {
  id: number;
  description: string;
  done: boolean;
};

type Store = {
  todos: Todo[];
  add: (todo: string) => void;
  delete: (id: number) => void;
  complete: (id: number) => void;
};

export const useTodosStore = create<Store>((set) => ({
  todos: [],
  add: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Date.now(), description: todo, done: false },
      ],
    })),
  delete: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  complete: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    })),
}));
