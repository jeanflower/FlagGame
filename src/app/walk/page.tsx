'use client'

import "./../../bootstrap/dist/css/bootstrap.css";

export default function map() {
  const data = [
    { date: "4 Jan 2025", combinedKm: 29.1872 },
    { date: "3 Jan 2025", combinedKm: 25.14 },
    { date: "2 Jan 2025", combinedKm: 29.104 },
    { date: "1 Jan 2025", combinedKm: 21.2152 },
  ];
  let grandTotalKm = 0.0;
  for(const entry of data) {
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
          {data.map((entry, index) => {
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
