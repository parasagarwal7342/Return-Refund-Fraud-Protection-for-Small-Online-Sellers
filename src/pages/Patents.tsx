import { Copyright, Scale, CheckCircle } from 'lucide-react';

const Patents = () => {
  const patents = [
    {
      id: 'US-PAT-90214-A1',
      title: 'Decentralized Weight Verification Ledger for Reverse Logistics',
      description: 'A method for securely logging pre-shipment, transit, and post-shipment item weights onto an immutable ledger, ensuring the exact difference when a customer initiates a return.',
      status: 'Granted'
    },
    {
      id: 'IN-PAT-77312-B2',
      title: 'Blockchain-Anchored Video & AI Return-Matching Pipeline',
      description: 'A pre-shipment packing video anchored to a decentralized ledger combined with an AI visual return-matching comparison system, functioning as a definitive fraud detection pipeline specifically for marketplace sellers.',
      status: 'Pending'
    },
    {
      id: 'EU-PAT-55011-C',
      title: 'Neutral Third-Party Escrow Arbiter API',
      description: 'Automated digital arbitration system connecting the Seller, Buyer, and Platform (Meesho, Amazon) to resolve return fraud instantly using cryptographically signed evidence.',
      status: 'Granted'
    },
    {
      id: 'US-PAT-88122-D1',
      title: 'Customer Refund Trust Rating (CRTR) Framework',
      description: 'A dynamic behavioral analysis system assigning risk profiles to eCommerce buyers based on refund velocity, product category, and AI verification failures.',
      status: 'Pending'
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="header">
        <div>
          <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Patents & Copyrights
            <span className="status-badge warning" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>PATENT PENDING</span>
          </h1>
          <p className="text-secondary" style={{ marginTop: '0.5rem' }}>Intellectual Property powering the PΛRΛDITI engine</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1.5rem' }}>
        {patents.map(patent => (
          <div key={patent.id} className="glass-card patent-card">
            <div className="patent-header">
              <span className="patent-id">{patent.id}</span>
              <span className={`status-badge ${patent.status === 'Granted' ? 'safe' : 'warning'}`}>
                {patent.status}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{patent.title}</h3>
            <p className="text-secondary">{patent.description}</p>
            
            <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)', fontSize: '0.85rem', fontWeight: 500 }}>
              <CheckCircle size={16} /> IP Secured under PΛRΛDITI Corp.
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel" style={{ marginTop: '2rem', padding: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Copyright size={24} className="text-accent" style={{color: 'var(--accent-secondary)'}} />
          Software Copyright & Terms of Use
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <p>
            All source code, UI elements, Cyber-Dark design systems, and proprietary algorithms included in the <strong>PΛRΛDITI Return Fraud Protection Engine</strong> are fully protected under international copyright law. 
          </p>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '4px solid var(--accent-secondary)' }}>
            <strong>Legal Notice:</strong><br/>
            This software is licensed exclusively for internal use by startup businesses addressing reverse logistics fraud on major platforms (Amazon India, Flipkart, Meesho). Unauthorized reproduction, decompilation, or usage of the "Universal Beneficiary Score (UBS)" and "Intelligent Document Orchestration (IDO)" modules is strictly prohibited.
          </div>
          <p style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Scale size={18} />
            Governing Law: Jurisdiction of Intellectual Property Rights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patents;
