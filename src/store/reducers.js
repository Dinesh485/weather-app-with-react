import {combineReducers} from 'redux'
const weather  = (state ='' , action) =>{
    if(action.type === "WEATHER"){
          
          let newWeather = action.payload
           
        return state = newWeather
    }else{
        return state
    }
}

const error = (state = null , action) =>{
    if(action.type === "ERROR"){
        return state = action.payload
    }else{
        return state
    }
}

const isPending = (state = true, action ) =>{
    if(action.type === 'ISPENDING'){
        return state = !state
    }else{
        return state
    }
}
const region = (state = '', action) =>{
    if(action.type === 'REGION'){
        return state = action.payload.name
    }else{
        return state;
    }
}
const airQuality = (state = '', action) =>{
    if(action.type === 'AIRQUALITY'){
        return state = action.payload.list[0]
    }else{
        return state
    }
}

const allReducers = combineReducers({
    weather,
    error,
    isPending,
    region,
    airQuality
})

export default  allReducers