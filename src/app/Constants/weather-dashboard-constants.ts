import { Days } from "../Models/common.models";

export const CELCIUS_UNIT = 'metric'; // Celsius unit 
export const KELVIN_UNIT = 'standard'; // Kelvin unit (default)
export const FAHRENHEIT_UNIT = 'imperial'; // Kelvin unit (default)

export const FAHRENHEIT = 'fahrenheit';
export const CELCIUS = 'celcius';

export const OneCallExcludes = {
    Current: 'current',
    Minutely: 'minutely',
    Hourly: 'hourly',
    Daily: 'daily',
    Alerts: 'alerts',
};

export const DAYS: Days[] = [
    { id: 0, day: 'Sunday' },
    { id: 1, day: 'Monday' },
    { id: 2, day: 'Tuesday' },
    { id: 3, day: 'Wednesday' },
    { id: 4, day: 'Thursday' },
    { id: 5, day: 'Friday' },
    { id: 6, day: 'Saturday' }
];