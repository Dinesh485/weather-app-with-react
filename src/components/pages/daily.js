import { useState } from "react";
import { useSelector } from "react-redux";

const Daily = () => {
   const {daily} = useSelector(state => state.daily)

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
  
    if(daily){

    }
    
    return ( 
        <h1>daily</h1>
     );
}
 
export default Daily;