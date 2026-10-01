import * as React from "react"
import { cn } from "@/lib/utils"
export function Button({className,...props}: React.ButtonHTMLAttributes<HTMLButtonElement>){return <button className={cn("inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 disabled:opacity-50",className)} {...props}/> }
