import { BrainCircuit, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const AIStrategyForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#101010] border border-white/5 rounded-2xl p-6 lg:col-span-2 relative overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 flex items-center justify-center border border-[#DC2626]/20">
          <BrainCircuit className="text-[#DC2626]" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Generate AI Ad Strategy</h2>
          <p className="text-sm text-gray-500">Advanced LLM-powered audience & creative mapping.</p>
        </div>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Campaign Goal</label>
          <select className="w-full bg-[#080808] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 appearance-none">
            <option>Conversions / Sales</option>
            <option>Lead Generation</option>
            <option>Brand Awareness</option>
            <option>Traffic</option>
          </select>
        </div>
        
        <div>
          <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Target Audience</label>
          <input 
            type="text" 
            placeholder="e.g. Luxury Car Enthusiasts" 
            className="w-full bg-[#080808] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Daily Budget (INR)</label>
          <input 
            type="number" 
            placeholder="5000" 
            className="w-full bg-[#080808] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Product Description</label>
          <input 
            type="text" 
            placeholder="Premium electric SUV..." 
            className="w-full bg-[#080808] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50"
          />
        </div>

        <div className="md:col-span-2 mt-4">
          <button className="w-full bg-[#DC2626] hover:bg-red-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            <Sparkles size={18} />
            GENERATE STRATEGY WITH AI
          </button>
        </div>
      </form>
    </motion.div>
  );
};
