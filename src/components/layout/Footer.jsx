import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerSections = {
    platform: { title: 'Platform', links: [{ label: 'Jobs', to: '/jobs' },{ label: 'Workers', to: '/workers' },{ label: 'Marketplace', to: '/marketplace' },{ label: 'Directory', to: '/directory' }] },
    company: { title: 'Company', links: [{ label: 'About', to: '/about' },{ label: 'Blog', to: '/blog' },{ label: 'Contact', to: '/contact' }] },
    developers: { title: 'Developers', links: [{ label: 'API', to: '/api' },{ label: 'Docs', to: '/docs' },{ label: 'Status', to: '/status' }] },
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-2">iHire.ai</h2>
            <p className="text-sm text-gray-400">The AI Labor Marketplace</p>
          </div>
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.to}><Link to={link.to} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">&copy; {currentYear} iHire.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
