import React from 'react'
import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
function ShadCN() {
  return (
    <>
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex flex-col gap-8">
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
    <Input placeholder="Enter text" />
    </div>
    
</>
  )
}

export default ShadCN 