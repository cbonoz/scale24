"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { isEmpty, signUrl } from "@/lib/utils";
import { setKey } from "@/util/api";
import RenderObject from "./render-object";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Request name must be at least 3 characters.",
  }),
  recipient: z.string().min(3, {
    message: "Recipient name must be at least 3 characters.",
    }),
  // optional
  date: z.date().optional(),
  notes: z.string().optional(),
});

function UploadForm() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "$5000 balance verification",
      notes: "This is to validate proof of funds to have an offer considered",
      date: new Date(),
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      // upload contract
      // TODO
      const address = "0x123";


      setResult({
        success: true,
        message: 'Request created successfully. Share the below url with the intended recipient.',
        url: signUrl(address),
      });
      // scroll to result
      window.scrollTo(0, document.body.scrollHeight);

      form.setValue("name", "");
    } catch (err: any) {
      console.error(err);
      setResult({
        error: err?.message || "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  }

  const hasResult = !isEmpty(result);

  return (
    <div>
      {!hasResult && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter fund request name</FormLabel>
                  <FormControl>
                    <Input placeholder="$5000 balance request verification" {...field} />
                  </FormControl>
                  <FormDescription>Name of the request.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Notes */}
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter description</FormLabel>
                  <FormControl>
                    <Input placeholder="Notes" {...field} />
                  </FormControl>
                  <FormDescription>Additional notes for the request.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              disabled={true}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input placeholder="Date" disabled={true} value={new Date().toLocaleDateString()} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={loading} type="submit">
              Submit
            </Button>
          </form>

          {/* error */}
          {/* {form.formState.errors && (
        <div className="pt-8">
          <div className="text-xl text-bold">Errors:</div>
          <div>{JSON.stringify(form.formState.errors)}</div>
        </div>
      )} */}

          {/* formState */}
        </Form>
      )}
      {hasResult && (
        <div className="pt-8">
          <Button onClick={() => setResult(null)}> ← Back to form</Button>
          <div className="mt-4">
            <RenderObject title="Result" obj={result} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadForm;
