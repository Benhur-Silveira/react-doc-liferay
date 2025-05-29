import { CodeBlock } from "@/components/codeBlock";
import { StructureCode } from "@/components/structureCode";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { codeWebPackConfig, codeWebPackIndex } from "@/constants/codeStrings";
import { ShieldAlert } from "lucide-react";
export const ModuloDicas = () => {
  return (
    <div className="w-full">
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
            <BreadcrumbLink href="/modulo/dicas">Dicas</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-2 w-full ">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dicas</h1>
        <p className="text-muted-foreground md:text-xl">
          Dicas úteis para desenvolver módulos React para Liferay.
        </p>
        <Card className="w-full ">
          <div className="space-y-2 w-full ">
            <CardHeader>
              <div className="flex gap-2 items-center">
                <div>
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                    1
                  </span>
                </div>
                <CardTitle>Utilizar o WebPack para ganhar tempo em alterações nos módulos. Porém em módulos que consomem o shared bundle, não irá funcionar.</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 ml-4">
                <div className="flex gap-2 items-center ">
                  <div>
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      1.1
                    </span>
                  </div>
                  <CardTitle>Como Fazer?</CardTitle>
                </div>
                <p className="text-muted-foreground">Faça as instalações das bibliotecas necessárias para o WebPack. Depois disso, crie um arquivo webpack.config.js na raiz do seu módulo e altere o arquivo index.js e adicione o script start no package.json. No portal, deve criar um fragmento com as configurações no exemplo abaixo.</p>
                <div className="grid md:grid-cols-[2fr_1.5fr] grid-cols-1">
                  <CodeBlock code="npm install -D html-webpack-plugin@5.6.3 webpack@5.99.9 webpack-cli@6.0.1 webpack-dev-server@5.2.1" />
                </div>
                <div className="flex items-start gap-2">
                  <ShieldAlert className="size-8" />
                  <p className="text-md font-semibold">Obs.: Lembre-se que sempre que antes de fazer o build do módulo deve-se comentar a função main() que está sendo iniciada no index.js</p>
                </div>
                <p className="text-muted-foreground">Exemplos: </p>
                <div className="space-y-2 ml-5">
                  <p>No módulo</p>
                  <StructureCode codeString={codeWebPackConfig} label="webpack.config.js" />
                  <StructureCode codeString={codeWebPackIndex} label="index.js" />
                  <StructureCode codeString={`"scripts": {
    "build": "liferay build",
    "clean": "liferay clean",
    "start": "webpack serve --open",
    "deploy": "liferay deploy"
  },`} label="package.json" />
                  <p>Feita as alterações, execute o comando</p>
                  <div className="grid md:grid-cols-4 grid-cols-1">
                    <CodeBlock code="npm run start" />
                  </div>
                </div>
                <div className="space-y-2 ml-5 mt-3">
                  <p>No fragmento</p>
                  <StructureCode codeString={codeFragmento} label="fragmento" />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

      </div>
    </div>
  );
};

const codeFragmento = `<div class="fragment_10" id="fragment_10" >
	<div id="root">
		
	</div>
</div>
<script src="http://localhost:3000/bundle.js"></script>`;