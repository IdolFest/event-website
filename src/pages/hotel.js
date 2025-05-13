import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from '@material-ui/styles'
import CenteredBox from '@components/CenteredBox'
import { useStaticQuery, graphql } from 'gatsby'

// UNCOMMENT TO CLOSE BOOKING
import { Link } from 'gatsby'
import { Container } from '@material-ui/core'

// UNCOMMENT TO OPEN BOOKING
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
const RoomRateTable = styled(TableContainer)({
  margin: '0 auto',
 //width: '70%',
  paddingBottom: '1em'
})

function createData(roomType, price) {
  return { roomType, price };
}

const rows = [
  createData('Standard King', '$165'),
  createData('Double Queen', '$165'),
]

const ResponsiveMap = styled(Container)({
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: '0',
    '& iframe': {
      left: '0',
      top: '0',
      height: '100%',
      width: '100%',
      position: 'absolute'
    }
})

const HotelPage = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        longDates
                    }
                }            
            }`
    )

    const dates = site.siteMetadata.longDates
    
  return (
  <Layout>
    <Seo title="Hotel" />
     
    <PageHeader 
      title="Hotel" 
    />

    <PageContent>
      <StaticImage 
        src="../images/Hotel.jpeg"
        // This is a presentational image, so the alt should be an empty string
        alt=''
      />
      <p>
        US IdolFes will be held on {dates}, at the Sonesta Redondo Beach &amp; Marina. Details on how to access the venue are available below.
          {/* Use when hotel booking is closed  */}
          {/*
           <br /><br />
          
          Online hotel booking is now closed. Please <Link to="/contact">contact us</Link> if you would like assistance booking a room at our discounted rates. 
           <br /><br />*/}

           {/* Use when hotel booking waiting to open (plz someone get this into editor) */ }
           {/*
           <br /><br />
           Online hotel booking is not yet available. Stay tuned, we'll announce hotels soon!
           <br /><br />
          */}
         
        Parking at the hotel is $40 per vehicle.
      </p>
      { /* the following is used when hotel booking is OPEN */ }
      {
      <CenteredBox>
        <RoomRateTable>
          <Table aria-label="simple table">
            <TableHead style={{ textTransform: 'uppercase' }}>
              <TableRow>
                <TableCell>Room Type</TableCell>
                <TableCell>Price Per Night<sup>†</sup></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.roomType}>
                  <TableCell component="th" scope="row">
                    {row.roomType}
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </RoomRateTable>
        
        <div>
          <sup>†</sup>Taxes and fees not included in price.
        </div>
        <Button variant="contained" className="cta" href='https://www.sonesta.com/sonesta-hotels-resorts/ca/redondo-beach/sonesta-redondo-beach-marina?isGroupCode=true&groupCode=G103025IDOL&checkin=2025-10-30&checkout=2025-11-03'>
          Book online
        </Button>
        <div>If you prefer to book by phone, you can call the hotel toll-free at 310-318-8888 and reference the group code "G103025IDOL".</div>
      </CenteredBox>
              }
      <CenteredBox>
        <ResponsiveMap>
          <iframe title="Hotel map" maxwidth="600" height="450" style={{ border: 0}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn2IUCKC0woARmZBXFBOsAz0&key=AIzaSyDk8pOuoUbrYKocNBn6QzLe9j-bUAx7GvA"></iframe>
        </ResponsiveMap>

        <h2>How to Get Here</h2> 
      </CenteredBox>
      <h3>Bus</h3>
        
        <p>The hotel is accessible via the route 109 bus line, "Redondo Beach Riviera Village - LAX City Bus Center". The hotel is 2 minutes from the Beryl St. / Harbor Dr. stop.</p>

        <p>After arriving at LAX, use the automated people mover to head to LAX/Metro Transit Center station to take the southbound K line. Exit at Douglas Station (approximately 10 minutes). Walk from the station to the nearby bus stop at Douglas and Park. Once there, catch route 109 southbound, "Redondo Beach Riviera Village - LAX City Bus Center," which arrives about every 45 minutes. After about 30 minutes (27 stops), get off at the Beryl St. / Harbor Dr. stop. Walk back towards the intersection, then turn left passing Sol Restaurant. After about a 2 minute walk, the hotel will be on your left!</p>

        <p>The directions above assume that the LAX/Metro Transit Center station will be open as planned effective June 6, 2025. If the station is not open by USIF, follow the following directions instead:</p>

        <p>After arriving at LAX, look for the pink LAX Shuttle sign on the Lower/Arrivals Level (regardless of terminal) and board the "Metro C Line (Green Line)" shuttle. Upon arrival at LAX/Aviation station, instead of taking the C line, catch route 232 southbound, "Downtown Long Beach." After about 30 minutes (26 stops), get off at the Pacific Coast Hwy / Beryl stop. Head back towards the intersection and turn left on Beryl St. After about half a mile (about 7-10 minutes of walking), turn left on N Harbor Dr passing Sol Restaurant. After about another 2 minute walk, the hotel will be on your left!</p>

        <p>Please note that these directions will not be usable if the LAX/Metro Transit Center station is open, as LAX announced they will close this shuttle once that occurs. We will update the directions once we have confirmation one way or the other.</p>


      <h3>Rideshare</h3>
      
      <p>Most rideshare services will take about a 30 minute drive from the airport to the hotel. Average prices range from $30-60. While we cannot directly coordinate or facilitate this, we highly encourage attendees arriving around the same time that feel comfortable to share a rideshare vehicle to help defray the cost if choosing this method.</p>
      
      <h3>Driving</h3>
      
      <p>Drive on CA-1S. CA-1S will turn slightly right and become Pacific Coast Hwy. After about 0.5 miles, turn right on N Catalina Ave, then turn right again to stay on N Catalina Ave. After another 0.5 miles, turn right onto Beryl St and then turn left onto N Harbor Dr. The hotel will be on your left! </p>
    </PageContent>
  </Layout>
)}

export default HotelPage
