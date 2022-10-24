import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    DirectionsRenderer,
} from '@react-google-maps/api';
import { useRef, useState } from 'react';
import { defaultTheme } from './Theme';

export const Map = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    const FETIYE_BOUNDS = {
        north: 36.716476,
        south: 36.602434,
        west: 29.054803,
        east: 29.253644,
    };

    const defaultOptions = {
        panControl: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        rotateControl: false,
        clickableIcons: false,
        keyboardShortcuts: false,
        styles: defaultTheme,
    };

    const center = { lat: 36.656010, lng: 29.125247 };

    return (

    <GoogleMap
        center={center}
        zoom={13}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={defaultOptions}
        onLoad={map => setMap(map)}
    >
        <Marker position={center} />
        {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
        )}
    </GoogleMap>
    )
}