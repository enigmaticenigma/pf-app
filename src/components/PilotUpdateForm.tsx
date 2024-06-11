import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import FormInput from "@/components/FormInput"
import { Button } from "@/components/ui/button"
import { deleteFlightplan } from "@/app/actions/deleteFlightplan"
import { updateFlightplan } from "@/app/actions/updateFlightplan"
import { Flightplan } from "@/types/flightplan"
import { useCallback } from "react"

const PilotSchema = z.object({
  squawk: z.coerce.number(),
  frequency: z.coerce.number(),
})

export default function PilotUpdateForm({ flightplan }: { flightplan: Flightplan }) {
  const form = useForm<z.infer<typeof PilotSchema>>({
    resolver: zodResolver(PilotSchema),
    defaultValues: {
      squawk: flightplan.squawk,
      frequency: flightplan.frequency,
    },
  })

  async function onSubmit(values: z.infer<typeof PilotSchema>) {
    await updateFlightplan({ ...values, flightplan })
  }

  const onClick = useCallback(async () => {
    await deleteFlightplan({ flightplanId: flightplan.id })
  }, [flightplan.id]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <FormInput form={form} label={"Squawk"} type={"number"} id={"squawk"} />
        <FormInput form={form} label={"Frequency"} type={"text"} id={"frequency"} />
        <Button type={"submit"} className="col-span-2">Submit</Button>
        <Button type="button" className="col-span-2" onClick={onClick}>Delete</Button>
      </form>
    </Form>
  )
}
