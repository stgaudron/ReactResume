import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as cityData from './data/cities.json';




  function Map(){
    const [selectedCity, setselectedCity] = useState(null);

    useEffect(() => {
      const listener = e => {
        if (e.key === "Escape") {
          setselectedCity(null);
        }
      };
      window.addEventListener("keydown", listener);

      return () => {
        window.removeEventListener("keydown", listener);;
      };
    },
    []);

    return (
      <GoogleMap
      defaultZoom={4}
      defaultCenter={{lat: 0, lng:0}}
    >
    {cityData.features.map(city => (
      <Marker
      key={city.properties.CITY_ID}
      position={{
        lat: city.geometry.coordinates[0],
        lng: city.geometry.coordinates[1]
      }}
      onclick={() =>{
        setselectedCity(city);
      }}
      />
    ))}

    {selectedCity &&(
      <InfoWindow
      onCloseClick={() => {
        setselectedCity(null);
      }}
      position={{
        lat: selectedCity.geometry.coordinates[0],
        lng: selectedCity.geometry.coordinates[1]
      }}
      >
      <div>
      <h5>{selectedCity.properties.NAME}</h5>
      <p>{selectedCity.properties.DESCRIPTION}</p>
      </div>
      </InfoWindow>
    )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Gmap() {
  return (
    <div style={{width: "80%", height: "80%"}}>
    <MapWrapped
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
