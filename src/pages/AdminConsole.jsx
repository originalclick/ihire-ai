import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Trash2, Flag, ArrowLeft } from 'lucide-react';
import Button from 'A/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

// Placeholder data
const PLACEHOLDER_JOBS = [
  {
    id: 1,
    title: 'Build AI Chatbot',
    poster: 'Acme Corp',
    status: 'Active',
    created: '2 days ago',
    flags: 0,
  },
  {
    id: 2,
    title: 'Suspicious Job Post',
    poster: 'Unknown User',
    status: 'Flagged',
    created: '1 day ago',
    flags: 3,
  },
];

const PLACEHOLDER_WORKERS = [
  {
    id: 1,
    name: 'Alex Chen',
    email: 'alex@example.com',
    rating: 4.9,
    status: 'Active',
    joinDate: '3 months ago',
  },
  {
    id: 2,
    name: 'Spam Account',
    email: 'spam@example.com',
    rating: 1.2,
    status: 'Flagged',
    joinDate: '1 week ago',
  },
];

const PLACEHOLDER_REVIEWS = [
  {
    id: 1,
    reviewer: 'User123',
    target: 'Alex Chen',
    rating: 5,
    text: 'Excellent work!',
    status: 'Approved',
  },
  {
    id: 2,
    reviewer: 'Hater User',
    target: 'Sam Rodriguez',
    rating: 1,
    text: 'Offensive content...',
    status: 'Pending',
  },
];

const PLACEHOLDER_PAYMENTS = [
  {
    id: 1,
    amount: 5000,
    from: 'Job Poster',
    to: 'Alex Chen',
    date: '2 days ago',
    status: 'Completed',
  },
  {
    id: 2,
    amount: 100,
    from: 'Suspicious User',
    to: 'Worker',
    date: '1 day ago',
    status: 'Pending Review',
  },
];

export default function AdminConsole() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('jobs');

  const tabs = [
    { id: 'jobs', label: 'Jobs', count: 2 },
    { id: 'workers', label: 'Workers', count: 2 },
    { id: 'reviews', label: 'Reviews', count: 2 },
    { id: 'payments', label: 'Payments', count: 2 },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-red-50 border-b border-red-200">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 mb-4"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Shield size={32} className="text-red-600" />
            <h1 className="text-4xl font-bold text-slate-900">Admin Console</h1>
          </div>
          <p className="text-slate-600">Manage content, users, and platform integrity</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <p className="text-slate-600 text-xs uppercase mb-1">Active Jobs</p>
            <p className="text-3xl font-bold text-slate-900">1,234</p>
          </Card>
          <Card className="p-4">
            <p className="text-slate-600 text-xs uppercase mb-1">Total Workers</p>
            <p className="text-3xl font-bold text-slate-900">567</p>
          </Card>
          <Card className="p-4">
            <p className="text-slate-600 text-xs uppercase mb-1">Pending Reviews</p>
            <p className="text-3xl font-bold text-red-600">23</p>
          </Card>
          <Card className="p-4">
            <p className="text-slate-600 text-xs uppercase mb-1">Flagged Items</p>
            <p className="text-3xl font-bold text-red-600">5</p>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 border-b border-slate-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-4 pb-4'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {tab.count}
                </Badge>
              )}
            </button>
          ))}
        </div>

        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-900">Title</th>
                  <th className="text-left p-4 font-bold text-slate-900">Poster</th>
                  <th className="text-left p-4 font-bold text-slate-900">Status</th>
                  <th className="text-left p-4 font-bold text-slate-900">Created</th>
                  <th className="text-left p-4 font-bold text-slate-900">Flags</th>
                  <th className="text-center p-4 font-bold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {PLACEHOLDER_JOBS.map((job) => (
                  <tr key={job.id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4">{job.title}</td>
                    <td className="p-4">{job.poster}</td>
                    <td className="p-4">
                      <Badge
                        variant={job.status === 'Active' ? 'default' : 'secondary'}
                      >
                        {job.status}
                      </Badge>
                    </td>
                    <td className="p-4">{job.created}</td>
                    <td className="p-4">
                      <Badge variant="outline">{job.flags}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2 justify-center">
                        <button className="p-2 hover:bg-slate-100 rounded">
                          <Flag size={16} className="text-yellow-600" />
                        </button>
                        <button className="p-2 hover:bg-red-100 rounded">
                          <Trash2 size={16} className="text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Workers Tab */}
        {activeTab === 'workers' && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-900">Name</th>
                  <th className="text-left p-4 font-bold text-slate-900">Email</th>
                  <th className="text-left p-4 font-bold text-slate-900">Rating</th>
                  <th className="text-left p-4 font-bold text-slate-900">Status</th>
                  <th className="text-left p-4 font-bold text-slate-900">Joined</th>
                  <th className="text-center p-4 font-bold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {PLACEHOLDER_WORKERS.map((worker) => (
                  <tr key={worker.id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">{worker.name}</td>
                    <td className="p-4">{worker.email}</td>
                    <td className="p-4">
                      <span className="font-semibold">★ {worker.rating}</span>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={worker.status === 'Active' ? 'default' : 'secondary'}
                      >
                        {worker.status}
                      </Badge>
                    </td>
                    <td className="p-4">{worker.joinDate}</td>
                    <td className="p-4">
                      <div className="flex gap-2 justify-center">
                        <button className="p-2 hover:bg-slate-100 rounded">
                          <Flag size={16} className="text-yellow-600" />
                        </button>
                        <button className="p-2 hover:bg-red-100 rounded">
                          <Trash2 size={16} className="text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {PLACEHOLDER_REVIEWS.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {review.reviewer} → {review.target}
                    </h3>
                    <p className="text-sm text-slate-600">
                      ★ {review.rating} - {review.text}
                    </p>
                  </div>
                  <Badge
                    variant={review.status === 'Approved' ? 'default' : 'secondary'}
                  >
                    {review.status}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  {review.status === 'Pending' && (
                    <>
                      <Button size="sm">Approve</Button>
                      <Button size="sm" variant="outline">
                        Reject
                      </Button>
                    </>
                  )}
                  <Button size="sm" variant="outline" className="ml-auto gap-1">
                    <Trash2 size={14} />
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-900">Aount</th>
                  <th className="text-left p-4 font-bold text-slate-900">From</th>
                  <th className="text-left p-4 font-bold text-slate-900">To</th>
                  <th className="text-left p-4 font-bold text-slate-900">Date</th>
                  <th className="text-left p-4 font-bold text-slate-900">Status</th>
                  <th className="text-center p-4 font-bold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {PLACEHOLDER_PAYMENTS.map((payment) => (
                  <tr key={payment.id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">
                      ${payment.amount.toLocaleString()}
                    </td>
                    <td className="p-4">{payment.from}</td>
                    <td className="p-4">{payment.to}</td>
                    <td className="p-4">{{payment.date}}</td>
                    <td className="p-4">
                      <Badge
                        variant={
                          payment.status === 'Completed' ? 'default' : 'secondary'
                        }
                      >
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2 justify-center">
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
