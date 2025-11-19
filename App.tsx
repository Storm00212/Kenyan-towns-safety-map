import React, { useState, useEffect } from 'react';
import { KenyaMap } from './components/KenyaMap';
import { InfoPanel } from './components/InfoPanel';
import { TownHotspotData } from './types';
import { preGeneratedHotspotData } from './data/town-hotspots-data';

// --- Icons ---
const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
  </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
    </svg>
);

const App: React.FC = () => {
  const [hotspotData, setHotspotData] = useState<TownHotspotData[]>([]);
  const [selectedTown, setSelectedTown] = useState<string | null>(null);
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setHotspotData(preGeneratedHotspotData);
  }, []);

  useEffect(() => {
    // Sync theme with HTML element for Tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleSelectTown = (townName: string | null) => {
    setSelectedTown(townName);
    if (townName === null) {
      setSelectedCounty(null);
    } else {
        // On mobile, close menu when selection is made
        setIsMobileMenuOpen(false); 
    }
  };

  const handleSelectCounty = (countyName: string | null) => {
    if (selectedCounty === countyName) {
      setSelectedCounty(null);
    } else {
      setSelectedCounty(countyName);
    }
    setSelectedTown(null);
  };

  return (
    <div className="flex h-screen w-full bg-gray-100 font-sans overflow-hidden">
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#064e3b] text-white flex flex-col transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        shadow-2xl lg:shadow-none
      `}>
         {/* Logo Area */}
         <div className="h-20 flex items-center px-6 border-b border-green-800/50">
            <ShieldIcon className="w-8 h-8 text-[#22c55e] mr-3" />
            <div>
                <h1 className="font-bold text-xl tracking-tight">SafeReport</h1>
                <p className="text-xs text-green-400/80 uppercase tracking-wider">Government Portal</p>
            </div>
         </div>

         {/* Navigation Menu */}
         <div className="flex-1 overflow-y-auto custom-scrollbar py-4">
            {/* List items */}
            <InfoPanel 
                hotspotData={hotspotData}
                selectedTownName={selectedTown}
                onSelectTown={handleSelectTown}
                selectedCountyName={selectedCounty}
                onSelectCounty={handleSelectCounty}
                searchTerm={searchTerm}
            />
         </div>

         {/* Footer Settings */}
         <div className="p-4 bg-[#054232] border-t border-green-800/50">
            <div className="flex items-center text-green-300 hover:text-white cursor-pointer transition-colors">
                <CogIcon className="w-5 h-5 mr-3"/>
                <span className="text-sm font-medium">Settings</span>
            </div>
            <div className="mt-2 text-[10px] text-green-500 pl-8">
                v1.0.4 &copy; 2024 Republic of Kenya
            </div>
         </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative min-w-0 bg-white">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 shrink-0 z-10 shadow-sm">
            <div className="flex items-center flex-1">
                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="lg:hidden mr-4 text-gray-500 hover:text-gray-700"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>

                {/* Search Bar */}
                <div className="relative max-w-md w-full hidden md:block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="h-5 w-5 text-gray-400"/>
                    </span>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search incidents, locations, keywords..."
                        className="w-full py-2 pl-10 pr-4 bg-gray-50 border border-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:bg-white transition-all placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-4">
                <div className="hidden md:block text-right mr-2">
                    <p className="text-sm font-semibold text-gray-700">Admin User</p>
                    <p className="text-xs text-gray-500">Security Operations</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center text-[#15803d] font-bold shadow-sm">
                    AU
                </div>
            </div>
        </header>

        {/* Mobile Search Bar (Visible only on mobile) */}
        <div className="md:hidden p-3 bg-white border-b border-gray-100">
             <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="h-4 w-4 text-gray-400"/>
                </span>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="w-full py-2 pl-9 pr-4 bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
            </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative bg-gray-100 p-0 overflow-hidden">
            <KenyaMap 
                hotspotData={hotspotData}
                onSelectTown={handleSelectTown}
                selectedTownName={selectedTown}
                theme={theme}
                onSelectCounty={handleSelectCounty}
                selectedCountyName={selectedCounty}
            />
            
            {/* Theme Toggle Floating on Map */}
            <div className="absolute top-4 right-4 z-[400]">
               <button
                  onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
                  className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors"
                  title="Toggle Map Theme"
               >
                  {theme === 'dark' ? (
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
                  ) : (
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  )}
               </button>
            </div>
        </div>
      </main>
    </div>
  );
};

export default App;