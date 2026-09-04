import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border-2 px-2.5 py-0.5 text-xs font-bold uppercase transition-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-neon-cyan bg-[#0a0a2e] text-neon-cyan retro-glow",
        secondary:
          "border-neon-magenta bg-[#0a0a2e] text-neon-magenta retro-glow",
        destructive:
          "border-[#ff0000] bg-[#0a0a2e] text-[#ff0000] retro-glow",
        outline: "border-border-bevel text-dim-text",
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
