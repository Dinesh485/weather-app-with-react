
import { useEffect } from "react"
import { useDispatch } from "react-redux"


const useGetWeather =  (city) =>{
  
   const dispatch = useDispatch()
    useEffect(() =>{

        const success = (pos) =>{


            let crd = pos.coords
            let lng = String(crd.longitude)
            let lat = String(crd.latitude)

            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&appid=dacff4b9d2fbe89d18ec6178a6ef26d1`).then(res =>{
                if(res.ok){
                    return res.json()
                }else{
                    throw Error('could not fetch your region')
                }
            }).then(data =>{
                dispatch({type : 'REGION', payload: data[0]})
            }).catch(err =>{
                dispatch({type: 'ERROR', payload: err.message})
            })
            
            fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=dacff4b9d2fbe89d18ec6178a6ef26d1`).then(res =>{
                if(res.ok){
                    return res.json()
                }else{
                    throw Error('could not fetch air quality info')
                }
            }).then(data =>{
                dispatch({type : 'AIRQUALITY', payload: data})
            }).catch(err =>{
                dispatch({type: 'ERROR', payload: err.message})
            })

              fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&appid=dacff4b9d2fbe89d18ec6178a6ef26d1`).then(res =>{
                if(res.ok){
                    return res.json()
                }else{
                    throw Error('something went wrong could not fetch data')
                }
              }).then(data =>{

                  dispatch({type:'ISPENDING'})
                  dispatch({type:'ERROR', payload: ''})
                  dispatch({type: 'WEATHER', payload: data})
             
              }).catch(err =>{

                dispatch({type:'ISPENDING'})
                 
                  dispatch({type:'ERROR', payload: err.message})
                 
              })

            
              
        
         } 
          
        
         const error = (err) =>{
             console.log(err)
         }
     
     
         if(navigator.geolocation){
             navigator.geolocation.getCurrentPosition(success,error, {enableHighAccuracy: true})
         }
         
    },[dispatch])
   
 
 
}

export default  useGetWeather