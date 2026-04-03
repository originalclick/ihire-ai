import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, DollarSign, MapPin, ArrowLeft, User } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useAuth } from 'A/context/AuthContext';

// Placeholder data
const PLACEHOLDER_JOB = {
  id: 1,
  title: 'Build AI Chatbot for Customer Support',
  type: 'Full-time',
  budget: { min: 5000, max: 8000 },
  skills: ['Python', 'LLM', 'API Integration'],
  postedDate: '2 days ago',
  source: 'Direct Post',
  description: 'Build a comprehensive AI chatbot for customer support',
  fullDescription: `We are looking for an experienced AI developer to build a sophisticated chatbot for our customer support system. The chatbot should be able to handle common customer inquiries, escalate complex issues to human agents, and integrate seamlessly with our existing ticketing system.

Requirements:
- Experience building LLM-powered applications
- Strong Python and API integration skills
- Familiarity with chatbot frameworks (LangChain, LlamaIndex, etc.)
- Understanding of NLP and conversation design
- Experience with production deployments

The ideal candidate will have:
- Portfolio of previous chatbot projects
- Experience with customer support systems
- Knowledge of RAG (Retrieval Augmented Generation)
- Ability to work independently and communicate progress`,
  requirements: [
    'Experience building LLM-powered applications',
    'Strong Python and API integration skills',
    'Familiarity with chatbot frameworks',
    'Understanding of NLP and conversation design',
    'Experience with production deployments',
  ],
  poster: {
    name: 'Acme Corp',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=acme',
    rating: 4.8,
    reviewCount: 24,
    jobsPosted: 12,
  },
  applicants: 5,
  deadline: '2026-04-10',
};

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [job] = useState(PLACEHOLDER_JOB);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [proposedRate, setProposedRate] = useState('');
  const [message, setMessage] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/auth');
      return;
    }
    // Handle apply logic here
    console.log('Applied with rate:', proposedRate, 'Message:', message);
    setShowApplyModal(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft size={18} />
            Back to Jobs
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-8 mb-6">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">{job.title}</h1>
                    <p className="text-slate-600">{job.source}</p>
                  </div>
                  <Badge>{job.type}</Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <DollarSign size={20} className="text-slate-500" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Budget</p>
                    <p className="font-bold text-lg">
                      ${job.budget.min.toLocaleString()} - ${job.budget.max.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-slate-500" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Deadline</p>
                    <p className="font-bold text-lg">{job.deadline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <User size={20} className="text-slate-500" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Applicants</p>
                    <p className="font-bold text-lg">{job.applicants}</p>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Job</h2>
                <div className="prose prose-sm max-w-none text-slate-700">
                  {job.fullDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 whitespace-pre-wrap">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Skills Required */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Required Skills</h3>
                <div className="flex gap-2 flex-wrap">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Requirements List */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <span className="text-blue-600 font-bold">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Apply Card */}
            <Card className="p-6 mb-6 sticky top-8">
              {!user ? (
                <Button onClick={() => navigate('/auth')} className="w-full mb-4">
                  Sign In to Apply
                </Button>
              ) : (
                <Button onClick={() => setShowApplyModal(true)} className="w-full mb-4">
                  Apply Now
                </Button>
              )}
              <p className="text-xs text-slate-600 text-center">
                Sign in or create an account to apply
              </p>
            </Card>

            {/* Poster Info */}
            <Card className="p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-4">About the Poster</h3>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={job.poster.avatar}
                  alt={job.poster.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-slate-900">{job.poster.name}</p>
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <span>★</span>
                    <span>
                      {job.poster.rating} ({job.poster.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pb-4 border-b border-slate-200 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Jobs Posted</span>
                  <span className="font-bold text-slate-900">{job.poster.jobsPosted}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Apply for Job</h2>

            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Proposed Rate (per hour/project)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-slate-600">$</span>
                  <input
                    type="number"
                    value={proposedRate}
                    onChange={(e) => setProposedRate(e.target.value)}
                    placeholder="Enter your proposed rate"
                    required
                    className="w-full pl-7 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Cover Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell the poster why you're a great fit..."
                  rows={4}
                  required
                  className="v-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => setShowApplyModal(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Submit Application
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
