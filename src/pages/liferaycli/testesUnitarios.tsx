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
import { codeJestConfigLiferaySenSharedBundle, codeJestSetupLiferaySenSharedBundle, codePackageJsonLiferaySenSharedBundle, codeTextMaskComponent, codeTextMaskTestComSharedBundle, codeTitleComponent, codeTitleTestSemSharedBundle, codeUrtilsSharedBundle } from "@/constants/codeTestes";
export const LiferayCliTestesUnitarios = () => {

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
          name: "Title.test.js",
          type: "js",
          space: "8",
          code: codeTitleTestSemSharedBundle
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
          name: "Title.js",
          type: "js",
          space: "12",
          code: codeTitleComponent
        },
        {
          name: "jest.config.js",
          type: "js",
          space: "4",
          code: codeJestConfigLiferaySenSharedBundle
        },
        {
          name: "jest.setup.js",
          type: "js",
          space: "4",
          code: codeJestSetupLiferaySenSharedBundle
        }, {
          name: "package.json",
          type: "json",
          space: "4",
          code: codePackageJsonLiferaySenSharedBundle
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
          name: "TextMask.test.js",
          type: "js",
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
          name: "TextMask.js",
          type: "js",
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
          name: "jest.config.js",
          type: "js",
          space: "4",
          code: codeJestConfigLiferaySenSharedBundle
        },
        {
          name: "jest.setup.js",
          type: "js",
          space: "4",
          code: codeJestSetupLiferaySenSharedBundle
        }, {
          name: "package.json",
          type: "json",
          space: "4",
          code: codePackageJsonLiferaySenSharedBundle
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
            <BreadcrumbLink href="/liferay-cli">Liferay CLI</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/liferay-cli/cli-testes-unitarios">
              Testes Unitários
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-2 w-full">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Testes Unitários
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Testes unitários para módulos React criados com Liferay CLI.
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
              <div className="grid md:grid-cols-1 grid-cols-1">
                <CodeBlock code="npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer  @testing-library/react  jest-environment-jsdom @testing-library/jest-dom" />
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
              <div className="grid md:grid-cols-1 grid-cols-1">
                <CodeBlock code="npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer  @testing-library/react  jest-environment-jsdom @testing-library/jest-dom" />
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
