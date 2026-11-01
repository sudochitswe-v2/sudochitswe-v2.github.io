import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-xs font-bold tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8B229] disabled:pointer-events-none disabled:opacity-50 uppercase [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-[#D42426] text-white border-2 border-[#F8B229] shadow-[3px_3px_0px_0px_#165B33] hover:bg-[#165B33] hover:text-[#F8B229] hover:border-[#D42426] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:shadow-[0_0_15px_rgba(248,178,41,0.5)]",
        destructive:
          "bg-[#800F11] text-white border-2 border-[#D42426] shadow-[3px_3px_0px_0px_#000] hover:bg-red-800 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        outline:
          "border-2 border-[#165B33] bg-background/80 text-[#165B33] dark:text-[#52B788] shadow-[3px_3px_0px_0px_#D42426] hover:bg-[#165B33] hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        secondary:
          "bg-[#F8B229] text-[#165B33] border-2 border-[#165B33] shadow-[3px_3px_0px_0px_#D42426] hover:bg-[#D42426] hover:text-[#F8B229] hover:border-[#F8B229] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        ghost:
          "text-[#D42426] hover:bg-[#D42426]/10 active:bg-[#D42426]/20",
        link: "text-[#D42426] underline-offset-4 hover:underline hover:text-[#165B33]",
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
