import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs font-bold font-headline tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#B81414] text-[#FFC82C] border-2 border-[#FFC82C] shadow-[3px_3px_0px_0px_#4A0000] hover:bg-[#FFC82C] hover:text-[#7A0000] hover:border-[#B81414] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        destructive:
          "bg-[#7A0000] text-white border-2 border-[#B81414] shadow-[3px_3px_0px_0px_#000] hover:bg-red-700 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        outline:
          "border-2 border-[#B81414] bg-background text-[#B81414] shadow-[3px_3px_0px_0px_#7A0000] hover:bg-[#B81414] hover:text-[#FFC82C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        secondary:
          "bg-[#FFC82C] text-[#7A0000] border-2 border-[#7A0000] shadow-[3px_3px_0px_0px_#7A0000] hover:bg-[#B81414] hover:text-[#FFC82C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        ghost:
          "text-[#B81414] hover:bg-[#B81414]/15 active:bg-[#B81414]/25",
        link: "text-[#B81414] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-[11px]",
        lg: "h-12 px-8 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
