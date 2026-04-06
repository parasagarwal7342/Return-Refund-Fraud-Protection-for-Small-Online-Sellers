import { ShieldCheck, Target, AlertTriangle, TrendingUp, RefreshCw, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container animate-fade-in">
      <div className="header">
        <div>
          <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Overview 
            <span className="status-badge warning" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>PATENT PENDING</span>
          </h1>
          <p className="text-secondary" style={{ marginTop: '0.5rem' }}>Monitor real-time return fraud analytics across marketplaces.</p>
        </div>
        <div className="header-actions">
          <button className="notification-btn" onClick={() => alert('No new alerts at this time.')}>
            <AlertTriangle size={24} />
            <span className="notification-dot"></span>
          </button>
          <div className="profile" onClick={() => navigate('/settings')} style={{ cursor: 'pointer' }}>
            <div className="avatar"></div>
            <span style={{ fontWeight: 500 }}>Startup Seller Admin</span>
          </div>
        </div>
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div className="glass-card stat-card">
          <div className="stat-icon purple">
            <RefreshCw size={24} />
          </div>
          <div className="stat-value text-gradient">1,204</div>
          <div className="stat-label">Total Returns</div>
        </div>
        
        <div className="glass-card stat-card">
          <div className="stat-icon green">
            <ShieldCheck size={24} />
          </div>
          <div className="stat-value">94.8%</div>
          <div className="stat-label">Protection Score</div>
        </div>

        <div className="glass-card stat-card">
          <div className="stat-icon red">
            <XCircle size={24} />
          </div>
          <div className="stat-value">359</div>
          <div className="stat-label">Fraud Claims Blocked</div>
        </div>

        <div className="glass-card stat-card">
          <div className="stat-icon blue">
            <TrendingUp size={24} />
          </div>
          <div className="stat-value text-gradient">₹8.9M</div>
          <div className="stat-label">Total Savings (INR)</div>
        </div>
      </div>

      <div className="chart-section">
        <div className="glass-panel panel">
          <h2 className="panel-title">
            <Target size={20} className="text-accent" style={{color: 'var(--accent-primary)'}} /> 
            Recent Return Verifications
          </h2>
          <div className="list-item">
            <div>
              <strong>#RET-99201</strong> (Meesho) <br/>
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Customer: "Received Brick"</span>
            </div>
            <span className="status-badge danger">Fraud Detected</span>
            <button className="action-btn outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => navigate('/verify')}>View Proof</button>
          </div>
          <div className="list-item">
            <div>
              <strong>#RET-88432</strong> (Amazon India) <br/>
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Customer: "Defective item"</span>
            </div>
            <span className="status-badge safe">Verified Genuine</span>
            <button className="action-btn outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => navigate('/verify')}>View Proof</button>
          </div>
          <div className="list-item">
            <div>
              <strong>#RET-77401</strong> (Flipkart) <br/>
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Customer: "Wrong Product"</span>
            </div>
            <span className="status-badge danger">Weight Mismatch</span>
            <button className="action-btn outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => navigate('/verify')}>View Proof</button>
          </div>
          <div className="list-item">
            <div>
              <strong>#RET-66102</strong> (Myntra) <br/>
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>Customer: "Damaged in Transit"</span>
            </div>
            <span className="status-badge warning">Under Review</span>
            <button className="action-btn outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={() => navigate('/verify')}>Track Status</button>
          </div>
        </div>

        <div className="glass-panel panel">
          <h2 className="panel-title">Fraud Methods</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span>Weight Discrepancy (Different Item Returned)</span>
                <span className="text-secondary">42%</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ height: '100%', width: '42%', background: 'var(--danger)', borderRadius: '3px' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span>Used Product Return</span>
                <span className="text-secondary">28%</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ height: '100%', width: '28%', background: 'var(--warning)', borderRadius: '3px' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span>Empty Box Return</span>
                <span className="text-secondary">20%</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ height: '100%', width: '20%', background: 'var(--accent-secondary)', borderRadius: '3px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
