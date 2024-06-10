/* eslint-disable react/jsx-no-bind */
"use client"

import { UseFormReturn, FieldValues, Path } from "react-hook-form"

import { Textarea } from "@/components/ui/textarea"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

interface FormTextareaProps<T extends FieldValues> {
  form: UseFormReturn<T>
  label: string
  id: Path<T>
}

export default function FormTextarea<T extends FieldValues>({
  form,
  label,
  id,
}: FormTextareaProps<T>) {
  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field }) => (
        <FormItem className="col-span-2 flex flex-col">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={label} className="resize-none" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
