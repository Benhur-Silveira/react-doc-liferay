"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  className?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, className, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative group rounded-md overflow-hidden", className)}>
      <pre
        className={cn(
          "bg-black text-white p-3 rounded-md font-mono text-sm overflow-x-auto",
          showLineNumbers && "pl-12 relative",
        )}
      >
        {showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-muted-foreground/10 flex flex-col items-center pt-3 text-muted-foreground/50 text-xs">
            {code.split("\n").map((_, i) => (
              <div key={i} className="leading-5">
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Copiar código"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}
