import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, FileText, Package, Settings, LogOut, Plus } from 'lucide-react';
import Button from 'A/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('jobs');

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md p-8 text-center">
          <p className="text-slate-600 mb-6">Please sign in to view your dashboard.</p>
          <Button onClick={() => navigate('/auth')} className="w-full">
            Sign In
          </Button>
        </Card>
      </div>
    );
  }

  const tabs = [
    { id: 'jobs', label: 'My Jobs', icon: Briefcase },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'products', label: 'My Products', icon: Package },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const placeholderJobs = [
    {
      id: 1,
      title: 'Build AI Chatbot',
      status: 'In Progress',
      budget: '$5,000 - $8,000',
      postedDate: '2 days ago',
      applications: 12,
    },
    {
      id: 2,
      title: 'Data Analysis Automation',
      status: 'Open',
      budget: '$2,000 - $4,000',
      postedDate: '5 days ago',
      applications: 5,
    },
  ];

  const placeholderApplications = [
    {
      id: 1,
      jobTitle: 'Build AI Chatbot',
      applicant: 'Alex Chen',
      proposedRate: '$75/hour',
      status: 'Pending',
      date: '2 days ago',
    },
    {
      id: 2,
      jobTitle: 'Data Analysis',
      applicant: 'Jordan Lee',
      proposedRate: '$65/hour',
      status: 'Accepted',
      date: '3 days ago',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-slate-600 mt-1">Welcome back, {user.email}</p>
            </div>
            <Button onClick={() => signOut()} variant="outline" className="gap-2">
              <LogOut size={18} />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 border-b border-slate-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 -mb-4 pb-4'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'jobs' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">My Jobs</h2>
              <Button onClick={() => navigate('/post-job')} className="gap-2">
                <Plus size={18} />
                Post New Job
              </Button>
            </div>

            {placeholderJobs.length > 0 ? (
              <div className="space-y-4">
                {placeholderJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate(`/jobs/${job.id}`)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                        <p className="text-slate-600 text-sm">Posted {job.postedDate}</p>
                      </div>
                      <Badge
                        variant={job.status === 'In Progress' ? 'default' : 'outline'}
                      >
                        {job.status}
                      </Badge>
                    </div>

                    <div className="flex gap-6 text-sm">
                      <div>
                        <p className="text-slate-600">Budget</p>
                        <p className="font-bold text-slate-900">{job.budget}</p>
                      </div>
                      <div>
                        <p className="text-slate-600">Applications</p>
                        <p className="font-bold text-slate-900">{job.applications}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-slate-600 text-lg mb-4">No jobs posted yet.</p>
                <Button onClick={() => navigate('/post-job')}>Post Your First Job</Button>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'applications' && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Applications</h2>

            {placeholderApplications.length > 0 ? (
              <div className="space-y-4">
                {placeholderApplications.map((app) => (
                  <Card key={app.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{app.jobTitle}</h3>
                        <p className="text-slate-600 text-sm">From {app.applicant}</p>
                      </div>
                      <Badge
                        variant={app.status === 'Accepted' ? 'default' : 'outline'}
                      >
                        {app.status}
                      </Badge>
                    </div>

                    <div className="flex gap-6 text-sm mb-4">
                      <div>
                        <p className="text-slate-600">Proposed Rate</p>
                        <p className="font-bold text-slate-900">{app.proposedRate}</p>
                      </div>
                      <div>
                        <p className="text-slate-600">Applied</p>
                        <p className="font-bold text-slate-900">{app.date}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                      {app.status === 'Pending' && (
                        <>
                          <Button size="sm">Accept</Button>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                        </>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-slate-600 text-lg">No applications yet.</p>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">My Products</h2>
              <Button onClick={() => navigate('/creator-dashboard')} className="gap-2">
                <Plus size={18} />
                Create Product
              </Button>
            </div>

            <Card className="p-12 text-center">
              <p className="text-slate-600 text-lg mb-4">
                No products created yet.
              </p>
              <p className="text-slate-600 mb-6">
                Upgrade to creator to start selling your skills and workflows.
              </p>
              <Button onClick={() => navigate('/creator-dashboard')}>
                Become a Creator
              </Button>
            </Card>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Settings</h2>

            <Card className="p-6 mb-6">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Profile Information</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Bio
                  </label>
                  <textarea
                    placeholder="Tell us about yourself"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Account Preferences</h3>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <div>
                    <p className="font-semibold text-slate-900">Email Notifications</p>
                    <p className="text-sm text-slate-600">Receive updates about new applications</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer pt-4 border-t border-slate-200">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <div>
                    <p className="font-semibold text-slate-900">Marketing Emails</p>
                    <p className="text-sm text-slate-600">Receive tips and platform updates</p>
                  </div>
                </label>
              </div>

              <div className="flex gap-3 pt-4 mt-6 border-t border-slate-200">
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1">Save Preferences</Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
   "¾
}
