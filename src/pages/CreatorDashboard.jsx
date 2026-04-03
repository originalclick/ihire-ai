import { useState } from 'react';
import { DollarSign, Package, ShoppingCart, TrendingUp, Eye, Download, Plus, BarChart3, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const stats = [
  { label: 'Total Revenue', value: '$12,450', change: '+18%', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
  { label: 'Products Listed', value: '8', change: '+2', icon: Package, color: 'text-purple-600', bg: 'bg-purple-100' },
  { label: 'Total Sales', value: '156', change: '+23%', icon: ShoppingCart, color: 'text-cyan-600', bg: 'bg-cyan-100' },
  { label: 'Profile Views', value: '2,340', change: '+12%', icon: Eye, color: 'text-yellow-600', bg: 'bg-yellow-100' }
];

const products = [
  { id: 1, name: 'AI Writing Assistant Pro', price: '$49', sales: 64, status: 'Active' },
  { id: 2, name: 'GPT Prompt Collection', price: '$29', sales: 45, status: 'Active' },
  { id: 3, name: 'ML Model Training Kit', price: '$89', sales: 28, status: 'Active' },
  { id: 4, name: 'Data Viz Templates', price: '$19', sales: 19, status: 'Draft' }
];

const orders = [
  { id: 'ORD-001', product: 'AI Writing Assistant Pro', buyer: 'John Smith', amount: '$49', date: '2025-01-15', status: 'Completed' },
  { id: 'ORD-002', product: 'GPT Prompt Collection', buyer: 'Sarah Lee', amount: '$29', date: '2025-01-14', status: 'Completed' },
  { id: 'ORD-003', product: 'ML Model Training Kit', buyer: 'Mike Chen', amount: '$89', date: '2025-01-14', status: 'Processing' },
  { id: 'ORD-004', product: 'AI Writing Assistant Pro', buyer: 'Emily Park', amount: '$49', date: '2025-01-13', status: 'Completed' },
  { id: 'ORD-005', product: 'Data Viz Templates', buyer: 'Alex Kim', amount: '$19', date: '2025-01-12', status: 'Refunded' }
];

export default function CreatorDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const tabs = ['overview', 'products', 'orders'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Creator Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your products and track sales</p>
          </div>
          <Button variant="primary" size="lg">
            <Plus size={18} />
            New Product
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map(stat => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} padding="md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                  </div>
                  <div className={stat.bg + ' p-3 rounded-lg'}>
                    <Icon size={24} className={stat.color} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mb-6 flex gap-2 border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={'px-4 py-3 font-medium border-b-2 capitalize ' +
                (selectedTab === tab
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900')}
            >
              {tab}
            </button>
          ))}
        </div>

        {selectedTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card padding="lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Revenue Overview</h2>
                <div className="h-48 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 size={48} className="mx-auto text-purple-400 mb-2" />
                    <p className="text-gray-500">Revenue chart coming soon</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Recent Orders</h3>
                <div className="space-y-3">
                  {orders.slice(0, 3).map(order => (
                    <div key={order.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-gray-900">{order.product}</p>
                        <p className="text-sm text-gray-500">{order.buyer} - {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{order.amount}</p>
                        <Badge variant={order.status === 'Completed' ? 'success' : 'warning'} size="sm">{order.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            <div>
              <Card padding="lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Button variant="primary" size="lg" className="w-full">
                    <Plus size={18} />
                    Add New Product
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full">
                    <TrendingUp size={18} />
                    View Analytics
                  </Button>
                  <Button variant="ghost" size="lg" className="w-full">
                    <Download size={18} />
                    Export Sales Data
                  </Button>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Performance</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conversion Rate</span>
                      <span className="font-semibold">4.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Order Value</span>
                      <span className="font-semibold">$47</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-semibold text-yellow-600">4.8/5.0</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {selectedTab === 'products' && (
          <Card padding="lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Products</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="pb-3 text-sm font-semibold text-gray-600">Product</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Price</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Sales</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Status</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id} className="border-b border-gray-100">
                      <td className="py-3 font-medium text-gray-900">{p.name}</td>
                      <td className="py-3 text-gray-600">{p.price}</td>
                      <td className="py-3 text-gray-600">{p.sales}</td>
                      <td className="py-3"><Badge variant={p.status === 'Active' ? 'success' : 'default'} size="sm">{p.status}</Badge></td>
                      <td className="py-3"><Button variant="ghost" size="sm">Edit</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {selectedTab === 'orders' && (
          <Card padding="lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order History</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="pb-3 text-sm font-semibold text-gray-600">Order ID</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Product</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Buyer</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Amount</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Date</th>
                    <th className="pb-3 text-sm font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(o => (
                    <tr key={o.id} className="border-b border-gray-100">
                      <td className="py-3 font-mono text-sm text-gray-900">{o.id}</td>
                      <td className="py-3 text-gray-900">{o.product}</td>
                      <td className="py-3 text-gray-600">{o.buyer}</td>
                      <td className="py-3 font-semibold text-gray-900">{o.amount}</td>
                      <td className="py-3 text-gray-600">{o.date}</td>
                      <td className="py-3">
                        <Badge variant={o.status === 'Completed' ? 'success' : o.status === 'Refunded' ? 'error' : 'warning'} size="sm">
                          {o.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
