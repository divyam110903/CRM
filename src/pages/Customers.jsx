import { useState } from 'react';
import { customers, availableTags } from '../data/mockData';

const CustomerCard = ({ customer }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{customer.name}</h3>
        <p className="text-gray-600">{customer.email}</p>
        <p className="text-gray-600">{customer.location}</p>
        <p className="text-green-600 font-medium mt-2">
          ${customer.totalSpent.toLocaleString()}
        </p>
      </div>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {customer.tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Customers = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredCustomers = customers.filter((customer) =>
    selectedTags.length === 0
      ? true
      : customer.tags.some((tag) => selectedTags.includes(tag))
  );

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Customers</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Filter by Tags</h2>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default Customers; 