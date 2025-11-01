import React, { useState, useEffect, useCallback, useRef } from 'react';
import { KenyaMap } from './components/KenyaMap';
import { InfoPanel } from './components/InfoPanel';
import { fetchTownHotspotData } from './services/geminiService';
import type { TownHotspotData } from './types';

const MIN_PANEL_WIDTH = 320; 
const DEFAULT_PANEL_WIDTH = 384; 
const MIN_PANEL_HEIGHT = 200;

const App: React.FC = () => {
  const [hotspotData, setHotspotData] = useState<TownHotspotData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTown, setSelectedTown] = useState<string | null>(null);
  
  // State for desktop side panel
  const [panelWidth, setPanelWidth] = useState(DEFAULT_PANEL_WIDTH);
  const [isSidePanelCollapsed, setIsSidePanelCollapsed] = useState(false);

  // State for mobile bottom panel
  const [panelHeight, setPanelHeight] = useState(window.innerHeight / 2.5);
  const [isBottomPanelCollapsed, setIsBottomPanelCollapsed] = useState(false);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  
  const mainContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      if (!desktop) {
        setIsSidePanelCollapsed(false); // Reset side panel on mobile
      } else {
        setIsBottomPanelCollapsed(false); // Reset bottom panel on desktop
      }
      setIsDesktop(desktop);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTownHotspotData();
        setHotspotData(data);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSelectTown = (townName: string | null) => {
    setSelectedTown(townName);
  };

  // Handler for VERTICAL resizing (desktop)
  const handleMouseDownVertical = useCallback((mouseDownEvent: React.MouseEvent) => {
    if (isSidePanelCollapsed) return;

    mouseDownEvent.preventDefault();
    const startX = mouseDownEvent.clientX;
    const startWidth = panelWidth;

    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
      const dx = mouseMoveEvent.clientX - startX;
      const newWidth = startWidth - dx;

      const maxWidth = mainContainerRef.current ? mainContainerRef.current.clientWidth * 0.6 : 800;
      
      let finalWidth = Math.max(MIN_PANEL_WIDTH, newWidth);
      finalWidth = Math.min(maxWidth, finalWidth);
      
      setPanelWidth(finalWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [panelWidth, isSidePanelCollapsed]);

  // Handler for HORIZONTAL resizing (mobile)
  const handleMouseDownHorizontal = useCallback((mouseDownEvent: React.MouseEvent) => {
    if (isBottomPanelCollapsed) return;

    mouseDownEvent.preventDefault();
    const startY = mouseDownEvent.clientY;
    const startHeight = panelHeight;

    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
      const dy = mouseMoveEvent.clientY - startY;
      const newHeight = startHeight - dy;

      const maxHeight = mainContainerRef.current ? mainContainerRef.current.clientHeight * 0.8 : 600;
      
      let finalHeight = Math.max(MIN_PANEL_HEIGHT, newHeight);
      finalHeight = Math.min(maxHeight, finalHeight);
      
      setPanelHeight(finalHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
  }, [panelHeight, isBottomPanelCollapsed]);


  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col font-sans">
      <header className="text-center p-4 flex-shrink-0">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 tracking-wider">
          Kenya Security Analysis
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          AI-Generated Insights on Urban Security Hotspots
        </p>
      </header>
      
      <main ref={mainContainerRef} className="flex-grow flex flex-col lg:flex-row gap-0 overflow-hidden p-4 pt-0">
        <div className="flex-grow rounded-lg shadow-2xl relative min-h-0 min-w-0">
          {loading && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 z-20 rounded-lg">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
                <p className="mt-4 text-lg">Generating Nationwide Security Analysis...</p>
             </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center text-center bg-gray-900/90 p-4 rounded-lg z-20">
                <div className="bg-gray-800 p-8 rounded-lg shadow-2xl border border-red-500 max-w-lg">
                    <h3 className="text-2xl font-bold text-red-500 mb-3">Failed to Load Security Data</h3>
                    <p className="text-gray-300 mb-6">{error}</p>
                    <div className="text-left text-gray-400 text-sm">
                        <h4 className="font-bold text-gray-200 mb-2">Troubleshooting Steps:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Check API Key:</strong> Ensure your Gemini API key is correctly configured.</li>
                            <li><strong>Network Connection:</strong> Verify your internet connection is stable.</li>
                            <li><strong>API Quotas:</strong> You may have exceeded your API usage limits. Check your Google AI Studio dashboard.</li>
                            <li><strong>Try Again:</strong> There might be a temporary service issue. Please try refreshing the page.</li>
                        </ul>
                    </div>
                </div>
            </div>
          )}
          <KenyaMap 
            hotspotData={hotspotData}
            onSelectTown={handleSelectTown}
            selectedTownName={selectedTown}
          />
        </div>
        
        {/* Horizontal Resizer (Mobile) */}
        <div
          onMouseDown={handleMouseDownHorizontal}
          onClick={() => !isDesktop && setIsBottomPanelCollapsed(!isBottomPanelCollapsed)}
          className={`flex lg:hidden flex-shrink-0 items-center justify-center h-4 bg-gray-700 hover:bg-red-500 transition-colors duration-200 ${isBottomPanelCollapsed ? 'cursor-pointer' : 'cursor-row-resize'}`}
          title={isBottomPanelCollapsed ? "Show details" : "Collapse panel / Drag to resize"}
        >
          <div className="w-10 h-1 bg-gray-500/50 rounded-full"/>
        </div>

        {/* Vertical Resizer (Desktop) */}
        <div
          onMouseDown={handleMouseDownVertical}
          onClick={() => isDesktop && setIsSidePanelCollapsed(!isSidePanelCollapsed)}
          className={`hidden lg:flex flex-shrink-0 items-center justify-center w-4 bg-gray-700 hover:bg-red-500 transition-colors duration-200 ${isSidePanelCollapsed ? 'cursor-pointer' : 'cursor-col-resize'}`}
          title={isSidePanelCollapsed ? "Show details" : "Collapse panel / Drag to resize"}
        >
          <div className="w-1 h-10 bg-gray-500/50 rounded-full"/>
        </div>

        {/* Panel container */}
        <div 
          className="flex-shrink-0"
          style={isDesktop 
            ? { width: isSidePanelCollapsed ? '0px' : `${panelWidth}px`, overflow: 'hidden', transition: 'width 300ms ease-in-out' } 
            : { height: isBottomPanelCollapsed ? '0px' : `${panelHeight}px`, overflow: 'hidden', transition: 'height 300ms ease-in-out' }
          }
        >
            <InfoPanel 
                hotspotData={hotspotData} 
                selectedTownName={selectedTown}
                onSelectTown={handleSelectTown}
            />
        </div>
      </main>
    </div>
  );
};

export default App;
