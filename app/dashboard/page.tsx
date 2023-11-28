import { lusitana } from '@/app/ui/fonts';
import {
  fetchLatestInvoices,
  fetchNumberOfCustomers,
  fetchNumberOfInvoices,
  fetchRevenue,
  fetchTotalPaidInvoices,
  fetchTotalPendingInvoices,
} from '../lib/data';
import { Card } from '../ui/dashboard/cards';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';

export default async function Dashboard() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const totalPaidInvoices = await fetchTotalPaidInvoices();
  const totalPendingInvoices = await fetchTotalPendingInvoices();
  const numberOfInvoices = await fetchNumberOfInvoices();
  const numberOfCustomers = await fetchNumberOfCustomers();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
