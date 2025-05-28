import { CodeBlock } from "@/components/codeBlock";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import bashModuloCli from '@/assets/img/bash-shared-cli.png'
import bashModuloCliForm from '@/assets/img/bash-form-shared-cli.png'
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";


export const LiferayCliModulo = () => {
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
            <BreadcrumbLink href="/liferay-cli">Configuração do ambiente</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/liferay-cli/modulo">Criação do módulo</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Criação do Módulo</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Aprenda a criar um novo módulo React para Liferay usando o Liferay CLI.
        </p>
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
            <div className="grid grid-cols-[2fr_1.5fr]">
              <CodeBlock code="liferay new <nome-do-modulo>" />
            </div>
            <div className="rounded-md border overflow-hidden">
              <img
                src={bashModuloCli}
                width={800}
                height={400}
                alt="Terminal mostrando o comando liferay new em execução"
                className="w-full object-cover"
              />

            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Opções disponíveis:</h3>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li>Liferay Platform Project</li>
                <li>Liferay Remote App Project</li>

              </ul>
              <p className="text-sm text-muted-foreground">
                Selecione <strong>Liferay Platform Project</strong>.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                2
              </span>
              <CardTitle>Preencha as informações do módulo</CardTitle>
            </div>
            <div className="rounded-md border overflow-hidden">
              <img
                src={bashModuloCliForm}
                width={800}
                height={400}
                alt="Terminal mostrando o comando liferay new em execução"
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Opções disponíveis:</h3>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li>What type of project do you want to create? <span className="font-semibold">Tipo de projeto a ser criado</span></li>
                <li>What is the human readable description of your project? <span className="font-semibold">Nome visível para consumir (nome que vai aparecer na lista de Widgets)</span></li>
                <li>Which will be your target platform? <span className="font-semibold">Distribuição Liferay utilizada</span></li>
                <li>Which will be your project type? <span className="font-semibold">Tipo de módulo (React)</span></li>
                <li>Under which category should your widget be listed? <span className="font-semibold">Grupo dos modulos (Onde será agrupado os módulos na lista de Widgets)</span></li>
              </ul>
              <div className="flex flex-col gap-2">
                <p className="text-md text-muted-foreground">
                  Ao finalizar, o Liferay Cli irá criar uma pasta com o nome do módulo e dentro dela irá criar os arquivos necessários para o módulo. Utilize o npm para buildar e gradlew para fazer o deploy do módulo.
                </p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                  <CodeBlock code="npm install" />
                  <CodeBlock code="npm run build" />
                  <CodeBlock code="./gradlew :modules:nome-do-modulo:deploy" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-between w-full mt-8">
        <Link to="/liferay-cli">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Config. do ambiente
          </Button>
        </Link>
        <Link to="/liferay-cli/cli-shared-bundle">
          <Button>
            Próximo: Shared bundle
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div >
  );
};