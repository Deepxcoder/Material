import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, LogIn, ShieldAlert } from 'lucide-react';
import V2AuthModal from '../components/ui/V2AuthModal';

const ProfileV3 = () => {
  const { user } = useAuth();
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto pt-32 pb-48 px-6">
        <header className="mb-16 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center mb-6 relative group overflow-hidden">
            <User className="w-12 h-12 text-gray-300" />
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-gray-900 dark:text-white uppercase mb-2">User_Profile</h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Sector 7 // Unauthorized</p>
        </header>

        {/* Guest View with Glassmorphism Blur */}
        {!user && (
          <div className="relative">
            <div className="space-y-8 blur-xl pointer-events-none select-none opacity-20">
              <div className="h-32 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8" />
              <div className="grid grid-cols-3 gap-6">
                <div className="h-40 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10" />
                <div className="h-40 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10" />
                <div className="h-40 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10" />
              </div>
            </div>

            {/* Overlaid Log in Pop-up */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="glass px-12 py-16 text-center max-w-md w-full shadow-2xl border border-white/20">
                <div className="w-12 h-12 bg-blue-600/10 flex items-center justify-center mx-auto mb-6">
                  <ShieldAlert className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight uppercase">Log in to Access</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 font-medium">Synchronize your relay across all decentralized sectors.</p>
                <button 
                  onClick={() => setIsAuthOpen(true)}
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                >
                  <LogIn className="w-4 h-4" />
                  AUTHENTICATE
                </button>
              </div>
            </div>
          </div>
        )}

        {user && (
          <div className="space-y-12">
            <section className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8">
              <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Identity_Module</h3>
              <div className="flex items-center gap-6">
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Display Name</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white uppercase">{user.displayName || 'Relay_User'}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Status</p>
                  <p className="text-2xl font-bold text-blue-600 uppercase tracking-widest">ACTIVE</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      <V2AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
};

export default ProfileV3;
