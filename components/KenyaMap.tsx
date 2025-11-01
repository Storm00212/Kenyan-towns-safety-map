import React, { useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import type { TownHotspotData } from '../types';
import { kenyaCountiesGeoJSON } from '../data/kenya-counties-simplified';

interface KenyaMapProps {
  hotspotData: TownHotspotData[];
  onSelectTown: (townName: string | null) => void;
  selectedTownName: string | null;
}

const MapUpdater: React.FC<{ selectedTown?: TownHotspotData }> = ({ selectedTown }) => {
  const map = useMap();
  
  useEffect(() => {
    if (selectedTown) {
      map.flyTo([selectedTown.latitude, selectedTown.longitude], 12);
    } else {
      map.flyTo([0.0236, 37.9062], 6);
    }
  }, [selectedTown, map]);

  return null;
};

// Custom icons
const defaultIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const selectedIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const countyStyle = {
    color: '#4A5568', // gray-600
    weight: 1,
    opacity: 0.8,
    fillColor: '#2D3748', // gray-800
    fillOpacity: 0.1
};


export const KenyaMap: React.FC<KenyaMapProps> = ({ hotspotData, onSelectTown, selectedTownName }) => {
  
  const selectedTownData = useMemo(() => {
    return hotspotData.find(t => t.townName === selectedTownName);
  }, [selectedTownName, hotspotData]);
  
  return (
    <MapContainer 
        center={[0.0236, 37.9062]} // Centered on Kenya
        zoom={6} 
        style={{ height: '100%', width: '100%', backgroundColor: '#1F2937', borderRadius: '0.5rem' }}
        scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      
      <GeoJSON 
        data={kenyaCountiesGeoJSON} 
        style={countyStyle} 
      />

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
                <p className="text-gray-600">{town.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <MapUpdater selectedTown={selectedTownData} />
    </MapContainer>
  );
};