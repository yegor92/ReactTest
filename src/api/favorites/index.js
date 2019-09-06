export const getFavoriteList = () => {
  const favoriteList = window.localStorage.getItem('favoritePhotoList')
  if (favoriteList) {
    return favoriteList.split('|')
  } else {
    return []
  }
}

export const setFavoriteList = (photoId) => {
  var currentFavoriteList = []
  const favoriteList = window.localStorage.getItem('favoritePhotoList')
  if (favoriteList) {
    currentFavoriteList = favoriteList.split('|')
  }
  if (!currentFavoriteList.includes(photoId.toString())) {
    currentFavoriteList.push(photoId.toString())
  } else {
    for( var i = 0; i < currentFavoriteList.length; i++) {
      if ( currentFavoriteList[i] === photoId.toString() ) {
        currentFavoriteList.splice(i, 1)
      }
    }
  }
  
  window.localStorage.setItem('favoritePhotoList', currentFavoriteList.join('|'))
  return currentFavoriteList
}