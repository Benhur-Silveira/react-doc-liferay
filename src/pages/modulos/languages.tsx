import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { StructureDir, type StructureType } from "@/components/structureDir";

import { codeLanguagesAbout, codeLanguagesEn, codeLanguagesHome, codeLanguagesPt } from "@/constants/codeLanguages";
import { codeRoutesAbout, codeRoutesHome } from "@/constants/codeRoute";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export const ModuloLanguages = () => {
  const structureHashRouter: StructureType[] = [{
    name: "modulo-react",
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
            <BreadcrumbLink href="/modulo/languages">Languages/Internacionalização</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Languages/Internacionalização</h1>
        <p className="max-w-[800px] text-muted-foreground md:text-xl">
          Aprenda a configurar seu módulo para usar a internacionalização disponibilizada pelo liferay.
        </p>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Arquivos de internacionalização</CardTitle>
            <span>Por padrão o liferay cria somente o arquivo Language.properties que é o arquivo de internacionalização padrão. Entretanto, para que a tradução funcione corretamente, é necessário criar o arquivo Language_pt_BR.properties para o português.</span>


            <a className="flex items-center gap-2 text-blue-500 hover:underline" href="https://github.com/oazapater/liferay/tree/master/liferay-portal-src-6.2-ce-ga6/portal-impl/src/content" target="_blank" rel="noopener noreferrer">Aqui um repositório com alguns arquivos de internacionalização
              <ExternalLink className="size-6" /></a>

          </CardHeader>
          <CardContent>
            <StructureDir structure={structureHashRouter} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};