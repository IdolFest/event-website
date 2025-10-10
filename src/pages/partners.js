import React from  'react'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Link } from 'gatsby'
import { Grid } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    partnerLogo: {
      textDecoration: 'none',
      boxShadow: 'none',
      '& :hover': {
          opacity: '.85'
      }
    }
}))


const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Seo title="Partners" />

      
      <PageHeader 
        title="Partners" 
      />

      <PageContent>
        <p>U.S. IdolFes is proud to partner with some amazing organizations. Interested in joining up? <Link to="/contact">Drop us a line!</Link></p>

        <Grid container style={{ justifyContent: 'space-around' }}>

          <a href="https://intlidol.net/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/iin.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>

          <a href="https://animirai.club" target="_blank" rel="noreferrer" className={classes.partnerLogo} style={{margin: "56px 0"}}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/animirai.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              width={300}
            />
          </a>
        </Grid>
        
        <br />
        <p>We also extend a huge THANK YOU to all our generous 2024 Prism and Gold sponsors!</p>
        {/* Sponsor badges are limited and come with several exclusive perks. <Link to="/register">Grab yours today!</Link> */}
        <h3>Prism Sponsors</h3>
        <ul>
          <li>Luigi G</li>
          <li>⛩👻Nara Moore👻⛩</li>
          <li>DJ Azure</li>
          <li>Solemn </li>
          <li>hiddennin</li>
          <li>Stephen Lin</li>
          <li>12atatosk</li>
          <li>399-CY (Eggy)</li>
          <li>Supraluminal</li>
          <li>tsubasa83 (&lt;3 USIF)</li>

        </ul>

        <h3>Gold Sponsors</h3>
        <ul>
          <li>SarahLynne</li>
          <li>piki</li>
          <li>Zero</li>
          <li>MegaToast</li>
          <li>Chewynomnoms</li>
          <li>Prae4Me</li>
          <li>Jumpy</li>
          <li>Avalon</li>
          <li>Jonathan</li>
          <li>DAEMON AIMLESS</li>
          <li>Eightmoe</li>
          <li>Ama</li>
          <li>MogMoogle1</li>
          <li>HitomiOnpa</li>
          <li>Citrusoft</li>
          <li>Lycoris Elaine </li>
          <li>Anonymous</li>
          <li>Gamer McBaggin</li>
          <li>naniwazuni</li>
          <li>Phantomknight</li>
          <li>Anonymous</li>
          <li>sepiaholic</li>
          <li>Isaac</li>
          <li>Rina Kiden</li>
          <li>appledress</li>
          <li>lupemls</li>
          <li>mintystardust</li>
          <li>Algebra </li>
          <li>@Kaigaigrapher</li>
          <li>Anonymous</li>
        </ul>

      </PageContent>
    </Layout>
  )
}

export default IndexPage
