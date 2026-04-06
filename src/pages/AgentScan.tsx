import { useState } from 'react';
import { Camera, Upload, CheckCircle, AlertTriangle, XCircle, Search, ShieldCheck } from 'lucide-react';

const AgentScan = () => {
  const [orderId, setOrderId] = useState('');
  const [step, setStep] = useState(1); // 1: Enter Order, 2: Scan/Upload, 3: Verifying, 4: Result
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleSearch = () => {
    if (!orderId) return;
    setStep(2);
  };

  const handleScanSimulation = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setStep(3);
      simulateAIAnalysis();
    }, 2000);
  };

  const simulateAIAnalysis = () => {
    // Simulate API call to backend for AI verification
    setTimeout(() => {
      // Hardcode a simulation based on order ID or purely random
      const isFraud = orderId.includes('FRAUD') || Math.random() > 0.7;
      
      setVerificationResult({
        matchPercentage: isFraud ? 35 : 98,
        status: isFraud ? 'MISMATCH' : 'MATCH',
        decision: isFraud ? 'BUYER_FRAUD_DETECTED' : 'VALID_RETURN_PICKUP',
        action: isFraud ? 'Refund Blocked. Do not accept item.' : 'Accept return package.',
        reasons: isFraud ? ['Weight discrepancy (200g expected vs 500g)', 'Packaging tampered', 'Brand logo missing on product'] : []
      });
      setStep(4);
    }, 2500);
  };

  const resetScanner = () => {
    setStep(1);
    setOrderId('');
    setVerificationResult(null);
  };

  return (
    <div className="page-container animate-fade-in" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <ShieldCheck size={32} className="text-accent" />
        <div>
          <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Return Pickup Scan
            <span className="status-badge warning" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>PATENT PENDING</span>
          </h1>
          <p className="text-secondary">Delivery Agent Verification Interface</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 style={{ marginBottom: '1rem', color: '#fff' }}>Scan Return Package</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input 
                type="text" 
                placeholder="Enter or scan Order / Return ID..." 
                className="base-input"
                style={{ flex: 1 }}
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
              <button className="btn-primary" onClick={handleSearch} disabled={!orderId}>
                <Search size={18} />
                Lookup
              </button>
            </div>
            <p className="text-secondary" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              Tip: Enter an ID containing "FRAUD" to simulate a mismatch.
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in" style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#fff' }}>Package Image Capture</h2>
            <p className="text-secondary" style={{ marginBottom: '2rem' }}>Order: <strong>{orderId}</strong></p>
            
            <div style={{ 
              border: '2px dashed rgba(255,255,255,0.2)', 
              borderRadius: '12px', 
              padding: '3rem 2rem', 
              backgroundColor: 'rgba(0,0,0,0.2)',
              marginBottom: '2rem'
            }}>
              {isScanning ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div className="scanning-laser"></div>
                  <Camera size={48} className="text-accent animate-pulse" />
                  <p style={{ color: '#fff' }}>Analyzing features...</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                  <Upload size={48} className="text-secondary" />
                  <p className="text-secondary">Upload or capture package and product images</p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-primary" onClick={handleScanSimulation}>
                      <Camera size={18} />
                      Capture Camera
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button className="btn-secondary" onClick={resetScanner}>Cancel</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in" style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div className="spinner" style={{ margin: '0 auto 2rem' }}></div>
            <h2 style={{ color: '#fff' }}>AI Verification in Progress</h2>
            <p className="text-secondary" style={{ marginTop: '1rem' }}>Comparing pickup images against pre-shipment blockchain records...</p>
          </div>
        )}

        {step === 4 && verificationResult && (
          <div className="animate-fade-in">
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              borderRadius: '12px',
              backgroundColor: verificationResult.status === 'MATCH' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${verificationResult.status === 'MATCH' ? '#10b981' : '#ef4444'}`
            }}>
              {verificationResult.status === 'MATCH' ? (
                <CheckCircle size={64} style={{ color: '#10b981', margin: '0 auto 1rem' }} />
              ) : (
                <XCircle size={64} style={{ color: '#ef4444', margin: '0 auto 1rem' }} />
              )}
              
              <h2 style={{ 
                color: verificationResult.status === 'MATCH' ? '#10b981' : '#ef4444',
                marginBottom: '0.5rem',
                fontSize: '1.5rem'
              }}>
                {verificationResult.decision.replace(/_/g, ' ')}
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1.5rem' }}>
                Match Confidence: {verificationResult.matchPercentage}%
              </p>
              
              <div style={{ 
                backgroundColor: 'rgba(0,0,0,0.3)', 
                padding: '1.5rem', 
                borderRadius: '8px',
                textAlign: 'left'
              }}>
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Action Required:</h3>
                <p style={{ 
                  color: '#fff', 
                  fontSize: '1.1rem', 
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {verificationResult.status === 'MATCH' ? <CheckCircle size={20} className="text-accent" /> : <AlertTriangle size={20} style={{ color: '#ef4444' }} />}
                  {verificationResult.action}
                </p>

                {verificationResult.reasons.length > 0 && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ color: '#aaa', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Discrepancies Found:</h4>
                    <ul style={{ color: '#ff9800', paddingLeft: '1.5rem' }}>
                      {verificationResult.reasons.map((r: string, i: number) => <li key={i} style={{ marginBottom: '0.25rem' }}>{r}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button className="btn-primary" onClick={resetScanner}>Scan Next Package</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentScan;
