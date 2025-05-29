import jsIcon from '@/assets/img/javascript-icon.png'
import reactIcon from '@/assets/img/react.svg'
import babelIcon from '@/assets/img/babel-icon.png'
import pythonIcon from '@/assets/img/pyton-icon.png'
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Braces, Code, Code2, File, } from 'lucide-react'


interface StructureCodeProps {
  codeString: string,
  label: string,
  className?: string,
  show?: boolean
}

const renderIcon = {
  js: jsIcon,
  jsx: reactIcon,
  babelrc: babelIcon,
  py: pythonIcon,
}

export const StructureCode = ({ codeString, label, className, show = false }: StructureCodeProps) => {
  const [typeIcon] = label.split('.').reverse()
  const [showCode, setShowCode] = useState(show)


  return (
    <div className={cn("", className)}>
      <div className={cn("flex items-center gap-2 cursor-pointer w-[max-content]")} role="button" onClick={() => setShowCode(!showCode)}>
        {typeIcon === "properties" ? <Code2 className="size-5" /> : typeIcon === "json" ? <Braces className="size-5" /> : renderIcon[typeIcon as keyof typeof renderIcon] === undefined ? <File className="size-5" /> : <img src={renderIcon[typeIcon as keyof typeof renderIcon]} alt="React Icon" className="h-4 w-4" />}
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