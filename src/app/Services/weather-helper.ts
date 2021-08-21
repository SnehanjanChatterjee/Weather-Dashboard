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

export function LocalDateTime(timezoneOffset: number) {
    const currentDate = new Date();
    const localTime = currentDate.getTime();
    const localOffset = currentDate.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    var dateTime = utc + (1000 * timezoneOffset);
    return new Date(dateTime);
}
