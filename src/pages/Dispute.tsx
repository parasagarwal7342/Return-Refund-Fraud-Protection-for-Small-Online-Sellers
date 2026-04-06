import { Scale, FileText, Share2, UploadCloud, AlertCircle } from 'lucide-react';

const Dispute = () => {
  return (
    <div className="page-container animate-fade-in">
      <div className="header">
        <div>
          <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Neutral Dispute Dashboard
            <span className="status-badge warning" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>PATENT PENDING</span>
          </h1>
          <p className="text-secondary" style={{ marginTop: '0.5rem' }}>Submit evidence to platforms (Amazon, Flipkart, Meesho) in one click.</p>
        </div>
      </div>

      <div className="chart-section" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)' }}>
        <div className="glass-panel panel">
          <h2 className="panel-title text-gradient"><Scale size={24} /> Actionable Claims</h2>
          <div className="list-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div>
                <strong>Claim #MSHO-88902</strong>
                <div className="text-secondary" style={{ fontSize: '0.85rem' }}>Amount: ₹4,500 <br/> Dispute: Empty Box Returned</div>
              </div>
              <span className="status-badge danger">Open Dispute</span>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(255,170,0,0.1)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
              <i>Auto-compiled evidence package ready:</i>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', listStyle: 'circle', fontSize: '0.85rem' }}>
                <li>Blockchain Packing Video (30s)</li>
                <li>Weight Logs (Warehouse vs Hub)</li>
                <li>Return Processing Scan</li>
              </ul>
            </div>
            <button className="action-btn primary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }} onClick={() => alert('Evidence package successfully submitted to Platform API.')}>
              <UploadCloud size={18} /> Push Evidence to Platform
            </button>
          </div>
        </div>

        <div className="glass-panel panel">
          <h2 className="panel-title"><FileText size={24} className="text-secondary" /> Historical Arbitrations</h2>
          <div className="list-item">
            <div>
              <strong>#AMZ-11029</strong>
              <div className="text-secondary" style={{ fontSize: '0.85rem' }}>Customer: Missing Parts</div>
            </div>
            <span className="status-badge safe">Won (Refund Returned)</span>
          </div>
          <div className="list-item">
            <div>
              <strong>#FLP-88021</strong>
              <div className="text-secondary" style={{ fontSize: '0.85rem' }}>Customer: Defective Item</div>
            </div>
            <span className="status-badge warning">Pending Platform Review</span>
            <button className="action-btn outline" style={{ padding: '0.5rem', fontSize: '0.8rem' }} onClick={() => alert('Link copied to clipboard')}><Share2 size={16} /></button>
          </div>
          
          <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', display: 'flex', gap: '1rem' }}>
            <AlertCircle size={24} className="text-secondary" />
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Platforms take an average of 4.2 days to resolve claims. Our one-click submission reduces rejection rates by 94%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dispute;
