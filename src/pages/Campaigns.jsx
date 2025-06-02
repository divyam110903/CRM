import { useState } from 'react';
import { campaigns, availableTags } from '../data/mockData';

const CampaignCard = ({ campaign }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{campaign.title}</h3>
        <p className="text-gray-600 mt-1">{campaign.message}</p>
        <div className="mt-4">
          <span className={`px-2 py-1 rounded-full text-sm ${
            campaign.status === 'delivered'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {campaign.status}
          </span>
          <span className="ml-2 text-sm text-gray-600">
            via {campaign.deliveryType}
          </span>
        </div>
      </div>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {campaign.segment.map((tag) => (
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

const Campaigns = () => {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    deliveryType: 'email',
    segment: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call
    console.log('Campaign created:', formData);
    // Reset form
    setFormData({
      title: '',
      message: '',
      deliveryType: 'email',
      segment: [],
    });
  };

  const toggleSegment = (tag) => {
    setFormData((prev) => ({
      ...prev,
      segment: prev.segment.includes(tag)
        ? prev.segment.filter((t) => t !== tag)
        : [...prev.segment, tag],
    }));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Campaigns</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-medium mb-4">Create New Campaign</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Campaign Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Delivery Type
              </label>
              <select
                value={formData.deliveryType}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    deliveryType: e.target.value,
                  }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="email">Email</option>
                <option value="sms">SMS</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Segment
              </label>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleSegment(tag)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      formData.segment.includes(tag)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>

      <h2 className="text-lg font-medium mb-4">Recent Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default Campaigns; 