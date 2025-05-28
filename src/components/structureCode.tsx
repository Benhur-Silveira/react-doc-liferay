import jsIcon from '@/assets/img/javascript-icon.png'
import reactIcon from '@/assets/img/react.svg'
import babelIcon from '@/assets/img/babel-icon.png'
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Code, Code2 } from 'lucide-react'


interface StructureCodeProps {
  codeString: string,
  label: string,
  className?: string,
}

const renderIcon = {
  js: jsIcon,
  jsx: reactIcon,
  babelrc: babelIcon,
}

export const StructureCode = ({ codeString, label, className }: StructureCodeProps) => {
  const typeIcon = label.split('.')[1]
  const [showCode, setShowCode] = useState(false)
  return (
    <div className={cn("", className)}>
      <div className={cn("flex items-center gap-2 cursor-pointer w-[max-content]")} role="button" onClick={() => setShowCode(!showCode)}>
        <img src={renderIcon[typeIcon as keyof typeof renderIcon]} alt="React Icon" className="h-4 w-4" />
        <span>{label}</span>
        <div className="flex items-center gap-2 " >
          {showCode ? (
            <Code className="size-5" />
          ) : (
            <Code2 className="size-5" />
          )}
        </div>
      </div>
      <div className={cn("grid grid-cols-[2fr_1.5fr]", { hidden: !showCode })}>
        <SyntaxHighlighter className="rounded-md border overflow-hidden" language="typescript" style={darcula} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}