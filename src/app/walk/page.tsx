'use client'

import "./../../bootstrap/dist/css/bootstrap.css";

export default function map() {
  const data = [
    { date: "1 Jan 2025", combined: 16.095 },
  ];
  let grandTotal = 0.0;
  for(const entry of data) {
    grandTotal += entry.combined
  }



  return (<>
    <iframe 
      src="https://www.google.com/maps/d/u/0/embed?mid=1Evljlj9wptw94mHPH04U32okD-dWzgM&ehbc=2E312F" 
      width="100%" 
      height="600"
    />
    <div style={{ width: "100%", padding: "10px" }}>
        <strong>Total distance so far</strong>: {(grandTotal*5/8).toFixed(1)} miles
        <ul>
          {data.map((entry, index) => {
            return (
              <li key={index}>
                <strong>{entry.date}</strong>: {(entry.combined*5/8).toFixed(1)} miles
              </li>
            )}
          )}
        </ul>
      </div>
  </>);
}
