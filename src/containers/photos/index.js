import { connect } from 'react-redux'
import { fetchPhotos, getFavorites, setFavorites } from '../../reducers/photos'
import PhotoList from '../../components/photos/PhotoList'

const mapStateToProps = (state) => ({
  fresh: state.photos.fresh,
  loading: state.photos.loading,
  photos: state.photos.photos,
  favorites: state.photos.favorites,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => {
    dispatch(fetchPhotos())
  },
  getFavorites: () => {
    dispatch(getFavorites())
  },
  setFavorites: (id) => {
    dispatch(setFavorites(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)
