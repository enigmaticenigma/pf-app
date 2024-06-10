import { ATCData } from "@/types/atc"
import { Flightplan } from "@/types/flightplan"
import useSWR from "swr"

export function useFlightplansByFrequency(frequency: number) {
  return useSWR(["/api/flightplans", { frequency: frequency }])
}

export function useATC(atcId: number) {
  return useSWR<ATCData, unknown>(["/api/atc", { atcId: atcId }])
}

export function useFlightplan(flightplanId: number) {
  return useSWR<Flightplan, unknown>(["/api/flightplan", { flightplanId: flightplanId }])
}
