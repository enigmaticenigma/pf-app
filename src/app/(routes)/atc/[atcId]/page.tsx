"use client"

import CenterDashboard from "@/components/CenterDashboard"
import { useATC } from "@/services/queries"

export default function ATCDashboard({
  params,
}: {
  params: { atcId: number }
}) {
  const { data, error, isLoading } = useATC(params.atcId)

  if (!data && error) {
    return <div>Failed to load data.</div>
  }

  if (!data) {
    return <div>Data not found.</div>
  }

  return (
    <div className={"w-[100vw] overflow-hidden"}>
      {isLoading ? <div>Loading...</div> : <CenterDashboard atc={data} />}
    </div>
  )
}
