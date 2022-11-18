import { DateTime } from "luxon"
const fetchAldrichPark = () => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?lat=33.6450959&lon=-117.841695&appid=b95b2f591dc9ac992cf7b24942b18383&units=imperial')
    .then((response) => (response.json()))
}


const fecthPurpleAir = () => {
    const sensor_index = '143682'
    const api_key = '596863A9-570E-11ED-B5AA-42010A800006'
    const url = 'https://api.purpleair.com/v1/sensors/' + sensor_index + '?api_key=' + api_key
    console.log(url)
    return fetch(url).then((response)=>(response.json()))
}

const fetchAldrichAir = () => {
    const sensor_index = '33247'
    const api_key = '596863A9-570E-11ED-B5AA-42010A800006'
    const url = 'https://api.purpleair.com/v1/sensors/' + sensor_index + '?api_key=' + api_key
    console.log(url)
    return fetch(url).then((response)=>(response.json()))
}

const fetchForecastData = () => {
    return(
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=33.6450959&lon=-117.841695&appid=b95b2f591dc9ac992cf7b24942b18383&units=imperial')
        .then((response)=> (response.json()))
    )

}
const formatPurpleAir = (data) => {
    const {
        sensor: {
            humidity, 
            temperature, 
            'pm2.5' : val,
            'pressure': pressure
        }
    } = data

    return {
        humidity, temperature, val, pressure
    }
}
const formatForecastWeather = (data) => {
   
    const dayOne = data.list[0]
    const dayTwo = data.list[1]
    const dayThree = data.list[2]
    const dayFour = data.list[3]
    const dayFive = data.list[4]

    return {dayOne, dayTwo, dayThree, dayFour, dayFive}
}

const formatAldrichData = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},

    } = data;

    const {main: details, icon} = weather[0];

    return {
        lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed,
    };
};

const getAldrichData = async () => {
    const formattedAldrichData = await fetchAldrichPark().then(formatAldrichData)
    return {...formattedAldrichData}
}

const getPurpleAirData = async () => {
    const formattedPurpleAirData = await fecthPurpleAir().then(formatPurpleAir)
    return {...formattedPurpleAirData}
}

const getAldrichAirData = async () => {
    const formattedAldrichAirData = await fetchAldrichAir().then(formatPurpleAir)
    return {...formattedAldrichAirData}
}

const getForecast = async () => {
    const formattedForecast = await fetchForecastData().then(formatForecastWeather);
    //console.log(formattedForecast)
    return {...formattedForecast}
}

const convertTime = (
    secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const getIcon = (code) => 
    `http://openweathermap.org/img/wn/${code}@2x.png`;

export {getAldrichData,getForecast,getPurpleAirData,getAldrichAirData, convertTime, getIcon}