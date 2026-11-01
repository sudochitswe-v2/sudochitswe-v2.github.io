import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-[#8A2BE2] bg-[#FF6B00] text-black shadow-[2px_2px_0px_0px_#8A2BE2]",
        secondary:
          "border-[#FF6B00] bg-[#8A2BE2] text-white shadow-[2px_2px_0px_0px_#FF6B00]",
        destructive:
          "border-black bg-[#680000] text-[#FF6B00] shadow-[2px_2px_0px_0px_#FF0055]",
        outline:
          "border-[#39FF14] text-[#39FF14] bg-background/60 shadow-[0_0_8px_rgba(57,255,20,0.3)]",
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
