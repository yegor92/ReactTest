import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import GridList from '@material-ui/core/GridList'
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
    width: 400,
    backgroundColor: '#EEE',
    border: '2px solid #000',
    padding: '10px 20px',
  }
}

class PhotoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpened: false
    }
  }
  
  componentDidMount() {
    this.props.fetchPhotos()
  }

  previewImage() {
    this.setState({ modalOpened: true })
    console.log('preview')
  }

  closePreview = () => {
    this.setState({ modalOpened: false })
  }

  render() {
    const { photos = [], classes } = this.props

    return (
      <div className={classes.root}>
        <GridList spacing={1} className={classes.gridList}>
          {Array.isArray(photos) && photos.slice(0, 50).map(photo => (
            <PhotoItem key={photo.id} {...photo} onClick={this.previewImage} />
          ))}
        </GridList>
      </div>
    )
  }
}

PhotoList.propTypes = {
  fresh: PropTypes.bool,
  loading: PropTypes.bool,
  photos: PropTypes.array,
  fetchPhotos: PropTypes.func
}

export default withStyles(styles)(PhotoList)