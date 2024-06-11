"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Flightplan } from "@/types/flightplan"
import PilotUpdateForm from "./PilotUpdateForm"

export default function PilotDashboard({ flightplan }: { flightplan: Flightplan }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Pilot Information</CardTitle>
        </CardHeader>
        <CardContent>
          <PilotUpdateForm flightplan={flightplan} />
        </CardContent>
      </Card>
    </div>
  )
}
