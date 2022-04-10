import React,{ useState, useEffect, createRef } from 'react'
import PlaceDetails from './PlaceDetails'

const List = ({places,childClicked,loading, setRating, rating, setType, type}) => {

    const [elRefs, setElRefs] = useState([])
    useEffect(()=>{
        const refs= Array(places?.length).fill().map((_,i)=>elRefs[i]||createRef())
        setElRefs(refs)
    },[places])
    // const places = [
    //     { name:'place 1'},
    //     { name: 'place 2' },
    // ]
    if(loading){
        return  <div className="flex flex-col items-center justify-center">
        <h1>Loading...</h1>
    </div>
    }else{
    return (
        
        <div className="flex flex-col gap-3">
            <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                    <select class="form-select form-select-lg mb-3
                    appearance-none
                    block
                    w-full
                    px-4
                    py-2
                    text-xl
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example"
                    onChange={(e)=>setType(e.target.value)}
                    value={type}
                    >
                        <option selected>Type</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>

                    <select class="form-select form-select-lg mb-3
                    appearance-none
                    block
                    w-full
                    px-4
                    py-2
                    text-xl
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example"
                    onChange={(e)=>setRating(e.target.value)}
                    value={rating}
                    >
                        <option selected>Rating</option>
                        <option value="0">All</option>
                        <option value="3">Above 3.0</option>
                        <option value="4">Above 4.0</option>
                        <option value="4.5">Above 4.5</option>
                    </select>
                </div>
            </div>
            <div>
                {places?.map((place,i)=>
                    <div key={i}>
                        <PlaceDetails place={place} selected={Number(childClicked)===i} refProp={elRefs[i]} />
                    </div>
                )} 
            </div>
        </div>
    )}
}

export default List