import { Map } from './Map/Map'

function App() {

  return (
    <>
      <header className="header">
        Fethiye Map
      </header>
      <div className='mainpage'>
        <div className="mainpage__menu">
          <h2 className="mainpage__menu__title">Menu</h2>
        </div>
        <div className='mainpage__map'>
            <Map />
        </div>
      </div>
    </>
  )
}

export default App
