### React App displaying a Bar chart

```
// npm i chart.js react-chartjs-2

// https://codesandbox.io/examples/package/react-chartjs-2

import React from 'react'
import { Chart } from 'chart.js/auto';
import { Bar, Pie } from 'react-chartjs-2';


import {CategoryScale} from 'chart.js';
Chart.register(CategoryScale);

function App() {

  const bar = [
    { date: new Date("2024-1").toLocaleDateString(), rating: 1 },
    { date: new Date("2024-2").toLocaleDateString(), rating: 3, },
    { date: new Date("2024-3").toLocaleDateString(), rating: 5, },
    { date: new Date("2024-4").toLocaleDateString(), rating: 2, },
    { date: new Date("2024-5").toLocaleDateString(), rating: 1, },
  ]

  const pie = [
    { percent: 50, country: "US", color:'#0000ff' },
    { percent: 25, country: "GB", color:'#333'},
    { percent: 10, country: "CA", color:'#c0c0c0' },
    { percent: 5, country: "MX", color: '#000' },
    { percent: 10, country: "DK", color:'#ff0000' },
  ]

  const barData = {
    labels: bar.map(x => x.date),
    datasets: [{ label: "Rating", data: bar.map(x => x.rating), backgroundColor:'#0000ff' },
  ]}

  const pieData = {
    labels: pie.map(x => x.country),
    datasets: [{ label: "", data: pie.map(x => x.percent), backgroundColor: pie.map(x => x.color) },

  ]}

  return (
    <div>
        <Bar data={barData} />
        <Pie data={pieData} />
     </div>
  )
}

export default App

```
