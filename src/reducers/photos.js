export const PhotosActionTypeKeys = {
  // fetch all images
  FETCH_PHOTOS_COMPLETE: 'PHOTOS/FETCH_COMPLETE',
  FETCH_PHOTOS_FAILURE: 'PHOTOS/FETCH_FAILURE',
  FETCH_PHOTOS_REQUEST: 'PHOTOS/FETCH_REQUEST',
  FETCH_PHOTOS_SUCCESS: 'PHOTOS/FETCH_SUCCESS',

  // Set / Get image to favorite list
  SET_FAVORITES_COMPLETE: 'PHOTO/FAVORITES/SET_COMPLETE',
  SET_FAVORITES_FAILURE: 'PHOTO/FAVORITES/SET_FAILURE',
  SET_FAVORITES_REQUEST: 'PHOTO/FAVORITES/SET_REQUEST',
  SET_FAVORITES_SUCCESS: 'PHOTO/FAVORITES/SET_SUCCESS',
  GET_FAVORITES_COMPLETE: 'PHOTO/FAVORITES/GET_COMPLETE',
  GET_FAVORITES_FAILURE: 'PHOTO/FAVORITES/GET_FAILURE',
  GET_FAVORITES_REQUEST: 'PHOTO/FAVORITES/GET_REQUEST',
  GET_FAVORITES_SUCCESS: 'PHOTO/FAVORITES/GET_SUCCESS',

  // Pagination

}

// Functions to fetch all photos
export const fetchPhotos = () => ({
  type: PhotosActionTypeKeys.FETCH_PHOTOS_REQUEST
})

export const fetchPhotosSuccess = (photos = [], favorites = []) => ({
  payload: {
    photos,
    favorites,
  },
  type: PhotosActionTypeKeys.FETCH_PHOTOS_SUCCESS
})

export const fetchPhotosFailure = (error) => ({
  error: { error },
  type: PhotosActionTypeKeys.FETCH_PHOTOS_FAILURE
})

// Functions to get favorites
export const getFavorites = () => ({
  type: PhotosActionTypeKeys.GET_FAVORITES_REQUEST
})

export const getFavoritesSuccess = (favorites) => ({
  payload: {
    favorites
  },
  type: PhotosActionTypeKeys.GET_FAVORITES_SUCCESS
})

export const getFavoritesFailure = (error) => ({
  error: { error },
  type: PhotosActionTypeKeys.GET_FAVORITES_FAILURE
})

// Functions to set photo into favorite list. 
export const setFavorites = (photoId) => ({
  payload: {
    id: photoId
  },
  type: PhotosActionTypeKeys.SET_FAVORITES_REQUEST
})

export const setFavoritesSuccess = (favorites) => ({
  payload: {
    favorites
  },
  type: PhotosActionTypeKeys.SET_FAVORITES_SUCCESS
})

export const setFavoritesFailure = (error) => ({
  error: { error },
  type: PhotosActionTypeKeys.SET_FAVORITES_FAILURE
})

const initialState = {
  fresh: false,
  loading: true,
  photos: [],
  favorites: [],
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
        photos: action.payload.photos,
        favorites: action.payload.favorites,
      }

    case PhotosActionTypeKeys.FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false
      }
    
    case PhotosActionTypeKeys.GET_FAVORITES_REQUEST:
      return {
        ...state
      }

    case PhotosActionTypeKeys.GET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.payload.favorites,
      }

    case PhotosActionTypeKeys.GET_FAVORITES_FAILURE:
      return {
        ...state,
      }

    case PhotosActionTypeKeys.SET_FAVORITES_REQUEST:
      return {
        ...state,
      }

    case PhotosActionTypeKeys.SET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.payload.favorites,
      }

    case PhotosActionTypeKeys.SET_FAVORITES_FAILURE:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default photosReducer
