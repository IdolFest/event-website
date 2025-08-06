import * as React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    marginTop: '1em',
    padding: '2em',
    position: 'relative'
  },
  char: {
      background: `url('/images/key_char_bg.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      paddingBottom: '1em',
      flexGrow: '1',
      position: 'absolute',
      zIndex: 0,
      left: '-20svw',
      top: '0',
      width: '20svw',
      height: '100%'

    },
}))

const PageContent = ({ children, maxWidth }) => {
  const classes = useStyles()

  return (
    <Container 
      maxWidth={maxWidth ? maxWidth : "md"}
      className={classes.container}>
      <div className={classes.char} />
      {children}
    </Container>
  )
}

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string
}

export default PageContent
