import React, { useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import type { TownHotspotData, GeoJSONFeature, KenyaGeoJSON } from '../types';
import { kenyaCountiesGeoJSON } from '../data/kenya-counties-simplified';

interface KenyaMapProps {
  hotspotData: TownHotspotData[];
  onSelectTown: (townName: string | null) => void;
  selectedTownName: string | null;
  theme: 'light' | 'dark';
  onSelectCounty: (countyName: string | null) => void;
  selectedCountyName: string | null;
}

/**
 * MapUpdater component: Internal component that handles map view updates and sizing fixes.
 * Uses the useMap hook to access the Leaflet map instance and perform flyTo animations
 * when towns or counties are selected. Also fixes tile loading issues by invalidating map size.
 */
const MapUpdater: React.FC<{ selectedTown?: TownHotspotData, selectedCountyName: string | null }> = ({ selectedTown, selectedCountyName }) => {
  const map = useMap();

  // Effect to fly to selected town, county, or default view based on selection state
  useEffect(() => {
    if (selectedTown) {
      map.flyTo([selectedTown.latitude, selectedTown.longitude], 12);
    } else {
      // This block is entered when selectedTown is null.
      if (selectedCountyName) {
        const countyFeature = (kenyaCountiesGeoJSON as KenyaGeoJSON).features.find(
            f => f.properties.COUNTY === selectedCountyName
        );
        if (countyFeature) {
            const geoJsonLayer = L.geoJSON(countyFeature);
            map.flyToBounds(geoJsonLayer.getBounds());
        }
      } else {
        // This block is entered when selectedTown is null AND selectedCountyName is null.
        // This matches the user's request to fly to the default view in this case.
        map.flyTo([0.0236, 37.9062], 6);
      }
    }
  }, [selectedTown, selectedCountyName, map]);

  // Effect to fix map tile loading issues by invalidating size after component mounts
  useEffect(() => {
    // This is a robust fix for a common race condition where map tiles don't
    // load because the map container's dimensions haven't been calculated yet.
    // By invalidating the size after a brief delay, we force the map to
    // re-render correctly once the layout is stable.
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => clearTimeout(timer);
  }, [map]);


  return null;
};

// Custom marker icons for town hotspots
// Default red marker for unselected towns
const defaultIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Yellow marker for the currently selected town
const selectedIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


/**
 * KenyaMap component: Main map component that renders the interactive Kenya map.
 * Combines tile layers, county boundaries, town markers, and handles all map interactions.
 * Uses memoized values for performance and theme-based styling.
 */
export const KenyaMap: React.FC<KenyaMapProps> = ({ hotspotData, onSelectTown, selectedTownName, theme, onSelectCounty, selectedCountyName }) => {

  // Memoized selected town data for efficient re-renders
  const selectedTownData = useMemo(() => {
    return hotspotData.find(t => t.townName === selectedTownName);
  }, [selectedTownName, hotspotData]);

  // Dynamic tile URL based on theme (dark/light map tiles)
  const tileUrl = theme === 'dark'
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

  // Background color for the map container matching the theme
  const mapBackgroundColor = theme === 'dark' ? '#1A202C' : '#F7FAFC';

  // Default county boundary styling based on theme
  const countyStyle = useMemo(() => (theme === 'dark' ? {
      color: '#4A5568', // gray-600
      weight: 1,
      opacity: 0.8,
      fillColor: '#2D3748', // gray-800
      fillOpacity: 0.1
  } : {
      color: '#A0AEC0', // gray-400
      weight: 1,
      opacity: 0.8,
      fillColor: '#E2E8F0', // gray-200
      fillOpacity: 0.3
  }), [theme]);

  // Highlighted styling for selected county
  const selectedCountyStyle = useMemo(() => (theme === 'dark' ? {
      color: '#F56565', // red-400
      weight: 2,
      opacity: 1,
      fillColor: '#4A5568', // gray-600
      fillOpacity: 0.4
  } : {
      color: '#E53E3E', // red-600
      weight: 2,
      opacity: 1,
      fillColor: '#CBD5E0', // gray-300
      fillOpacity: 0.5
  }), [theme]);

  // Function to determine county styling based on selection state
  const getCountyStyle = (feature?: GeoJSONFeature) => {
    if (feature?.properties.COUNTY === selectedCountyName) {
      return selectedCountyStyle;
    }
    return countyStyle;
  };

  // Function to attach event handlers to county GeoJSON layers
  // Handles click for selection, mouseover/mouseout for hover effects, and tooltips
  const onEachCounty = (feature: GeoJSONFeature, layer: L.Layer) => {
    layer.on({
      click: () => {
        onSelectCounty(feature.properties.COUNTY);
      },
      mouseover: (e) => {
        const layer = e.target;
        if (feature.properties.COUNTY !== selectedCountyName) {
            layer.setStyle({
                weight: 2,
                color: theme === 'dark' ? '#E53E3E' : '#E53E3E',
                fillOpacity: theme === 'dark' ? 0.3 : 0.5
            });
        }
      },
      mouseout: (e) => {
         const layer = e.target;
         if (feature.properties.COUNTY !== selectedCountyName) {
            layer.setStyle(countyStyle);
         }
      }
    });
     layer.bindTooltip(feature.properties.COUNTY, { sticky: true, className: 'font-sans' });
  };
  
  // Render the map container with all layers and components
  return (
    <MapContainer
        center={[0.0236, 37.9062]} // Centered on Kenya
        zoom={6}
        style={{ height: '100%', width: '100%', backgroundColor: mapBackgroundColor, borderRadius: '0.5rem' }}
        scrollWheelZoom={true}
    >
      {/* Base tile layer with theme-based URL */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url={tileUrl}
      />

      {/* County boundaries as GeoJSON layer */}
      <GeoJSON
        data={kenyaCountiesGeoJSON}
        style={getCountyStyle}
        onEachFeature={onEachCounty}
      />

      {/* Town hotspot markers */}
      {hotspotData.map((town: TownHotspotData) => (
        <Marker
          key={town.townName}
          position={[town.latitude, town.longitude]}
          icon={selectedTownName === town.townName ? selectedIcon : defaultIcon}
          eventHandlers={{
            click: () => {
              onSelectTown(town.townName);
            },
          }}
          // Ensure markers are on top of the GeoJSON layer
          pane="markerPane"
        >
          <Tooltip sticky>
            <span className="font-sans font-semibold">{town.townName}</span>
          </Tooltip>
          <Popup>
            <div className="text-sm font-sans">
                <p className="font-bold text-base">{town.townName}</p>
                <p className="text-gray-600 dark:text-gray-400">{town.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      {/* Component to handle map view updates */}
      <MapUpdater selectedTown={selectedTownData} selectedCountyName={selectedCountyName} />
    </MapContainer>
  );
};