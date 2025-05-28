import { CodeBlock } from "@/components/codeBlock";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import bashModuloYo from '@/assets/img/modulo_yo.png'
import bashModuloForm from '@/assets/img/form_modulo_yo.png'
import githubIcon from '@/assets/img/github-mark.png'
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const YoLiferayJsModulo = () => {
  return (
    <div>
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
            <BreadcrumbLink href="/yo-liferay-js">Configuração do ambiente</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/yo-liferay-js/modulo">Criação do módulo</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Criação do Módulo</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Aprenda a criar um novo módulo React para Liferay usando o generator.
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
            <CodeBlock code="yo liferay-js" />
            <div className="rounded-md border overflow-hidden">
              <img
                src={bashModuloYo}
                width={800}
                height={400}
                alt="Terminal mostrando o comando yo liferay-js em execução"
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Opções disponíveis:</h3>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li>JavaScript Widget</li>
                <li>Angular Widget</li>
                <li>React Widget</li>
                <li>Vue.js Widget</li>
                <li>Metal.js Widget</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Selecione <strong>React Widget</strong> para criar um módulo React.
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
                src={bashModuloForm}
                width={800}
                height={400}
                alt="Terminal mostrando o comando yo liferay-js em execução"
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Opções disponíveis:</h3>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li>What name shall I give to the folder hosting your project? <span className="font-semibold">nome-do-modulo (ideal começar sempre com react-nome-do-modulo)</span></li>
                <li>What is the human readable description of your project? <span className="font-semibold">Nome visível para consumir (nome que vai aparecer na lista de Widgets)</span></li>
                <li>Do you want to add localization support? <span className="font-semibold">Yes (arquivo para tradução)</span></li>
                <li>Do you want to add configuration support? <span className="font-semibold">Yes (arquivo para configuração)</span></li>
                <li>Under which category should your widget be listed? <span className="font-semibold">grupo dos modulos</span></li>
                <li>Do you have a local installation of Liferay for development? <span className="font-semibold">Yes</span></li>
                <li>Where is your local installation of Liferay placed? <span className="font-semibold">../../bundles (caminho da pasta bundles, geralmente fica na raiz do projeto)</span></li>
                <li>Do you want to generate sample code? <span className="font-semibold">Yes (gera um arquivo de exemplo)</span></li>
              </ul>
              <div className="flex flex-col gap-2">
                <p className="text-md text-muted-foreground">
                  Ao finalizar, o Yeoman irá criar uma pasta com o nome do módulo e dentro dela irá criar os arquivos necessários para o módulo. Utilize o npm para buildar e fazer o deploy do módulo.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <CodeBlock code="npm run build" />
                  <CodeBlock code="npm run deploy" />
                </div>
                <a
                  href="https://github.com/Benhur-Silveira/react-liferay/tree/main/react-com-yo-liferay-js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-md flex items-center"
                >
                  Veja um exemplo de módulo criado com o Yo Liferay-js no GitHub
                  <img src={githubIcon} alt="github icon" className="ml-2 size-6" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-between w-full mt-8">
        <Link to="/yo-liferay-js">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Config. do ambiente
          </Button>
        </Link>
        <Link to="/yo-liferay-js/shared-bundle">
          <Button>
            Próximo: Shared bundle
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div >
  );
};
