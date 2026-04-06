import { Check, Zap, Server, ShieldPlus } from 'lucide-react';

const Billing = () => {
  return (
    <div className="page-container animate-fade-in">
      <div className="header">
        <div>
          <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Revenue & Insurance
            <span className="status-badge warning" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>PATENT PENDING</span>
          </h1>
          <p className="text-secondary" style={{ marginTop: '0.5rem' }}>Subscription plans, API licensing, and Shipment Insurance.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)', gap: '1.5rem', marginTop: '1rem' }}>
        <div className="glass-card panel" style={{ borderTop: '4px solid var(--border-color)', position: 'relative' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Small Seller Plan</h3>
          <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
            ₹199<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mo</span>
          </div>
          <p className="text-secondary" style={{ fontSize: '0.85rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
            Base access to the dashboard and community fraud list.
          </p>
          <hr style={{ borderColor: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }} />
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Check size={16} className="text-success" style={{ color: 'var(--success)' }} /> Access to Blacklist DB</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Check size={16} className="text-success" style={{ color: 'var(--success)' }} /> Manual Dispute Dashboard</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Check size={16} className="text-success" style={{ color: 'var(--success)' }} /> Support for 3 platforms</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}><Zap size={16} className="text-warning" style={{ color: 'var(--warning)' }} /> ₹5 / Return Verification (Pay-per-use)</li>
          </ul>
          <button className="action-btn outline" style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }} onClick={() => alert('Redirecting to Stripe billing portal...')}>Current Plan</button>
        </div>

        <div className="glass-card panel" style={{ borderTop: '4px solid var(--accent-primary)', position: 'relative', transform: 'scale(1.05)', zIndex: 10, background: 'rgba(20, 20, 22, 0.95)' }}>
          <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: '#000', padding: '0.2rem 1rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
            RECOMMENDED
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Pro Merchant</h3>
          <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
            ₹899<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mo</span>
          </div>
          <p className="text-secondary" style={{ fontSize: '0.85rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
            Full automation for scaled D2C brands.
          </p>
          <hr style={{ borderColor: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }} />
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Check size={16} className="text-success" style={{ color: 'var(--success)' }} /> Real-time Blockchain Anchoring</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Check size={16} className="text-success" style={{ color: 'var(--success)' }} /> 1-Click Auto Dispute Submit</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Check size={16} className="text-success" style={{ color: 'var(--success)' }} /> Dedicated Seller Trust Score</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}><Zap size={16} className="text-warning" style={{ color: 'var(--warning)' }} /> ₹2 / Return Verification (Discounted)</li>
          </ul>
          <button className="action-btn primary" style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }} onClick={() => alert('Redirecting to Stripe billing portal...')}>Upgrade</button>
        </div>

        <div className="glass-card panel" style={{ borderTop: '4px solid var(--accent-secondary)', position: 'relative' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Platform API / Enterprise</h3>
          <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
            Custom
          </div>
          <p className="text-secondary" style={{ fontSize: '0.85rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
            Licensing for Flipkart, Amazon, and Meesho nodes.
          </p>
          <hr style={{ borderColor: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }} />
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Server size={16} className="text-accent" style={{ color: 'var(--accent-secondary)' }} /> Direct Platform API Licensing</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><ShieldPlus size={16} className="text-success" style={{ color: 'var(--success)' }} /> Partner Insurance Tie-ups</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Check size={16} className="text-success" style={{ color: 'var(--success)' }} /> Insure High-Value Shipments natively</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}><Check size={16} className="text-success" style={{ color: 'var(--success)' }} /> Custom SLA & Support</li>
          </ul>
          <button className="action-btn outline" style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }} onClick={() => alert('Redirecting to Stripe billing portal...')}>Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
