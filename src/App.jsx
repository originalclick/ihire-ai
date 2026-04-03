import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Jobs from '@/pages/Jobs'
import JobDetail from '@/pages/JobDetail'
import Workers from '@/pages/Workers'
import WorkerDetail from '@/pages/WorkerDetail'
import Marketplace from '@/pages/Marketplace'
import ProductDetail from '@/pages/ProductDetail'
import Directory from '@/pages/Directory'
import PostJob from '@/pages/PostJob'
import Auth from '@/pages/Auth'
import Dashboard from '@/pages/Dashboard'
import CreatorDashboard from '@/pages/CreatorDashboard'
import AdminConsole from '@/pages/AdminConsole'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:id" element={<JobDetail />} />
        <Route path="workers" element={<Workers />} />
        <Route path="workers/:id" element={<WorkerDetail />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="marketplace/:id" element={<ProductDetail />} />
        <Route path="directory" element={<Directory />} />
        <Route path="directory/:slug" element={<Directory />} />
        <Route path="post-job" element={<PostJob />} />
        <Route path="auth" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="creator-dashboard" element={<CreatorDashboard />} />
        <Route path="console" element={<AdminConsole />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
