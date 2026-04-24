import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import Campaigns from './pages/Campaigns';
import AIStrategy from './components/dashboard/sidebar/AIStrategy';
import Analytics from './components/dashboard/sidebar/Analytics';
import AdAccount from './components/dashboard/sidebar/AdAccount';
import Settings from './pages/Setting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/ai-strategy" element={<AIStrategy />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/ad-account" element={<AdAccount />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
