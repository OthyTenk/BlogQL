"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import Heading from "./Heading";
import { Separator } from "./ui/separator";

const formSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "title must be at least 2 characters",
    })
    .max(144),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters",
  }),
});

type PostFormValues = z.infer<typeof formSchema>;

const PostForm = () => {
  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<PostFormValues> = (values) => {
    console.log(values);
  };

  return (
    <div className="space-y-6">
      <div>
        <Heading title="Create a post" description="manage your post" />
        <Separator />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post</FormLabel>
                <FormControl>
                  <Input placeholder="Post" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-8">
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;
