import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const mockProducts = {
  '1': {
    name: 'Email Automator Pro',
    category: 'Automation',
    price: '$49',
    rating: 4.8,
    reviews: 124,
    description: 'Complete email automation toolkit with templates, scheduling, and analytics. Automate your entire email outreach pipeline from prospecting to follow-up.',
    features: ['Smart scheduling', 'A/B testing', 'Analytics dashboard', 'Template library', 'CRM integration'],
    tags: ['Email', 'Automation'],
  },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts[id] || mockProducts['1'];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/marketplace" className="inline-flex items-center gap-1 text-sm text-[#0F766D] hover:underline mb-6">
          <ArrowLeft size={16} /> Back to Marketplace
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card padding="lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl mb-1">{product.name}</h1>
                  <p className="text-sm text-[#737B8C]">{product.category}</p>
                </div>
                <span className="text-2xl font-bold text-[#0F766D]">{product.price}</span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Star size={16} className="text-amber-500 fill-amber-500" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-[#737B8C]">({product.reviews} reviews)</span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl mb-3">Overview</h2>
                <p className="text-[#737B8C] leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="text-xl mb-3">Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#737B8C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F766D] mt-2 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <h3 className="font-semibold text-[#29303D] mb-4">Purchase</h3>
              <p className="text-3xl font-bold text-[#0F766D] mb-4">{product.price}</p>
              <Button variant="primary" className="w-full mb-2">
                <ShoppingCart size={16} className="mr-2" /> Buy Now
              </Button>
              <Button variant="secondary" className="w-full">
                Add to Cart
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
