import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import {UsersIcon} from '@heroicons/react/24/solid'
import 'mapbox-gl/dist/mapbox-gl.css'

type SearchResult = {
  lat: number;
  long: number;
  title?: string;
};

type SearchProps = {
  searchResults: SearchResult[];
};

function Map({searchResults}:SearchProps) {
    
  // Transform the search results
  const coordinates = searchResults.map(
    (result) => ({
      longitude: result.long,
      latitude: result.lat
    }))
  const center = getCenter(coordinates)

  const [viewport,setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 11
  })

  const [selectedLocation, setSelectedLocation] = useState<SearchResult | null>()

  useEffect(()=>{
  if (center) {
    setViewport({
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11
    })
  }
  }, [])


  return (
    <ReactMapGL 
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMove={evt => {
      setViewport(evt.viewState)
    }}
    >
    {searchResults.map((result) => (   
      <div key={result.long}> 
        <Marker
          latitude={result.lat}
          longitude={result.long}
        >
          <p onClick={()=> {
            setSelectedLocation(result)
            }} className="cursor-pointer text-2xl animate-bounce">
          📌  
          </p>   
           
        </Marker>
      </div>))}
      {selectedLocation && (
        <Popup
          offset={3} 
          longitude={selectedLocation.long} 
          latitude={selectedLocation.lat}
          onClose={() => setSelectedLocation(null)}
        >
          You are here
        </Popup>
      )}
      </ReactMapGL>)

}

export default Map