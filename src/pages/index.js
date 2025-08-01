import React from  'react'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
import PageHeader from '@components/PageHeader'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles, Button } from '@material-ui/core'
import ImageCarousel from "../components/ImageCarousel"
import SisterBanner from "../components/SisterBanner"
import moment from 'moment'

import homepageData from "./homepage.json"
const { title, body, registerButtonEnabled, buttons, feedbackButtonEnabled } = homepageData

const useStyles = makeStyles(theme => ({
  introWrapper: {
    position: "relative"
  },
  introText: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "5px",
    opacity: "0.85",
    top: "calc(50% - 8px)",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "4px 16px",
    textAlign: "center"
  },
  introLine: {
    width: "100%",
    backgroundColor: "#fff",
    height: "4px"
  },
  carouselHolder: {
    margin: "auto",
    display: "grid",
    placeItems: "center",
    marginBottom: "24px",
  },
  htmlBody: {
    whiteSpace: "pre-wrap",
    fontSize: "1.5em",
    fontWeight: 400,
    lineHeight: 1.25,
    paddingBottom: "1em"
  },
  buttonHolder: {
    display: "flex",
    flexWrap: "wrap",
    "& > a": {
      flexGrow: 1,
      margin: "4px 32px",
      width: "200px",
      flexBasis: "200px",
      marginTop: "24px",
      textAlign: "center"
    },
    "& > .MuiButton-sizeLarge": {
      fontSize: "150%"
    }
  },
  scheduleBanner: {
    fontSize: "20px",
    lineHeight: "45px",
    border: "1px solid #aaa",
    borderRadius: "10px",
    marginBottom: "16px",
    padding: "5px 20px",
    "& a": {
      boxShadow: "none",
    },
    '@media (max-width: 800px)': {
      fontSize: "16px",
      lineHeight: "32px",
      textAlign: "center"
    }
  }
}))


const IndexPage = () => {
  const classes = useStyles()

  const query = useStaticQuery(graphql`
  query { 
    images: allFile (filter: {sourceInstanceName: {eq: "images"}, relativePath: {glob: "public-photo-carousel/*.[j|J][p|P][g|G]"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            height: 400
            quality: 90
          )
        }
      }
    }
    site {
      siteMetadata {
          shortDates
      } 
    }  
  }`)

  const firstDayText = query.site.siteMetadata.shortDates
  const now = moment()
  const firstDay = moment(firstDayText.split(/[-,]/)[0] + firstDayText.split(/[-,]/)[2], "MMM DD YYYY", true)
  const mondayBefore = firstDay.clone().startOf('week').add(1, 'day')
  const days = []
  for (let i = 0; i < homepageData.scheduleDays; i++) {
    days.push(firstDay.clone().add(i, 'days'))
  }

  const scheduleDay = days.filter(d => now.isSame(d, 'day'))

  const isLeadup = now.isAfter(mondayBefore) && now.isBefore(days[0])
  let scheduleObj = <></>

  if (isLeadup) {
    const theDay = days[0].format('dddd')
    scheduleObj = (
      <div className={classes.scheduleBanner}>
        <a href={`/events/${theDay.toLowerCase()}`}>Click here for the {theDay} schedule!</a>
      </div>)
  } else if (scheduleDay.length > 0) {
    const theDay = scheduleDay[0].format('dddd')
    scheduleObj = (
      <div className={classes.scheduleBanner}>
        <a href={`/events/${theDay.toLowerCase()}`}>Click here for today's schedule!</a>
      </div>)
  }
  
  
  const imageFiles = query.images.nodes;
  return (
    <Layout>
      <Seo title="Home" />

      <PageHeader title={title}/>

      <PageContent>
        <SisterBanner />
        {scheduleObj}
        <div className={classes.carouselHolder}>
          <ImageCarousel images={imageFiles} />
        </div>
        <div className={classes.htmlBody} dangerouslySetInnerHTML={{__html: body}} />
        {registerButtonEnabled ? 
          <div className={classes.buttonHolder}>
            <Button variant="contained" size="large" className="cta" href="/register">Buy a Badge</Button>
          </div> :<></> }
        {feedbackButtonEnabled ?
          <div className={classes.buttonHolder}>
            <Button variant="contained" size="large" className="cta" href="https://idolfe.st/feedback">Give us Feedback</Button>
          </div> :<></> }
        <div className={classes.buttonHolder} style={{width: buttons.length === 1 ? "50%" : "100%", margin: "auto"}}>
          {buttons.map(b => <Button key={b.href} variant="contained" className="cta" href={b.href}>{b.text}</Button>)}
        </div>
        <br />
        <br />
        {/* sendgrid terminated our account and deleted our contacts and contact lists without warning. Disable while we weather this storm
        <p>Sign up for our email list below to get notifications for future announcements.</p> 
        <NewsletterSignup /> */}
      </PageContent>
    </Layout>
  )
}

export default IndexPage
