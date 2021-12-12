/* eslint-disable no-unused-vars */
import React from "react";
import { GoogleMap, useJsApiLoader,Marker } from "@react-google-maps/api";
const sh = 'AIzaSy';
const ma = 'AkN31Hu4';
const aw = 'r9t3fPg7';
const ra = 'sssX3ymD';
const da = 'b81ViB_2A';
const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const PharmacyMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${sh}${ma}${aw}${ra}${da}`
  });
  const [center, setCenter] = React.useState({
    lat: "",
    lng: "",
  });
  
  React.useEffect(() => {
    getLocation();
  }, []);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter({
        ...position,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

 


  

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      <Marker position={center} />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default PharmacyMap;


