import React from "react";
import Details from "../weather-components/Aldrich"
import AirDetails from "../weather-components/BrenHall"
import AldrichDetails from "../weather-components/AldrichAir"
import Forecast from "../weather-components/Forecast"
import {useEffect, useState} from "react"

import {getAldrichData, getPurpleAirData, getForecast, getAldrichAirData} from "../weatherDetails"



export default function Picture() {
    const [AldrichWeather, setAldrichWeather] = useState(null);
    const [AldrichAir, setAldrichAir] = useState(null);
    const [PurpleAir, setPurpleAir] = useState(null);
    const [days, setDays] = useState(null);
    
    useEffect( () => {
        if (AldrichWeather === null){
        const fetchAldrichPark = () => {

        getAldrichData().then((data) => {
            setAldrichWeather(data);
        })
        }
        fetchAldrichPark()
    
     }

     if (PurpleAir === null){
        const fecthPurpleAir = () => {

        getPurpleAirData().then((data) => {
            setPurpleAir(data);
        })
        }
        fecthPurpleAir()
    
     }
     if (days === null){
        const fetchForecastData = () => {

        getForecast().then((data) => {
            setDays(data);
        })
        }
        fetchForecastData()
    
     }
     if (AldrichAir === null) {
        const fetchAldrichAir = () => {
            getAldrichAirData().then( (data) => {
                setAldrichAir(data)
            })
        }
        fetchAldrichAir()
     }
    })
    

    
    const getBackground = () => {
        
        if (AldrichWeather.temp >= 80){
            return 'from-yellow-500 to-orange-500'
        }
        if (AldrichWeather.temp <= 65){
            return 'from-blue-900 to-gray-900'
        }
        return 'from-cyan-500 to-blue-600'
        
    }


    if (AldrichWeather && PurpleAir && Forecast && AldrichAir){
    return (
    
        <div className = {`bg-gradient-to-r w-full ${getBackground()} flex flex-row`}>
            
        
        <section className = {`mx-auto max-w-screen-md py-5 my-5 px-10 w-full`}>
            {PurpleAir && (
                <AirDetails air = {PurpleAir}/>
            )}

            {AldrichAir && (
                <AldrichDetails air = {AldrichAir}/>
            )

            }
            
    
        </section>
        <section className = {`mx-auto my-auto py-5 my-5 px-10`}>
            
            {AldrichWeather && (
                <Details weather = {AldrichWeather}/>
            )
            }
            {Forecast && (
                <Forecast days = {days}/>
            )
            }   
        </section>
        
        </div>
     )
    }
}
