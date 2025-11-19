import React, { useMemo } from 'react';
import type { TownHotspotData } from '../types';

interface InfoPanelProps {
  hotspotData: TownHotspotData[];
  selectedTownName: string | null;
  onSelectTown: (townName: string | null) => void;
  selectedCountyName: string | null;
  onSelectCounty: (countyName: string | null) => void;
  searchTerm: string;
}

const SeverityBar: React.FC<{ level: number }> = ({ level }) => {
  const widthPercentage = (level / 10) * 100;
  const color = level > 7 ? 'bg-red-500' : level > 4 ? 'bg-yellow-500' : 'bg-green-400';

  return (
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div className={`${color} h-2 rounded-full`} style={{ width: `${widthPercentage}%` }}></div>
    </div>
  );
};

const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M12 2a1 1 0 011 1v12a1 1 0 11-2 0V3a1 1 0 011-1zM3 10a1 1 0 011-1h2a1 1 0 110 2H4a1 1 0 01-1-1zM7 3a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1zM15 5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" />
    </svg>
);

const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M12 3.75a.75.75 0 01.75.75v6.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V4.5a.75.75 0 01.75-.75zM3.75 13.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V14.25a.75.75 0 01.75-.75zM8.25 12a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zM16.25 10.5a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75z" />
    </svg>
);

export const InfoPanel: React.FC<InfoPanelProps> = ({ hotspotData, selectedTownName, onSelectTown, selectedCountyName, onSelectCounty, searchTerm }) => {
  const selectedTownData = hotspotData.find(t => t.townName === selectedTownName);

  const filteredHotspots = useMemo(() => {
    let data = [...hotspotData];

    if (selectedCountyName) {
      data = data.filter(town => town.countyName === selectedCountyName);
    }
    
    const sortedData = data.sort((a, b) => b.severity - a.severity);
    if (!searchTerm) {
      return sortedData;
    }
    return sortedData.filter(town =>
      town.townName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [hotspotData, searchTerm, selectedCountyName]);

  return (
    <div className="w-full h-full text-gray-200 px-2">
      
      {/* Details View for Selected Town */}
      {selectedTownData && (
        <div className="bg-green-800/40 p-4 rounded-lg mb-6 border border-green-700/50 shadow-sm backdrop-blur-sm relative">
          <button 
            onClick={() => onSelectTown(null)} 
            className="absolute top-2 right-2 text-green-300 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <h3 className="text-lg font-bold text-white">{selectedTownData.townName}</h3>
          <p className="text-xs text-green-300 mb-2">{selectedTownData.countyName} County</p>
          
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300">Severity Score</span>
                <span className="font-bold text-white">{selectedTownData.severity}/10</span>
            </div>
            <SeverityBar level={selectedTownData.severity} />
          </div>

          <p className="text-xs text-gray-300 italic mb-4 leading-relaxed">"{selectedTownData.description}"</p>
          
          <div className="pt-2 border-t border-green-700/50">
            <h4 className="flex items-center text-xs font-bold text-green-400 mb-2">
                <TrendingUpIcon className="h-3 w-3 mr-1.5" />
                Trend
            </h4>
            <p className="text-xs text-gray-300">{selectedTownData.historicalTrend}</p>
          </div>

          <div className="mt-3">
            <h4 className="flex items-center text-xs font-bold text-green-400 mb-2">
                <ChartBarIcon className="h-3 w-3 mr-1.5" />
                Stats
            </h4>
            <div className="space-y-1.5">
              {selectedTownData.crimeStatistics.map((stat) => (
                <div key={stat.type} className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">{stat.type}</span>
                  <span className="font-medium text-white bg-green-900/50 px-1.5 py-0.5 rounded border border-green-800">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Filter Info */}
      {selectedCountyName && (
        <div className="bg-green-900/50 p-2 rounded-md mb-3 flex justify-between items-center border border-green-700/50">
            <span className="text-xs text-gray-300">
              County: <span className="text-white font-semibold">{selectedCountyName}</span>
            </span>
            <button
              onClick={() => onSelectCounty(null)}
              className="text-[10px] bg-green-800 hover:bg-green-700 text-white px-2 py-0.5 rounded transition-colors"
            >
              CLEAR
            </button>
        </div>
      )}

      {/* List View */}
      <div className="space-y-1">
        {!selectedTownData && (
            <h3 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-3 px-1">
                {searchTerm ? 'Search Results' : 'All Hotspots'}
            </h3>
        )}
        
        {filteredHotspots.length > 0 ? (
            filteredHotspots.map((town) => (
            <div
              key={town.townName}
              onClick={() => onSelectTown(town.townName)}
              className={`group flex justify-between items-center p-2.5 rounded-md cursor-pointer transition-all duration-200 border border-transparent ${
                  selectedTownName === town.townName 
                  ? 'bg-[#22c55e] text-white shadow-md' 
                  : 'text-green-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div>
                <span className="block text-sm font-medium">{town.townName}</span>
                {searchTerm && <span className="text-[10px] opacity-70">{town.countyName}</span>}
              </div>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  selectedTownName === town.townName 
                    ? 'bg-white/20 text-white' 
                    : town.severity >= 8 ? 'bg-red-500/20 text-red-200 group-hover:bg-red-500 group-hover:text-white' 
                    : 'bg-green-900/50 text-green-300 group-hover:bg-green-800 group-hover:text-white'
              }`}>
                  {town.severity}
              </span>
            </div>
          ))
        ) : (
            <div className="text-center py-8 text-green-400/60 text-sm">
                No locations found.
            </div>
        )}
      </div>
    </div>
  );
};