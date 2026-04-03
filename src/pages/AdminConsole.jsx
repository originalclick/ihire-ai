import { useState } from 'react';
import { Users, Briefcase, DollarSign, TrendingUp, Shield, AlertTriangle, CheckCircle, XCircle, Search, Filter } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';

const platformStats = [
  { label: 'Total Users', value: '1,234', change: '+56 this month', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
  { label: 'Active Jobs', value: '89', change: '+12 this week', icon: Briefcase, color: 'text-cyan-600', bg: 'bg-cyan-100' },
  { label: 'Revenue', value: '$45,670', change: '+18% MoM', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
  { label: 'Growth', value: '+12.5%', change: 'vs last quarter', icon: TrendingUp, color: 'text-yellow-600', bg: 'bg-yellow-100' }
];

const recentActivity = [
  { id: 1, title: 'New user registered', description: 'sarah.chen@email.com joined the platform', time: '5 min ago', type: 'success' },
  { id: 2, title: 'Job flagged for review', description: 'Suspicious job posting detected', time: '15 min ago', type: 'warning' },
  { id: 3, title: 'Payment processed', description: '$250 payment from Marcus Johnson', time: '1 hour ago', type: 'success' },
  { id: 4, title: 'User reported', description: 'Account flagged for TOS violation', time: '2 hours ago', type: 'error' },
  { id: 5, title: 'New product listed', description: 'AI Writing Templates added to marketplace', time: '3 hours ago', type: 'success' }
];

const mockUsers = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@email.com', role: 'Worker', status: 'Active', joined: '2025-01-10' },
  { id: 2, name: 'Marcus Johnson', email: 'marcus@email.com', role: 'Client', status: 'Active', joined: '2025-01-08' },
  { id: 3, name: 'Elena Rossi', email: 'elena@email.com', role: 'Creator', status: 'Active', joined: '2025-01-05' },
  { id: 4, name: 'Alex Kumar', email: 'alex@email.com', role: 'Worker', status: 'Suspended', joined: '2024-12-20' },
  { id: 5, name: 'Jessica Lee', email: 'jessica@email.com', role: 'Client', status: 'Active', joined: '2024-12-15' }
];

const mockJobs = [
  { id: 1, title: 'AI Content Generator', company: 'TechCorp', status: 'Active', applications: 12, posted: '2025-01-14' },
  { id: 2, title: 'ML Model Training', company: 'DataFlow', status: 'Active', applications: 8, posted: '2025-01-13' },
  { id: 3, title: 'Chatbot Development', company: 'BotWorks', status: 'Under Review', applications: 5, posted: '2025-01-12' },
  { id: 4, title: 'NLP Pipeline Setup', company: 'LangTech', status: 'Active', applications: 15, posted: '2025-01-11' },
  { id: 5, title: 'Computer Vision App', company: 'VisionAI', status: 'Closed', applications: 22, posted: '2025-01-08' }
];

const mockPayments = [
  { id: 'PAY-001', user: 'Marcus Johnson', amount: '$250', type: 'Job Payment', date: '2025-01-15', status: 'Completed' },
  { id: 'PAY-002', user: 'Sarah Chen', amount: '$85', type: 'Worker Payout', date: '2025-01-14', status: 'Completed' },
  { id: 'PAY-003', user: 'Elena Rossi', amount: '$120', type: 'Product Sale', date: '2025-01-14', status: 'Processing' },
  { id: 'PAY-004', user: 'Alex Kumar', amount: '$95', type: 'Worker Payout', date: '2025-01-13', status: 'Completed' },
  { id: 'PAY-005', user: 'Jessica Lee', amount: '$300', type: 'Job Payment', date: '2025-01-12', status: 'Refunded' }
];

export default function AdminConsole() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = ['overview', 'users', 'jobs', 'payments'];

  const getStatusVariant = (status) => {
    if (status === 'Active' || status === 'Completed' || status === 'success') return 'success';
    if (status === 'Suspended' || status === 'Closed' || status === 'Refunded' || status === 'error') return 'error';
    return 'warning';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
              <Shield size={36} className="text-purple-600" />
              Admin Console
            </h1>
            <p className="text-gray-600 mt-1">Platform management and monitoring</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {platformStats.map(stat => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} padding="md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                  </div>
                  <div className={stat.bg + ' p-3 rounded-lg'}>
                    <Icon size={24} className={stat.color} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mb-6 flex gap-2 border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={'px-4 py-3 font-medium border-b-2 capitalize ' +
                (selectedTab === tab
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900')}
            >
              {tab}
            </button>
          ))}
        </div>

        {selectedTab === 'overview' && (
          <Card padding="lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
                  {activity.type === 'success' && <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />}
                  {activity.type === 'warning' && <AlertTriangle size={20} className="text-yellow-500 mt-0.5 flex-shrink-0" />}
                  {activity.type === 'error' && <XCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {selectedTab === 'users' && (
          <Card padding="lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">User Management</h2>
              <div className="w-64">
                <Input label="Search" placeholder="Search users..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="pb-3 text-sm font-semibold text-gray-600">Name</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Email</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Role</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Status</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Joined</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase())).map(user => (
                    <tr key={user.id} className="border-b border-gray-100">
                      <td className="py-3 font-medium text-gray-900">{user.name}</td>
                      <td className="py-3 text-gray-600">{user.email}</td>
                      <td className="py-3"><Badge variant="info" size="sm">{user.role}</Badge></td>
                      <td className="py-3"><Badge variant={getStatusVariant(user.status)} size="sm">{user.status}</Badge></td>
                      <td className="py-3 text-gray-600">{user.joined}</td>
                      <td className="py-3"><Button variant="ghost" size="sm">Manage</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {selectedTab === 'jobs' && (
          <Card padding="lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Job Listings</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="pb-3 text-sm font-semibold text-gray-600">Title</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Company</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Status</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Applications</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Posted</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockJobs.map(job => (
                    <tr key={job.id} className="border-b border-gray-100">
                      <td className="py-3 font-medium text-gray-900">{job.title}</td>
                      <td className="py-3 text-gray-600">{job.company}</td>
                      <td className="py-3"><Badge variant={getStatusVariant(job.status)} size="sm">{job.status}</Badge></td>
                      <td className="py-3 text-gray-600">{job.applications}</td>
                      <td className="py-3 text-gray-600">{job.posted}</td>
                      <td className="py-3"><Button variant="ghost" size="sm">Review</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {selectedTab === 'payments' && (
          <Card padding="lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Payment History</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="pb-3 text-sm font-semibold text-gray-600">ID</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">User</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Amount</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Type</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Date</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPayments.map(payment => (
                    <tr key={payment.id} className="border-b border-gray-100">
                      <td className="py-3 font-mono text-sm text-gray-900">{payment.id}</td>
                      <td className="py-3 text-gray-900">{payment.user}</td>
                      <td className="py-3 font-semibold text-gray-900">{payment.amount}</td>
                      <td className="py-3 text-gray-600">{payment.type}</td>
                      <td className="py-3 text-gray-600">{payment.date}</td>
                      <td className="py-3"><Badge variant={getStatusVariant(payment.status)} size="sm">{payment.status}</Badge></td>
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
