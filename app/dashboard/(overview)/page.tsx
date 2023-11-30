import { options } from '@/app/api/auth/[...nextauth]/options';
import { lusitana } from '@/app/ui/fonts';
import {
  CardSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';

export default async function Dashboard() {
  // note: important to supply options
  const session = await getServerSession(options);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>{/* <CardWrapper /> */}</Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* <RevenueChart /> */}
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          {/* <LatestInvoices /> */}
        </Suspense>
      </div>
    </main>
  );
}
