//import { useEffect, useRef } from 'react';
import { FeatureGroup } from 'react-leaflet';
import EventMarker from './EventMarker.js';

const EventGroup = ({ handleFGroupRef, conflicts }) => {

  // const fGroupRef = useRef();
  // useEffect(() => {
  //   handleFGroupRef(fGroupRef.current);
  // })

  return (
    // <FeatureGroup ref={fGroupRef}>
    <FeatureGroup>
      {conflicts.map(conflict => (
        <EventMarker key={conflict.data_id} conflict={conflict}/>
      ))}
    </FeatureGroup>
  )
}

export default EventGroup;