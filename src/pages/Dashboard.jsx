import { useState } from 'react';
import { Briefcase, Users, MessageSquare, TrendingUp, Clock, FileText, ArrowRight, Bell } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const mockActivityData = [
  {
    id: 1,
    type: 'application',
    title: 'New Application Received',
    description: 'Sarah Chen applied for "AI Content Generator" position',
    timestamp: '2 hours ago',
    icon: FileText,
    status: 'new'
  },
  {
    id: 2,
    type: 'message',
    title: 'Message from Marcus Johnson',
    description: 'Interested in discussing the LLM project scope',
    timestamp: '4 hours ago',
    icon: MessageSquare,
    status: 'unread'
  },
  {
    id: 3,
    type: 'job',
    title: 'Job Posted Successfully',
    description: '"Full Stack AI Developer" is now live and receiving applications',
    timestamp: '1 day ago',
    icon: Briefcase,
    status: 'completed'
  },
  {
    id: 4,
    type: 'milestone',
    title: 'Profile Update Complete',
    description: 'Your profile rating increased to 4.8 stars',
    timestamp: '2 days ago',
    icon: TrendingUp,
    status: 'completed'
  },
  {
    id: 5,
    type: 'application',
    title: 'Application Accepted',
    description: 'Elena Rodriguez accepted your job offer for "AI Trainer"',
    timestamp: '3 days ago',
    icon: Users,
    status: 'completed'
  }
];

const mockStats = [
  {
    label: 'Active Jobs',
    value: '12',
    change: '+2 this month',
    icon: Briefcase,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    label: 'Applications',
    value: '48',
    change: '+12 pending',
    icon: FileText,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    label: 'Messages',
    value: '24',
    change: '5 unread',
    icon: MessageSquare,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    label: 'Total Earnings',
    value: '$8,450',
    change: '+$1,200 this month',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }
];

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Mock user data - in real app this would come from useAuth()
  const user = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Hiring Manager',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  };

  const getActivityStatusVariant = (status) => {
    if (status === 'new') return 'error';
    if (status === 'unread') return 'warning';
    return 'success';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
              <p className="text-gray-600 text-sm mt-1">Here's what's happening with your account today</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={24} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} padding="lg" hover className="transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.change}</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon size={24} className={stat.color} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 border-b border-gray-200">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`px-4 py-3 font-medium transition-colors border-b-2 ${
                selectedTab === 'overview'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Recent Activity
            </button>
            <button
              onClick={() => setSelectedTab('jobs')}
              className={`px-4 py-3 font-medium transition-colors border-b-2 ${
                selectedTab === 'jobs'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Active Jobs
            </button>
            <button
              onClick={() => setSelectedTab('workers')}
              className={`px-4 py-3 font-medium transition-colors border-b-2 ${
                selectedTab === 'workers'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Saved Workers
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card padding="lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {mockActivityData.map((activity) => {
                    const Icon = activity.icon;
                    return (
                      <div
                        key={activity.id}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100">
                            <Icon size={20} className="text-purple-600" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                            <Badge variant={getActivityStatusVariant(activity.status)} size="sm">
                              {activity.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-1">{activity.description}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock size={12} />
                            {activity.timestamp}
                          </p>
                        </div>

                        <button className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <Card padding="lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Button variant="primary" size="lg" className="w-full">
                    <Briefcase size={18} />
                    Post New Job
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full">
                    <Users size={18} />
                    Browse Workers
                  </Button>
                  <Button variant="ghost" size="lg" className="w-full">
                    <MessageSquare size={18} />
                    View Messages
                  </Button>
                  <Button variant="accent" size="lg" className="w-full">
                    <TrendingUp size={18} />
                    View Analytics
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Profile Stats</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Profile Completion</span>
                      <span className="font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-cyan-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <span className="text-gray-600">Profile Rating</span>
                      <span className="font-semibold text-yellow-600">4.8/5.0</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Active Jobs Tab */}
        {selectedTab === 'jobs' && (
          <Card padding="lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Jobs</h2>
            <div className="space-y-4">
              {[
                { title: 'AI Content Generator - Full Stack', applications: 12, views: 248 },
                { title: 'Machine Learning Engineer', applications: 8, views: 156 },
                { title: 'Prompt Engineering Specialist', applications: 5, views: 89 }
              ].map((job, idx) => (
                <Card key={idx} padding="md" hover className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{job.title}</h4>
                    <div className="flex gap-4 mt-2 text-sm text-gray-600">
                      <span>{job.applications} applications</span>
                      <span>{job.views} views</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="md">
                    Manage
                  </Button>
                </Card>
              ))}
            </div>
          </Card>
        )}

        {/* Saved Workers Tab */}
        {selectedTab === 'workers' && (
          <Card padding="lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Saved Workers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Sarah Chen', role: 'AI/ML Engineer', rate: '$85/hr' },
                { name: 'Marcus Johnson', role: 'Full Stack Developer', rate: '$95/hr' },
                { name: 'Elena Rodriguez', role: 'Content Creator', rate: '$65/hr' }
              ].map((worker, idx) => (
                <Card key={idx} padding="md" hover>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={`https://images.unsplash.com/photo-${1500000000000 + idx}?w=100&h=100&fit=crop`}
                      alt={worker.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{worker.name}</h4>
                      <p className="text-sm text-gray-600">{worker.role}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 font-semibold">{worker.rate}</span>
                    <Button variant="ghost" size="sm">
                      Contact
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
