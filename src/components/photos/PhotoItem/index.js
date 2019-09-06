import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
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
  whiteIcon: {
    color: 'white',
  },
  redIcon: {
    color: 'red',
  }
}))

const PhotoItem = (props) => {
  const classes = useStyles()
  const favoriteList = props.favorites

  return (
    <GridListTile key={props.id} className={classes.container}>
      <img src={props.thumbnailUrl} alt={props.title} onClick={props.showModal} />
      <GridListTileBar
        title={props.title}
        titlePosition="top"
        actionIcon={
          <IconButton
            aria-label={`star ${props.title}`}
            className={props.favorites.includes(props.id.toString()) ? classes.redIcon : classes.whiteIcon}
            onClick={props.setFavorite}
          >
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
