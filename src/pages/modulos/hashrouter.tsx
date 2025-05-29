import { CodeBlock } from "@/components/codeBlock";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";
import { StructureDir, type StructureType, } from "@/components/structureDir";
import { codeLanguagesAbout, codeLanguagesEn, codeLanguagesHome, codeLanguagesPt } from "@/constants/codeLanguages";
import { codeRoutes, codeRoutesAbout, codeRoutesHome, codeRoutesIndex } from "@/constants/codeRoute";

export const ModuloHashRouter = () => {

  const structureHashRouter: StructureType[] = [{
    name: "react-com-router",
    type: "folder",
    children: [
      {
        name: "features",
        type: "folder",
        space: "2"
      },
      {
        name: "localization",
        type: "folder",
        space: "4"
      },
      {
        name: "Language.properties",
        type: "properties",
        space: "8",
        code: codeLanguagesEn
      },
      {
        name: "Language_pt_BR.properties",
        type: "properties",
        space: "8",
        code: codeLanguagesPt
      },
      {
        name: "src",
        type: "folder",
        space: "2"
      },
      {
        name: "languages",
        type: "folder",
        space: "4"
      },
      {
        name: "about.js",
        type: "js",
        space: "8",
        code: codeLanguagesAbout
      },
      {
        name: "home.js",
        type: "js",
        space: "8",
        code: codeLanguagesHome
      },
      {
        name: "pages",
        type: "folder",
        space: "4"
      },
      {
        name: "about.js",
        type: "js",
        space: "8",
        code: codeRoutesAbout
      },
      {
        name: "home.js",
        type: "js",
        space: "8",
        code: codeRoutesHome
      },
      {
        name: "routes",
        type: "folder",
        space: "4"
      },
      {
        name: "routes.js",
        type: "js",
        space: "8",
        code: codeRoutes
      },
      {
        name: "index.js",
        type: "js",
        space: "2",
        code: codeRoutesIndex
      },

    ],
  }];
  return (
    <div>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/modulo">Módulos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/modulo/hash-router">HashRouter</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">HashRouter</h1>
        <p className="max-w-[750px] text-muted-foreground md:text-xl">
          Aprenda a configurar seu módulo para usar o HashRouter respeitando as restrições do portal e evitando conflitos com o roteamento da plataforma.
        </p>
        <Card className="w-full">
          <div className="space-y-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                  1
                </span>
                <CardTitle>Fazer a instalação do react-router-dom</CardTitle>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <ShieldAlert className="size-6" />
                </div>
                <p className="text-md font-semibold">Obs.: Se estiver utilizando o Shared Bundle, faça a instalação no shared bundle e importe no módulo consumidor. A versão do react-router-dom de exemplo é a versão compativel com a do react abaixo de 17.0.0</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <CodeBlock code="npm install react-router-dom@5.3.4" />
              </div>
            </CardContent>
          </div>

          <div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                  2
                </span>
                <CardTitle>Crie o diretorio routes (nome que preferir) dentro de src</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Exemplo: src/routes/routes.js</p>
              <StructureDir structure={structureHashRouter} />
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};