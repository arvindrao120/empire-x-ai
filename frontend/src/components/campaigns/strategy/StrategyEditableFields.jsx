import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Rocket, Pencil, X, Plus } from 'lucide-react';

export const StrategyEditableFields = ({ strategy, onEdit, onLaunch }) => {
  const [formData, setFormData] = useState({
    campaignName: '',
    objective: '',
    targeting: { ageRange: '', gender: '', location: '', interests: [] },
    adCopy: { headline: '', body: '', callToAction: '' },
    budgetSplit: { daily: '', total: '' },
    bestTime: '',
    tips: []
  });

  const [newInterest, setNewInterest] = useState('');

  useEffect(() => {
    if (strategy) {
      setFormData({
        campaignName: strategy.campaignName || '',
        objective: strategy.objective || '',
        targeting: {
          ageRange: strategy.targeting?.ageRange || '',
          gender: strategy.targeting?.gender || '',
          location: strategy.targeting?.location || '',
          interests: strategy.targeting?.interests || []
        },
        adCopy: {
          headline: strategy.adCopy?.headline || '',
          body: strategy.adCopy?.body || '',
          callToAction: strategy.adCopy?.callToAction || ''
        },
        budgetSplit: {
          daily: strategy.budgetSplit?.daily || '',
          total: strategy.budgetSplit?.total || ''
        },
        bestTime: strategy.bestTime || '',
        tips: strategy.tips || []
      });
    }
  }, [strategy]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddInterest = (e) => {
    e.preventDefault();
    if (newInterest.trim() && !formData.targeting.interests.includes(newInterest.trim())) {
      setFormData(prev => ({
        ...prev,
        targeting: {
          ...prev.targeting,
          interests: [...prev.targeting.interests, newInterest.trim()]
        }
      }));
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interest) => {
    setFormData(prev => ({
      ...prev,
      targeting: {
        ...prev.targeting,
        interests: prev.targeting.interests.filter(i => i !== interest)
      }
    }));
  };

  const inputClasses = "w-full bg-[#080808] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 focus:ring-1 focus:ring-[#DC2626]/50 transition-all";
  const labelClasses = "block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2";
  const sectionClasses = "bg-[#101010] border border-white/5 rounded-2xl p-6 mb-6";
  const sectionTitleClasses = "text-sm font-black text-white tracking-widest uppercase mb-4 flex items-center gap-2";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={24} className="text-green-500" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white uppercase tracking-wide">
              AI Strategy Generated
            </h2>
            <p className="text-xs text-gray-500">Review and customize your AI-generated campaign</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onEdit && onEdit(formData)}
            className="flex-1 sm:flex-none flex items-center justify-center cursor-pointer gap-2 px-4 py-2.5 rounded-xl border border-[#DC2626] text-[#DC2626] text-xs font-bold whitespace-nowrap hover:bg-[#DC2626]/10 transition-colors"
          >
            <Pencil size={14} />
            Edit & Save
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onLaunch && onLaunch(formData)}
            className="flex-1 sm:flex-none flex items-center justify-center cursor-pointer gap-2 px-6 py-2.5 rounded-xl bg-[#DC2626] text-white text-xs font-bold whitespace-nowrap hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)]"
          >
            <Rocket size={14} />
            Launch Campaign
          </motion.button>
        </div>
      </div>

      {/* Campaign Info Section */}
      <div className={sectionClasses}>
        <h3 className={sectionTitleClasses}>Campaign Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses}>Campaign Name</label>
            <input
              type="text"
              name="campaignName"
              value={formData.campaignName}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Objective</label>
            <select
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select Objective</option>
              <option value="Conversions">Conversions</option>
              <option value="Traffic">Traffic</option>
              <option value="Engagement">Engagement</option>
              <option value="Awareness">Awareness</option>
              <option value="Sales">Sales</option>
              <option value="Lead Generation">Lead Generation</option>
            </select>
          </div>
        </div>
      </div>

      {/* Ad Copy Section */}
      <div className={sectionClasses}>
        <h3 className={sectionTitleClasses}>Ad Copy</h3>
        <div className="space-y-6">
          <div>
            <label className={labelClasses}>Headline</label>
            <input
              type="text"
              name="adCopy.headline"
              value={formData.adCopy.headline}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Body</label>
            <textarea
              name="adCopy.body"
              value={formData.adCopy.body}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses} resize-none`}
            />
          </div>
          <div>
            <label className={labelClasses}>Call To Action</label>
            <input
              type="text"
              name="adCopy.callToAction"
              value={formData.adCopy.callToAction}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      {/* Targeting Section */}
      <div className={sectionClasses}>
        <h3 className={sectionTitleClasses}>Targeting</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className={labelClasses}>Age Range</label>
            <input
              type="text"
              name="targeting.ageRange"
              value={formData.targeting.ageRange}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Gender</label>
            <select
              name="targeting.gender"
              value={formData.targeting.gender}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label className={labelClasses}>Location</label>
            <input
              type="text"
              name="targeting.location"
              value={formData.targeting.location}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>
        
        <div>
          <label className={labelClasses}>Interests</label>
          <div className="flex flex-wrap gap-2 mb-3">
            <AnimatePresence>
              {formData.targeting.interests.map((interest) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#DC2626] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2"
                >
                  {interest}
                  <button
                    onClick={() => handleRemoveInterest(interest)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={12} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddInterest(e)}
              placeholder="Add an interest..."
              className={inputClasses}
            />
            <button
              onClick={handleAddInterest}
              className="px-4 py-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Budget & Timing Section */}
      <div className={sectionClasses}>
        <h3 className={sectionTitleClasses}>Budget & Timing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className={labelClasses}>Daily Budget</label>
            <input
              type="text"
              name="budgetSplit.daily"
              value={formData.budgetSplit.daily}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Total Budget <span className="text-[10px] text-[#DC2626] normal-case ml-1">(Meta API)</span></label>
            <input
              type="text"
              name="budgetSplit.total"
              value={formData.budgetSplit.total}
              readOnly
              className={`${inputClasses} bg-white/5 cursor-not-allowed text-gray-400 border-transparent`}
            />
          </div>
          <div>
            <label className={labelClasses}>Best Time</label>
            <input
              type="text"
              name="bestTime"
              value={formData.bestTime}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      {/* AI Tips Section */}
      {formData.tips && formData.tips.length > 0 && (
        <div className={`${sectionClasses} border-[#DC2626]/20 bg-[#DC2626]/5`}>
          <h3 className={`${sectionTitleClasses} text-[#DC2626] mb-3!`}>AI Strategy Tips</h3>
          <ul className="space-y-2">
            {formData.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#DC2626] mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
