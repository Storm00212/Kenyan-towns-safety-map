// Fix: Add GeoJSON types for the Kenya map data to resolve import error.
export interface GeoJSONGeometry {
  type: 'Polygon';
  coordinates: number[][][];
}

export interface GeoJSONFeature {
  type: 'Feature';
  properties: {
    COUNTY: string;
  };
  geometry: GeoJSONGeometry;
}

export interface KenyaGeoJSON {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

// Main data structure for a single town hotspot
export interface TownHotspotData {
  townName: string;
  countyName: string;
  severity: number; // Scale of 1-10
  description: string;
  crimeStatistics: CrimeStatistic[];
  historicalTrend: string;
  latitude: number;
  longitude: number;
}

export interface CrimeStatistic {
  type: string;
  value: string;
}
