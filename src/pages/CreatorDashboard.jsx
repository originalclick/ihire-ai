import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, TrendingUp, DollarSign, Package, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from 'A/components/ui/Card';
import Badge from 'A/components/ui/Badge';
import { useAuth } from '@/context/AuthContext';

const PRODUCT_CATEGORIES = ['Skill', 'Workflow', 'Template', 'Prompt Pack'];

export default function CreatorDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState('overview');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadData, setUploadData] = useState({
    title: '',
    description: '',
    category: 'Skill',
    tags: '',
    price: '',
    file: null,
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md p-8 text-center">
          <p className="text-slate-600 mb-6">Please sign in to access creator dashboard.</p>
          <Button onClick={() => navigate('/auth')} className="w-full">
            Sign In
          </Button>
        </Card>
      </div>
    );
  }

  const placeholderProducts = [
    {
      id: 1,
      title: 'Advanced LLM Prompts',
      category: 'Prompt Pack',
      price: 29.99,
      sales: 127,
      revenue: 3806.73,
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Email Automation Workflow',
      category: 'Workflow',
      price: 49.99,
      sales: 84,
      revenue: 4199.16,
      rating: 4.8,
    },
  ];

  const placeholderSales = [
    {
      id: 1,
      product: 'Advanced LLM Prompts',
      date: '2 days ago',
      amount: 29.99,
      buyer: 'Tech Startup Inc',
    },
    {
      id: 2,
      product: 'Email Automation Workflow',
      date: '3 days ago',
      amount: 49.99,
      buyer: 'DataViz Corp',
    },
    {
      id: 3,
      product: 'Advanced LLM Prompts',
      date: '5 days ago',
      amount: 29.99,
      buyer: 'Innovation Labs',
    },
  ];

  const totalRevenue = placeholderProducts.reduce((sum, p) => sum + p.revenue, 0);
  const totalSales = placeholderProducts.reduce((sum, p) => sum + p.sales, 0);

  const handleUpload = (e) => {
    e.preventDefault();
    // Handle file upload
    console.log('Uploading product:', uploadData);
    setShowUploadModal(false);
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
            Back
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Creator Dashboard</h1>
              <p className="text-slate-600 mt-1">Manage your products and track sales</p>
            </div>
            <Button onClick={() => setShowUploadModal(true)} className="gap-2">
              <Plus size={18} />
              Upload Product
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600 text-sm mb-1">Total Revenue</p>
                <p className="text-3xl font-bold text-slate-900">${totalRevenue.toFixed(2)}</p>
              </div>
              <DollarSign size={24} className="text-green-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600 text-sm mb-1">Total Sales</p>
                <p className="text-3xl font-bold text-slate-900">{totalSales}</p>
              </div>
              <TrendingUp size={24} className="text-blue-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600 text-sm mb-1">Active Products</p>
                <p className="text-3xl font-bold text-slate-900">{placeholderProducts.length}</p>
              </div>
              <Package size={24} className="text-purple-600" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`font-semibold text-sm transition-colors ${
              activeTab === 'overview'
                ? 'text-blue-600 border-b-2 border-blue-600 -mb-4 pb-4'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`font-semibold text-sm transition-colors ${
              activeTab === 'products'
                ? 'text-blue-600 border-b-2 border-blue-600 -mb-4 pb-4'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`font-semibold text-sm transition-colors ${
              activeTab === 'profile'
                ? 'text-blue-600 border-b-2 border-blue-600 -mb-4 pb-4'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Profile
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Recent Sales */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Sales</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-slate-200">
                    <tr>
                      <th className="text-left py-3 px-2 font-bold text-slate-900">Product</th>
                      <th className="text-left py-3 px-2 font-bold text-slate-900">Date</th>
                      <th className="text-left py-3 px-2 font-bold text-slate-900">Buyer</th>
                      <th className="text-right py-3 px-2 font-bold text-slate-900">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placeholderSales.map((sale) => (
                      <tr key={sale.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-2 text-slate-900">{sale.product}</td>
                        <td className="py-3 px-2 text-slate-600">{sale.date}</td>
                        <td className="py-3 px-2 text-slate-600">{sale.buyer}</td>
                        <td className="py-3 px-2 text-right font-bold text-slate-900">
                          ${sale.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Top Products */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Top Performing Products</h2>
              <div className="space-y-4">
                {placeholderProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{product.title}</h3>
                      <p className="text-sm text-slate-600">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{product.sales} sales</p>
                      <p className="text-sm text-green-600">${product.revenue.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">My Products</h2>
            {placeholderProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {placeholderProducts.map((product) => (
                  <Card key={product.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{product.title}</h3>
                        <Badge variant="outline">{product.category}</Badge>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-4 border-z border-slate-200 my-4 text-center">
                      <div>
                        <p className="text-xs text-slate-600 uppercase mb-1">Sales</p>
                        <p className="font-bold text-slate-900">{{product.sales}}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 uppercase mb-1">Revenue</p>
                        <p className="font-bold text-slate-900">
                          ${product.revenue.toFixed(2)}
                        </p>
                        </div>
                      <div>
                        <p className="text-xs text-slate-600 uppercase mb-1">Rating</p>
                        <p className="font-bold text-slate-900">â˜… {product.rating}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Edit
                      </Button>
                      <Button size="sm" className="flex-1">
                        View
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-slate-600 text-lg mb-4">No products yet.</p>
                <Button onClick={() => setShowUploadModal(true)}>
                  Create Your First Product
                </Button>
              </Card>
            )}
          </div>
        )}

        {/* Profile Tab */}
        { activeTab === 'profile' && (
          <Card className="p-6 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Creator Profile</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Bio
                </label>
                <textarea
                  placeholder="Tell people about your expertise and services..."
                  rows={4}
                  className=Š7u-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Specialties (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="AI, Automation, Data Science"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Portfolio Website
                </label>
                <input
                  type="url"
                  placeholder="https://yourportfolio.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1">Save Changes</Button>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Upload Product</h2>

            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Product Title *
                </label>
                <input
                  type="text"
                  value={uploadData.title}
                  onChange={(e) =>
                    setUploadData({ ...uploadData, title: e.target.value })
                  }
                  placeholder="e.g., Advanced LLM Prompts"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Description *
                </label>
                <textarea
                  value={uploadData.description}
                  onChange={(e) =>
                    setUploadData({ ...uploadData, description: e.target.value })
                  }
                  placeholder="Describe your product"
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Category *
                </label>
                <select
                  value={uploadData.category}
                  onChange={(e) =>
                    setUploadData({ ...uploadData, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Price ($) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={uploadData.price}
                  onChange={(e) =>
                    setUploadData({ ...uploadData, price: e.target.value })
                  }
                  placeholder="29.99"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={uploadData.tags}
                  onChange={(e) =>
                    setUploadData({ ...uploadData, tags: e.target.value })
                  }
                  placeholder="ai, automation, workflow"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => setShowUploadModal(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Upload
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
