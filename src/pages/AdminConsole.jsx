import { useState } from 'react';
import { Users, Briefcase, CreditCard, BarChart3 } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function AdminConsole() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Users', value: '1,247', icon: Users, color: 'text-[#0F766D]', bg: 'bg-[rgba(15,118,109,0.1)]' },
    { label: 'Active Jobs', value: '89', icon: Briefcase, color: 'text-[#C2714F]', bg: 'bg-[rgba(194,113,79,0.1)]' },
    { label: 'Revenue (MTD)', value: '$12,450', icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Growth', value: '+18%', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Users' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'payments', label: 'Payments' },
  ];

  const recentUsers = [
    { email: 'sarah@startup.io', role: 'Poster', joined: '1 hour ago' },
    { email: 'mike@agency.com', role: 'Worker', joined: '3 hours ago' },
    { email: 'lisa@corp.com', role: 'Both', joined: '1 day ago' },
    { email: 'tom@freelance.dev', role: 'Worker', joined: '2 days ago' },
  ];

  const recentPayments = [
    { user: 'john@company.com', amount: '$199', plan: 'Premium', date: '2 hours ago', status: 'Completed' },
    { user: 'sarah@startup.io', amount: '$99', plan: 'Featured', date: '5 hours ago', status: 'Completed' },
    { user: 'mike@agency.com', amount: '$49', plan: 'Basic', date: '1 day ago', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl mb-1">Admin Console</h1>
          <p className="text-[#737B8C]">Platform management and analytics</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} padding="md">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <Icon size={20} className={stat.color} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#29303D]">{stat.value}</p>
                    <p className="text-xs text-[#737B8C]">{stat.label}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-[#F3F1ED] rounded-lg p-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id ? 'bg-white text-[#29303D] shadow-sm' : 'text-[#737B8C] hover:text-[#29303D]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold text-[#29303D] mb-4">Recent Users</h3>
              <div className="space-y-3">
                {recentUsers.map((u, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[#E3E5E8] last:border-0">
                    <div>
                      <p className="text-sm font-medium text-[#29303D]">{u.email}</p>
                      <p className="text-xs text-[#737B8C]">{u.joined}</p>
                    </div>
                    <span className="px-2 py-0.5 bg-[#F3F1ED] text-[#737B8C] text-xs rounded-md font-medium">
                      {u.role}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-[#29303D] mb-4">Recent Payments</h3>
              <div className="space-y-3">
                {recentPayments.map((p, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[#E3E5E8] last:border-0">
                    <div>
                      <p className="text-sm font-medium text-[#29303D]">{p.user}</p>
                      <p className="text-xs text-[#737B8C]">{p.plan} &middot; {p.date}</p>
                    </div>
                    <span className="text-sm font-bold text-[#0F766D]">{p.amount}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'users' && (
          <Card padding="sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E3E5E8]">
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Email</th>
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Role</th>
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((u, i) => (
                    <tr key={i} className="border-b border-[#E3E5E8] last:border-0">
                      <td className="px-4 py-3 text-sm text-[#29303D]">{u.email}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-[#F3F1ED] text-[#737B8C] text-xs rounded-md font-medium">{u.role}</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#737B8C]">{u.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'jobs' && (
          <Card>
            <p className="text-sm text-[#737B8C]">Job management coming soon. View current listings on the <a href="/jobs" className="text-[#0F766D] hover:underline">Jobs page</a>.</p>
          </Card>
        )}

        {activeTab === 'payments' && (
          <Card padding="sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E3E5E8]">
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">User</th>
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Plan</th>
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Amount</th>
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPayments.map((p, i) => (
                    <tr key={i} className="border-b border-[#E3E5E8] last:border-0">
                      <td className="px-4 py-3 text-sm text-[#29303D]">{p.user}</td>
                      <td className="px-4 py-3 text-sm text-[#737B8C]">{p.plan}</td>
                      <td className="px-4 py-3 text-sm font-medium text-[#29303D]">{p.amount}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-[rgba(15,118,109,0.1)] text-[#0F766D] text-xs rounded-md font-medium">{p.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
