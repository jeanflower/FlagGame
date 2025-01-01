'use client'

import "./../../bootstrap/dist/css/bootstrap.css";

export default function map() {
  const data = [
    { date: "1 Jan 2025", steps: 9000, miles: 0.0, combined: 0.0 },
  ];
  let grandTotal = 0.0;
  for(const entry of data) {
    const combined = (entry.miles + entry.steps / 2000);
    grandTotal += combined
    entry.combined = combined;
  }



  return (<>
    <iframe 
      src="https://www.google.com/maps/d/u/0/embed?mid=1Evljlj9wptw94mHPH04U32okD-dWzgM&ehbc=2E312F" 
      width="100%" 
      height="500"
    />
    <div style={{ width: "100%", padding: "10px" }}>
        <strong>Total distance so far</strong>: {grandTotal.toFixed(1)} miles
        <ul>
          {data.map((entry, index) => {
            return (
              <li key={index}>
                <strong>{entry.date}</strong>: {entry.steps} steps + {entry.miles} miles = {entry.combined.toFixed(1)} miles
              </li>
            )}
          )}
        </ul>
      </div>
  </>);
}
