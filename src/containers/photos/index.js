import { connect } from 'react-redux'
import { fetchPhotos } from '../../reducers/photos'
import PhotoList from '../../components/photos/PhotoList'

const mapStateToProps = (state) => ({
  fresh: state.photos.fresh,
  loading: state.photos.loading,
  photos: state.photos.photos
})

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => {
    dispatch(fetchPhotos())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)
