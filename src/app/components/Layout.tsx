import { Link, Outlet, useLocation } from 'react-router';
import { LayoutDashboard, FileText, Zap, Database, ListOrdered, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Posts', href: '/posts', icon: FileText },
  { name: 'Automation', href: '/automation', icon: Zap },
  { name: 'Notion Sync', href: '/notion-sync', icon: Database },
  { name: 'Logs', href: '/logs', icon: ListOrdered },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#fafafa]">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo/Header */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#ff4b00] rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">Notion to X Automation</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#ff4b00] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            v1.0.0 • Automation Platform
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <div>
            <h1 className="text-xl text-gray-900">
              {navigation.find(item => item.href === location.pathname)?.name || 'Dashboard'}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Last sync: <span className="font-medium">2 minutes ago</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#fafafa]">
          <div className="p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}