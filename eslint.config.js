// ESLint: procura erros e más práticas no código (hooks usados errado, imports quebrados, variáveis sem uso).
// A aparência do código (espaços, aspas, quebras de linha) fica só com o Prettier.
const {defineConfig} = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig([
  expoConfig,
  // Desliga as regras do ESLint que brigariam com o Prettier. Precisa vir depois do expoConfig.
  prettierConfig,
  {
    ignores: ["dist/*", ".expo/*", "coverage/*"],
  },
]);
