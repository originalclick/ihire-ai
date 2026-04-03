import { useState } from 'react';
import { DollarSign, Package, TrendingUp, ShoppingCart, Eye, Download, Star, BarChart3 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const mockStats = [
  {
    id: 1,
    label: 'Total Revenue',
    value: '$12,450',
    icon: DollarSign,
    trend: '+12.5%'
  },
  {
    id: 2,
    label: 'Products Listed',
    value: '8',
    icon: Package,
    trend: '+2'
  },
  {
    id: 3,
    label: 'Total Sales',
    value: '156',
    icon: ShoppingCart,
    trend: '+24'
  },
  {
    id: 4,
    label: 'Avg Rating',
    value: '4.7',
    icon: Star,
    trend: '+0.2'
  }
];

const mockProducts = [
  {
    id: 1,
    name: 'AI Image Generator Pro',
    sales: 45,
    revenue: '$4,500',
    rating: 4.8,
    status: 'active'
  },
  {
    id: 2,
    name: 'ML Model Template Kit',
    sales: 32,
    revenue: '$3,200',
    rating: 4.6,
    status: 'active'
  },
  {
    id: 3,
    name: 'Data Analysis Dashboard',
    sales: 28,
    revenue: '$2,800',
    rating: 4.5,
    status: 'active'
  },
  {
    id: 4,
    name: 'NLP Processing Guide',
    sales: 0,
    revenue: '$0',
    rating: 0,
    status: 'draft'
  }
];

const mockOrders = [
  {
    id: 'ORD-001',
    product: 'AI Image Generator Pro',
    buyer: 'John Smith',
    amount: '$150',
    date: '2026-04-02',
    status: 'completed'
  },
  {
    id: 'ORD-002',
    product: 'ML Model Template Kit',
    buyer: 'Sarah Johnson',
    amount: '$100',
    date: '2026-04-01',
    status: 'completed'
  },
  {
    id: 'ORD-003',
    product: 'Data Analysis Dashboard',
    buyer: 'Mike Chen',
    amount: '$100',
    date: '2026-03-31',
    status: 'pending'
  },
  {
    id: 'ORD-004',
    product: 'AI Image Generator Pro',
    buyer: 'Emily Davis',
    amount: '$150',
    date: '2026-03-30',
    status: 'processing'
  }
];

export default function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Creator Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your products and track your sales performance
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <Button variant="primary" size="md">
            <Package size={18} className="mr-2" />
            Add New Product
          </Button>
          <Button variant="secondary" size="md">
            <BarChart3 size={18} className="mr-2" />
            View Analytics
          </Button>
          <Button variant="ghost" size="md">
            <DollarSign size={18} className="mr-2" />
            Withdraw Earnings
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockStats.map(stat => {
            const Icon = stat.icon;
            return (
              <Card key={stat.id} padding="md" hover={false}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-green-600 font-medium">
                      {stat.trend} this month
                    </p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Icon size={24} className="text-purple-600" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Products Section */}
        <Card padding="lg" hover={false} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Products
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Product Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Sales
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Revenue
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Rating
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockProducts.map(product => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      {product.name}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{product.sales}</td>
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      {product.revenue}
                    </td>
                    <td className="py-3 px-4">
                      {product.rating > 0 ? (
                        <div className="flex items-center gap-1">
                          <Star
                            size={16}
                            className="text-yellow-500 fill-yellow-500"
                          />
                          <span className="text-gray-900 font-medium">
                            {product.rating}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={product.status === 'active' ? 'success' : 'warning'}
                        size="sm"
                      >
                        {product.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        Manage
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Recent Orders Section */}
        <Card padding="lg" hover={false}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Orders
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Order ID
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Product
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Buyer
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.map(order => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-gray-900 font-medium">
                      {order.id}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {order.product}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {order.buyer}
                    </td>
                    <td className