export const PhotosActionTypeKeys = {
  FETCH_PHOTOS_COMPLETE: 'PHOTOS/FETCH_COMPLETE',
  FETCH_PHOTOS_FAILURE: 'PHOTOS/FETCH_FAILURE',
  FETCH_PHOTOS_REQUEST: 'PHOTOS/FETCH_REQUEST',
  FETCH_PHOTOS_SUCCESS: 'PHOTOS/FETCH_SUCCESS',
}

export const fetchPhotos = () => ({
  type: PhotosActionTypeKeys.FETCH_PHOTOS_REQUEST
})

export const fetchPhotosSuccess = (photos = []) => ({
  payload: {
    photos
  },
  type: PhotosActionTypeKeys.FETCH_PHOTOS_SUCCESS
})

export const fetchPhotosFailure = (error) => ({
  error: { error },
  type: PhotosActionTypeKeys.FETCH_PHOTOS_FAILURE
})

const initialState = {
  fresh: false,
  loading: true,
  photos: []
}

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case PhotosActionTypeKeys.FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case PhotosActionTypeKeys.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        fresh: true,
        loading: false,
        photos: action.payload.photos
      }

    case PhotosActionTypeKeys.FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export default photosReducer
