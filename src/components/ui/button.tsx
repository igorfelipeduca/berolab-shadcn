import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-xl transition-colors duration-150 ease-linear flex items-center justify-center text-md cursor-pointer uppercase font-bold active:opacity-70 tracking-wider",
  {
    variants: {
      variant: {
        default:
          "bg-transparent border-2 border-zinc-200 text-white hover:bg-zinc-200/10",
        destructive:
          "border-2 border-destructive text-destructive hover:bg-destructive/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        dracula: "border-2 border-dracula text-dracula hover:bg-dracula/10",
        muted: "border-2 border-zinc-600 text-zinc-600 hover:bg-zinc-600/10",
      },
      size: {
        default: "h-9 p-6 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
