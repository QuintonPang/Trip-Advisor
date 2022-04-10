import React, { useEffect, useState } from 'react'
import { AppBar } from './components'
import List from './components/List'
import Map from './components/Map'
import { getPlacesData } from "./api/travelAdvisorAPI"
const App = () => {

  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [childClicked, setChildClicked] = useState(null)
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const [filteredPlaces, setFilteredPlaces] = useState([])

  // only happens at start
  useEffect(()=>{
    // get user coordinates
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude})
    })
  },[])

  useEffect(()=>{
    if(bounds?.sw&&bounds?.ne){   
      setLoading(true)
      getPlacesData(type,bounds.sw,bounds.ne)
      .then(d=>{
        console.log(d)
        setPlaces(d)
        setFilteredPlaces([])
        setLoading(false)
      })}
  },[bounds,type])

  // for rating
  useEffect(()=>{
    const filteredPlaces = places.filter(place=>place.rating>rating)
    setFilteredPlaces(filteredPlaces)
  },[rating])

  return (
    <div>
        <AppBar/>
        <div className="flex flex-row w-full">
          <div className="w-1/2">
            <List type={type} setType={setType} rating={rating} setRating={setRating}loading={loading} places={filteredPlaces.length?filteredPlaces:places} childClicked={childClicked}/>
          </div>
          <div className="w-1/2">
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates} 
              places={filteredPlaces.length?filteredPlaces:places}
              setChildClicked={setChildClicked}
            />
          </div>
        </div>
    </div>
  )
}

export default App