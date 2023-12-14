'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEventHandler } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    params.set('query', event.target.value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <div className="flex items-center gap-4 p-4">
        <input
          className="grow rounded-md border border-gray-200 p-4 text-sm outline-2 placeholder:text-gray-500"
          id="name"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchParams.get('query')?.toString()}
        />
      </div>
    </div>
  );
}
