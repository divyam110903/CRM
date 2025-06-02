import { customers, campaigns } from '../data/mockData';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const DashboardCard = ({ title, value, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="mt-2 text-2xl font-bold">{value}</p>
    <p className="mt-1 text-sm text-gray-600">{description}</p>
  </div>
);

const App = () => {
  return (
    <div className="mt-8">
      <DotLottieReact
        src="https://lottie.host/14944780-a252-4399-96c1-55582c352f7d/K9aDIWI1U1.lottie"
        loop
        autoplay
        style={{ width: 900, height: 400 , opacity : 0.8 }}
      />
    </div>
  );
};

const Dashboard = () => {
  
  const totalCustomers = customers.length;
  const totalRevenue = customers.reduce((sum, customer) => sum + customer.totalSpent, 0);
  const avgSuccessRate = campaigns.reduce((sum, campaign) => sum + campaign.successRate, 0) / campaigns.length;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <DashboardCard
          title="Total Customers"
          value={totalCustomers}
          description="Active customers in database"
        />
        <DashboardCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          description="Total customer spending"
        />
        <DashboardCard
          title="Campaign Success Rate"
          value={`${avgSuccessRate.toFixed(1)}%`}
          description="Average campaign performance"
        />
      </div>
      <App />
    </div>
  );
};

export default Dashboard;