const request=require('request')

forecast=(lat, lon, callback)=>{
    const url='http://api.weatherstack.com/current?access_key=629b6762b81f4cabbfbd52ff9ba8de24&query='+encodeURIComponent(lat)+','+encodeURIComponent(lon)+'&units=m'

    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to service',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{
            const {body}=response
            const {weather_descriptions,temperature,feelslike}=body.current
            callback(undefined,weather_descriptions[0]+': It is currently '+temperature+' degrees out. It feels like it is '+feelslike+' degrees out')
        }
    })

}

module.exports=forecast