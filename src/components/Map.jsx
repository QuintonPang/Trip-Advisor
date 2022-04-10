import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({setCoordinates,setBounds,coordinates,places,setChildClicked}) => {
    // const coordinates={lat:0,lng:0}
    return (
      <div>
          {/* 
              lat and lng will be shifted using margin set,
              onChildClick is fired when the child(card) is clicked
          */}
          <GoogleMapReact
              bootstrapURLKeys={{key:process.env.REACT_APP_TRIP_ADVISOR_API_TOKEN}}
              defaultCenter={coordinates}
              center={coordinates}
              defaultZoom={14}
              margin={[50,50,50,50]}
              options={''}
              onChange={(e)=>{
                console.log(e)
                setCoordinates({lat:e.center.lat,lng:e.center.lng})
                setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
              }}
              onChildClick={(child)=>{
                // child returns number of element clicked
                setChildClicked(child)
              }}
          >  
            {places?.map((place,i)=>(
                <div
                  lat={Number(place.latitude)}
                  lng={Number(place.longitude)}
                >
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={place.photo?place.photo.images.large.url:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'} alt={place.name}/>
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          {place.name}
                        </div>
                        <div class="font-bold text-xl mb-2">
                          Rating:{place.rating}
                        </div>
                      </div>
                    </div>
                </div>
                    ))}
          </GoogleMapReact>
      </div>
    )
}

export default Map