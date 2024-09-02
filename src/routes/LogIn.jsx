import React from 'react'
import { MDBTypography, MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div style={{
            backgroundColor: "#162B49",
            color: "white",
            height: "100vh",
            padding: 48
        }}>
            <div style={{
                backgroundColor: "white",
                color: "black",
                width: 550,
                borderRadius: 12,
                marginRight: "auto",
                marginLeft: "auto",
                padding: 32,
                paddingTop: 20,
            }}>
                <div style={{
                    marginRight: "auto",
                    marginLeft: "auto",
                    display: 'flex',
                    flexDirection: "column",

                }}>
                    <Link to="/">
                        <img src="hero-1.png" alt="" style={{
                            objectFit: "contain",
                            width: "100%",
                            height: 100,
                            marginBottom: 12
                        }} />
                    </Link>
                    <MDBTypography style={{fontWeight: "bold", fontSize: 14, textAlign: "center"}} variant='h5'>Government of National Capital Territory of Delhi</MDBTypography>
                    <MDBTypography style={{fontWeight: "bold", fontSize: 14, textAlign: "center"}} variant='h5'>राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार</MDBTypography>
                </div>

                <form action="/dashboard" className='mt-3'>
                    <label htmlFor='username' className='form-label'>
                        Username <span style={{color: "red"}}>*</span>
                    </label>
                    <MDBInputGroup className='mb-3'>
                        <input className='form-control' id='username' type='text' />
                    </MDBInputGroup>
                    <label htmlFor='password' className='form-label'>
                        Password <span style={{color: "red"}}>*</span>
                    </label>
                    <MDBInputGroup className='mb-3'>
                        <input className='form-control' id='password' type='password' />
                    </MDBInputGroup>
                    <MDBBtn style={{width: "100%", marginTop: 12}}>Login</MDBBtn>
                </form>
            </div>

        </div>
    )
}