"use client"

import { useFlightplan } from "@/services/queries"
import PilotDashboard from "@/components/PilotDashbord"

export default function PilotPage({
  params,
}: {
  params: { flightplanId: number }
}) {
  const { data } = useFlightplan(params.flightplanId)

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <PilotDashboard flightplan={data} />
  )
}
