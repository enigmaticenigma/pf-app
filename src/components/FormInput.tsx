/* eslint-disable react/jsx-no-bind */
"use client"

import { Input } from "@/components/ui/input"
import { UseFormReturn, FieldValues, Path } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

interface FormInputProps<T extends FieldValues> {
  form: UseFormReturn<T>
  label: string
  type: string
  id: Path<T>
}

export default function FormInput<T extends FieldValues>({
  form,
  label,
  type,
  id,
}: FormInputProps<T>) {
  return (
    <FormField
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={label} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      name={id}
      control={form.control}
    />
  )
}
