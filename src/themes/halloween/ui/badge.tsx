import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
  {
    variants: {
      variant: {
        default:
          "border-orange-500/60 bg-[#26211C] text-orange-400 shadow-sm",
        secondary:
          "border-[#443D36] bg-[#1E1B18] text-stone-300",
        destructive:
          "border-red-800 bg-[#3A1414] text-red-300",
        outline:
          "border-green-500/50 text-green-400 bg-[#17241A]/50",
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
