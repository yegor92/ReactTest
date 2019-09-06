import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'

import PhotoItem from '../PhotoItem'
import './styles.css'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 40
  },
  gridList: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    transform: 'translateZ(0)',
  },
  paper: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    backgroundColor: '#EEE',
    border: 'none',
    padding: 0,
    top: '45%',
    left: '45%',
    transform: 'translate(-45%, -45%)',
    listStyle: 'none'
  },
  paperImage: {
    left: 0,
    height: 'auto',
    width: '400px',
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
}

class PhotoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpened: false,
      photoData: null
    }
  }
  
  componentDidMount() {
    this.props.fetchPhotos()
  }

  previewImage(photo) {
    this.setState({ modalOpened: true, photoData: photo })
  }

  closePreview = () => {
    this.setState({ modalOpened: false })
  }

  setFavorite(id) {
    this.props.setFavorites(id)
  }

  render() {
    const { photos = [], favorites = [], classes } = this.props
    return (
      <div className={classes.root}>
        <h4>Number of Favorite Photos: {favorites.length}</h4>
        <GridList spacing={1} className={classes.gridList}>
          {Array.isArray(photos) && photos.slice(0, 50).map(photo => (
            <PhotoItem key={photo.id} {...photo} showModal={() => this.previewImage(photo)} setFavorite={() => this.setFavorite(photo.id)} favorites={favorites} />
          ))}
        </GridList>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpened}
          onClose={this.closePreview}
        >
          <GridListTile className={classes.paper}>
            <img src={this.state.photoData ? this.state.photoData.url : ''} alt={this.state.photoData ? this.state.photoData.title : ''} className={classes.paperImage} />
            <GridListTileBar
              title={this.state.photoData ? this.state.photoData.title : ''}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${this.state.photoData ? this.state.photoData.title : ''}`} 
                  className={this.state.photoData ? (favorites.includes(this.state.photoData.id.toString()) ? classes.redIcon : classes.whiteIcon) : classes.whiteIcon} 
                  onClick={() => this.setFavorite(this.state.photoData.id)}
                >
                  <FavoriteIcon color="inherit"/>
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        </Modal>
      </div>
    )
  }
}

PhotoList.propTypes = {
  fresh: PropTypes.bool,
  loading: PropTypes.bool,
  photos: PropTypes.array,
  favorites: PropTypes.array,
  fetchPhotos: PropTypes.func,
  setFavorites: PropTypes.func
}

export default withStyles(styles)(PhotoList)