import { z } from 'zod';
import { Textarea } from '../../../ui_components/shadn/components/ui/textarea';
import { Button } from '../../../ui_components/shadn/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '../../../ui_components/shadn/components/ui/form';
import { Skeleton } from '../../../ui_components/shadn/components/ui/skeleton';

const FormSchema = z.object({
  bio: z
    .string()
    .min(2, {
      message: 'Bio must be at least 2 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
});

const Swabian2German = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('nois');
  }

  return (
    <>
      <div className="m-10 min-h-80 border-2 border-gray-800 rounded-3xl p-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl p-8">
            <h3 className="text-xl text-center md:text-start md:text-2xl text-gray-200">
              Schwäbisch 🡆 Hochdeutsch
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Gebe hier den Hochdeutschen Satz ein"
                          className="resize-none w-full min-h-32 bg-transparent border-2 border-gray-200 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <span className="w-full flex justify-end">
                  <Button type="submit" className="bg-gray-800/20 text-xl p-4 w-full md:w-auto">
                    Submit
                  </Button>
                </span>
              </form>
            </Form>
          </div>
          <div className="rounded-2xl pb-8 md:pb-0 px-8 md:px-0 md:p-8">
            <h3 className="text-2xl text-gray-200">Übersetzung</h3>
            <div className="space-y-2 mt-6">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swabian2German;
