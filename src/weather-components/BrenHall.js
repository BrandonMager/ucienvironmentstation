import React from "react"
import {getIcon, convertTime} from "../weatherDetails"
import {aldrichpic} from '../data'


function AirDetails({
    air: {
       humidity, temperature, val, pressure
    },
    
}) {
    const find_aqi = (val) => {
        var concentration_levels = [[0.0, 12.1, 0, 50], [12.1, 35.5, 51, 100], [35.5, 55.5, 101, 150], [55.5, 150.5, 151, 200], [150.5, 250.5, 201, 300], [250.5, 350.5, 301, 400], [350.5, 500.5, 401, 500]]
        var aqi = 0
    
        if (val >= 500.5)
            return 501
        
        for (var i = 0; i < concentration_levels.length; i++){
            const levels = concentration_levels[i]
            const pm_low = levels[0]
            const pm_high = levels[1]
            const aqi_low = levels[2]
            const aqi_high = levels[3]

            
            
            if (val >= pm_low && val <= pm_high){
                aqi = ((aqi_high - aqi_low) / (pm_high - pm_low)) * (val - pm_low) +  aqi_low
            }
        }

        return aqi
    }

    return(
        <div className="flex flex-col">
        <div className="my-5 text-center">
            <h1 className="font-medium text-2xl mb-5 mt-2 text-white font-sans">Aldrich Park</h1>
            <img src = {aldrichpic}/>
        </div>

        <div className="text-white text-l text-center">
            <h1 className="text-2xl font-medium">Bren Hall/MSTB Air Quality</h1>
            <hr className = "my-2" />
            <div className = "flex flex-col text-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl">Temperature</h1>
                    <p className="text-3xl my-5">{temperature.toFixed()}°F</p>
                </div>
                <div className="flex flex-row mx-auto">
                    <p className="mr-5">Humidity: {humidity}%</p>
                    <p>Pressure {pressure} </p>
            
                </div>
                <div className="flex flex-row mx-auto">
                    <p className="mr-5">PM2.5: {val}</p>
                    <p>AQI: {find_aqi(val).toFixed()}</p>
                </div>
            </div>
            
        </div>
        </div>
    )
}
export default AirDetails