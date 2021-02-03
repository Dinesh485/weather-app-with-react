import {useSelector} from 'react-redux'
const Location = () => {
    
 const weather = useSelector(state => state.weather)
 const region = useSelector(state => state.region)

 
    return ( 
      <div className="location-info">
          <div className="wrapper">
              <div className="location">   {weather && region &&  <div ><span>{region}</span>   {Math.floor(weather.current.temp)}&#176;c</div>}</div>
        
          <form action="">
            <input type="text" placeholder="enter location" />
          </form>
        </div>
      </div>
     );
}
 
export default Location;