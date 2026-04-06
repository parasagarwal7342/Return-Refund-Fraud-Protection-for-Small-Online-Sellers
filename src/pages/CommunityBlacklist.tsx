import { Users, AlertTriangle, Search, ShieldOff } from 'lucide-react';

const CommunityBlacklist = () => {
  return (
    <div className="page-container animate-fade-in">
      <div className="header">
        <div>
          <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Community Blacklist
            <span className="status-badge warning" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>PATENT PENDING</span>
          </h1>
          <p className="text-secondary" style={{ marginTop: '0.5rem' }}>Anonymized Fraud Buyer Database shared across sellers.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '8px' }}>
            <Search size={18} className="text-secondary" style={{ marginRight: '0.5rem' }} />
            <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Search PIN Code or Phone...</span>
          </div>
        </div>
      </div>

      <div className="glass-panel panel" style={{ width: '100%' }}>
        <h2 className="panel-title text-gradient"><Users size={24} /> High-Risk Buyer Patterns</h2>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '1rem' }}>Anonymized ID</th>
              <th style={{ padding: '1rem' }}>Location / PIN</th>
              <th style={{ padding: '1rem' }}>Fraud Score</th>
              <th style={{ padding: '1rem' }}>Recurrent Issue</th>
              <th style={{ padding: '1rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
              <td style={{ padding: '1rem' }}>BUYER_****891</td>
              <td style={{ padding: '1rem' }}>Delhi - 1100XX</td>
              <td style={{ padding: '1rem' }}><span className="status-badge danger">94% Risk</span></td>
              <td style={{ padding: '1rem' }} className="text-secondary">4 Empty Boxes across 3 Sellers</td>
              <td style={{ padding: '1rem' }}>
                <button className="action-btn outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }} onClick={() => alert('Action applied to this buyer profile.')}><ShieldOff size={14} style={{ marginRight: '0.2rem' }} /> Block Orders</button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
              <td style={{ padding: '1rem' }}>BUYER_****442</td>
              <td style={{ padding: '1rem' }}>Mumbai - 4000XX</td>
              <td style={{ padding: '1rem' }}><span className="status-badge warning">68% Risk</span></td>
              <td style={{ padding: '1rem' }} className="text-secondary">Weight Dispute (Always returns lighter items)</td>
              <td style={{ padding: '1rem' }}>
                <button className="action-btn outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }} onClick={() => alert('Action applied to this buyer profile.')}><ShieldOff size={14} style={{ marginRight: '0.2rem' }} /> Alert On Shipment</button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
              <td style={{ padding: '1rem' }}>BUYER_****119</td>
              <td style={{ padding: '1rem' }}>Bangalore - 5600XX</td>
              <td style={{ padding: '1rem' }}><span className="status-badge danger">89% Risk</span></td>
              <td style={{ padding: '1rem' }} className="text-secondary">Used items return (Electronics specifically)</td>
              <td style={{ padding: '1rem' }}>
                <button className="action-btn outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }} onClick={() => alert('Action applied to this buyer profile.')}><ShieldOff size={14} style={{ marginRight: '0.2rem' }} /> Block Orders</button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,0,85,0.05)', borderRadius: '12px', display: 'flex', gap: '1rem', border: '1px solid rgba(255,0,85,0.1)' }}>
          <AlertTriangle size={24} className="text-danger" style={{ color: 'var(--danger)' }} />
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <strong>Community Insight:</strong> Fraud rings occasionally operate under cluster PIN codes. AI flagged 3 new high-risk zones in Northern India this week. Sharing data securely builds the Seller Protection Score across the marketplace.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBlacklist;
