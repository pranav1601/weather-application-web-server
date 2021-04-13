const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicHJhbmF2MTYwMSIsImEiOiJja25kajB5aGcxdnlkMm5tcTJ3cWZtYnNiIn0.LlZXwJ5Xfl99F7z5GRb_1A&limit=1'
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find location, please try another search',undefined)
        }else{
            const {center,place_name:location}=response.body.features[0]
            const latitude=center[0]
            const longitude=center[1]
            callback(undefined,{
                latitude,
                longitude,
                location
            })
        }
    })

}

module.exports=geocode

