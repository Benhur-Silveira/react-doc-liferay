import SyntaxHighlighter from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useState } from "react"
import { Code, Code2 } from 'lucide-react'

export const ViewCode = ({ codeString, label }: { codeString: string, label: string | React.ReactNode }) => {
  const [showCode, setShowCode] = useState(true)
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-semibold">{label}</span>
        <div className="flex items-center gap-2 cursor-pointer" role="button" onClick={() => setShowCode(!showCode)}>
          {showCode ? (
            <Code className="size-5" />
          ) : (
            <Code2 className="size-5" />
          )}
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1.5fr]" style={{ display: showCode ? "grid" : "none" }}>
        <SyntaxHighlighter className="rounded-md border overflow-hidden" language="typescript" style={darcula} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}