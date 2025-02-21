import { walkData } from './walkData.mjs'
import fs from 'fs';
import * as turf from '@turf/turf';

// Load your GeoJSON file
const geojsonFile = './LGHS_route.geojson';
const geojson = JSON.parse(fs.readFileSync(geojsonFile, 'utf8'));

// Calculate the next marker position
const paths = geojson.features.filter((f) => {
  return f.geometry.type === 'LineString';
});
if (paths.length !== 4) {
  console.error('Expected 4 LineStrings in GeoJSON.');
  process.exit(1);
}

console.log(`Leeds to London ${turf.length(paths[0]) * 5/8}m`);
console.log(`London to Paris ${turf.length(paths[1]) * 5/8}m`);
console.log(`Paris to Rome ${turf.length(paths[2]) * 5/8}m`);
console.log(`Rome to Malta ${turf.length(paths[3]) * 5/8}m`);

let totalLength = 0.0;
for (const p of paths) {
  //console.log(`Path length: ${turf.length(p)}km`);
  totalLength += turf.length(p);
}
console.log(`Total length: ${totalLength * 5/8}m`);

const reversedData = [...walkData].reverse()
let accumulatedDistFromStats = 0.0;
for (const d of reversedData) {
  accumulatedDistFromStats += d.combinedKm;
  //console.log(`accumulatedDist = ${accumulatedDist}km`);
  let path = paths[0];
  let alongPathDist = accumulatedDistFromStats;
  if(accumulatedDistFromStats > turf.length(paths[0])) {
    // console.log(`we're beyond London`);
    path = paths[1];
    alongPathDist = alongPathDist - turf.length(paths[0]);
    // console.log(`we're beyond London by ${alongPathDist}`);
    if(alongPathDist > 90) {
      alongPathDist += 120; // cross the channel!
      //console.log(`we're across the channel, beyond London by ${alongPathDist}`);
    }
  }
  if(alongPathDist > turf.length(paths[1])) {
    path = paths[2];
    alongPathDist = alongPathDist - turf.length(paths[1]);
    //console.log(`we're beyond Paris by ${alongPathDist}`);
  }
  if(alongPathDist > turf.length(paths[2])) {
    path = paths[3];
    alongPathDist = alongPathDist - turf.length(paths[2]);
    // console.log(`we're beyond Rome`);
  }
  const point = turf.along(path, alongPathDist, { units: 'kilometers' });
  console.log(`${d.date} marker coordinates after ${d.combinedKm}km = ${(d.combinedKm * 5/8).toFixed(2)}m, to ${accumulatedDistFromStats.toFixed(2)}km = ${(accumulatedDistFromStats * 5/8).toFixed(2)}m : ${point.geometry.coordinates[1].toFixed(3)}, ${point.geometry.coordinates[0].toFixed(3)}`);
};
