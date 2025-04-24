import React from "react"
import { makeStyles } from '@material-ui/styles'
import { useStaticQuery, graphql } from 'gatsby'
import { createSocialIcon } from '@components/socialIcon'

const useStyles = makeStyles(theme => ({
    contact: {
        '& ul': {
            listStyle: 'none'
        },
        '& .social': {
            padding: '1em',
            fontSize: '.5em',
            '& svg': {
                verticalAlign: 'middle'
            },
            '& a': {
                textDecoration: 'none',
                boxShadow: 'none',
                '& :hover': {
                    color: theme.palette.light_pink
                }
            },
            '& span': {
                fontSize: '3em',
                paddingLeft: '1em',
                verticalAlign: 'middle'
            }
        },
    },
}))

function wrapContactSocial(socialIcon, socialName) {
    return (
        <li className='social'>
            {socialIcon}
            <span>{socialName}</span>
        </li>
    )
}

export default function ContactInfo() {
    const classes = useStyles()

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        social {
                            twitter
                            instagram
                            discord
                            email
                            bluesky
                        }
                    }
                }            
            }`
    )

    const socialSites = site.siteMetadata.social
    
    return (
        <div className={classes.contact}>
        <ul>
            {wrapContactSocial(createSocialIcon(`mailto:${socialSites.email}`, 'envelope', 'Email', 'fas'))}
            {wrapContactSocial(createSocialIcon(`https://discord.gg/${socialSites.discord}`, 'discord', 'Discord'))}
            {wrapContactSocial(createSocialIcon(`https://twitter.com/${socialSites.twitter}`, 'twitter', 'Twitter'))}
            {wrapContactSocial(createSocialIcon(`https://bsky.app/profile/${socialSites.bluesky}`, 'bluesky', 'Bluesky'))}
            {wrapContactSocial(createSocialIcon(`https://instagram.com/${socialSites.instagram}`, 'instagram', 'Instagram'))}
        </ul>
        </div>
    )
}