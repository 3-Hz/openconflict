import { MapContainer, TileLayer, Popup, Circle, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ conflicts, handleMapRef, mapRef }) => {

  // function handleOnFlyTo(coords) {
  //   const map = mapRef;
  //   map.flyTo(coords, 14, { duration: 2 });
  // }

  return (
    <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true} whenCreated={map => handleMapRef(map)}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {conflicts.map(conflict => (
          <Circle
            key={conflict.data_id}
            center={[Number(conflict.latitude),Number(conflict.longitude)]}
            color={'red'}
            weight={7}
            fillColor={'#f03'}
            radius={200}
            // eventHandlers={{
            //   click: (e) => {
            //     handleOnFlyTo([Number(conflict.latitude),Number(conflict.longitude)]);
            //   }
            // }}
          >
            <Popup>
              Event: {conflict.event_type}
              <br></br>
              Date: {conflict.event_date}
              <br></br>
              Type: {conflict.sub_event_type}
              <br></br>
              Actors: {conflict.actor1} - {conflict.actor2}
              <br></br>
              Fatalities: {conflict.fatalities}
              <br></br>
              Notes: {conflict.notes}
            </Popup>
          </Circle>
        ))}

    </MapContainer>
  )
}

export default Map;