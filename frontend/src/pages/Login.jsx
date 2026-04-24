import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Lock, Mail } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { login } from '../api/index.js';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleFacebookLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/facebook`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData)
      console.log(res.data);

      if (res.data.success) {
        navigate('/dashboard')
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <Card hover={false} className="px-8 py-10 mb-4 border border-[rgb(var(--border-color)/var(--border-opacity))]">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-3xl font-bold tracking-widest text-primary mb-2">EMPIRE X</h1>
            <p className="text-textMuted text-sm text-center">Log in to see your campaigns and AI strategies.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={16} />
              <input
                type="text"
                name="email"
                placeholder="Phone number, username, or email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-cardAlt border border-border-color/[var(--border-opacity)] rounded-md py-2.5 pl-10 pr-4 text-sm text-textMain placeholder:text-textMuted focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={16} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-cardAlt border border-border-color/[var(--border-opacity)] rounded-md py-2.5 pl-10 pr-4 text-sm text-textMain placeholder:text-textMuted focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full mt-2 font-semibold"
              disabled={!formData.email || !formData.password}
            >
              Log in
            </Button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border-color/[var(--border-opacity)]"></div>
            <span className="text-textMuted text-xs font-semibold uppercase">OR</span>
            <div className="flex-1 h-px bg-border-color/[var(--border-opacity)]"></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleFacebookLogin}
              className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-400 font-semibold text-sm transition-colors"
            >
              <Facebook size={20} className="fill-current" />
              <span>Continue with Facebook</span>
            </button>

            <a href="#" className="text-xs text-textMuted hover:text-textMain transition-colors">
              Forgot password?
            </a>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
