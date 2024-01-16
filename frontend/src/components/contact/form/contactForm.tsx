import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../../../shadn/components/ui/button"
import { Form } from "../../../shadn/components/ui/form"
import React from "react"
import { FormSchemaContactForm } from "./formSchemaContactForm"
import { formFields } from "../../../data/contactForm"
import CustomFormField from "../../shared/customFormField"

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchemaContactForm>>({
    resolver: zodResolver(FormSchemaContactForm),
    defaultValues: {
      username: "",
      email: "",
      company: "",
      requirements: "",
      message: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof FormSchemaContactForm>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formFields.map((field) => (
          <CustomFormField
            key={field.name}
            control={form.control}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            inputType={field.inputType}
            isTextarea={field.isTextarea}
          />
        ))}
        <Button type="submit">Abschicken</Button>
      </form>
    </Form>
  )
}

export default React.memo(ContactForm)