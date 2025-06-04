import { CodeBlock } from "@/components/codeBlock";
import { StructureDir, type StructureType } from "@/components/structureDir";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { codeConsumerCliMask } from "@/constants/codeStrings";
import { codeJestSetupLiferaySenSharedBundle, codeTextMaskComponent, codeTextMaskTestComSharedBundle, codeTitleComponentYo, codeTitleTestSemSharedBundleYo, codeUrtilsSharedBundle, codeViteConfigComSharedBundleYo, codeViteConfigYo } from "@/constants/codeTestes";


export const YoLiferayJsTestesUnitarios = () => {

  const structureTesteSemShared: StructureType[] = [
    {
      name: "react-sem-shared-bundle",
      type: "folder",
      space: "",
      children: [
        {
          name: "__tests__",
          type: "folder",
          space: "4",
        },
        {
          name: "Title.test.jsx",
          type: "jsx",
          space: "8",
          code: codeTitleTestSemSharedBundleYo
        },
        {
          name: "src",
          type: "folder",
          space: "4",
        },
        {
          name: "components",
          type: "folder",
          space: "8",
        },
        {
          name: "Title.jsx",
          type: "jsx",
          space: "12",
          code: codeTitleComponentYo
        },
        {
          name: "jest.setup.js",
          type: "js",
          space: "4",
          code: codeJestSetupLiferaySenSharedBundle
        },
        {
          name: "vite.config.js",
          type: "js",
          space: "4",
          code: codeViteConfigYo
        },
        {
          name: "package.json",
          type: "json",
          space: "4",
          code: `"scripts": {
	"build": "babel --source-maps -d build src && npm run copy-assets && liferay-npm-bundler",
	"copy-assets": "lnbs-copy-assets",
	"translate": "lnbs-translate",
	"deploy": "npm run build && lnbs-deploy",
	"test": "vitest",
	"start": "lnbs-start"
}`
        }
      ]
    }
  ]

  const structureTesteComShared: StructureType[] = [
    {
      name: "react-com-shared-bundle",
      type: "folder",
      space: "",
      children: [
        {
          name: "__mocks__",
          type: "folder",
          space: "4",
        },
        {
          name: "react-shared-bundle",
          type: "folder",
          space: "8",
        },
        {
          name: "utils.js",
          type: "js",
          space: "12",
          code: codeUrtilsSharedBundle
        },
        {
          name: "__tests__",
          type: "folder",
          space: "4",
        },
        {
          name: "TextMask.test.jsx",
          type: "jsx",
          space: "8",
          code: codeTextMaskTestComSharedBundle
        },
        {
          name: "src",
          type: "folder",
          space: "4",
        },
        {
          name: "components",
          type: "folder",
          space: "8",
        },
        {
          name: "TextMask.jsx",
          type: "jsx",
          space: "12",
          code: codeTextMaskComponent
        },
        {
          name: "shared",
          type: "folder",
          space: "4"
        },
        {
          name: "utils",
          type: "folder",
          space: "8"
        },
        {
          name: "mask.js",
          type: "js",
          space: "12",
          code: codeConsumerCliMask
        },
        {
          name: "jest.setup.js",
          type: "js",
          space: "4",
          code: codeJestSetupLiferaySenSharedBundle
        },
        {
          name: "vite.config.js",
          type: "js",
          space: "4",
          code: codeViteConfigComSharedBundleYo
        },
        {
          name: "package.json",
          type: "json",
          space: "4",
          code: `"scripts": {
    "build": "babel --source-maps -d build src && npm run copy-assets && liferay-npm-bundler",
    "copy-assets": "lnbs-copy-assets",
    "translate": "lnbs-translate",
    "deploy": "npm run build && lnbs-deploy",
    "test": "vitest",
    "start": "lnbs-start"
}`
        }
      ]
    }
  ]



  return (
    <div className="w-full">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/yo-liferay-js">Yo Liferay-js</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/yo-liferay-js/yo-testes-unitarios">Testes Unitários</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-2 w-full">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Testes Unitários
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Testes unitários para módulos React criados com Yo Liferay-js.
        </p>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Testes Unitários</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 ml-4">
              <div className="flex gap-2 items-center ">
                <div>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    1
                  </span>
                </div>
                <CardTitle>Módulo sem consumir o Shared Bundle</CardTitle>
              </div>
              <p>Começe fazendo as instalações necessárias para o jest no seu módulo</p>
              <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1">
                <CodeBlock code="npm install -D vite@2.9.16 vitest@0.34.6 jsdom@16.7.0 @testing-library/jest-dom@5.16.5 @testing-library/react@9.5.0" />
              </div>
              <p>Feito isso, crie os arquivos jest.config.js e jest.setup.js na raiz do seu módulo e altere o arquivo package.json para adicionar os scripts de testes, então crie a pasta __tests__ na raiz do módulo e crie os arquivos de testes para os seus componentes</p>
              <StructureDir structure={structureTesteSemShared} />
              <p>Feitas as configurações necessárias, execute os testes</p>
              <div className="grid sm:grid-cols-4 grid-cols-1">
                <CodeBlock code="npm test" />
              </div>
            </div>
          </CardContent>
          <CardContent>
            <div className="space-y-2 ml-4">
              <div className="flex gap-2 items-center ">
                <div>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    2
                  </span>
                </div>
                <CardTitle>Módulo consumindo o Shared Bundle</CardTitle>
              </div>
              <p>Começe fazendo as instalações necessárias para o jest no seu módulo</p>
              <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1">
                <CodeBlock code="npm install -D vite@2.9.16 vitest@0.34.6 jsdom@16.7.0 @testing-library/jest-dom@5.16.5 @testing-library/react@9.5.0" />
              </div>
              <p>Feito isso, crie os arquivos jest.config.js e jest.setup.js na raiz do seu módulo e altere o arquivo package.json para adicionar os scripts de testes, então crie as pastas __tests__  e __mocks__ na raiz do módulo e crie os arquivos de testes para os seus componentes</p>
              <StructureDir structure={structureTesteComShared} />
              <p>Feitas as configurações necessárias, execute os testes</p>
              <div className="grid sm:grid-cols-4 grid-cols-1">
                <CodeBlock code="npm test" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
