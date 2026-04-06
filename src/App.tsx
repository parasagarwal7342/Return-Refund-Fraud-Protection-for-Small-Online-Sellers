import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Verification from './pages/Verification';
import Patents from './pages/Patents';
import PreShipment from './pages/PreShipment';
import AgentScan from './pages/AgentScan';
import Dispute from './pages/Dispute';
import CommunityBlacklist from './pages/CommunityBlacklist';
import Billing from './pages/Billing';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pre-shipment" element={<PreShipment />} />
          <Route path="/agent-scan" element={<AgentScan />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/dispute" element={<Dispute />} />
          <Route path="/blacklist" element={<CommunityBlacklist />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={
            <div className="page-container animate-fade-in" style={{ padding: '2rem' }}>
              <h1 className="header-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Fraud Prevention Settings
                <span className="status-badge warning" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>PATENT PENDING</span>
              </h1>
              <p className="text-secondary" style={{ marginTop: '0.5rem' }}>Configuration options for the Verification Engine.</p>
              <div className="glass-panel" style={{ marginTop: '2rem', padding: '2rem' }}>
                <p>System APIs integrated with:</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <span className="status-badge safe">Amazon SP-API Connected</span>
                  <span className="status-badge safe">Flipkart Seller Hub Connected</span>
                  <span className="status-badge warning">Meesho API (Syncing)</span>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
