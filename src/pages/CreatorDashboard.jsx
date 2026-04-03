import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Package, ShoppingCart, TrendingUp, Plus } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState('products');

  const stats = [
    { label: 'Revenue', value: '$4,280', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Products', value: '6', icon: Package, color: 'text-[#0F766D]', bg: 'bg-[rgba(15,118,109,0.1)]' },
    { label: 'Orders', value: '48', icon: ShoppingCart, color: 'text-[#C2714F]', bg: 'bg-[rgba(194,113,79,0.1)]' },
    { label: 'Growth', value: '+23%', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  const products = [
    { name: 'Email Automator Pro', sales: 24, revenue: '$1,176', status: 'Active' },
    { name: 'SEO Optimizer Suite', sales: 12, revenue: '$948', status: 'Active' },
    { name: 'Content Spinner Template', sales: 8, revenue: '$232', status: 'Active' },
    { name: 'AI Workflow Builder', sales: 4, revenue: '$396', status: 'Draft' },
  ];

  const orders = [
    { product: 'Email Automator Pro', buyer: 'john@company.com', amount: '$49', date: '2 hours ago' },
    { product: 'SEO Optimizer Suite', buyer: 'sarah@startup.io', amount: '$79', date: '1 day ago' },
    { product: 'Content Spinner Template', buyer: 'mike@agency.com', amount: '$29', date: '3 days ago' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl mb-1">Creator Dashboard</h1>
            <p className="text-[#737B8C]">Manage your products and track sales</p>
          </div>
          <Button variant="accent" size="sm">
            <Plus size={16} className="mr-1" /> New Product
          </Button>
        </div>

        {/* Stats */}
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

        {/* Tabs */}
        <div className="flex gap-1 bg-[#F3F1ED] rounded-lg p-1 mb-6 max-w-md">
          {['products', 'orders'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md capitalize transition-colors ${
                activeTab === tab ? 'bg-white text-[#29303D] shadow-sm' : 'text-[#737B8C] hover:text-[#29303D]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'products' && (
          <Card padding="sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E3E5E8]">
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Product</th>
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Sales</th>
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Revenue</th>
                    <th className="text-left text-xs font-medium text-[#737B8C] uppercase tracking-wider px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, i) => (
                    <tr key={i} className="border-b border-[#E3E5E8] last:border-0">
                      <td className="px-4 py-3 text-sm font-medium text-[#29303D]">{p.name}</td>
                      <td className="px-4 py-3 text-sm text-[#737B8C]">{p.sales}</td>
                      <td className="px-4 py-3 text-sm text-[#29303D] font-medium">{p.revenue}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          p.status === 'Active' ? 'bg-[rgba(15,118,109,0.1)] text-[#0F766D]' : 'bg-[#F3F1ED] text-[#737B8C]'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-3">
            {orders.map((order, i) => (
              <div key={i} className="bg-white border border-[#E3E5E8] rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#29303D]">{order.product}</p>
                  <p className="text-xs text-[#737B8C]">{order.buyer} &middot; {order.date}</p>
                </div>
                <span className="text-sm font-bold text-[#0F766D]">{order.amount}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
