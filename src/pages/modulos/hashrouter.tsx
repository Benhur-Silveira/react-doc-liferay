import { CodeBlock } from "@/components/codeBlock";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

export const ModuloHashRouter = () => {
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
                <ShieldAlert className="size-6" />
                <p className="text-md font-semibold">Obs.: Se estiver utilizando o Shared Bundle, faça a instalação no shared bundle e importe no módulo consumidor. </p>
              </div>
            </CardHeader>
            <CardContent>
              <CodeBlock code="npm install react-router-dom" />
            </CardContent>
          </div>

          <div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                  2
                </span>
                <CardTitle>Crie o diretorio routes (nome que preferir) na dentro de src</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Exemplo: src/routes/routes.js</p>

            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};