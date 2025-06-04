import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { LiferayCli } from "../pages/liferaycli";
import { YoLiferayJs } from "../pages/yeoman";
import { Layout } from "../layout";
import { YoLiferayJsAmbiente } from "../pages/yeoman/ambiente";
import { YoLiferayJsModulo } from "@/pages/yeoman/modulo";
import { YoLiferayJsSharedBundle } from "@/pages/yeoman/sharedBundle";
import { LiferayCliAmbiente } from "@/pages/liferaycli/ambiente";
import { LiferayCliModulo } from "@/pages/liferaycli/modulo";
import { LiferayCliSharedBundle } from "@/pages/liferaycli/sharedBundle";
import { ModuloHashRouter } from "@/pages/modulos/hashrouter";
import { ModuloLanguages } from "@/pages/modulos/languages";
import { Modulo } from "@/pages/modulos";
import { ModuloDicas } from "@/pages/modulos/dicas";
import { LiferayCliTestesUnitarios } from "@/pages/liferaycli/testesUnitarios";
import { YoLiferayJsTestesUnitarios } from "@/pages/yeoman/testesUnitarios";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "yo-liferay-js",
        element: <YoLiferayJs />,
        children: [
          {
            index: true,
            element: <YoLiferayJsAmbiente />,
          }, {
            path: "yo-modulo",
            element: <YoLiferayJsModulo />,
          }, {
            path: "yo-shared-bundle",
            element: <YoLiferayJsSharedBundle />,
          }, {
            path: "yo-testes-unitarios",
            element: <YoLiferayJsTestesUnitarios />,
          },
        ]
      },
      {
        path: "liferay-cli",
        element: <LiferayCli />,
        children: [
          {
            index: true,
            element: <LiferayCliAmbiente />,
          }, {
            path: "cli-modulo",
            element: <LiferayCliModulo />,
          }, {
            path: "cli-shared-bundle",
            element: <LiferayCliSharedBundle />,
          }, {
            path: "cli-testes-unitarios",
            element: <LiferayCliTestesUnitarios />,
          },
        ]
      },
      {
        path: "modulo",
        element: <Modulo />,
        children: [
          {
            index: true,
            element: <ModuloHashRouter />,
          },
          {
            path: "hash-router",
            element: <ModuloHashRouter />,
          },
          {
            path: "languages",
            element: <ModuloLanguages />,
          },
          {
            path: "dicas",
            element: <ModuloDicas />,
          },
        ]
      }
    ],
  },
]);

export const Routers = () => {
  return <RouterProvider router={routes} />;
};
