export interface Days {
    id: number,
    day: string
}

export interface ToasterNotification {
    toastComponent?: any,
    closeButton?: boolean,
    timeOut?: number,
    extendedTimeOut?: number,
    disableTimeOut?: boolean | 'timeOut' | 'extendedTimeOut',
    easing?: string,
    easeTime?: string | number,
    enableHtml?: boolean,
    progressBar?: boolean,
    progressAnimation?: 'increasing' | 'decreasing',
    toastClass?: string,
    positionClass?: string,
    titleClass?: string,
    messageClass?: string,
    tapToDismiss?: boolean,
    onActivateTick?: boolean,
    preventDuplicates?: boolean,
    iconClasses?: any
}