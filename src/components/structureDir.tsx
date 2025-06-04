import jsIcon from '@/assets/img/javascript-icon.png'
import reactIcon from '@/assets/img/react.svg'
import babelIcon from '@/assets/img/babel-icon.png'
import { Folder } from 'lucide-react'
import { StructureCode } from './structureCode'
import { cn } from '@/lib/utils'

const fileType = {
  js: jsIcon,
  jsx: reactIcon,
  babelrc: babelIcon,
  properties: "",
  json: ""
}


export type StructureType = {
  name: string,
  type: 'folder' | "js" | "jsx" | "babelrc" | "properties" | "json",
  code?: string,
  space?: string,
  children?: StructureType[]
}

export const StructureDir = ({ structure }: { structure: StructureType[] }) => {

  return (
    <>
      {structure.map(({ name, type, code, space = "0", children }) => {
        return (
          <div key={name} className={cn("flex flex-col gap-2", { ml: space })} style={{ marginLeft: +space * 4 }}>
            <div className="flex items-center gap-2">
              {type === "folder" ? <Folder className="h-4 w-4 " /> : <img src={fileType[type]} alt={name} />}
              <span>{name}</span>
            </div>
            {code && <StructureCode codeString={code} label={name} space={space} />}
            {children && children.length > 0 && children.map((child) => {
              return (
                <div key={child.name} className={cn("flex flex-col gap-2", { ml: child.space })} >

                  {child.code ? <StructureCode codeString={child.code} label={child.name} space={child.space} /> :
                    (
                      <div className={`flex items-center gap-2`} style={{ marginLeft: child.space ? +child.space * 4 : 0 }}>
                        {child.type === "folder" ? <Folder className="h-4 w-4 " /> : <img src={fileType[child.type]} alt={child.name} className='h-4 w-4' />}
                        <span>{child.name}</span>
                      </div>
                    )}
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}