import * as z from "zod";
const BubbleEnum = z.enum(["left", "right", "thinkLeft", "thinkRight"]);
export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "This field is required",
  }),
  text: z
    .string()
    .min(0, "Enter atleast 0 letters")
    .max(120, "Max limit of 100 words reached"),
  bubble: BubbleEnum,
});
