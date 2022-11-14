import React from 'react'
import Chart from "react-google-charts";
import { useNavigate } from "react-router-dom";

const chart_array = [
    {
        division: "Kuppiyawatte - East Hospital sq.",
        data : [
            ['Student', 'emotions'],
            ['Negative', 72.63],
            ['Positive', 27.37],
            ['Neutral', 0.0],
        ]
    },
    {
        division: "Dematagoda",
        data : [
            ['Student', 'emotions'],
            ['Negative', 75.9],
            ['Positive', 21.09],
            ['Neutral', 3.01],
        ]
    },
    {
        division: "Wanathamulla",
        data : [
            ['Student', 'emotions'],
            ['Negative', 82.03],
            ['Positive', 14.46],
            ['Neutral', 3.52],
        ]
    },
    {
        division: "Kuppiyawatte - West Night",
        data : [
            ['Student', 'emotions'],
            ['Negative', 77.95],
            ['Positive', 17.32],
            ['Neutral', 4.72],
        ]
    },
    {
        division: "Greenpath",
        data : [
            ['Student', 'emotions'],
            ['Negative', 77.42],
            ['Positive', 22.58],
            ['Neutral', 0.0],
        ]
    },
    {
        division: "Town hall square",
        data : [
            ['Student', 'emotions'],
            ['Negative', 66.15],
            ['Positive', 33.85],
            ['Neutral', 0.0],
        ]
    },
    {
        division: "Gregory's Road",
        data : [
            ['Student', 'emotions'],
            ['Negative', 32.1],
            ['Positive', 67.9],
            ['Neutral', 0.0],
        ]
    },
    {
        division: "Borella North",
        data : [
            ['Student', 'emotions'],
            ['Negative', 70],
            ['Positive', 20],
            ['Neutral', 10],
        ]
    },
    {
        division: "Borella South",
        data : [
            ['Student', 'emotions'],
            ['Negative', 81.48],
            ['Positive', 18.52],
            ['Neutral', 0.0],
        ]
    }
]



const pieOptions = {
    is3D: true,
    top: '50%',
    width: 120,
    height: 120,
    borderRadius: '15px',
    slices: [
        {
            color: 'red',
        },
        {
            color: 'green',
        },
        {
            color: 'yellow',
        }

    ],
    legend: "none"
    ,
    tooltip:
    {
        text: 'percentage',
        isHtml: true,
        fontSize: '10px'
    },
    chartArea: {
        width: '75%',
        height: '75%',
    },
    fontName: 'Roboto',
    fontSize: 20,
}

function AreaFeedback() {
    const navigate = useNavigate();

    function viewChart() {
        navigate("../ad/frame21");
    }
    return (
        <>
            <div className='container'>

                <h3> Distric 3 Area Feedback  Status </h3>
                <div className='cart_cards blu_bg pt-5 pb-4 px-3 d-flex align-items-center justify-content-center flex-wrap'>
                    {
                        chart_array.map((item, index) => (

                            <div className='chart_card text-wrap my-3 p-2'>
                                <h5>{item.division}</h5>
                                <div className='chart d-flex align-items-center justify-content-center'>
                                    <Chart
                                        className='cart_file'
                                        width="90%"
                                        height="90%"
                                        chartType="PieChart"
                                        color="#829ce9"
                                        loader={<div>Loading Pie Chart</div>}
                                        getDatafromArray chart_array
                                        data={item.data}
                                        options={
                                            pieOptions
                                        }
                                    />
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
            <div className='w-100 mt-4 text-end'>
                <svg onClick={viewChart} className='me-3 clickable  ' width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 0.958096C21 0.703993 20.9078 0.460298 20.7437 0.28062C20.5796 0.100942 20.3571 0 20.125 0C19.8929 0 19.6704 0.100942 19.5063 0.28062C19.3422 0.460298 19.25 0.703993 19.25 0.958096V22.0362C19.25 22.2903 19.3422 22.534 19.5063 22.7137C19.6704 22.8934 19.8929 22.9943 20.125 22.9943C20.3571 22.9943 20.5796 22.8934 20.7437 22.7137C20.9078 22.534 21 22.2903 21 22.0362V0.958096ZM3.96e-07 1.92003C-0.000215671 1.56829 0.0879903 1.22327 0.254954 0.922776C0.421917 0.622282 0.661196 0.377905 0.946572 0.216422C1.23195 0.0549383 1.55241 -0.0174217 1.87285 0.00727086C2.19329 0.0319634 2.50134 0.152756 2.76325 0.356412L15.0133 9.86648C15.2407 10.0428 15.4264 10.2761 15.5549 10.5469C15.6834 10.8177 15.751 11.1181 15.752 11.4233C15.753 11.7285 15.6875 12.0295 15.5608 12.3013C15.4341 12.5731 15.25 12.8079 15.0238 12.986L2.77375 22.6379C2.51242 22.8443 2.20411 22.9677 1.88282 22.9945C1.56153 23.0212 1.23972 22.9504 0.952864 22.7897C0.66601 22.629 0.425249 22.3846 0.257117 22.0837C0.0889857 21.7827 1.11232e-05 21.4367 3.96e-07 21.0839V1.92003ZM14 11.4301L1.75 1.92003V21.082L14 11.4301Z" fill="black" />
                </svg>

            </div>

            <div className='my-4 d-flex align-items-center justify-content-evenly'>
                <div className='legend-left d-flex align-items-center justify-content-evenly'>
                    <span style={{ width: "40px", height: "10px", backgroundColor: "green" }}></span>
                    <div className="ps-md-4">Positive <br /> Feedback  </div>
                </div>
                <div className='legend-right d-flex align-items-center justify-content-evenly'>
                    <span style={{ width: "40px", height: "10px", backgroundColor: "red" }}></span>
                    <div className="ps-md-4">Negative <br /> Feedback  </div>
                </div>
                <div className='legend-right d-flex align-items-center justify-content-evenly'>
                    <span style={{ width: "40px", height: "10px", backgroundColor: "yellow" }}></span>
                    <div className="ps-md-4">Neutral <br /> Feedback  </div>
                </div>
            </div>
        </>
    )
}

export default AreaFeedback