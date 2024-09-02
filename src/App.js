import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBRow className='mb-3'>
        <MDBCol md='8'>
          md="8"
        </MDBCol>
        <MDBCol size='6' md='4'>
          col="6" md="4"
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-3'>
        <MDBCol size='6' md='4'>
          col="6" md="4"
        </MDBCol>{' '}
        <MDBCol size='6' md='4'>
          col="6" md="4"
        </MDBCol>{' '}
        <MDBCol size='6' md='4'>
          col="6" md="4"
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size='6'>
          col="6"
        </MDBCol>
        <MDBCol size='6'>
          col="6"
        </MDBCol>
      </MDBRow>
    </>
  );
}