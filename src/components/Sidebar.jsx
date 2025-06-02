import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  MegaphoneIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Customers', href: '/customers', icon: UserGroupIcon },
    { name: 'Campaigns', href: '/campaigns', icon: MegaphoneIcon },
    { name: 'Insights', href: '/insights', icon: ChartBarIcon },
  ];

  return (
    <div className="fixed top-0 left-0 w-64 h-screen p-4 text-white bg-gray-800">
      <div className="mb-8 text-xl font-bold">HelloCRM</div>
      <nav className="space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar; 