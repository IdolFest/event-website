import * as React from 'react'
import { styled } from '@material-ui/styles'
import { Box, Grid } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  tierHeading: {
    color: 'black',
    backgroundColor: theme.palette.light_pink,
    alignSelf: 'center',
    justifySelf: 'center',
    width: '100%',
    borderRadius: '10px',
    padding: '1em',
    '& ul': {
      paddingLeft: '1.5em',
    },
  },
  onSaleTier: {
    '&:hover': {
      boxShadow: '5px 5px 0 0 rgba(0,0,0,0.2)',
      cursor: 'pointer'
    },
  },
  regularTierText: {
    height: '280px',
    fontSize: '80%'
  },
  tierTextImage: {
    maxHeight: '50px',
    height: '50px',
    '& img': {
      objectFit: 'contain !important'
    }
  },
  tierGemImage: {
    maxHeight: '100px',
    height: '100px',
    paddingTop: '1em',
    '& img': {
      objectFit: 'contain !important'
    }
  },
}))

const HeroText = styled(Box)({
  alignSelf: 'center',
  margin: '1em 0 0 0',
  height: '3em',
  textAlign: 'center',
  '& span': {
    size: '2em',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})

export default function RegistrationTier({ badge, onClick }) {
  const classes = useStyles()

  const { badgeName, price, tierName, description, perks, onSale } = badge
  const badgePriceInt = parseInt(price, 10)

  let tierHeading = `${badgeName} - $${price}`
  if (!onSale && badgePriceInt > 0 && !isNaN(badgePriceInt)) {
    tierHeading = `${badgeName} <strike>$${price}</strike> Sold Out`
  }
  
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              gatsbyImageData
              fluid {
                originalName
              }
            }
          }
        }
      }
    `)

  const cleanedTierName = tierName.split(" ").join("").toLowerCase()
  const tierGemFilename = `${cleanedTierName}Gem.png`
  const tierTextFilename = `${cleanedTierName}Text.png`
  
  const gemImageData = data.allImageSharp.edges.find(
      edge => edge.node.fluid.originalName === tierGemFilename
  ).node.gatsbyImageData

  const tierTextImageData = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === tierTextFilename
  ).node.gatsbyImageData

  return (
    <Grid container direction='column' style={{ paddingTop: '1em' }}>
      <GatsbyImage
        className={classes.tierGemImage}
        // This is a presentational image, so the alt should be an empty string
        alt=''
        image={gemImageData}
        loading='eager'
        placeholder='blurred'
      />
      <GatsbyImage
        className={classes.tierTextImage}
        alt={tierName}
        image={tierTextImageData}
        loading='eager'
        placeholder='blurred'
      />
      <HeroText>
        <span dangerouslySetInnerHTML={{ __html: tierHeading }}></span>
      </HeroText>
        <Box className={`${classes.tierHeading} ${classes.regularTierText} ${onSale ? classes.onSaleTier : ""}`} onClick={onClick ?? function() {}}>
          <span dangerouslySetInnerHTML={{ __html: description}} />
          <ul>
            {perks.map((perk, index) => (
              <li style={{ fontSize: 'unset' }} key={index}>{perk}</li>
            ))}
          </ul>
        </Box>
    </Grid>
  )
}