import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import Campaigns from './components/dashboard/sidebar/Campaigns';
import AIStrategy from './components/dashboard/sidebar/AIStrategy';
import Analytics from './components/dashboard/sidebar/Analytics';
import AdAccount from './components/dashboard/sidebar/AdAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/ai-strategy" element={<AIStrategy />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/ad-account" element={<AdAccount />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
