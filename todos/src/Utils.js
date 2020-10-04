export const getCurrentLocation = async () => {
  const getCoordinates = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }

  const {
    coords: { latitude, longitude },
  } = await getCoordinates()
  return { latitude, longitude }
}
