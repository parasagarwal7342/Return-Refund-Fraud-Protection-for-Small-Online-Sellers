import { Video, Box, ShieldCheck, Link2 } from 'lucide-react';

const PreShipment = () => {
  return (
    <div className="page-container animate-fade-in">
      <div className="header">
        <div>
          <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Pre-Shipment Proof
            <span className="status-badge warning" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>PATENT PENDING</span>
          </h1>
          <p className="text-secondary" style={{ marginTop: '0.5rem' }}>Record a 30-sec packing video and anchor it to the blockchain.</p>
        </div>
      </div>

      <div className="chart-section" style={{ gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)' }}>
        <div className="glass-panel panel">
          <div className="video-evidence" style={{ border: '2px dashed var(--border-color)', background: 'rgba(0,0,0,0.4)', flexDirection: 'column' }}>
            <Video size={48} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>Camera Feed Ready</h3>
            <p className="text-secondary" style={{ marginBottom: '1.5rem', textAlign: 'center', maxWidth: '300px', fontSize: '0.9rem' }}>
              Position the shipping label clearly in the frame before placing items into the box.
            </p>
            <button className="action-btn primary" style={{ background: 'var(--danger)', boxShadow: '0 4px 15px rgba(255, 0, 85, 0.3)' }} onClick={() => alert('Starting 30-second blockchain video recording...')}>
              <span style={{ width: 10, height: 10, background: '#fff', borderRadius: '50%', display: 'inline-block' }}></span>
              Start 30s Recording
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.9rem' }}>
            <span className="text-secondary">Expected FPS: 30</span>
            <span className="text-secondary">Resolution: 1080p AI Enhanced</span>
          </div>
        </div>

        <div className="glass-panel panel">
          <h2 className="panel-title text-gradient">Recorded Shipments (Blockchain)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div className="list-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <strong><Box size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />ORD-3392</strong>
                <span className="status-badge safe">Secured</span>
              </div>
              <div className="text-secondary" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Link2 size={12} /> TxHash: 0x9f8...c4a1
              </div>
            </div>
            
            <div className="list-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <strong><Box size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />ORD-3391</strong>
                <span className="status-badge safe">Secured</span>
              </div>
              <div className="text-secondary" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Link2 size={12} /> TxHash: 0x2b1...f992
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)', fontSize: '0.85rem' }}>
              <ShieldCheck size={18} />
              Immutable storage ensures platform neutral evidence.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreShipment;
