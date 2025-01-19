// import dependencies
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useTranslation } from 'react-i18next';
import { IoMdSend } from "react-icons/io";
import { ThreeDots } from "react-loader-spinner"
import { motion, useMotionValue } from "framer-motion"
import { CircularProgress } from "../animatedCheckIcon"

// import components
import { FormSchemaContactForm } from "./formSchemaContactForm"
import CustomFormField from "@/components/shared/customFormField"

// import ShadnCN-Components
import { Button } from "@/ui_components/shadn/components/ui/button"
import { Form } from "@/ui_components/shadn/components/ui/form"
import useSendContactForm from "@/hooks/useSendContactForm"

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  isTextarea: boolean;
  inputType?: string;
}

const ContactForm = () => {
  const {t} = useTranslation();
  const contactFormDaten: FormField[] = t("contactForm", { returnObjects: true }) as FormField[];
  const {mutate, isSuccess, isPending, isIdle} = useSendContactForm()

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
 
  async function onSubmit(values: z.infer<typeof FormSchemaContactForm>) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }

    try {
      // Starte die Mutation zum Senden des Kontaktformulars
      mutate(formData as any);
    } catch (error) {
      console.error("Fehler beim Senden des Formulars:", error);
      // Hier könntest du eine Fehlermeldung anzeigen oder weitere Fehlerbehandlung durchführen
    }
  }
  

  let progress = useMotionValue(90)
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
          <motion.span whileTap={{ scale: 0.95 }}>
            {isSuccess && 
              <motion.div
                initial={{ backgroundColor: "#111827" }}
                animate={{ backgroundColor: "#22C55E" }}
                transition={{ duration: 0.2 }}
                className="rounded-full"
              >
                <Button className={`rounded-full h-20 w-auto max-w-20 px-1 text-backgroundGray right-0 bg-customGreenButton`} type="submit" disabled={true}>
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: 100 }}
                    style={{ x: progress }}
                    transition={{ duration: 1 }}
                  />
                  <CircularProgress progress={progress} />
                </Button>
              </motion.div>
            }
            {isPending && 
              <Button className={`rounded-full h-20 w-20 text-backgroundGray right-0 bg-gray-900`} type="submit" disabled={true}>
                <ThreeDots width={40} height={40} color="white" /> 
              </Button>
            }
            {isIdle && 
              <Button className={`rounded-full h-20 w-20 text-backgroundGray right-0 bg-gray-900`} type="submit" disabled={false}>
                <IoMdSend size={35} className="ml-1" color="white" />
              </Button>
            }
          </motion.span>
        </div>
        
      </form>
    </Form>
  )
}

export default React.memo(ContactForm)