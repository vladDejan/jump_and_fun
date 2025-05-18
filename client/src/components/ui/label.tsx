"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import "../../index.css"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        className
      )}
      {...props}
    />
  )
}

export { Label }
