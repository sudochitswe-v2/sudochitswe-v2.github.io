import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border-2 border-[#8A2BE2] bg-background/80 backdrop-blur px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-[2px_2px_0px_0px_#FF6B00] transition-colors focus:shadow-[0_0_12px_rgba(255,107,0,0.4)]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
