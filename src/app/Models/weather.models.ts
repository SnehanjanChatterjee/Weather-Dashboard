export interface CurrentWeatherModel {
    coord: Coordinates,
    weather: WeatherData[],
    base: string,
    main: MainData,
    visibility: number,
    wind: WindData,
    clouds: CloudsData,
    dt: number,
    sys: SysData,
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export interface Coordinates {
    lon: number,
    lat: number
}

export interface WeatherData {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface MainData {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

export interface WindData {
    speed: number,
    deg: number
}

export interface CloudsData {
    all: number
}

export interface SysData {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
}
