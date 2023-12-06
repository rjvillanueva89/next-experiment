'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useCounterStore } from '../store/useCounterStore';

export default function CounterPage() {
  const counterStore = useCounterStore();
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center gap-10">
        <button onClick={counterStore.decrement}>
          <MinusIcon className="h-10 w-10" />
        </button>
        <span className="w-10 text-center text-5xl">{counterStore.count}</span>
        <button onClick={counterStore.increment}>
          <PlusIcon className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
}
