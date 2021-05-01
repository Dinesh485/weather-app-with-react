
import { useSelector } from "react-redux";

const Daily = () => {
   const {daily} = useSelector(state => state.weather)

   const toNormalFormat = (time_stamp) => {
    let timeStamp = time_stamp * 1000;
    let date = new Date(timeStamp);
    
    let month = date.toLocaleString("en-US", {
      
      month: "numeric",
    });
    let day = date.toLocaleString("en-US", {day: '2-digit'})
    day= parseInt(day)
    return { month, day };
  };

    if(daily){
        
     for(let i = 0; i<daily.length; i++){
        let time = toNormalFormat(daily[i].dt)
        daily[i].time = time
    }
    console.log(daily)
   }
    return ( 
        <div className = "daily">
            <div className="wrapper">
                <div className="cards">
                {daily &&
            daily.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <div className="main" onClick = {(e) =>e.target.nextElementSibling.classList.toggle('activeDetails')} >
                    <div className  = "timestamp">
                     
                      <div className="date">
                        {`${data.time.day}/${data.time.month}`}
                      </div>
                    </div>
                    <div className="temp">
                        <img  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
                        <h3>{Math.floor(data.temp.min)}&#176;c / {Math.floor(data.temp.max)}&#176;c</h3>
                    </div>
                      <div className="realfeel">realfeel {Math.floor(data.feels_like.min)}&#176;c/{Math.floor(data.feels_like.max)}&#176;c</div>
                      <div className="description">{data.weather[0].description}</div>
                      <div className="wind">wind {Math.floor(data.wind_speed * 3.6)} km/hour</div>
                      <svg  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                  <ul className= "details" id = "details">
                  <li>
                              <span>Description</span>
                              <span>{data.weather[0].description}</span>
                          </li>
                          <li>
                              <span>pressure</span>
                              <span>{data.pressure}</span>
                          </li>
                          <li>
                              <span>Humidity</span>
                              <span>{data.humidity}%</span>
                          </li>
                          <li>
                              <span>dew point</span>
                              <span>{data.dew_point}&#176;c</span>
                          </li>
                          <li>
                              <span>UV indes</span>
                              <span>{data.uvi}</span>
                          </li>
                          <li>
                            <span>Wind Speed</span>
                            <span>{data.wind_speed} km/hr</span>
                          </li>
                
                          <li>
                              <span>wind direction</span>
                              <span>{data.wind_deg}&#176;</span>
                          </li>
                          <li>
                              <span>precipitation</span>
                              <span>{data.pop}%</span>
                          </li>
                    

                  </ul>
                </div>
              );
            })}
                </div>
            </div>
        </div>
     );
}
 
export default Daily;