import { useAuth } from '../../context/AuthContext';
import { logout } from '../../api/auth';

export const ProfilePopup = ({ onClose }) => {
    const { user, setUser } = useAuth();

    const handleLogout = async () => {
        await logout();
        setUser(null);
        onClose();
        window.location.href = '/';
    };

    return (
        <div className="absolute right-0 top-12 w-72 bg-card border border-primary/20 rounded-2xl shadow-2xl p-5 z-50">

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <img
                    src={user.photos?.[0]}
                    className="w-14 h-14 rounded-full border-2 border-primary"
                />
                <div>
                    <p className="font-bold text-textMain">{user.displayName}</p>
                    <p className="text-xs text-textMuted capitalize">{user.plan} plan</p>
                </div>
            </div>

            <hr className="border-primary/20 mb-4" />

            {/* Data */}
            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-textMuted">Email</span>
                    <span className="text-textMain">{user.email || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-textMuted">Location</span>
                    <span className="text-textMain">{user.location || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-textMuted">Gender</span>
                    <span className="text-textMain capitalize">{user.gender || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-textMuted">Birthday</span>
                    <span className="text-textMain">{user.birthday || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-textMuted">Provider</span>
                    <span className="text-textMain capitalize">{user.provider}</span>
                </div>
            </div>

            <hr className="border-primary/20 my-4" />

            {/* Logout */}
            <button
                onClick={handleLogout}
                className="w-full py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm font-semibold"
            >
                Logout
            </button>
        </div>
    );
};