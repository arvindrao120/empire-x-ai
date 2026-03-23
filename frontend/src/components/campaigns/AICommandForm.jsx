import { Crosshair, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const PLACEMENTS = ['Facebook', 'Instagram', 'Messenger', 'WhatsApp', 'Threads', 'Audience Network'];

export const AICommandForm = () => {
  const [formData, setFormData] = useState({
    campaignName: '',
    adSetName: '',
    objective: 'Conversions',
    location: '',
    creativeDescription: '',
    ageMin: 18,
    ageMax: 65,
    budget: '',
    placements: ['Facebook', 'Instagram'],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlacement = (platform) => {
    const already = formData.placements.includes(platform);
    setFormData({
      ...formData,
      placements: already
        ? formData.placements.filter((p) => p !== platform)
        : [...formData.placements, platform],
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  
  // Mandatory check
  if (!formData.campaignName || !formData.adSetName || !formData.location || 
      !formData.creativeDescription || !formData.budget || formData.placements.length === 0) {
    alert('Please fill all fields!');
    return;
  }
  
  console.log('Campaign Form Data:', formData);
};

  return (
    <div className="bg-[#101010] border border-white/5 rounded-xl p-6 md:p-8 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-[#DC2626]/20 flex items-center justify-center text-[#DC2626]">
          <Crosshair size={18} />
        </div>
        <h2 className="text-lg font-black text-white tracking-widest">AI STRATEGIC COMMAND</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">

        {/* Campaign Name */}
        <div>
          <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Campaign Name</label>
          <input
            type="text"
            name="campaignName"
            value={formData.campaignName}
            required
            onChange={handleChange}
            placeholder="e.g. Q4 Growth Sprint"
            className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 placeholder-gray-600 transition-colors"
          />
        </div>

        {/* Ad Set Name */}
        <div>
          <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Ad Set Name</label>
          <input
            type="text"
            name="adSetName"
            value={formData.adSetName}
            required
            onChange={handleChange}
            placeholder="Targeting - Digital Nomads"
            className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 placeholder-gray-600 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Objective */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Objective</label>
            <select
              name="objective"
              value={formData.objective}
              required
              onChange={handleChange}
              className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 appearance-none cursor-pointer transition-colors"
            >
              <option>Conversions</option>
              <option>Traffic</option>
              <option>Engagement</option>
              <option>Awareness</option>
              <option>Sales</option>
              <option>Lead Generation</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Location Targeting</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              required
              onChange={handleChange}
              placeholder="e.g. Delhi, Mumbai"
              className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 placeholder-gray-600 transition-colors"
            />
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Daily Budget (INR ₹)</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            required
            onChange={handleChange}
            placeholder="e.g. 5000"
            className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 placeholder-gray-600 transition-colors"
          />
        </div>

        {/* Creative Description */}
        <div>
          <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Creative Description</label>
          <textarea
            rows="3"
            name="creativeDescription"
            value={formData.creativeDescription}
            required
            onChange={handleChange}
            placeholder="Describe the visual concept..."
            className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 placeholder-gray-600 transition-colors resize-none"
          />
        </div>

        {/* Age Range */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase">Age Range</label>
            <span className="text-[10px] font-bold text-white tracking-widest">{formData.ageMin} - {formData.ageMax}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="range"
                min="13" max="65"
                name="ageMin"
                required
                value={formData.ageMin}
                onChange={handleChange}
                className="w-full accent-[#DC2626]"
              />
              <p className="text-[10px] text-gray-500 mt-1">Min: {formData.ageMin}</p>
            </div>
            <div>
              <input
                type="range"
                min="13" max="65"
                name="ageMax"
                required
                value={formData.ageMax}
                onChange={handleChange}
                className="w-full accent-[#DC2626]"
              />
              <p className="text-[10px] text-gray-500 mt-1">Max: {formData.ageMax}</p>
            </div>
          </div>
        </div>

        {/* Placements */}
        <div>
          <label className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">Placements</label>
          <div className="flex flex-wrap gap-3">
            {PLACEMENTS.map((platform) => {
              const isSelected = formData.placements.includes(platform);
              return (
                <button
                  key={platform}
                  type="button"
                  onClick={() => handlePlacement(platform)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all border
                    ${isSelected
                      ? 'bg-[#DC2626]/20 border-[#DC2626] text-white'
                      : 'bg-transparent border-white/10 text-gray-500 hover:text-white hover:border-white/30'
                    }`}
                >
                  <div className={`w-2 h-2 rounded-sm ${isSelected ? 'bg-[#DC2626]' : 'bg-gray-600'}`} />
                  {platform}
                </button>
              );
            })}
            {formData.placements.length === 0 && (
  <p className="text-xs text-red-400 mt-1">Select at least one placement!</p>
)}
          </div>
        </div>

        {/* Submit */}
        <div className="mt-auto pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-gradient-to-r from-[#DC2626] to-[#ec4899] text-white font-black tracking-widest text-xs uppercase shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-shadow cursor-pointer"
          >
            <Sparkles size={16} />
            Generate Strategy With AI
          </motion.button>
        </div>

      </form>
    </div>
  );
};