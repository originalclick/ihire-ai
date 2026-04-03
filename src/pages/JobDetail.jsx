import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign, ArrowLeft, Send, Building, Calendar, Users, CheckCircle, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useAuth } from '@/context/AuthContext';

const mockJobs = {
  '1': {
    id: 1, title: 'AI Content Generator', company: 'TechCorp', location: 'Remote',
    salary: '$3,000 - $5,000', type: 'Contract', posted: '2 days ago', applications: 12,
    category: 'Content Generation', experience: 'Intermediate',
    description: 'We are looking for an AI specialist to build a content generation pipeline for our e-commerce platform. The ideal candidate will have experience with LLMs, prompt engineering, and content optimization. You will be responsible for creating automated content workflows that generate product descriptions, blog posts, and marketing copy.',
    requirements: ['Experience with GPT-4 or Claude APIs', 'Strong prompt engineering skills', 'Python proficiency', 'Understanding of SEO principles', 'Portfolio of AI-generated content'],
    benefits: ['Flexible schedule', 'Remote work', 'Performance bonuses', 'Long-term contract potential']
  },
  '2': {
    id: 2, title: 'ML Model Training Specialist', company: 'DataFlow Inc', location: 'Remote',
    salary: '$5,000 - $8,000', type: 'Project', posted: '1 week ago', applications: 8,
    category: 'Machine Learning', experience: 'Expert',
    description: 'DataFlow is seeking an ML engineer to fine-tune our recommendation models. This is a project-based role requiring deep expertise in transformer architectures, training pipelines, and model evaluation.',
    requirements: ['5+ years ML experience', 'PyTorch or TensorFlow expertise', 'Experience with fine-tuning LLMs', 'Strong math and statistics background', 'Published research preferred'],
    benefits: ['Competitive project rate', 'Access to GPU clusters', 'Research collaboration', 'Reference letter']
  },
  '3': {
    id: 3, title: 'Chatbot Developer', company: 'BotWorks', location: 'Hybrid - NYC',
    salary: '$4,000 - $6,000', type: 'Contract', posted: '3 days ago', applications: 15,
    category: 'Chatbot Development', experience: 'Intermediate',
    description: 'Build and deploy a customer service chatbot for our retail client. The bot should handle FAQs, order tracking, returns, and escalation to human agents.',
    requirements: ['Chatbot framework experience', 'NLP understanding', 'API integration skills', 'JavaScript/TypeScript', 'Prior customer service bot experience'],
    benefits: ['Weekly payments', 'Flexible hours', 'Portfolio project', 'Potential for ongoing work']
  }
};

export default function JobDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [applied, setApplied] = useState(false);

  const job = mockJobs[id] || mockJobs['1'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/jobs" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6">
          <ArrowLeft size={18} />
          Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card padding="lg">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="info" size="sm">{job.category}</Badge>
                  <Badge variant="default" size="sm">{job.type}</Badge>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600">
                  <span className="flex items-center gap-1"><Building size={16} /> {job.company}</span>
                  <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                  <span className="flex items-center gap-1"><DollarSign size={16} /> {job.salary}</span>
                  <span className="flex items-center gap-1"><Clock size={16} /> {job.posted}</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Requirements</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Benefits</h2>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star size={18} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          <div>
            <Card padding="lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Apply Now</h2>
              {applied ? (
                <div className="text-center py-4">
                  <CheckCircle size={48} className="mx-auto text-green-500 mb-3" />
                  <p className="font-semibold text-gray-900">Application Submitted!</p>
                  <p className="text-sm text-gray-600 mt-1">The employer will review your profile.</p>
                </div>
              ) : (
                <div>
                  <p className="text-gray-600 text-sm mb-4">Submit your application to be considered for this role. The employer will review your profile and portfolio.</p>
                  <Button variant="primary" size="lg" className="w-full" onClick={() => setApplied(true)}>
                    <Send size={18} />
                    Apply for this Job
                  </Button>
                </div>
              )}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Applications</span>
                  <span className="font-semibold">{job.applications}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-semibold">{job.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Posted</span>
                  <span className="font-semibold">{job.posted}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
