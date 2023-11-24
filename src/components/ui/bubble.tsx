import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const bubbleVariants = cva(
  "min-w-[65px] max-w-[120px] break-words font-marker bg-white inline-block relative clear-both  rounded-[10px] border-[3px] border-solid border-[black] before:content-[''] before:absolute before:bottom-[-25px] before:h-[25px] before:w-[60px]",
  {
    variants: {
      variant: {
        left: "float-left before:bg-no-repeat before:shadow-[-2px_-2px_0_0_#000_inset,-23px_0_0_0_#fff_inset,-25px_-2px_0_0_#000_inset] before:rounded-[0_0_100%] before:left-[-14px]",
        right:
          "float-right before:shadow-[2px_-2px_0_0_#000_inset,23px_0_0_0_#fff_inset,25px_-2px_0_0_#000_inset] before:rounded-[0_0_0_100%] before:right-[-10px]",
        thinkLeft:
          "before:h-[3px] before:w-[3px] before:rounded-[100%] before:-bottom-5 before:shadow-[0_0_0_7px_white,0_0_0_10px_black,-20px_15px_0_5px_white,-20px_15px_0_8px_black,-40px_20px_0_2px_white,-40px_20px_0_5px_black] before:left-[30px]",
        thinkRight:
          "before:h-[3px] before:w-[3px] before:rounded-[100%] before:-bottom-5 before:shadow-[0_0_0_7px_white,0_0_0_10px_black,20px_15px_0_5px_white,20px_15px_0_8px_black,40px_20px_0_2px_white,40px_20px_0_5px_black] before:right-[35px]",
      },
    },
    defaultVariants: {
      variant: "left",
    },
  }
);

export interface BubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bubbleVariants> {}

const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>(
  ({ variant, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(bubbleVariants({ variant, className }))}
      {...props}
    />
  )
);
Bubble.displayName = "Bubble";

const BubbleDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-secondary font-marker first-letter:font-400 text-sm",
      className
    )}
    {...props}
  />
));
BubbleDescription.displayName = "BubbleDescription";

const BubbleContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative p-2", className)} {...props} />
));
BubbleContent.displayName = "BubbleContent";

export { Bubble, BubbleContent, BubbleDescription,bubbleVariants };
