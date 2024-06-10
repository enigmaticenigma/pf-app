"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { createInsertSchema } from "drizzle-zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { FormCombobox } from "@/components/FormCombobox"
import { airports, towerPositions } from "@/types/enums"
import { createATC } from "@/app/actions/createATC"
import { Button } from "@/components/ui/button"
import FormInput from "@/components/FormInput"
import { Form } from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { atcs } from "@/lib/schema"

const ATCSchema = createInsertSchema(atcs, {
  frequency: z.coerce.number(),
})
export default function ATCForm() {
  const router = useRouter()

  const form = useForm<z.infer<typeof ATCSchema>>({
    resolver: zodResolver(ATCSchema),
    defaultValues: {
      frequency: "" as unknown as number,
    },
  })

  async function onSubmit(values: z.infer<typeof ATCSchema>) {
    try {
      const res = await createATC({ data: values })

      if (res) {
        router.push(`/atc/${res[0].id as unknown as string}`)
      } else {
        console.error("Error creating atc.")
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Card className={"w-full max-w-sm"}>
      <CardHeader>
        <CardTitle className={"text-2xl"}>ATC Form</CardTitle>
        <CardDescription>Please fill out the form below.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4"}>
            <FormCombobox
              dataTable={airports}
              label={"Airport"}
              form={form}
              id={"airport"}
            />
            <FormCombobox
              label={"Tower Position"}
              form={form}
              dataTable={towerPositions}
              id={"towerPosition"}
            />
            <FormInput
              form={form}
              label={"Frequency"}
              type={"number"}
              id={"frequency"}
            />
            <Button type={"submit"} className={"w-full"}>
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
