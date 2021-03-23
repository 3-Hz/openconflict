import { MapContainer, TileLayer } from 'react-leaflet';
import EventMarker from './EventMarker.js';

const Map = ({ conflicts, handleMapRef, mapRef }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true} whenCreated={map => handleMapRef(map)} minZoom={2} maxBounds={[[-90,-200],[90,200]]} maxBoundsViscosity={0.5}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {conflicts.map(conflict => (
          <EventMarker conflict={conflict} mapRef={mapRef}/>
        ))}
    </MapContainer>
  )
}

export default Map;