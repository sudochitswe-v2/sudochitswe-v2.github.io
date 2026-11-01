import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400",
  {
    variants: {
      variant: {
        default:
          "border-yellow-400/50 bg-red-950/80 text-yellow-300 shadow-sm",
        secondary:
          "border-emerald-500/30 bg-emerald-950/60 text-emerald-200",
        destructive:
          "border-red-800 bg-[#3A1414] text-red-300",
        outline:
          "border-yellow-400/40 text-yellow-300 bg-yellow-950/30",
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
