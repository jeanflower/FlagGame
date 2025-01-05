'use client'

import "./../../bootstrap/dist/css/bootstrap.css";
import { walkData } from '../../walkData.mjs'

export default function map() {
  let grandTotalKm = 0.0;
  for(const entry of walkData) {
    grandTotalKm += entry.combinedKm
  }



  return (<>
    <iframe 
      src="https://www.google.com/maps/d/u/0/embed?mid=1Evljlj9wptw94mHPH04U32okD-dWzgM&ehbc=2E312F" 
      width="100%" 
      height="600"
    />
    <div style={{ width: "100%", padding: "10px" }}>
        <strong>Total distance so far</strong>: {(grandTotalKm*5/8).toFixed(1)} miles
        <ul>
          {walkData.map((entry, index) => {
            return (
              <li key={index}>
                <strong>{entry.date}</strong>: {(entry.combinedKm*5/8).toFixed(1)} miles
              </li>
            )}
          )}
        </ul>
      </div>
  </>);
}
