import { call, put, takeLatest } from 'redux-saga/effects'
import * as PhotosApiClient from '../api/photos'
import * as favoritesApiClient from '../api/favorites'
import { 
  fetchPhotosFailure,
  fetchPhotosSuccess,
  setFavoritesFailure,
  setFavoritesSuccess,
  getFavoritesFailure,
  getFavoritesSuccess,
  PhotosActionTypeKeys
} from '../reducers/photos'

export function* fetchPhotos() {
  try {
    const photos = yield call(PhotosApiClient.get)
    const favorites = yield call(favoritesApiClient.getFavoriteList)
    yield put(fetchPhotosSuccess(photos, favorites))
  } catch (error) {
    yield put(fetchPhotosFailure(error))
  }
}

export function* getFavorites() {
  try {
    const favorites = yield call(favoritesApiClient.getFavoriteList)
    yield put(getFavoritesSuccess(favorites))
  } catch (error) {
    yield put(getFavoritesFailure(error))
  }
}

export function* setFavorites({ payload }) {
  const photoId = payload.id
  try {
    const currentFavoriteList = favoritesApiClient.setFavoriteList(photoId)
    yield put(setFavoritesSuccess(currentFavoriteList))
  } catch (error) {
    yield put(setFavoritesFailure(error))
  }
}

export function* watchListPhotos() {
  yield takeLatest(PhotosActionTypeKeys.FETCH_PHOTOS_REQUEST, fetchPhotos)
}

export function* watchGetFavorites() {
  yield takeLatest(PhotosActionTypeKeys.GET_FAVORITES_REQUEST, getFavorites)
}

export function* watchSetFavorites() {
  yield takeLatest(PhotosActionTypeKeys.SET_FAVORITES_REQUEST, setFavorites)
}
