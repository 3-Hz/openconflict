import { Popup, CircleMarker, useMap } from 'react-leaflet';

const EventMarker = ({ conflict }) => {
  // const map = useMap();
  // function handleOnFlyTo(coords) {
  //   map.flyTo(coords, 14, { duration: 2 });
  // }

  return(
    <CircleMarker
      key={conflict.data_id}
      center={[Number(conflict.latitude),Number(conflict.longitude)]}
      color={'red'}
      weight={0.8}
      fillColor={'#f03'}
      radius={5}
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
    </CircleMarker>
  );
}

export default EventMarker;