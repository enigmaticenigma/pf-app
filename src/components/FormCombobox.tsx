/* eslint-disable react/jsx-no-bind */
"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import type {
  FieldValues,
  UseFormReturn,
  Path,
  PathValue,
} from "react-hook-form"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

interface FormComboboxProps<T extends FieldValues> {
  label: string
  form: UseFormReturn<T>
  id: Path<T>
  dataTable: readonly {
    value: PathValue<T, Path<T>>
    label: string
  }[]
}

export function FormCombobox<T extends FieldValues>({
  label,
  form,
  id,
  dataTable,
}: FormComboboxProps<T>) {
  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? dataTable.find((object) => object.value === field.value)
                        ?.label
                    : `Select ${label.toLowerCase()}`}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="min-w-full p-0">
              <Command>
                <CommandInput
                  placeholder={`Search ${label.toLowerCase()}...`}
                />
                <CommandList className={"min-w-full"}>
                  <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
                  <CommandGroup>
                    {dataTable.map((object) => (
                      <CommandItem
                        value={object.label}
                        key={object.value}
                        onSelect={() => {
                          // Cast the value to match the expected type
                          form.setValue(id, object.value)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            object.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {object.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
