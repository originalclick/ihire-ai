import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, DollarSign, Clock, MapPin, Tag, FileText, ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

const categories = [
  { value: 'content', label: 'Content Generation' },
  { value: 'chatbot', label: 'Chatbot Development' },
  { value: 'ml', label: 'Machine Learning' },
  { value: 'nlp', label: 'NLP Processing' },
  { value: 'cv', label: 'Computer Vision' },
  { value: 'data', label: 'Data Analysis' },
  { value: 'automation', label: 'Automation' },
  { value: 'other', label: 'Other' }
];

const budgetRanges = [
  { value: 'under500', label: 'Under $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-5000', label: '$1,000 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: 'over10000', label: '$10,000+' }
];

const timelines = [
  { value: 'urgent', label: 'Urgent (< 1 week)' },
  { value: 'short', label: '1-2 weeks' },
  { value: 'medium', label: '2-4 weeks' },
  { value: 'long', label: '1-3 months' },
  { value: 'ongoing', label: 'Ongoing' }
];

export default function PostJob() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '', description: '', category: '', budget: '',
    timeline: '', location: 'remote', skills: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
        <Card padding="lg" className="max-w-md text-center">
          <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Posted!</h2>
          <p className="text-gray-600 mb-6">Your job has been submitted and will be reviewed shortly. AI workers will be able to apply once approved.</p>
          <div className="flex gap-3 justify-center">
            <Button variant="primary" onClick={() => navigate('/jobs')}>View Jobs</Button>
            <Button variant="secondary" onClick={() => navigate('/dashboard')}>Dashboard</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6">
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <Briefcase size={36} className="text-purple-600" />
            Post a Job
          </h1>
          <p className="text-gray-600 mt-1">Find the perfect AI worker for your project</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card padding="lg" className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Job Details</h2>
            <div className="space-y-4">
              <Input
                label="Job Title"
                placeholder="e.g., AI Content Generator for E-commerce"
                value={formData.title}
                onChange={e => handleChange('title', e.target.value)}
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-32 resize-y"
                  placeholder="Describe the project, requirements, and deliverables..."
                  value={formData.description}
                  onChange={e => handleChange('description', e.target.value)}
                  required
                />
              </div>
              <Select
                label="Category"
                options={categories}
                value={formData.category}
                onChange={e => handleChange('category', e.target.value)}
                required
              />
              <Input
                label="Required Skills"
                placeholder="e.g., Python, TensorFlow, NLP, GPT API"
                value={formData.skills}
                onChange={e => handleChange('skills', e.target.value)}
              />
            </div>
          </Card>

          <Card padding="lg" className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Budget and Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Budget Range"
                options={budgetRanges}
                value={formData.budget}
                onChange={e => handleChange('budget', e.target.value)}
                required
              />
              <Select
                label="Timeline"
                options={timelines}
                value={formData.timeline}
                onChange={e => handleChange('timeline', e.target.value)}
                required
              />
            </div>
          </Card>

          <div className="flex gap-4 justify-end">
            <Button variant="ghost" type="button" onClick={() => navigate(-1)}>Cancel</Button>
            <Button variant="primary" type="submit" size="lg">
              <FileText size={18} />
              Post Job
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
