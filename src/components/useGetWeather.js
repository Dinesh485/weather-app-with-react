
import { useEffect } from "react"
import { useDispatch } from "react-redux"


const useGetWeather =  (city) =>{
  
   const dispatch = useDispatch()
    useEffect(() =>{

        const success =async (pos) =>{


            let crd = pos.coords
            let lng = String(crd.longitude)
            let lat = String(crd.latitude)


            //http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&appid=dacff4b9d2fbe89d18ec6178a6ef26d1
            //http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=dacff4b9d2fbe89d18ec6178a6ef26d1
            //https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&appid=dacff4b9d2fbe89d18ec6178a6ef26d1
           try{
                  
           const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&appid=dacff4b9d2fbe89d18ec6178a6ef26d1`)
           const weather = await weatherRes.json()
           dispatch({type: 'WEATHER', payload: weather})

            const locationRes = await fetch(`/getGeoLocation/${lat}/${lng}`)
            const location = await locationRes.json()
           dispatch({type: 'REGION' ,payload: location[0]})

            const airQualityRes =await fetch(`/getAirQulity/${lat}/${lng}`)
            const airQuality = await airQualityRes.json()
            await dispatch({type: 'AIRQUALITY', payload: airQuality})

          
            dispatch({type: 'ERROR', payload: '' })
            dispatch({type: 'ISPENDING'})

           }catch(err){

            
            dispatch({type: 'ERROR', payload: "Something went wrong, could not fetch data"})
            dispatch({type: 'ISPENDING'})
          

           }
            
        
         } 
          
        
         const error = (err) =>{
            dispatch({type: 'ERROR', payload: "Something went wrong, can't access your location"})
         }
     
     
         if(navigator.geolocation){
             navigator.geolocation.getCurrentPosition(success,error, {enableHighAccuracy: true})
         }
         
    },[dispatch])
   
 
 
}

export default  useGetWeather