import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../../../shadn/components/ui/button"
import { Form } from "../../../shadn/components/ui/form"
import React from "react"
import { FormSchemaContactForm } from "./formSchemaContactForm"
import { formFields } from "../../../data/contactForm"
import CustomFormField from "../../shared/customFormField"
import { motion } from "framer-motion"

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 md:space-y-8 pb-4 w-full md:w-1/2">
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
        <div className="flex justify-end">
          <motion.span whileTap={{ scale: 0.95 }}><Button className="w-auto bg-white hover:bg-gray-300 text-backgroundGray md:w-auto right-0 mx-6" type="submit">Abschicken</Button></motion.span>
        </div>
        
      </form>
    </Form>
  )
}

export default React.memo(ContactForm)