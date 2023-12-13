'use client';

import { useState } from 'react';
import { useTodosStore } from '../store/useTodosStore';

export default function TodosPage() {
  const todosStore = useTodosStore();
  const [value, setValue] = useState('');

  const handleClick = () => {
    todosStore.add(value);
    setValue('');
  };

  console.log(todosStore.todos);

  return (
    <div>
      <div className="flex items-center gap-4 p-4">
        <input
          className="grow rounded-md border border-gray-200 p-4 text-sm outline-2 placeholder:text-gray-500"
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={handleClick}>add</button>
      </div>
      <div>
        {todosStore.todos.map((todo, key) => {
          return (
            <div key={key} className="flex items-center gap-4 p-4">
              <span className="grow">{todo.description}</span>
              <button>complete</button>
              <button
                onClick={() => {
                  todosStore.delete(todo.id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
