import { walkData } from './walkData.mjs'
import fs from 'fs';
import * as turf from '@turf/turf';

// Load your GeoJSON file
const geojsonFile = './LGHS_route.geojson';
const geojson = JSON.parse(fs.readFileSync(geojsonFile, 'utf8'));

// Calculate the next marker position
const lines = geojson.features.filter((f) => {
  return f.geometry.type === 'LineString';
});
if (lines.length !== 4) {
  console.error('Expected 4 LineStrings in GeoJSON.');
  process.exit(1);
}

console.log(`Leeds to London ${turf.length(lines[0])}km`);
console.log(`London to Paris ${turf.length(lines[1])}km`);
console.log(`Paris to Rome ${turf.length(lines[2])}km`);
console.log(`Rome to Malta ${turf.length(lines[3])}km`);

const reversedData = [...walkData].reverse()
let accumulatedDist = 0.0;
for (const d of reversedData) {
  accumulatedDist += d.combinedKm;
  //console.log(`accumulatedDist = ${accumulatedDist}km`);
  let line = lines[0];
  let alongDist = accumulatedDist;
  if(accumulatedDist > turf.length(lines[0])) {
    line = lines[1];
    alongDist = alongDist - turf.length(lines[0]);
    //console.log(`we're beyond London`);
  }
  if(accumulatedDist > turf.length(lines[1])) {
    line = lines[2];
    alongDist = alongDist - turf.length(lines[1]);
    //console.log(`we're beyond Paris`);
  }
  if(accumulatedDist > turf.length(lines[2])) {
    line = lines[3];
    alongDist = alongDist - turf.length(lines[2]);
    //console.log(`we're beyond Rome`);
  }
  const point = turf.along(line, alongDist, { units: 'kilometers' });
  console.log(`${d.date} marker coordinates after ${d.combinedKm}km, to ${accumulatedDist} : ${point.geometry.coordinates[1]}, ${point.geometry.coordinates[0]}`);
};
