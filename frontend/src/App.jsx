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
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Services from './pages/Service';
import Pricing from './pages/Pricing';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/Privacypolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/ai-strategy" element={<AIStrategy />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/ad-account" element={<AdAccount />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
