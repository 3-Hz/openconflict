import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import mapData from '../data/countries.json';
import EventGroup from './EventGroup.js';

const Map = ({ conflicts, countryData, onCountryClick, handleMapRef, handleFGroupRef }) => {

  let onEachCountry = (country, layer) => {
    layer.on({
      click: () => onCountryClick(layer),
    })
  }

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      scrollWheelZoom={true}
      minZoom={2}
      maxBounds={[[-90,-200],[90,200]]}
      maxBoundsViscosity={0.5}
      whenCreated={map => handleMapRef(map)}
      worldCopyJump={true}
    >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={mapData.features}
          onEachFeature={onEachCountry}
        />
        <EventGroup handleFGroupRef={handleFGroupRef} conflicts={conflicts}/>
    </MapContainer>
  )
}

export default Map;