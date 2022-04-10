import React from 'react'

const PlaceDetails = ({place,selected,refProp}) => {
  console.log(place)

  if(selected) refProp?.current?.scrollIntoView({behaviour:"smooth",block:"start"})
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={place.photo?place.photo.images.large.url:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'} alt={place.name}/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{place.name}</div>
        <p class="text-gray-700 text-base">
          Price:{place.price_level}
        </p>
        <p class="text-gray-700 text-base">
          Ranking:{place.ranking}
        </p>
        <div className="flex flex-col gap-1">
        <p class="text-gray-700 text-base">
            Reward(s):
        </p>
        {place?.awards?.map((award)=>(
          <p class="text-gray-700 text-base">
            {award.display_name}
          </p>
        ))}
        </div>
      </div>
      <div class="px-6 pt-4 pb-2">
        {place?.cuisine?.map(({name})=>(
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{name}</span>
        ))}
      </div>
      <div class="px-6 pt-4 pb-2">
        {place?.address&&(
          <p class="text-gray-700 text-base">
            Address:{place.address}
          </p>
        )}
      </div>
      <div class="px-6 pt-4 pb-2">
        {place?.phone&&(
          <p class="text-gray-700 text-base">
            Contact number:{place.phone}
          </p>
        )}
      </div>
    </div>
  )
}

export default PlaceDetails