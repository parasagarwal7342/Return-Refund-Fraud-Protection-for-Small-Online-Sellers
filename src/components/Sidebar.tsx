import { Link, useLocation } from 'react-router-dom';
import { ShieldAlert, LayoutDashboard, FileCheck2, Copyright, Settings, Video, Scale, Users, CreditCard, ScanLine } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Pre-Shipment Proof', path: '/pre-shipment', icon: Video },
    { name: 'Agent Scan (Delivery)', path: '/agent-scan', icon: ScanLine },
    { name: 'Verify Returns', path: '/verify', icon: FileCheck2 },
    { name: 'Dispute Dashboard', path: '/dispute', icon: Scale },
    { name: 'Community Blacklist', path: '/blacklist', icon: Users },
    { name: 'Billing & Subscriptions', path: '/billing', icon: CreditCard },
    { name: 'Patents & IP', path: '/patents', icon: Copyright },
    { name: 'Fraud Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <h1 className="brand-logo">
          <div className="brand-icon">
            <ShieldAlert size={20} strokeWidth={2.5} />
          </div>
          PARADITI <span className="text-secondary" style={{fontSize: '1rem', fontWeight: 300}}>Shield</span>
        </h1>
      </div>

      <nav className="nav-links">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link key={link.name} to={link.path} className={`nav-link ${isActive ? 'active' : ''}`}>
              <Icon size={20} className="nav-link-icon" />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="nav-footer">
        <p>© 2026 PΛRΛDITI Corp. | <span style={{ color: 'var(--warning)', fontWeight: 'bold' }}>Patent Pending</span></p>
        <p style={{ marginTop: '0.25rem', fontSize: '0.7rem' }}>Return Fraud Verification Engine</p>
      </div>
    </aside>
  );
};

export default Sidebar;
