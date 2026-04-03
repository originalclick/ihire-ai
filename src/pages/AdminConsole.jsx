import { useState } from 'react';
import { Users, Briefcase, DollarSign, Shield, AlertTriangle, TrendingUp, Settings, BarChart3, Activity } from 'lucide-react';
import Button from 'A/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const mockPlatformStats = [
  {
    id: 1,
    label: 'Total Users',
    value: '2,450',
    icon: Users,
    trend: '+145'
  },
  {
    id: 2,
    label: 'Active Jobs',
    value: '342',
    icon: Briefcase,
    trend: '+28'
  },
  {
    id: 3,
    label: 'Revenue',
    value: '$45,200',
    icon: DollarSign,
    trend: '+18.5%'
  },
  {
    id: 4,
    label: 'Disputes',
    value: '12',
    icon: AlertTriangle,
    trend: '-3'
  }
];

const mockRecentActivity = [
  {
    id: 1,
    action: 'New user registration',
    user: 'john.doe@example.com',
    timestamp: '2026-04-03 14:32',
    type: 'user'
  },
  {
    id: 2,
    action: 'Job posted',
    user: 'acme.corp@example.com',
    timestamp: '2026-04-03 13:15',
    type: 'job'
  },
  {
    id: 3,
    action: 'Payment processed',
    user: 'sarah.smith@example.com',
    timestamp: '2026-04-03 12:45',
    type: 'payment'
  },
  {
    id: 4,
    action: 'Dispute filed',
    user: 'mike.wilson@example.com',
    timestamp: '2026-04-03 11:20',
    type: 'dispute'
  }
];

const mockUsers = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Worker',
    status: 'active',
    joined: '2026-01-15'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Employer',
    status: 'active',
    joined: '2026-02-20'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Worker',
    status: 'inactive',
    joined: '2025-11-10'
  },
  {
    id: 4,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
    role: 'Creator',
    status: 'active',
    joined: '2026-03-05'
  },
  {
    id: 5,
    name: 'David Lee',
    email: 'david.lee@example.com',
    role: 'Employer',
    status: 'active',
    joined: '2026-02-01'
  }
];

const mockJobs = [
  {
    id: 1,
    title: 'Senior ML Engineer needed',
    company: 'TechCorp Inc',
    status: 'active',
    applications: 24,
    posted: '2026-03-28'
  },
  {
    id: 2,
    title: 'Content creator for AI tutorials',
    company: 'EduTech Ltd',
    status: 'active',
    applications: 15,
    posted: '2026-03-25'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    status: 'closed',
    applications: 42,
    posted: '2026-03-15'
  },
  {
    id: 4,
    title: 'Data Science Consultant',
    company: 'DataSystems Co',
    status: 'active',
    applications: 18,
    posted: '2026-03-20'
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    company: 'DesignStudio Pro',
    status: 'draft',
    applications: 0,
    posted: '2026-04-01'
  }
];

const mockPayments = [
  {
    id: 'PAY-001',
    user: 'john.smith@example.com',
    amount: '$850',
    type: 'withdrawal',
    date: '2026-04-02',
    status: 'completed'
  },
  {
    id: 'PAY-002',
    user: 'jane.doe@example.com',
    amount: '$1,250',
    type: 'payment',
    date: '2026-04-02',
    status: 'completed'
  },
  {
    id: 'PAY-003',
    user: 'alice.chen@example.com',
    amount: '$520',
    type: 'withdrawal',
    date: '2026-04-01',
    status: 'pending'
  },
  {
    id: 'PAY-004',
    user: 'david.lee@example.com',
    amount: '$2,100',
    type: 'payment',
    date: '2026-04-01',
    status: 'completed'
  },
  {
    id: 'PAY-005',
    user: 'bob.johnson@example.com',
    amount: '$450',
    type: 'refund',
    date: '2026-03-31',
    status: 'processing'
  }
];

export default function AdminConsole() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Users' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'payments', label: 'Payments' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Admin Console
            </h1>
            <p className="text-gray-600">
              Platform management and monitoring dashboard
            </p>
          </div>
          <Button variant="secondary" size="md">
            <Settings size={18} className="mr-2" />
            Settings
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {mockPlatformStats.map(stat => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.id} padding="md" hover={false}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          {stat.label}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {stat.value}
                        </h3>
                        <p className="text-sm text-green-600 font-medium">
                          {stat.trend}
                        </p>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <Icon size={24} className="text-purple-600" />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Recent Activity */}
            <Card padding="lg" hover={false}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Activity size={24} />
                Recent Activity
              </h2>
              <div className="space-y-4">
                {mockRecentActivity.map(activity => (
                  <div
                    key={activity.id}
                    className="flex items-start justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600">{activity.user}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          activity.type === 'user'
                            ? 'info'
                            : activity.type === 'job'
                              ? 'success'
                              : activity.type === 'payment'
                                ? 'success'
                                : 'error'
                        }
                        size="sm"
                      >
                        {activity.type}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <Card padding="lg" hover={false}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              User Management
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Role
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Joined
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map(user => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {user.name}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {user.email}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {user.role}
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={user.status === 'active' ? 'success' : 'warning'}
                          size="sm"
                        >
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {user.joined}
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          Review
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <Card padding="lg" hover={false}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Job Listings
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Title
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Company
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Applications
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Posted
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockJobs.map(job => (
                    <tr
                      key={job.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {job.title}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {job.company}
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            job.status === 'active'
                              ? 'success'
                              : job.status === 'draft'
                                ? 'warning'
                                : 'default'
                          }
                          size="sm"
                        >
                          {job.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {job.applications}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {job.posted}
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <Card padding="lg" hover={false}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Payment Transactions
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Payment ID
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      User
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Amount
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockPayments.map(payment => (
                    <tr
                      key={payment.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {payment.id}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {payment.user}
                      </td>
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {payment.amount}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {payment.type}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {payment.date}
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            payment.status === 'completed'
                              ? 'success'
                              : payment.status === 'pending'
                                ? 'warning'
                                : 'info'
                          }
                          size="sm"
                        >
                          {payment.status}
                        </Badge>
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
  
