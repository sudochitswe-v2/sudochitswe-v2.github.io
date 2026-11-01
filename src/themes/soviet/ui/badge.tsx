import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-none border-2 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider font-headline transition-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-[#FFC82C] bg-[#B81414] text-[#FFC82C] shadow-[2px_2px_0px_0px_#4A0000]",
        secondary:
          "border-[#B81414] bg-[#FFC82C] text-[#7A0000] shadow-[2px_2px_0px_0px_#7A0000]",
        destructive:
          "border-black bg-[#7A0000] text-white shadow-[2px_2px_0px_0px_#000]",
        outline:
          "border-[#B81414] text-[#B81414] bg-transparent",
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
