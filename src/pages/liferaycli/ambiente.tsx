import { CodeBlock } from "@/components/codeBlock";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const LiferayCliAmbiente = () => {
  return (
    <div>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/liferaycli">Liferay CLI</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/liferaycli/ambiente">Configuração do ambiente</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Configuração do ambiente</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Aprenda a configurar seu ambiente para criar módulos React para Liferay.
        </p>
      </div>

      <div className="mt-8 w-[500px]">
        <Card>
          <CardHeader>
            <CardTitle>Requisitos</CardTitle>
            <CardDescription>O que você precisa para começar</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 my-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Node.js (recomendado v18.16.0)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>npm (gerenciador de pacotes)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Liferay CLI</span>
              </li>

            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 grid w-full gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                1
              </span>
              Node.js e npm
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Instale o Node.js (recomendado v18.16.0) para compatibilidade com Liferay.
            </p>
            <div className="bg-muted p-3 rounded-md">
              <p className="font-mono text-sm">
                <a
                  href="https://nodejs.org/dist/v18.16.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Node.js (nodejs.org)
                </a>
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Obs: Talvez versões mais atuais podem gerar conflitos com o liferay, recomendado utilizar o node na
              versão 18.16.0
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                2
              </span>
              Instalação do Liferay CLI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Instale o Liferay CLI globalmente:
            </p>
            <CodeBlock code="npm install -g @liferay/cli" />
          </CardContent>
        </Card>

      </div>
      <div className="flex justify-between w-full mt-8">
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para início
          </Button>
        </Link>
        <Link to="/liferay-cli/cli-modulo">
          <Button>
            Próximo: Criação de Módulo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};