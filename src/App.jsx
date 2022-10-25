import { useEffect, useState } from 'react';
import { Map } from './Map/Map'
import { getBrowserLocation } from './utils/geo';

function App() {

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [location, setLocation] = useState({ lat: 36.656010, lng: 29.125247 });

  useEffect(() => {
    getBrowserLocation().then((currentLocation) => {
      setLocation(currentLocation);
    })
  }, []);

  return (
    <>
      <header className="header">
        Fethiye Map
      </header>
      <div className='mainpage'>
        <div className="mainpage__menu">
          <h2 className="mainpage__menu__title">Menu</h2>
          <button onClick={() => map.panTo(location)}>Перейти к моему местоположению</button>
        </div>
        <div className='mainpage__map'>
          <Map setMap={setMap} location={location} />
        </div>
      </div>
    </>
  )
}

export default App
