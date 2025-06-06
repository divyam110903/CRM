import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout; 