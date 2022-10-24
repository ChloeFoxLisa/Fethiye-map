import {
    useJsApiLoader,
    GoogleMap,
    Marker,
} from '@react-google-maps/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { getBrowserLocation } from '../utils/geo';
import { defaultTheme } from './Theme';

export const Map = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const center = { lat: 36.656010, lng: 29.125247 };

    const [location, setLocation] = useState(center);
    const [map, setMap] = useState((null));
    
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

    useEffect(() => {
        getBrowserLocation().then((currentLocation) => {
            setLocation(currentLocation);
        })
    }, []);

    return (
    <GoogleMap
        center={center}
        zoom={13}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={defaultOptions}
        onLoad={map => setMap(map)}
    >
        <Marker position={location} />
    </GoogleMap>
    )
}