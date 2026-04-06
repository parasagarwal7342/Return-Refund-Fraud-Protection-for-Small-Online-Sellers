import { useState, useRef, useEffect } from 'react';
import { Camera, Search, FileCheck, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<null | 'fraud' | 'genuine'>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleVerify = (type: 'fraud' | 'genuine') => {
    setIsVerifying(true);
    setResult(null);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVerifying(false);
      setResult(type);
    }, 3500);
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="header">
        <div>
          <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Return Verification Engine
            <span className="status-badge warning" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>PATENT PENDING</span>
          </h1>
          <p className="text-secondary" style={{ marginTop: '0.5rem' }}>AI-Powered Neutral 3rd-Party Verification System</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '2rem' }}>
        <div className="glass-panel panel">
          <div className="video-evidence">
            {!isVerifying && !result && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-secondary)' }}>
                <Camera size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                <p>Waiting for return unboxing video feed...</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                  <button className="action-btn primary" onClick={() => handleVerify('fraud')} style={{ width: '100%', justifyContent: 'center' }}>
                    <Search size={20} /> Simulate FRAUD Analysis (Brick)
                  </button>
                  <button className="action-btn outline" onClick={() => handleVerify('genuine')} style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--success)', color: 'var(--success)' }}>
                    <CheckCircle2 size={20} /> Simulate GENUINE Analysis (Watch)
                  </button>
                </div>
              </div>
            )}
            
            {isVerifying && (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1589419108990-2bb87dddb784" alt="Package" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
                <div className="scan-overlay"></div>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.8)', padding: '1rem', borderRadius: '8px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="stat-icon blue" style={{ width: 32, height: 32 }}><Search size={18} className="animate-spin" /></div>
                  <span className="text-gradient">Scanning Item Weight & Dimensions...</span>
                </div>
              </div>
            )}

            {result === 'fraud' && (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1595054238531-18e470876527" alt="Brick" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%)' }} />
                <div style={{ position: 'absolute', border: '4px solid var(--danger)', top: '20%', left: '25%', width: '50%', height: '60%', borderRadius: '12px' }}>
                  <div style={{ position: 'absolute', top: '-30px', background: 'var(--danger)', color: '#fff', padding: '0.2rem 0.8rem', borderRadius: '4px', fontWeight: 'bold' }}>
                    Match: Brick / Stone (99.8%)
                  </div>
                </div>
              </div>
            )}
            
            {result === 'genuine' && (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12" alt="Smartwatch" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', border: '4px solid var(--success)', top: '20%', left: '25%', width: '50%', height: '60%', borderRadius: '12px' }}>
                  <div style={{ position: 'absolute', top: '-30px', background: 'var(--success)', color: '#fff', padding: '0.2rem 0.8rem', borderRadius: '4px', fontWeight: 'bold' }}>
                    Match: Smartwatch (99.9%)
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <span className="text-secondary">Tracking ID: MSHO-RET-89112</span>
            <span className="text-secondary">Platform: Meesho</span>
          </div>
        </div>

        <div className="glass-panel panel">
          <h2 className="panel-title text-gradient">Verification Analysis</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div className={`stat-icon ${result ? 'green' : 'blue'}`} style={{ width: '36px', height: '36px', marginTop: '-4px' }}>
                {result ? <CheckCircle2 size={18} /> : 1}
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Initial Dispatch Weight</strong>
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>Recorded at Seller Warehouse: 450g</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
               <div className={`stat-icon ${result ? 'green' : 'blue'}`} style={{ width: '36px', height: '36px', marginTop: '-4px' }}>
                {result ? <CheckCircle2 size={18} /> : 2}
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Hub Return Weight</strong>
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>Recorded by Delivery Partner: {result === 'fraud' ? '1450g' : result === 'genuine' ? '450g' : 'Pending'}</span>
                {result === 'fraud' && <div style={{ color: 'var(--warning)', fontSize: '0.85rem', marginTop: '0.5rem' }}>⚠️ Mismatch Detected (+1000g)</div>}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div className={`stat-icon ${result ? 'red' : 'blue'}`} style={{ width: '36px', height: '36px', marginTop: '-4px' }}>
                {result ? <ShieldAlert size={18} /> : 3}
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>AI Visual Inspection</strong>
                {result === 'fraud' ? (
                  <div style={{ color: 'var(--danger)', background: 'rgba(255,0,85,0.1)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.9rem', marginTop: '0.5rem', border: '1px solid rgba(255,0,85,0.2)' }}>
                    <strong>FRAUD CONFIRMED: </strong>
                    Original item (Smartwatch) replaced with solid rock. Visual structure does not match the product code.
                  </div>
                ) : result === 'genuine' ? (
                  <div style={{ color: 'var(--success)', background: 'rgba(16,185,129,0.1)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.9rem', marginTop: '0.5rem', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <strong>GENUINE VERIFIED: </strong>
                    Visual structure, weight, and QR tags match pre-shipment blockchain hash perfectly.
                  </div>
                ) : (
                  <span className="text-secondary" style={{ fontSize: '0.9rem' }}>Awaiting video analysis sequence</span>
                )}
              </div>
            </div>
          </div>

          {result === 'fraud' && (
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <button className="action-btn primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/dispute')}>
                <FileCheck size={20} /> Generate IP-Protected Claim Report
              </button>
              <p className="text-secondary" style={{ textAlign: 'center', fontSize: '0.75rem', marginTop: '1rem' }}>
                Data secured and hashed on Blockchain ledger (Patent CLM-44)
              </p>
            </div>
          )}

          {result === 'genuine' && (
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <button className="action-btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--success)', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => alert('Return Authorized. Platform APIs commanded to release refund to buyer.')}>
                <CheckCircle2 size={20} /> Authorize Platform Refund (Seller Only)
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.75rem', marginTop: '1rem', color: 'var(--success)' }}>
                Automated platform auto-refunds are blocked. Only you can initiate this.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verification;
