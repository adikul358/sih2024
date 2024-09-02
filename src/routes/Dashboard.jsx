import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import React, { useState, useEffect, useRef } from "react";
import TopMenu from "../components/TopMenu";
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';
Chart.register();

export default function Dashboard() {
    const [data, setData] = useState(null);
    const [showChart, setShowChart] = useState(false);
    const initialized = useRef(false)

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { color: "rgba(0,0,0,0.1)" },
                ticks: {
                    color: "rgba(0,0,0,0.5)",
                }
            },
            y: {
                grid: { color: "rgba(0,0,0,0.1)" },
                ticks: { color: "rgba(0,0,0,0.5)" },
                beginAtZero: true,
            },
        },
        plugins: {
            legend: { display: false, position: "right", },
        },
    };

    useEffect(() => {
        async function a() {
            let res = await fetch("http://localhost:5003/api/trendline?freq=daily")
            let resJson = await res.json()
            
            console.log("resJson", resJson)
            console.log("resJson values", Object.values(resJson).map(v => parseFloat(v)))
            let tData = {
                labels: Object.keys(resJson),
                datasets: [
                    {
                        label: "daily Consumption (MW)",
                        data: Object.values(resJson).map(v => parseFloat(v)),
                        backgroundColor: "#094C9D"
                        // borderColor: 'rgba(75, 192, 192, 0.6)',
                        // fill: true,
                        // tension: 0.2
                    }
                ],
            }
            console.log("tData", tData)
            setData(tData)
            setShowChart(true)
        }
        if (!initialized.current) {
            initialized.current = true
            a()
        }

    }, [])
    
    return (
        <>
            <TopMenu user="ak2162@srmist.edu.in" />
            <div style={{
                backgroundImage: "url('/hero-bg.jpg')",
                backgroundPositionY: "75%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <MDBContainer style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    height: 240,
                }}>
                    <MDBTypography variant="h1" style={{ fontSize: 64, marginBottom: 24 }}>Dashboard</MDBTypography>
                </MDBContainer>
            </div>
            
            <MDBContainer style={{
                padding: 12,
            }}>
                
                <div style={{
                    width: "90%",
                    height: 640,
                    aspectRatio: 1.3333,
                    marginBottom: 120
                }}>
                    {showChart && <Bar options={options} data={data} />}
                </div>
            </MDBContainer>

        </>
    )
}