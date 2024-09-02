import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

export default function Home() {
    useEffect(() => {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }, [])

    return (
        <>
        <TopMenu />
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
                height: 480
            }}>
                <MDBTypography variant="h1" style={{fontSize: 64, marginBottom: 24}}>
                    Electricity Projection Tool
                </MDBTypography>
                <MDBTypography variant="h4" style={{marginBottom: 24}}>
                    Get accurate projections for electricity usage in Delhi for the current year.
                </MDBTypography>
            </MDBContainer>
        </div>
        <Footer />
        </>
    )
}