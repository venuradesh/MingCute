import React from 'react'
import  Chart  from "react-google-charts";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
  function viewChart() {
    navigate("../ad/frame18");
  }
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
        <div className='w-100 mt-4 text-end'>
        <svg onClick={viewChart} className='me-3 clickable  ' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0.75C1.5 0.551088 1.42098 0.360322 1.28033 0.21967C1.13968 0.0790175 0.948912 0 0.75 0C0.551088 0 0.360322 0.0790175 0.21967 0.21967C0.0790175 0.360322 0 0.551088 0 0.75V21.25C0 21.4489 0.0790175 21.6397 0.21967 21.7803C0.360322 21.921 0.551088 22 0.75 22C0.948912 22 1.13968 21.921 1.28033 21.7803C1.42098 21.6397 1.5 21.4489 1.5 21.25V0.75ZM22 2.254C22 0.438 19.959 -0.63 18.467 0.406L5.963 9.086C5.6656 9.29237 5.42239 9.56744 5.254 9.88787C5.08561 10.2083 4.99701 10.5646 4.99574 10.9266C4.99446 11.2886 5.08054 11.6455 5.24667 11.9671C5.4128 12.2888 5.65407 12.5655 5.95 12.774L18.454 21.584C19.944 22.634 22 21.569 22 19.745V2.254ZM19.322 1.638C19.4345 1.55982 19.5662 1.51395 19.703 1.50536C19.8397 1.49677 19.9761 1.52579 20.0975 1.58927C20.2189 1.65275 20.3206 1.74826 20.3916 1.86545C20.4625 1.98263 20.5 2.11701 20.5 2.254V19.745C20.5 19.8824 20.4622 20.0171 20.3909 20.1345C20.3195 20.2519 20.2172 20.3475 20.0953 20.4107C19.9733 20.474 19.8363 20.5025 19.6993 20.4932C19.5622 20.4839 19.4303 20.4371 19.318 20.358L6.814 11.548C6.7152 11.4786 6.63463 11.3863 6.57914 11.279C6.52365 11.1718 6.49488 11.0527 6.49527 10.932C6.49566 10.8112 6.52521 10.6923 6.5814 10.5854C6.63759 10.4785 6.71875 10.3868 6.818 10.318L19.322 1.638Z" fill="black"/>
        </svg>
        </div>

    </div>
  )
}

export default AreaFeedChart