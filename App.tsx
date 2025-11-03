/**
 * App.tsx: Main entry point for the Kenya Security Analysis application.
 * This file contains the root App component and supporting UI components like ThemeToggle and ChevronIcon.
 * The App component manages global state, handles user interactions, and orchestrates the layout of the map and info panel.
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { KenyaMap } from './components/KenyaMap';
import { InfoPanel } from './components/InfoPanel';
import { TownHotspotData } from './types';
import { preGeneratedHotspotData } from './data/town-hotspots-data'; // Import static data

// Panel size constants for responsive layout adjustments
const MIN_PANEL_WIDTH = 320;
const DEFAULT_PANEL_WIDTH = 384;
const MIN_PANEL_HEIGHT = 200;

/**
 * ThemeToggle component: A button that allows users to switch between light and dark themes.
 * Displays a sun icon when in dark mode (indicating switch to light) and a moon icon when in light mode (indicating switch to dark).
 * Uses Tailwind CSS for styling and accessibility attributes.
 */
const ThemeToggle: React.FC<{ theme: 'light' | 'dark'; onToggle: () => void }> = ({ theme, onToggle }) => {
  // Sun icon
  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
    </svg>
  );

  // Moon icon
  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );

  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-gray-900 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

/**
 * ChevronIcon component: An SVG chevron icon used in the mobile panel resizer.
 * Rotates 180 degrees when the panel is not collapsed to visually indicate the expand/collapse state.
 * Styled with Tailwind CSS and transitions for smooth animation.
 */
