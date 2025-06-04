export const codeString = `{
  "create-jar": {
    "output-dir": "dist",
    "features": {
      "js-extender": false,
      "web-context": "/modulo-consumidor",
      "localization": "features/localization/Language"
    }
  },
// adicone as configurações abaixo
  "dump-report": true,
  "exclude": {
    "*": true
  },
  "config": {
    "imports": {
    //nome do shared bundle, serve para importar as libs do shared bundle
      "react-shared-bundle": {
        "dayjs": "^1.11.10" //importar a mesma versão instalada no shared bundle
      },
      "": {
      //serve para importar as funções e componentes do shared bundle
        "react-shared-bundle": "^1.0.0"// Versão do shared bundle
      }
    }
  }
}`;

export const codeButton = `import React from "react";
export const ButtonUI = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
`;

export const stringUI = `import React from "react";
import ButtonUI from "./components/Button";
export { ButtonUI };`;

export const codeUtilsSharedBundle = `import { dayjs } from "./libs/dayjs";
import { mask } from "./libs/imask";
import { validateCPFCNPJ } from "./validations/cpf_cnpj";
import { validateEmail } from "./validations/email";

const validators = {
  validateCPFCNPJ,
  validateEmail,
};

export { dayjs, mask, validators };`;

export const codeValidationEmail = `export const validateEmail = (email) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
};`;

export const codeValidationCpfCnpj = `export const validateCPFCNPJ = (value) => {
  if (!value) return false;
    
  const cleanValue = value.replace(/[^\\d]/g, "");
  if (cleanValue.length === 11) {
    return validateCPF(cleanValue);
  } else if (cleanValue.length === 14) {
    return validateCNPJ(cleanValue);
  }
  return false;
};

const validateCPF = (cpf) => {
  if (/^(\\d)\\1{10}$/.test(cpf)) return false;

  let sum = 0;
  let remainder;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;

  return true;
};

const validateCNPJ = (cnpj) => {
  if (/^(\\d)\\1{13}$/.test(cnpj)) return false;

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) return false;

  return true;
};`;

export const codeBabelYoLiferayJs = `{
	"presets": ["@babel/preset-env", "@babel/preset-react"]
}`;

export const codeLibsDayjs = `
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import ptBr from "dayjs/locale/pt-br";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(utc);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.extend(localeData);
dayjs.locale(ptBr);

export { dayjs };`;

export const codeLibsImask = `
import IMask from "imask";

export const mask = ({ mask: maskValue, value }) => {
  if (!maskValue) return value;
  if (value === undefined) return "";

  if (maskValue === "cpf") {
    maskValue = "000.000.000-00";
  }
  if (maskValue === "cep") {
    maskValue = "00000-000";
  }
  if (maskValue === "cnpj") {
    maskValue = "00.000.000/0000-00";
  }
  const creator = IMask.createMask({
    mask: maskValue,
  });
  return creator.resolve(value);
};
`;

export const codeConsumerMask = `
import { mask } from "react-yo-shared-bundle/utils";

/**
 * @typedef {Object} mask
 * @property {function(string, string): string} cpf - Masks a CPF number
 * @property {function(string, string): string} cnpj - Masks a CNPJ number
 * @property {function(string, string): string} phone - Masks a phone number
 * @property {function(string, string): string} cep - Masks a brazilian zip code
 */
export { mask };`;

export const codeConsumerCliMask = `import { mask } from "react-shared-bundle/utils";

/**
 * @typedef {Object} mask
 * @property {function(string, string): string} cpf - Masks a CPF number
 * @property {function(string, string): string} cnpj - Masks a CNPJ number
 * @property {function(string, string): string} phone - Masks a phone number
 * @property {function(string, string): string} cep - Masks a brazilian zip code
 */
export { mask };`;

export const codeConsumerValidation = `
import { validators } from "react-yo-shared-bundle/utils";
/***
 * @type {Object}
 * @property {function(string): boolean} validateEmail
 * @property {function(string): boolean} validateCPFCNPJ
 */
const sharedValidators = validators;

export const { validateEmail, validateCPFCNPJ } = sharedValidators;`;

export const codeConsumerButton = `import { ButtonUI } from "react-yo-shared-bundle/ui";

export { ButtonUI };`;

export const codeConsumerHomeUI = `import React from "react";
import { ButtonUI } from "../shared/ui/button";

export const Home = () => {
  return (
    <div>
      <ButtonUI
        onClick={() => console.log("clicked")}
        className="btn btn-primary p-2"
      >
        Click
      </ButtonUI>
    </div>
  );
};`;

export const codeConsumerHomeUtils = `import React from "react";
import { mask } from "../shared/utils/mask";
import { validateEmail, validateCPFCNPJ } from "../shared/utils/validators";

export const Home = () => {
  return (
    <div>
      <p>{validateEmail("test@gmail.com") ? "true" : "false"}</p>
      <p>{validateEmail("teste.email") ? "true" : "false"}</p>

      <p>{validateCPFCNPJ("123.456.789-00") ? "true" : "false"}</p>
      <p>{validateCPFCNPJ("838.079.371-45") ? "true" : "false"}</p>

      <div>
        <h2>Mask</h2>
        <p>CEP: {mask({ mask: "cep", value: "12345-678" })}</p>
        <p>CPF: {mask({ mask: "cpf", value: "123.456.789-00" })}</p>
        <p>CNPJ: {mask({ mask: "cnpj", value: "12.345.678/0001-90" })}</p>
      </div>
    </div>
  );
};`;

export const codenpmbundlerrcCli = `
{
  "config": {
    "imports": {
      "react-cli-shared-bundle": {
        "dayjs": "^1.11.13",
        "imask": "^6.6.3"
      },
      "": {
        "react-cli-shared-bundle": "^1.0.0"
      }
    }
  }
}`;

export const codeWebPackConfig = `const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({})],
  devServer: {
    static: "./dist",
    port: 3000,
    host: "localhost",
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  mode: "development",
};
`;

export const codeWebPackIndex = `import React from "react";
import ReactDOM from "react-dom";

import AppComponent from "./AppComponent";

export default function main(params) {
  ReactDOM.render(
    <AppComponent />,
    document.getElementById(params.portletElementId),
  );
}
//--------Comentar essa parte para quando for buildar o módulo--------
main({
  portletNamespace: "",
  contextPath: "",
  portletElementId: "root",
  configuration: {},
});
//----------
`;
