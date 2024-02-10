import { DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from 'react';

export default function GoogleMapComponent() {
    const [Map, setMap] = useState<any>();
    // const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null)
    const [directionsResponse, setDirectionsResponse] = useState<any>(null)
    // const [distance, setDistance] = useState<any>('')

    // let map: google.maps.Map;
    const center = { lat: 28.644800, lng: 77.216721 };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBcWkVHVvjlyKpqT3POw-32IsfGnTFElqE" || process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    if(!isLoaded) {
      return <div>Loading google map</div>
    }

    // if(isLoaded) {
    //   setTimeout(() => {
    //     calculateRoute()
    //   }, 1000);
    // }

    async function calculateRoute() {
      try {
        // const directionsService = new google.maps.DirectionsService();
        // const results = await directionsService.route({
        //   origin: "Eiffel Tower",
        //   destination: "Paris France",
        //   // eslint-disable-next-line no-undef
        //   travelMode: "DRIVING",
        // })
        // setDirectionsResponse(results);
        // setDistance(results.routes[0].legs[0].distance.text)
        // setDuration(results.routes[0].legs[0].duration.text)
      } catch (error) {
        console.error("calculate direction error", error);
      }
    }
    
  return (
    <div>
      <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '500px' }}
          options={{
            // zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            // fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
    </div>
  )
}
