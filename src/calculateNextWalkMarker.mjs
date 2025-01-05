import { walkData } from './walkData.mjs'
import fs from 'fs';
import * as turf from '@turf/turf';

// Load your GeoJSON file
const geojsonFile = './LGHS_route.geojson';
const geojson = JSON.parse(fs.readFileSync(geojsonFile, 'utf8'));

// Calculate the next marker position
const line = geojson.features.find((f) => f.geometry.type === 'LineString');
if (!line) {
  console.error('No LineString found in GeoJSON.');
  process.exit(1);
}

const reversedData = [...walkData].reverse()
let accumulatedDist = 0.0;
for (const d of reversedData) {
  accumulatedDist += d.combinedKm;
  const point = turf.along(line, accumulatedDist, { units: 'kilometers' });
  console.log(`Marker coordinates after ${d.combinedKm}km, to ${accumulatedDist} : ${point.geometry.coordinates[1]}, ${point.geometry.coordinates[0]}`);
};