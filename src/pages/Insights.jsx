import { customers, campaigns, availableTags } from '../data/mockData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Insights = () => {
  // Prepare data for customer tags chart
  const customerTagsData = availableTags.map((tag) => ({
    name: tag,
    count: customers.filter((customer) => customer.tags.includes(tag)).length,
  }));

  // Prepare data for campaign success rate
  const campaignData = campaigns.map((campaign) => ({
    name: campaign.title,
    successRate: campaign.successRate,
  }));

  // Calculate total revenue by tag
  const revenueByTag = availableTags.map((tag) => ({
    name: tag,
    revenue: customers
      .filter((customer) => customer.tags.includes(tag))
      .reduce((sum, customer) => sum + customer.totalSpent, 0),
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Insights</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Customers by Tag */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Customers by Tag</h2>
          <BarChart width={400} height={300} data={customerTagsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Campaign Success Rates */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Campaign Success Rates</h2>
          <BarChart width={400} height={300} data={campaignData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="successRate" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Revenue by Tag */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Revenue by Tag</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={revenueByTag}
              cx={200}
              cy={150}
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="revenue"
              nameKey="name"
              label={({ name, value }) =>
                `${name}: $${value.toLocaleString()}`
              }
            >
              {revenueByTag.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Insights; 