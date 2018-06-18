import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, TrafficLayer } from 'react-google-maps';

const MapWithTraffic = withScriptjs(withGoogleMap(props =>
    <GoogleMap {...props}>
        <TrafficLayer autoUpdate />
    </GoogleMap>
));

//NOTE: need to get our own API key
const TrafficMap = props => (
     <MapWithTraffic
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key='+
            'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg'}
        loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        defaultZoom={props.zoom}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        defaultOptions={{ disableDefaultUI: true }}
    />
);

export default TrafficMap;
