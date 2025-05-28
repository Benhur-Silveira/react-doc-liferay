import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { CodeBlock } from "@/components/codeBlock";
import bashSharedBundle from '@/assets/img/bash-create-shared-cli.png'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { codeButton, codeConsumerButton, codeConsumerHomeUI, codeConsumerHomeUtils, codeConsumerMask, codeConsumerValidation, codeLibsDayjs, codeLibsImask, codenpmbundlerrcCli, codeUtilsSharedBundle, codeValidationCpfCnpj, codeValidationEmail, stringUI } from '@/constants/codeStrings'
import { StructureDir, type StructureType } from "@/components/structureDir";

export const LiferayCliSharedBundle = () => {

  const structureSharedUi: StructureType[] = [
    {
      name: "react-shared-bundle",
      type: "folder",
      space: "",
      children: [
        {
          name: "src",
          type: "folder",
          space: "2"
        },
        {
          name: "components",
          type: "folder",
          space: "4"
        },
        {
          name: "button.jsx",
          type: "jsx",
          space: "8",
          code: codeButton
        },
        {
          name: "ui.js",
          type: "js",
          space: "4",
          code: stringUI
        }
      ]
    },
    {
      name: "modulo-consumidor",
      type: "folder",
      space: "",
      children: [
        {
          name: "src",
          type: "folder",
          space: "2"
        },
        {
          name: "pages",
          type: "folder",
          space: "4"
        },
        {
          name: "home.jsx",
          type: "jsx",
          space: "8",
          code: codeConsumerHomeUI
        },
        {
          name: "shared",
          type: "folder",
          space: "4"
        },
        {
          name: "ui",
          type: "folder",
          space: "8"
        },
        {
          name: "button.jsx",
          type: "jsx",
          space: "12",
          code: codeConsumerButton
        },

      ]
    }

  ]

  const structureSharedComponents: StructureType[] = [
    {
      name: "react-shared-bundle",
      type: "folder",
      space: "",
      children: [
        {
          name: "src",
          type: "folder",
          space: "2"
        },
        {
          name: "libs",
          type: "folder",
          space: "4"
        },
        {
          name: "dayjs.js",
          type: "js",
          space: "8",
          code: codeLibsDayjs
        },
        {
          name: "imask.js",
          type: "js",
          space: "8",
          code: codeLibsImask
        },
        {
          name: "validations",
          type: "folder",
          space: "4"
        },
        {
          name: "cpf_cnpj.js",
          type: "js",
          space: "8",
          code: codeValidationCpfCnpj
        },
        {
          name: "email.js",
          type: "js",
          space: "8",
          code: codeValidationEmail
        },
        {
          name: "utils.js",
          type: "js",
          space: "4",
          code: codeUtilsSharedBundle
        },
      ]
    },
    {
      name: "modulo-consumidor",
      type: "folder",
      space: "",
      children: [
        {
          name: "src",
          type: "folder",
          space: "2"
        },
        {
          name: "pages",
          type: "folder",
          space: "4"
        },
        {
          name: "home.jsx",
          type: "js",
          space: "8",
          code: codeConsumerHomeUtils
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
          name: "libs",
          type: "folder",
          space: "12",
        },
        {
          name: "mask.js",
          type: "js",
          space: "16",
          code: codeConsumerMask
        },
        {
          name: "validations.js",
          type: "js",
          space: "16",
          code: codeConsumerValidation
        }
      ]
    },
  ]

  return (
    <div>
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
            <BreadcrumbLink href="/liferay-cli/shared-bundle">Shared Bundle</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shared Bundle</h1>
        <p className="max-w-[750px] text-muted-foreground md:text-xl">
          Aprenda a criar um shared bundle para reutilizar componentes, bibliotecas e etc entre módulos.
        </p>
      </div>
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
              1
            </span>
            <CardTitle>No diretório onde ficarão os módulos executar o comando</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <CodeBlock code="liferay new <nome-do-shared-bundle>" />
          </div>
          <div className="rounded-md border overflow-hidden">
            <img
              src={bashSharedBundle}
              width={800}
              height={400}
              alt="Terminal mostrando o comando liferay new <nome-do-shared-bundle> em execução"
              className="w-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <div className="space-y-2">
              <h3 className="font-semibold">Opções disponíveis:</h3>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li>What type of project do you want to create? <span className="font-semibold">Liferay Platform Project</span></li>
                <li>What is the human readable description of your project? <span className="font-semibold">React Cli Shared Bundle</span></li>
                <li>Which will be your target platform? <span className="font-semibold">Distribuição Liferay utilizada</span></li>
                <li>Which will be your project type? <span className="font-semibold">Tipo do módulo (Shared bundle)</span></li>
                <li>Do you want to add localization support? <span className="font-semibold">Arquivo de internacionalização (não necessário para Shared Bundle)</span></li>
              </ul>
              <div className="flex flex-col gap-2">
                <p className="text-md text-muted-foreground">
                  Ao finalizar, o Liferay CLI irá criar uma pasta com o nome do módulo e dentro dela irá criar os arquivos necessários para o módulo. Faça as instalações necessárias e exporte os componentes, bibliotecas e etc que desejar para os módulos. Ao finalizar, execute os comandos:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <CodeBlock code="npm install" />
                  <CodeBlock code="npm run build" />
                  <CodeBlock code="./gradlew :modules:nome-do-modulo:deploy" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
              2
            </span>
            <CardTitle>Como compartilhar bibliotecas?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-md text-muted-foreground">
              Para compartilhar bibliotecas, basta instalar a mesma no shared bundle.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <ShieldAlert className="size-8" />
            <p className="text-md font-semibold">Observação: verifique se a versão da biblioteca é compatível com a versão do react instalada no shared bundle. As vezes é necessário instalar uma versão específica da biblioteca. Como por exemplo: o "imask" na versão 7.6.1 não é compatível, é necessário instalar a versão ^6.6.3</p>
          </div>
          <p className="text-md text-muted-foreground">
            Vá para o diretório do shared bundle e instale a biblioteca.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <CodeBlock code="cd <nome-do-shared-bundle>" />
            <CodeBlock code="npm install <nome-da-biblioteca>" />
          </div>
          <p className="text-md text-muted-foreground">
            Depois de instalar a biblioteca, faça o build e deploy.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <CodeBlock code="npm run build" />
            <CodeBlock code="./gradlew :modules:nome-do-modulo:deploy" />
          </div>
          <p className="text-md text-muted-foreground">
            Depois de terminar o deploy, basta ir até o módulo e adicionar as configurações necessárias no arquivo <strong>.npmbundlerrc</strong> que está na raiz do módulo.
          </p>
          <div className="flex items-start gap-2">
            <ShieldAlert className="size-6" />
            <p className="text-md font-semibold">Obs.: Caso o arquivo <strong>.npmbundlerrc</strong> não exista, crie-o manualmente.</p>
          </div>
          <div className="grid grid-cols-[2fr_1.5fr]">
            <SyntaxHighlighter className="rounded-md border overflow-hidden" language="json" style={darcula} showLineNumbers>
              {codenpmbundlerrcCli}
            </SyntaxHighlighter>
          </div>
        </CardContent>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
              3
            </span>
            <CardTitle>Como compartilhar componentes?</CardTitle>
          </div>
          <div className="flex items-start gap-2">
            <ShieldAlert className="size-6" />
            <p className="text-md font-semibold">Obs.: A importação no módulo consumidor deverá ser feita do aquivo (ui.js) que está na raiz do shared bundle. Em caso de erros na importação, verifique se está importando do arquivo (ui.js), se ainda persistir o erro, verifique a extenção do arquivo, caso esteja como .jsx altere para .js.</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-md text-muted-foreground">
            Exemplo:
          </p>
          <StructureDir structure={structureSharedUi} />
        </CardContent>

        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
              4
            </span>
            <CardTitle>Como compartilhar funções?</CardTitle>
          </div>
          <div className="flex items-start gap-2">
            <ShieldAlert className="size-6" />
            <p className="text-md font-semibold">Obs.: A importação no módulo deverá ser feita do aquivo (utils.js) que estiver na raiz do shared bundle.</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-md text-muted-foreground">
            Exemplo:
          </p>
          <StructureDir structure={structureSharedComponents} />
        </CardContent>
      </Card>
      <div className="flex justify-between w-full mt-8">
        <Link to="/liferay-cli/cli-modulo">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para módulo
          </Button>
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://learn.liferay.com/w/dxp/liferay-development/tooling/other-tools/liferay-cli-tool">
          <Button>
            Ir para Documentação Oficial
          </Button>
        </a>
      </div>
    </div>
  );
};