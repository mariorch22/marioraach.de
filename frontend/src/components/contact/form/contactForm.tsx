import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../../../shadn/components/ui/button"
import { Form } from "../../../shadn/components/ui/form"
import React, { useState } from "react"
import { FormSchemaContactForm } from "./formSchemaContactForm"
import CustomFormField from "../../shared/customFormField"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';
import { IoMdSend } from "react-icons/io";
import { RiCheckDoubleFill } from "react-icons/ri";

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  isTextarea: boolean;
  inputType?: string;
}

const ContactForm = () => {
  const [successfullySend, setSuccessfullySend] = useState<boolean>(false);

  const {t} = useTranslation();
  const contactFormDaten: FormField[] = t("contactForm", { returnObjects: true }) as FormField[];

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
 
  function onSubmit(values: z.infer<typeof FormSchemaContactForm>) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }
  
    fetch("https://formspree.io/xgegaloy", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => {
      if (response.ok) {
        setSuccessfullySend(true)
      } else {
        response.json().then(data => {
          console.error("Form submission error:", data.errors);
        });
      }
    })
    .catch(error => {
      console.error("Network error:", error);
    });
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 md:space-y-8 pb-4 w-full md:w-1/2">
        {contactFormDaten.map((field, id) => (
          <CustomFormField
            key={id}
            control={form.control}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            inputType={field.inputType}
            isTextarea={field.isTextarea}
          />
        ))}
        <div className="flex justify-end">
          <motion.span whileTap={{ scale: 0.95 }}><Button className={`hover:bg-gray-900 text-backgroundGray md:w-auto right-0 px-10 ${successfullySend ? 'bg-green-700' : 'bg-transparent'}`} type="submit" disabled={successfullySend}>{successfullySend ? <RiCheckDoubleFill size={30} color="white" /> : <IoMdSend size={30} color="white" />}</Button></motion.span>
        </div>
        
      </form>
    </Form>
  )
}

export default React.memo(ContactForm)