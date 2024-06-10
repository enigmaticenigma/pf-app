"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { createInsertSchema } from "drizzle-zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { createFlightplan } from "@/app/actions/createFlightplan"
import { flightplans } from "@/lib/schema"
import { FormCombobox } from "@/components/FormCombobox"
import FormTextarea from "@/components/FormTextarea"
import { Button } from "@/components/ui/button"
import FormInput from "@/components/FormInput"
import { Form } from "@/components/ui/form"
import {
  aircraftTypes,
  airports,
  flightRules,
  flightTypes,
  wakeCategory,
} from "@/types/enums"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PilotSchema = createInsertSchema(flightplans, {
  departureTime: z.coerce.number(),
  cruisingSpeed: z.coerce.number(),
  cruisingLevel: z.coerce.number(),
  enRouteTime: z.coerce.number(),
})

export default function PilotForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof PilotSchema>>({
    resolver: zodResolver(PilotSchema),
    defaultValues: {
      squawk: 0,
      callsign: "",
      departureTime: "" as unknown as number,
      cruisingSpeed: "" as unknown as number,
      cruisingLevel: "" as unknown as number,
      enRouteTime: "" as unknown as number,
      frequency: 128.0,
      remarks: "",
    },
  })

  async function onSubmit(values: z.infer<typeof PilotSchema>) {
    try {
      const res = await createFlightplan({ data: values })

      if (res) {
        router.push(`/flightplans/${res[0].id as unknown as string}`)
      } else {
        console.error("Error creating flight plan.")
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Card className={"w-full max-w-4xl"}>
      <CardHeader>
        <CardTitle className={"text-2xl"}>Flight Plan</CardTitle>
        <CardDescription>Please fill out the form below.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={"grid grid-cols-2 gap-4"}
          >
            <FormInput
              form={form}
              label={"Callsign"}
              type={"text"}
              id={"callsign"}
            />
            <FormCombobox
              label={"Flight Rule"}
              form={form}
              id={"flightRule"}
              dataTable={flightRules}
            />
            <FormCombobox
              label={"Flight Type"}
              form={form}
              id={"flightType"}
              dataTable={flightTypes}
            />
            <FormCombobox
              label={"Aircraft Type"}
              form={form}
              id={"aircraftType"}
              dataTable={aircraftTypes}
            />
            <FormCombobox
              label={"Wake Category"}
              form={form}
              id={"wakeCategory"}
              dataTable={wakeCategory}
            />
            <FormCombobox
              label={"Departure Airport"}
              form={form}
              id={"departure"}
              dataTable={airports}
            />
            <FormInput
              form={form}
              label={"Departure Time"}
              type={"text"}
              id={"departureTime"}
            />
            <FormInput
              form={form}
              label={"Cruising Speed"}
              type={"number"}
              id={"cruisingSpeed"}
            />
            <FormInput
              form={form}
              label={"Cruising Level"}
              type={"number"}
              id={"cruisingLevel"}
            />
            <FormInput
              form={form}
              label={"En-route Time"}
              type={"number"}
              id={"enRouteTime"}
            />
            <FormTextarea label={"Route"} form={form} id={"route"} />
            <FormCombobox
              label={"Arrival Airport"}
              form={form}
              id={"arrival"}
              dataTable={airports}
            />
            <FormInput
              form={form}
              label={"Remarks"}
              type={"text"}
              id={"remarks"}
            />
            <Button type={"submit"} className={"col-span-2 w-full"}>
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
