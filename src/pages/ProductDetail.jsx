import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowLeft, Download, CheckCircle, User, Calendar, Tag } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const mockProducts = {
  '1': {
    id: 1, name: 'AI Writing Assistant Pro', price: '$49', rating: 4.8, reviews: 128,
    creator: 'Sarah Chen', category: 'Writing', downloads: 1250,
    description: 'A powerful AI writing assistant that helps you create compelling content. Features include blog post generation, email drafting, social media copy, and more. Powered by the latest language models with customizable tone and style settings.',
    features: ['Blog post generation', 'Email drafting', 'Social media copy', 'SEO optimization', 'Multiple tone settings', 'Export to multiple formats'],
    createdAt: '2025-01-01'
  },
  '2': {
    id: 2, name: 'GPT Prompt Collection', price: '$29', rating: 4.6, reviews: 85,
    creator: 'Marcus Johnson', category: 'Prompts', downloads: 890,
    description: 'A curated collection of 500+ battle-tested prompts for ChatGPT, Claude, and other LLMs. Organized by category including business, creative writing, coding, analysis, and education.',
    features: ['500+ tested prompts', 'Multiple LLM support', 'Category organized', 'Regular updates', 'Community access', 'Custom prompt builder'],
    createdAt: '2024-12-15'
  },
  '3': {
    id: 3, name: 'ML Model Training Kit', price: '$89', rating: 4.9, reviews: 64,
    creator: 'Elena Rossi', category: 'Machine Learning', downloads: 456,
    description: 'Complete toolkit for training and fine-tuning ML models. Includes pre-configured notebooks, data preprocessing pipelines, model evaluation tools, and deployment scripts.',
    features: ['Pre-configured notebooks', 'Data preprocessing', 'Model evaluation', 'Deployment scripts', 'GPU optimization', 'Version tracking'],
    createdAt: '2024-11-20'
  }
};

const mockReviews = [
  { id: 1, user: 'Alex K.', rating: 5, text: 'Excellent product! Saved me hours of work.', date: '2025-01-10' },
  { id: 2, user: 'Jamie L.', rating: 4, text: 'Great value for the price. Very comprehensive.', date: '2025-01-08' },
  { id: 3, user: 'Morgan P.', rating: 5, text: 'Highly recommend to anyone in the field.', date: '2025-01-05' }
];

export default function ProductDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const product = mockProducts[id] || mockProducts['1'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/marketplace" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6">
          <ArrowLeft size={18} />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card padding="lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="info" size="sm">{product.category}</Badge>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
                  <p className="text-gray-600 mt-1">by {product.creator}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-purple-600">{product.price}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 border-b border-gray-200 mb-4">
                {['overview', 'features', 'reviews'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={'px-4 py-2 font-medium border-b-2 capitalize ' +
                      (activeTab === tab ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600')}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'overview' && (
                <div>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <Download size={20} className="mx-auto text-purple-600 mb-1" />
                      <p className="font-semibold">{product.downloads}</p>
                      <p className="text-xs text-gray-500">Downloads</p>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <Star size={20} className="mx-auto text-yellow-600 mb-1" />
                      <p className="font-semibold">{product.rating}</p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <CheckCircle size={20} className="mx-auto text-green-600 mb-1" />
                      <p className="font-semibold">{product.reviews}</p>
                      <p className="text-xs text-gray-500">Reviews</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  {mockReviews.map(review => (
                    <div key={review.id} className="p-4 border border-gray-100 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-gray-400" />
                          <span className="font-medium">{review.user}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                      <p className="text-xs text-gray-400 mt-2">{review.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          <div>
            <Card padding="lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Purchase</h2>
              <p className="text-3xl font-bold text-purple-600 mb-4">{product.price}</p>
              <Button variant="primary" size="lg" className="w-full mb-3">
                <ShoppingCart size={18} />
                Buy Now
              </Button>
              <Button variant="secondary" size="lg" className="w-full">
                Add to Cart
              </Button>
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span>Created {product.createdAt}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Tag size={16} />
                  <span>{product.category}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Download size={16} />
                  <span>{product.downloads} downloads</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
