import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class PhotoList extends Component {
  componentDidMount() {
    this.props.fetchPhotos()
  }
  render() {
    const { photos = [] } = this.props
    console.log(this.props.photos)
    return (
      <div className="PhotoList-container">
        <ul>
          {Array.isArray(photos) && photos.map(photo => (
            <li key={photo.id}>
              <a href={photo.url}>{photo.title}</a>
            </li>
          ))}
        </ul>
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

export default PhotoList