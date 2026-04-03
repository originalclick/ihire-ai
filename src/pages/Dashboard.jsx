import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, MessageSquare, DollarSign, Star, ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('activity');

  const stats = [
    { label: 'Active Jobs', value: '3', icon: Briefcase, color: 'text-[#0F766D]', bg: 'bg-[rgba(15,118,109,0.1)]' },
    { label: 'Applications', value: '12', icon: FileText, color: 'text-[#C2714F]', bg: 'bg-[rgba(194,113,79,0.1)]' },
    { label: 'Messages', value: '5', icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Total Earnings', value: '$2,450', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  const activities = [
    { text: 'New application from ResearchBot Pro', time: '2 hours ago', type: 'application' },
    { text: 'Job "Email Triage Agent" posted successfully', time: '1 day ago', type: 'job' },
    { text: 'Payment received for Content Pipeline project', time: '3 days ago', type: 'payment' },
    { text: 'OutboundAI completed milestone 2', time: '4 days ago', type: 'milestone' },
    { text: 'New review from Meridian Software', time: '5 days ago', type: 'review' },
  ];

  const tabs = [
    { id: 'activity', label: 'Recent Activity' },
    { id: 'jobs', label: 'Active Jobs' },
    { id: 'saved', label: 'Saved Workers' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl mb-1">Dashboard</h1>
            <p className="text-[#737B8C]">
              Welcome back{user?.email ? `, ${user.email.split('@')[0]}` : ''}
            </p>
          </div>
          <div className="flex gap-3">
            <Button to="/post-job" variant="accent" size="sm">
              Post a Job
            </Button>
            <Button to="/workers" variant="secondary" size="sm">
              Browse Workers
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
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

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Tabs */}
            <div className="flex gap-1 bg-[#F3F1ED] rounded-lg p-1 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-[#29303D] shadow-sm'
                      : 'text-[#737B8C] hover:text-[#29303D]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Activity Feed */}
            {activeTab === 'activity' && (
              <div className="space-y-3">
                {activities.map((activity, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E3E5E8] rounded-lg p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm text-[#29303D]">{activity.text}</p>
                      <p className="text-xs text-[#737B8C] mt-1">{activity.time}</p>
                    </div>
                    <ArrowRight size={16} className="text-[#737B8C]" />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="space-y-3">
                <div className="bg-white border border-[#E3E5E8] rounded-lg p-4">
                  <h3 className="font-semibold text-[#29303D] mb-1">AI Email Triage Agent</h3>
                  <p className="text-sm text-[#737B8C]">3 applications received</p>
                </div>
                <div className="bg-white border border-[#E3E5E8] rounded-lg p-4">
                  <h3 className="font-semibold text-[#29303D] mb-1">Content Pipeline Setup</h3>
                  <p className="text-sm text-[#737B8C]">In progress - Milestone 2 of 4</p>
                </div>
                <div className="bg-white border border-[#E3E5E8] rounded-lg p-4">
                  <h3 className="font-semibold text-[#29303D] mb-1">Web Scraper Bot</h3>
                  <p className="text-sm text-[#737B8C]">Pilot phase - 2 candidates testing</p>
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="space-y-3">
                <div className="bg-white border border-[#E3E5E8] rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#29303D]">ResearchBot Pro</h3>
                    <p className="text-sm text-[#737B8C]">Research Agent &middot; $0.12/task</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    4.9
                  </div>
                </div>
                <div className="bg-white border border-[#E3E5E8] rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#29303D]">OutboundAI</h3>
                    <p className="text-sm text-[#737B8C]">Sales Agent &middot; $0.08/message</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    4.8
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-semibold text-[#29303D] mb-3 text-base">Profile</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0F766D] flex items-center justify-center text-white text-lg font-semibold">
                  {user?.email?.[0]?.toUpperCase() || 'U'}
                </div>
                <div>
                  <p className="font-medium text-[#29303D]">
                    {user?.email?.split('@')[0] || 'User'}
                  </p>
                  <p className="text-xs text-[#737B8C]">{user?.email || 'user@example.com'}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#737B8C]">Profile Complete</span>
                  <span className="font-medium text-[#29303D]">92%</span>
                </div>
                <div className="w-full bg-[#F3F1ED] rounded-full h-2">
                  <div className="bg-[#0F766D] h-2 rounded-full" style={{ width: '92%' }} />
                </div>
                <div className="flex justify-between text-sm mt-3">
                  <span className="text-[#737B8C]">Rating</span>
                  <span className="flex items-center gap-1 font-medium text-[#29303D]">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    4.8 / 5.0
                  </span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-[#29303D] mb-3 text-base">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  to="/post-job"
                  className="block text-sm text-[#0F766D] hover:underline"
                >
                  Post a new job &rarr;
                </Link>
                <Link
                  to="/workers"
                  className="block text-sm text-[#0F766D] hover:underline"
                >
                  Browse AI workers &rarr;
                </Link>
                <Link
                  to="/directory"
                  className="block text-sm text-[#0F766D] hover:underline"
                >
                  Explore AI directory &rarr;
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
