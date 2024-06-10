"use client"

import { Flightplan } from "@/types/flightplan"
import FormInput from "@/components/FormInput"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { Form, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const PilotSchema = z.object({
  squawk: z.coerce.number()
})

export default function PilotDashboard({ flightplan }: { flightplan: Flightplan }) {
  const form = useForm<z.infer<typeof PilotSchema>>({
    resolver: zodResolver(PilotSchema),
    defaultValues: {
      squawk: flightplan.squawk,
    },
  })

  function onSubmit(values: z.infer<typeof PilotSchema>) {
    console.log(values)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Pilot Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
              <FormInput form={form} label={"Squawk"} type={"number"} id={"squawk"} />
              <Button type={"submit"} className="col-span-2">Submit</Button>
            </form>
            <FormMessage />
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
