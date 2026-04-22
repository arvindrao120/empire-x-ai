import { useState } from 'react';
import { X, Save } from 'lucide-react';

const EditPopup = ({ label, value, note, onSave, onClose }) => {
  const [val, setVal] = useState(value || '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    setError('');
    try {
      await onSave(val);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">Edit {label}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition">
            <X size={20} />
          </button>
        </div>
        {note && <p className="text-gray-500 text-xs mb-4">{note}</p>}
        <input
          value={val}
          onChange={e => setVal(e.target.value)}
          className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#DC2626] transition"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex gap-3 mt-5">
          
          <button onClick={handleSave} disabled={loading}
            className="flex-1 bg-[#DC2626] hover:bg-red-700 text-white py-2 rounded-lg transition text-sm font-semibold flex items-center justify-center gap-2">
            <Save size={15} /> {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;