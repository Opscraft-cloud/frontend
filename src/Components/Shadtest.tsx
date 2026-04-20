import React from 'react'
import { useState } from 'react'
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
  const [text, setText] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
    <div className="flex min-h-svh flex-col items-center justify-center">
      
    <div>
    <Input placeholder="Enter text" value={text} onChange={handleChange} />
    </div>
    <div>
      <h2>Output:</h2>
      <p>{text}</p>
    </div>
    </div>
</>
  )
}

export default ShadCN 