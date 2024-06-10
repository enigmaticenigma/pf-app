export interface Flightplan {
    id: number;
    arrival: string;
    departure: string;
    departureTime: number;
    callsign: string;
    aircraftType: string;
    flightRule: string;
    flightType: string;
    wakeCategory: string;
    cruisingSpeed: number;
    cruisingLevel: number;
    route: string;
    enRouteTime: number;
    remarks: string;
    frequency: number;
    squawk: number;
    createdAt: Date;
    columnId: number;
    order: number;
}
