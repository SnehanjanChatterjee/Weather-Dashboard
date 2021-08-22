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
    // console.log("In helper file LocalDateTime()", new Date(dateTime));
    return new Date(dateTime);
}

export function LocalDateTimeByUnixTimestamp(ut: number, timezoneOffset: number) {

    var dateTime = new Date(0); // The 0 there is the key, which sets the date to the epoch
    dateTime.setUTCSeconds(ut);
    // console.log("dateTime = ", dateTime);
    return dateTime;
}

export function TitleCase(str: string) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }