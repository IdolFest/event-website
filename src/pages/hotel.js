import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import CenteredBox from '@components/CenteredBox'
import { useStaticQuery, graphql } from 'gatsby'
import { styled } from '@material-ui/styles'
import { Link } from 'gatsby'
import { Container } from '@material-ui/core'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import data from "./hotelinfo.json"
const { bookingStatus, bookingLink, bookingNote, hotelPicture, hotelNote, roomRates, mapLink, directions } = data

const RoomRateTable = styled(TableContainer)({
  margin: '0 auto',
  //width: '70%',
  paddingBottom: '1em'
})
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
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          longDates
          venue
        }
      }            
    }
  `)

  const metadata = site.siteMetadata
  const dates = metadata.longDates
  const venue = metadata.venue
  const isOpen = bookingStatus === "open"
  const isClosed = bookingStatus === "closed"

  if (!isOpen) {
    return (
      <Layout>
        <Seo title="Hotel" />
        <PageHeader title="Hotel" />
        <PageContent>
          {isClosed ? (
            <p>
              <br />
              Online hotel booking is now closed. Please <Link to="/contact">contact us</Link> if you would like assistance booking a room at our discounted rates.
              <br />
            </p>
          ) : (
            <p>
              <br />
              {/* This message also gets displayed if the booking status is invalid */}
              Online hotel booking is not yet available. Stay tuned, we'll announce hotels soon!
              <br />
            </p>
          )}
        </PageContent>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="Hotels" />
      <PageHeader title="Hotel" />
      <PageContent>

        <img
          src={hotelPicture}
          alt='' // This is a presentational image, so the alt should be an empty string
        />

        <p>U.S. IdolFes will be held on {dates}, at the {venue}. {hotelNote || ''}</p>
        <p>Details on how to access the venue are available below.</p>

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
                {roomRates.map(room => (
                  <TableRow key={room.label}>
                    <TableCell component="th" scope="row">{room.label}</TableCell>
                    <TableCell>{"$" + room.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </RoomRateTable>

          <div>
            <sup>†</sup>Taxes and fees not included in price.
          </div>

          <Button variant="contained" className="cta" href={bookingLink}>
            Book online
          </Button>

          {bookingNote && <div>{bookingNote}</div>}
        </CenteredBox>

        <CenteredBox>
          <ResponsiveMap>
            <iframe title="Hotel map" maxwidth="600" height="450" style={{ border: 0 }} loading="lazy" allowFullScreen src={mapLink}></iframe>
          </ResponsiveMap>
          <h2>How to get here</h2> {/* I'd rather let this heading be part of body, but it wouldn't be centered */}
        </CenteredBox>

        {directions.map(option => (
          <p>
            <h3>{option.method}</h3>
            {option.body}
          </p>
        ))}
      </PageContent>
    </Layout>
  )
}

export default HotelPage
