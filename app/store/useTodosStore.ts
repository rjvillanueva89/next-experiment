import { create } from 'zustand';

type Store = {
  todos: string[];
  add: (todo: string) => void;
};

export const useTodosStore = create<Store>((set) => ({
  todos: [],
  add: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));
