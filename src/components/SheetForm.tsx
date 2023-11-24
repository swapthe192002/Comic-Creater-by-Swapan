import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/schema";
import { bubbleType } from "@/constants/data";
import { nanoid } from "nanoid";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Comic, Data, SheetFormProps } from "@/lib/interfaces";
import { query } from "@/lib/api";

const SheetForm: React.FC<SheetFormProps> = ({
  setLoading,
  isOpen,
  setIsOpen,
  setComic,
}) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      text: "",
      bubble: "left",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset({
      prompt: "",
      text: "",
      bubble: "left",
    });
    toast({
      title: "Generating your comic panel.",
      description: "Please wait while we process your request!",
    });
    setIsOpen(false);
    setLoading(true);
    query({ inputs: values.prompt })
      .then((response) => {
        let nano = nanoid();
        if (response) {
          const imageUrl = URL.createObjectURL(response);
          const newComic: Comic = {
            id: nano,
            img: imageUrl,
            text: values.text,
            bubble: values.bubble,
          };
          setComic((prevComic) => ({
            cardArray: [...(prevComic?.cardArray || []), newComic],
          }));
        } else {
          toast({
            variant: "destructive",
            title: "Oops! Something went wrong.",
            description: "Unexpected response from the server.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
      })
      .catch((error) => {
        console.error("Error during API call:", error);
        let errorMessage = "An error occurred. Please try again.";
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong.",
          description: errorMessage,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side={"left"} className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Add a comic panel</SheetTitle>
          <SheetDescription>
            Make awesome comic strips with just a simple prompt. Once you are
            done, click submit.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 mt-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter a prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="A person eating a roll"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Unleash your creative side here.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter a text</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Hello, there!" {...field} />
                    </FormControl>
                    <FormDescription>
                      This text will appear in the text bubble of the comic
                      panel.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bubble"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specify the type of bubble</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {bubbleType.map((bubble) => (
                          <SelectItem key={bubble.id} value={bubble.type}>
                            {bubble.val}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SheetFooter>
                <Button type="submit">
                  Submit
                </Button>
              </SheetFooter>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default SheetForm;
