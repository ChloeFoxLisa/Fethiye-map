export const getBrowserLocation = () => {
    return new Promise((resolve) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude: lat, longitude: lng } = pos.coords;
                    resolve({ lat, lng })
                }
            )
        }
    })
};