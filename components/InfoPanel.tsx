import React, { useState, useMemo } from 'react';
import type { TownHotspotData } from '../types';

interface InfoPanelProps {
  hotspotData: TownHotspotData[];
  selectedTownName: string | null;
  onSelectTown: (townName: string | null) => void;
}

const SeverityBar: React.FC<{ level: number }> = ({ level }) => {
  const widthPercentage = (level / 10) * 100;
  const color = level > 7 ? 'bg-red-600' : level > 4 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div className={`${color} h-2.5 rounded-full`} style={{ width: `${widthPercentage}%` }}></div>
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

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
    </svg>
);


export const InfoPanel: React.FC<InfoPanelProps> = ({ hotspotData, selectedTownName, onSelectTown }) => {
  const selectedTownData = hotspotData.find(t => t.townName === selectedTownName);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHotspots = useMemo(() => {
    const sortedData = [...hotspotData].sort((a, b) => b.severity - a.severity);
    if (!searchTerm) {
      return sortedData;
    }
    return sortedData.filter(town =>
      town.townName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [hotspotData, searchTerm]);

  return (
    <div className="w-full bg-gray-800 text-gray-200 p-4 overflow-y-auto h-full rounded-lg lg:rounded-l-none shadow-2xl">
      <h2 className="text-2xl font-bold text-red-400 mb-4 border-b-2 border-red-400 pb-2">Security Hotspots</h2>
      
      {!selectedTownData && (
         <div className="text-center text-gray-400 my-4">
            <p className="mb-4">Click on a town in the list or a marker on the map to view details.</p>
            <p className="text-sm">The following urban areas have been identified by AI as having significant security concerns.</p>
        </div>
      )}

      {selectedTownData && (
        <div className="bg-gray-900 p-4 rounded-lg mb-6 animate-fade-in">
          <div className="flex justify-between items-center">
            <div>
                <h3 className="text-xl font-semibold text-white">{selectedTownData.townName}</h3>
                <p className="text-sm text-gray-400">{selectedTownData.countyName} County</p>
            </div>
            <button onClick={() => onSelectTown(null)} className="text-gray-400 hover:text-white text-2xl font-bold">&times;</button>
          </div>
          <div className="mt-2">
            <span className="text-sm font-medium text-gray-300">Severity: {selectedTownData.severity}/10</span>
            <SeverityBar level={selectedTownData.severity} />
          </div>
          <p className="text-sm text-gray-400 mt-3 italic">"{selectedTownData.description}"</p>
          
          <div className="mt-5 pt-3 border-t border-gray-700">
            <h4 className="flex items-center font-bold text-amber-300 mb-2">
                <TrendingUpIcon className="h-5 w-5 mr-2" />
                Historical Trend
            </h4>
            <p className="text-sm text-gray-300 ml-1">{selectedTownData.historicalTrend}</p>
          </div>

          <div className="mt-4">
            <h4 className="flex items-center font-bold text-amber-300 mb-2">
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Key Crime Statistics
            </h4>
            <ul className="space-y-2 text-sm">
              {selectedTownData.crimeStatistics.map((stat) => (
                <li key={stat.type} className="flex justify-between items-center bg-gray-800 p-2 rounded-md">
                  <span className="text-gray-300">{stat.type}</span>
                  <span className="font-semibold text-gray-100 bg-gray-700 px-2 py-0.5 rounded">{stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-3">Identified Hotspot Towns</h3>
        
        <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5 text-gray-400"/>
            </span>
            <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a town..."
                className="w-full bg-gray-700 text-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
        </div>

        <ul className="space-y-2">
          {filteredHotspots.length > 0 ? (
            filteredHotspots.map((town) => (
            <li
              key={town.townName}
              onClick={() => onSelectTown(town.townName)}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${selectedTownName === town.townName ? 'bg-red-900/50 ring-2 ring-red-500' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{town.townName}</span>
                <span className="text-sm font-bold text-red-400">{town.severity}/10</span>
              </div>
            </li>
          ))
          ) : (
            <li className="p-3 text-center text-gray-500">
                No towns found matching your search.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};