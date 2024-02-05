import { Input } from "../../shadn/components/ui/input"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../shadn/components/ui/form"
import { Textarea } from "../../shadn/components/ui/textarea"
import React from "react"

interface CustomFormFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  inputType?: string;
  isTextarea?: boolean;
  [key: string]: any;
}

const CustomFormField: React.FC<CustomFormFieldProps> = ({ control, name, label, placeholder, inputType = "text", isTextarea = false, ...rest }) => (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="py-6">
          <FormLabel className="text-gray-300 text-xl mdtext-3xl">{label}</FormLabel>
          <FormControl>
            {isTextarea ? (
                  <Textarea 
                    className="min-h-24 max-h-96 text-lg md:text-2xl bg-transparent text-gray-200 border-b rounded-none border-transparent focus:border-white focus:outline-none focus:ring-0 transition duration-300"
                    placeholder={placeholder}
                    {...field}
                    {...rest}
                  />
              ) : (
                  <Input 
                    className="bg-transparent text-lg md:text-2xl text-gray-200 border-b rounded-none border-transparent focus:border-white focus:outline-none focus:ring-0 transition duration-300 py-8"
                    type={inputType} 
                    placeholder={placeholder} 
                    {...field} 
                    {...rest} 
                  />
              )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
  
export default React.memo(CustomFormField)