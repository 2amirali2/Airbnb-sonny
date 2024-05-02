"use client"

import { useState } from "react"
import ReactMapGl from "react-map-gl"

const Map = () => {
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    longitude: -100,
    latitude: 40,
    zoom: 11,
  })
  return (
    <ReactMapGl
      mapLib={import('mapbox-gl')}
      mapStyle="mapbox://styles/2amirali2/clvnpu8q6016o01o011hx78sc"
      mapboxAccessToken={process.env.MAPBOX_KEY}
      {...viewPort}
      
    ></ReactMapGl>
  )
}
export default Map
