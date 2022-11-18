import React from "react"

import {getIcon} from "../weatherDetails"
function Forecast({days}) {
  
    const getDays = (days) =>{
        const elements = []
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
        var day;
        var date = new Date();
        let d = date.getDay()
        for(const [key, value] of Object.entries(days)) {
            day = week[d]
            d++
            elements.push(
                <div key = {key} className = "flex flex-col items-center justify-center">
                      <p>{day}</p>
                    <img src = {getIcon(value.weather[0].icon)} alt = "" className = "w-20"/>
                    
                      <p>{`${value.main.temp.toFixed()}°F`}</p>
                </div>)
                
        }
        return (elements)
      

    }


    return(
        <div>
            <div className = "flex flex-row items-center justify-center text-center my-2 text-center">
                <h1 className = "text-white font-medium uppercase items-center justify-center">5-Day Forecast</h1>
            </div>
            <hr className = "my-2" />
            <div className = "flex flex-row items-center justify-between text-white">
                {
                    getDays(days)
                }
            </div>
        </div>    
        )
}

export default Forecast