const ChevronIcon: React.FC<{ collapsed: boolean }> = ({ collapsed }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${!collapsed && 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);


/**
 * App component: The root component of the Kenya Security Analysis application.
 * Manages global state including hotspot data, user selections (town/county), theme, and panel dimensions.
 * Handles data loading from static files, theme application, responsive layout changes, and user interactions.
 * Renders the header with title and theme toggle, the interactive map, and the collapsible info panel.
 * Uses React hooks for state management and side effects, with callbacks for resizing functionality.
 */
const App: React.FC = () => {
  // State for storing the list of town hotspot data loaded from static file
  const [hotspotData, setHotspotData] = useState<TownHotspotData[]>([]);
  // State for the currently selected town name (null if none selected)
  const [selectedTown, setSelectedTown] = useState<string | null>(null);
  // State for the currently selected county name for filtering (null if none selected)
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  // State for the current theme ('light' or 'dark'), defaults to 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // State to track if the current view is desktop (width >= 1024px)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // State for desktop side panel: width and collapsed status
  const [panelWidth, setPanelWidth] = useState(DEFAULT_PANEL_WIDTH);
  const [isSidePanelCollapsed, setIsSidePanelCollapsed] = useState(false);

  // State for mobile bottom panel: height and collapsed status (defaults to collapsed on mobile)
  const [panelHeight, setPanelHeight] = useState(window.innerHeight / 3);
  const [isBottomPanelCollapsed, setIsBottomPanelCollapsed] = useState(!isDesktop);


  // Ref to the main container for calculating max panel sizes during resizing
  const mainContainerRef = useRef<HTMLElement>(null);

  // Apply the theme class to the document element to enable Tailwind dark mode
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Handle window resize events to switch between desktop and mobile layouts
  // Resets panel collapse states appropriately and updates isDesktop state
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      if (desktop) {
        setIsBottomPanelCollapsed(false); // Reset bottom panel on desktop
      } else {
        setIsSidePanelCollapsed(false); // Reset side panel on mobile
      }
      setIsDesktop(desktop);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load hotspot data from the pre-generated static file on component mount
  // This simulates data fetching without API calls for instant loading
  useEffect(() => {
    // Load data instantly from the pre-generated static file
    setHotspotData(preGeneratedHotspotData);
  }, []);

  // Handler for selecting or deselecting a town
  // Deselects county if town is deselected, and expands bottom panel on mobile when a town is selected
  const handleSelectTown = (townName: string | null) => {
    setSelectedTown(townName);
    if (townName === null) {
      setSelectedCounty(null);
    } else {
      // If a town is selected on mobile, expand the bottom panel
      if (!isDesktop) {
        setIsBottomPanelCollapsed(false);
      }
    }
  };

  // Handler for selecting or deselecting a county for filtering hotspots
  // Toggles selection if the same county is clicked, and always deselects town to avoid UI confusion
  const handleSelectCounty = (countyName: string | null) => {
    // If the user clicks the currently selected county, deselect it.
    if (selectedCounty === countyName) {
      setSelectedCounty(null);
    } else {
      setSelectedCounty(countyName);
    }
    // Always deselect town when changing county filter to avoid confusion
    setSelectedTown(null);
  };

  // Handler for vertical resizing of the side panel on desktop
  // Calculates new width based on mouse movement, constrains within min/max bounds, and updates cursor styles
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

  // Handler for horizontal resizing of the bottom panel on mobile
  // Calculates new height based on mouse movement, constrains within min/max bounds, and updates cursor styles
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


  // Render the main application layout: header, main content area with map and panel, and resizers
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white h-screen flex flex-col font-sans">
      {/* Header section with title, subtitle, and theme toggle */}
      <header className="relative text-center p-2 md:p-4 flex-shrink-0">
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-500 tracking-wider">
            Kenya Security Analysis
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            AI-Generated Insights on Urban Security Hotspots
            </p>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>
      
      {/* Main content area: map container, resizers, and info panel */}
      <main ref={mainContainerRef} className="flex-grow flex flex-col lg:flex-row gap-0 overflow-hidden p-4 pt-0">
        {/* Map container: takes up available space, rounded and shadowed */}
        <div className="flex-grow rounded-lg shadow-2xl relative min-h-0 min-w-0">
          <KenyaMap
            hotspotData={hotspotData}
            onSelectTown={handleSelectTown}
            selectedTownName={selectedTown}
            theme={theme}
            onSelectCounty={handleSelectCounty}
            selectedCountyName={selectedCounty}
          />
        </div>

        {/* Horizontal Resizer for mobile: allows collapsing/expanding and resizing bottom panel */}
        <div
          onMouseDown={handleMouseDownHorizontal}
          onClick={() => !isDesktop && setIsBottomPanelCollapsed(!isBottomPanelCollapsed)}
          className={`flex lg:hidden flex-shrink-0 items-center justify-center h-4 bg-gray-300 dark:bg-gray-700 hover:bg-red-500 transition-colors duration-200 ${isBottomPanelCollapsed ? 'cursor-pointer' : 'cursor-row-resize'}`}
          title={isBottomPanelCollapsed ? "Show details" : "Collapse panel / Drag to resize"}
        >
          <ChevronIcon collapsed={isBottomPanelCollapsed} />
        </div>

        {/* Vertical Resizer for desktop: allows collapsing/expanding and resizing side panel */}
        <div
          onMouseDown={handleMouseDownVertical}
          onClick={() => isDesktop && setIsSidePanelCollapsed(!isSidePanelCollapsed)}
          className={`hidden lg:flex flex-shrink-0 items-center justify-center w-4 bg-gray-300 dark:bg-gray-700 hover:bg-red-500 transition-colors duration-200 ${isSidePanelCollapsed ? 'cursor-pointer' : 'cursor-col-resize'}`}
          title={isSidePanelCollapsed ? "Show details" : "Collapse panel / Drag to resize"}
        >
          <div className="w-1 h-10 bg-gray-400 dark:bg-gray-500/50 rounded-full"/>
        </div>

        {/* Info panel container: dynamically sized based on desktop/mobile and collapse state */}
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
                selectedCountyName={selectedCounty}
                onSelectCounty={handleSelectCounty}
            />
        </div>
      </main>
    </div>
  );
};

export default App;