export function KelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
}
export function CelsiusToKelvin(celsius: number): number {
    return celsius + 273.15;
}

export function ConvertUnixToUTC(unixTime: number): string {
    // console.log("In helper file", new Date(unixTime * 1000).toISOString().slice(0, 19).replace('T', ' ').concat(' UTC'));
    // return new Date(unixTime * 1000).toISOString().slice(0, 19).replace('T', ' ').concat(' UTC');
    return new Date(unixTime * 1000).toISOString().slice(0, 19).replace('T', ' ');
}