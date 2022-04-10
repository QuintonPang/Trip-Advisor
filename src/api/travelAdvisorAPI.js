import axios from "axios";

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {
// //   method: 'GET',
// //   url: URL,
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//     // restaurant_tagcategory_standalone: '10591',
//     // restaurant_tagcategory: '10591',
//     // limit: '30',
//     // currency: 'USD',
//     // open_now: 'false',
//     // lunit: 'km',
//     // lang: 'en_US'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const getPlacesData = async(type,sw,ne) =>{
    try{
        // without destructuring
        // const res = await(axios.get(URL,options))

        // with destructuring
        const {data:{data}} = await(axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
          //   method: 'GET',
          //   url: URL,
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              // restaurant_tagcategory_standalone: '10591',
              // restaurant_tagcategory: '10591',
              // limit: '30',
              // currency: 'USD',
              // open_now: 'false',
              // lunit: 'km',
              // lang: 'en_US'
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
            }
          }))

        return data;
        
    } catch (error){
        console.log(error);
    }
}