import jsIcon from '@/assets/img/javascript-icon.png'
import reactIcon from '@/assets/img/react.svg'
import babelIcon from '@/assets/img/babel-icon.png'
import { Folder } from 'lucide-react'
import { StructureCode } from './structureCode'
import { cn } from '@/lib/utils'

const fileType = {
  js: jsIcon,
  jsx: reactIcon,
  babelrc: babelIcon
}


export type StructureType = {
  name: string,
  type: 'folder' | "js" | "jsx" | "babelrc",
  code?: string,
  space?: string,
  children?: StructureType[]
}

export const StructureDir = ({ structure }: { structure: StructureType[] }) => {

  return (
    <>
      {structure.map(({ name, type, code, space, children }) => {
        return (
          <div key={name} className={cn("flex flex-col gap-2", `ml-${space}`)}>
            <div className="flex items-center gap-2">
              {type === "folder" ? <Folder className="h-4 w-4" /> : <img src={fileType[type]} alt={name} />}
              <span>{name}</span>
            </div>
            {code && <StructureCode codeString={code} label={name} />}
            {children && children.length > 0 && children.map((child) => {
              return (
                <div key={child.name} className={cn("flex flex-col gap-2", `ml-${child.space}`)}>

                  {child.code ? <StructureCode className='' codeString={child.code} label={child.name} /> :
                    (
                      <div className="flex items-center gap-2">
                        {child.type === "folder" ? <Folder className="h-4 w-4" /> : <img src={fileType[child.type]} alt={child.name} className='h-4 w-4' />}
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