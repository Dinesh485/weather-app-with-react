import { useSelector } from "react-redux";


const Now = () => {
  const current = useSelector((state) => state.weather.current);
  const airQuality = useSelector((state) => state.airQuality.main);

  let quality = "";

 if(airQuality){
  switch (airQuality.aqi) {
    case 1:
      quality = " Good";
      break;
    case 2:
      quality = "Fair";
      break;
    case 3:
      quality = "Moderate";
      break;
    case 4:
      quality = "Poor";
      break;
    case 5:
      quality = "Very Poor";
      break;
    default:
      quality = "";
  }
} 
  var date = new Date();
  var options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  var timeString = date.toLocaleString("en-US", options);

  return (
    <section className="now">
      <div className="wrapper">
        {current && airQuality && (
          <div className="card">
            <p className="title">
              <span>Current Weather</span>{" "}
              {
                <span className="description">
                  {current.weather[0].description}
                </span>
              }
            </p>
            <span className="time"> {timeString} </span>
           <div>
           <div className="main">
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                  alt=""
                />
                <div className="temp-container">
                  <div className="temp">{Math.floor(current.temp)}&#176;c</div>
                  <div className="realfeel">
                    realfeel <span>{Math.floor(current.feels_like)}&#176;</span>
                  </div>
                </div>
              </div>
            </div>
            <ul className = "details">
              <li>
                <span>Air Quality</span>
                <span>{quality}</span>
              </li>
              <li>
                <span>Wind speed</span>
                <span>{Math.floor(current.wind_speed * 3.6)} km/hour</span>
              </li>
              <li>
                <span>Humidity</span>
                <span>{current.humidity}%</span>
              </li>
              <li>
                <span>UV index</span>
                <span>{current.uvi}</span>
              </li>
            </ul>
           </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Now;
