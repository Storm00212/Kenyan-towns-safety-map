import React, { useState, useEffect, useCallback, useRef } from 'react';
import { KenyaMap } from './components/KenyaMap';
import { InfoPanel } from './components/InfoPanel';
import { TownHotspotData } from './types';
import { preGeneratedHotspotData } from './data/town-hotspots-data'; // Import static data

const MIN_PANEL_WIDTH = 320; 
const DEFAULT_PANEL_WIDTH = 384; 
const MIN_PANEL_HEIGHT = 200;

const App: React.FC = () => {
  const [hotspotData, setHotspotData] = useState<TownHotspotData[]>([]);
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
    // Load data instantly from the pre-generated static file
    setHotspotData(preGeneratedHotspotData);
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