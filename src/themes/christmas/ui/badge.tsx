import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-[#F8B229] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-[#F8B229] bg-[#D42426] text-white shadow-[2px_2px_0px_0px_#165B33]",
        secondary:
          "border-[#D42426] bg-[#165B33] text-white shadow-[2px_2px_0px_0px_#F8B229]",
        destructive:
          "border-black bg-[#800F11] text-white shadow-[2px_2px_0px_0px_#D42426]",
        outline:
          "border-[#F8B229] text-[#165B33] dark:text-[#F8B229] bg-background/60 shadow-[0_0_8px_rgba(248,178,41,0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
