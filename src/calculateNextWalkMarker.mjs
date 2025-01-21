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
let accumulatedDistFromStats = 0.0;
for (const d of reversedData) {
  accumulatedDistFromStats += d.combinedKm;
  //console.log(`accumulatedDist = ${accumulatedDist}km`);
  let line = lines[0];
  let alongPathDist = accumulatedDistFromStats;
  if(accumulatedDistFromStats > turf.length(lines[0])) {
    // console.log(`we're beyond London`);
    line = lines[1];
    alongPathDist = alongPathDist - turf.length(lines[0]);
    // console.log(`we're beyond London by ${alongPathDist}`);
    if(alongPathDist > 90) {
      alongPathDist += 120; // cross the channel!
      //console.log(`we're across the channel, beyond London by ${alongPathDist}`);
    }
  }
  if(alongPathDist > turf.length(lines[1])) {
    line = lines[2];
    alongPathDist = alongPathDist - turf.length(lines[1]);
    //console.log(`we're beyond Paris by ${alongPathDist}`);
  }
  if(alongPathDist > turf.length(lines[2])) {
    line = lines[3];
    alongPathDist = alongPathDist - turf.length(lines[2]);
    // console.log(`we're beyond Rome`);
  }
  const point = turf.along(line, alongPathDist, { units: 'kilometers' });
  console.log(`${d.date} marker coordinates after ${d.combinedKm}km, to ${accumulatedDistFromStats} : ${point.geometry.coordinates[1]}, ${point.geometry.coordinates[0]}`);
};
