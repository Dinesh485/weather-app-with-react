
import { useSelector } from "react-redux";
import Cards from "./cards";

const Hourly = () => {
  const { hourly } = useSelector((state) => state.weather);
  
 
  const toNormalFormat = (time_stamp) => {
    let timeStamp = time_stamp * 1000;
    let date = new Date(timeStamp);
    let hour = date.toLocaleString("en-US", { hour: "2-digit", hour12: true });
    let month = date.toLocaleString("en-US", {
      
      month: "numeric",
    });
    let day = date.toLocaleString("en-US", {day: '2-digit'})
    day= parseInt(day)
    return { hour, month, day };
  };
   
  let today = []
   let tommorrow = []
   let dayAfterTommorrow = []
     
   if(hourly){

     for(let i = 0; i<hourly.length; i++){
      let time = toNormalFormat(hourly[i].dt)
      hourly[i].time = time
   
     }

     let n = hourly[0].time.day

      for(let i = 0; i<hourly.length;i++){
        if(hourly[i].time.day ===n){
          today.push(hourly[i])
        }else if(hourly[i].time.day === n+1){
          tommorrow.push(hourly[i])
        }else if(hourly[i].time.day === n+2){
          dayAfterTommorrow.push(hourly[i])
        }
      }
   }

   const openCards = (e) =>{
      
      e.target.nextSibling.classList.toggle('openCards')
   }
    
  return (
    <section className="hourly">
        <div className="wrapper">
          <div className="today day " onClick = {e => openCards(e)}>
            {hourly && <div className = 'titleBar'>
              <span>Today</span>
               <span>
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
               </span>
              </div>}
          
          {hourly && <Cards day = {today } open = {true}/>}
          
        
          </div>
          <div className="tommorrow day" onClick = {e => openCards(e)}>
            {hourly && <div className = 'titleBar'>
              <span>Tommorow</span>
               <span>
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
               </span>
              </div>}
          
          {hourly && <Cards day = {tommorrow}/>}
          
        
          </div>
          <div className="dayAfterTommorrow day" onClick = {e => openCards(e)}>
            {hourly && <div className = 'titleBar'>
              <span>Day after Tommorow</span>
               <span>
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
               </span>
              </div>}
          
          {hourly && <Cards day = {dayAfterTommorrow}/>}
          
        
          </div>
       
      </div>  
    </section>
  ); 
};

export default Hourly;
