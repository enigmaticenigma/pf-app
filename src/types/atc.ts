import {Flightplan} from "@/types/flightplan";

export interface ATC {
        id: number;
        airport: string;
        towerPosition: string;
        frequency: number;
        columns?: Column[] | null;
}

export interface Column {
    id: number,
    name: string,
    order: number,
    atcId: number | null,
    flightplans: Flightplan[]
}
export interface ATCData {
    data: ATC
}