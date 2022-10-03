import React from 'react'
import  Chart  from "react-google-charts";

export const data = [
    ["No.", "Positive Feedback", "Negative Feedback"],
    ["east-Hospital", 5, 2],
    ["Greenpath", 3, 4],
    ["west sector", 3, 4],
    ["Borel North", 3.5, 2.5],
    ["west sector", 3, 4],
    ["Greenpath", 3, 4],
    ["Greenpath", 3, 4],
  ];
  
  
function AreaFeedChart() {
  return (
    <div className='container'>
        <h4 className='text-center my-4 fw-bold green_text'>Distric 3 Devision</h4>
        <div className='feed_div'>
        <Chart
      loader={<div>Loading Chart</div>}
      width="100%"
      height="400px"
      data={data}
      chartType="ColumnChart"
      options={{
          legend:{position:"bottom"},
          title: "Area Feedback Status",
          backgroundColor: '#E4E4E4',
          isStacked: true,
          colors: ['green','red'],
          hAxis: {
            //   title: 'Total Population',
              minValue: 0,
            },
            vAxis: {
            //   title: 'City',
            },
       
      }}
    />
        </div>
    </div>
  )
}

export default AreaFeedChart