export const codeJestSetupLiferaySenSharedBundle = `import "@testing-library/jest-dom";`;

export const codeJestConfigLiferaySenSharedBundle = `module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
};`;

export const codePackageJsonLiferaySenSharedBundle = `"scripts": {
    "build": "liferay build",
    "clean": "liferay clean",
    "deploy": "liferay deploy",
    "test": "jest"
  }`;

export const codeTitleTestSemSharedBundle = `import React from "react";
import { render } from "@testing-library/react";
import { Title } from "../src/components/Title.js";

describe("Title component", () => {
  it("renders title", () => {
    const { getByText } = render(<Title title="Test" />);
    expect(getByText("Test")).toBeInTheDocument();
  });
});
`;

export const codeTitleComponent = `import React from "react";

export const Title = ({ title }) => {
  return <h1>{title}</h1>;
};`;

export const codeUrtilsSharedBundle = `export const mask = ({ mask, value }) => {
  if (mask === "cep") {
    return formatarCEP(value);
  }
  return "";
};

const formatarCEP = (cep) => {
  const apenasDigitos = cep.replace(/\\D/g, "");
  return apenasDigitos.replace(/(\\d{5})(\\d{3})/, "$1-$2");
};`;

export const codeTextMaskTestComSharedBundle = `import React from "react";
import { render } from "@testing-library/react";
import { TextMask } from "../src/components/TextMask";

describe("TextMask component", () => {
  it("renders TextMask", () => {
    const { getByText } = render(
      <TextMask title="Test" mask={"cep"} value={"65020140"} />,
    );
    expect(getByText("65020-140")).toBeInTheDocument();
  });
});`;

export const codeTextMaskComponent = `import React from "react";
import { mask } from "../shared/utils/mask";
export const TextMask = ({ title, mask: maskValue, value }) => {
  return (
    <div className={"d-flex"}>
      <span>{title}</span>&nbsp;
      <span>{mask({ mask: maskValue, value })}</span>
    </div>
  );
};`;

//------------------YO LIFERAY JS------------------

export const codeTitleTestSemSharedBundleYo = `import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Title } from "../src/components/Title";

describe("Title component", () => {
  it("renders title", () => {
    render(<Title title="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});`;

export const codeTitleComponentYo = `import React from "react";
export const Title = ({ title }) => {
  return <h1>{title}</h1>;
};`;

export const codeViteConfigYo = `import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    include: ["./__tests__/**/*.test.{js,ts,jsx,tsx}"],
    environment: "jsdom",
    setupFiles: "./setupTests.js",
  },
});`;

export const codeViteConfigComSharedBundleYo = `import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  test: {
    globals: true,
    include: ["./__tests__/**/*.test.{js,ts,jsx,tsx}"],
    environment: "jsdom",
    setupFiles: "./setupTests.js",
    alias: {
      "react-shared-bundle": path.resolve(
        __dirname,
        "__mocks__/react-shared-bundle",
      ),
    },
  },
});`;
