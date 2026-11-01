import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-bold tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] disabled:pointer-events-none disabled:opacity-50 uppercase [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#FF6B00] text-black border-2 border-[#8A2BE2] shadow-[3px_3px_0px_0px_#8A2BE2] hover:bg-[#8A2BE2] hover:text-[#FF6B00] hover:border-[#FF6B00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:shadow-[0_0_15px_rgba(255,107,0,0.6)]",
        destructive:
          "bg-[#680000] text-[#FF6B00] border-2 border-[#FF0055] shadow-[3px_3px_0px_0px_#000] hover:bg-[#8B0000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        outline:
          "border-2 border-[#FF6B00] bg-background/90 text-[#FF6B00] shadow-[3px_3px_0px_0px_#8A2BE2] hover:bg-[#FF6B00] hover:text-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        secondary:
          "bg-[#8A2BE2] text-white border-2 border-[#FF6B00] shadow-[3px_3px_0px_0px_#FF6B00] hover:bg-[#39FF14] hover:text-black hover:border-[#8A2BE2] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        ghost:
          "text-[#FF6B00] hover:bg-[#FF6B00]/15 active:bg-[#FF6B00]/25",
        link: "text-[#FF6B00] underline-offset-4 hover:underline hover:text-[#39FF14]",
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
