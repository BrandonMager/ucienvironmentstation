import React from "react"
import {getIcon, convertTime} from "../weatherDetails"
import { WiSunset, WiSunrise, WiDirectionUp, WiDirectionDown} from "weather-icons-react"
function Details({
    weather: {
        details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone, name, country, dt
    }
}) {
    return(
        <div>
            <div className = "flex flex-row items-center text-center justify-center py-6 text-x1">
            <h1 className = "items-center text-white text-2xl font-medium">Conditions in {`${name}, ${country}`}</h1>
            </div>
            <div className = "flex items-center justify-center">
                <h1 className = "text-white font-medium uppercase">Current Conditions</h1>
            </div>
            <hr className = "my-1 text-white" />
            <div className = "flex flex-col items-center justify-center py-6 text-x1 text-cyan-300">

                <p className = "text-white text-x1 ">
                    {convertTime(dt, timezone)}
                </p>
                
            </div>

            <div className ="flex items-center text-xl justify-center py-6 text-x1 text-cyan-300">
                <p> Status: <b>{details}</b> </p>
            </div>

            <div className = "flex flex-row items-center justify-between text-white py-3">
                <img src = {getIcon(icon)} alt = "" className = "w-20"/>
                <p className = "text-5xl">{`${temp.toFixed()}°F`}</p>
                <div className = "flex flex-col text-l space-y-2">
                    <div className = "flex items-center justify-center">
                        Real Fell:
                        <span className = "font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className = "flex items-center justify-center">
                        Humidity:
                        <span className = "font-medium ml-1">{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div>
                        Wind:
                        <span className = "font-medium ml-1">{`${speed.toFixed()}mph`}</span>

                    </div>


                </div>
            </div>

            <div className = "flex flex-row items-center justify-center space-x-2 text-white py-3">
                <WiSunrise size={20}/>
                <p className = "text-l">
                    Rise: {""}
                    <span className = "ml-1">{convertTime(sunrise, timezone, "hh:mm a")}</span>
                </p>
                <p className = "font-medium">|</p>
                <WiSunset size={20}/>
                <p className = "text-l">
                    Set: {""}
                    <span className = "font-medium ml-1">{convertTime(sunset, timezone, "hh:mm a")}</span>
                </p>
                <WiDirectionUp size={20}/>

                <p className = "font-medium">|</p>
                <p className = "text-l">
                    High: {""}
                    <span className = "font-medium ml-1">{`${temp_max.toFixed()}°`}</span>

                </p>
                <p className = "font-medium">|</p>
                <WiDirectionDown size={30}/>
                <p className = "text-l">
                    Low: {" "}
                    <span className = "font-medium ml-1">{`${temp_min.toFixed()}°`}</span>

                </p>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Details