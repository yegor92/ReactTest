import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
// import { yellow } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles(() => ({
  container: {
    padding: 15
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  }
}))

const PhotoItem = (props) => {
  const classes = useStyles()

  return (
    <GridListTile key={props.id} className={classes.container}>
      <img src={props.thumbnailUrl} alt={props.title} />
      <GridListTileBar
        title={props.title}
        titlePosition="top"
        actionIcon={
          <IconButton aria-label={`star ${props.title}`} className={classes.icon}>
            <FavoriteIcon color="inherit"/>
          </IconButton>
        }
        actionPosition="left"
        className={classes.titleBar}
      />
    </GridListTile>
  )
}

export default PhotoItem
