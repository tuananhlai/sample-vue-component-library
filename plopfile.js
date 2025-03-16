module.exports = function (plop) {
  // Component generator
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Component name (PascalCase):",
        validate: (value) => {
          if (/^[A-Z][a-zA-Z0-9]+$/.test(value)) {
            return true;
          }
          return "Component name must be in PascalCase (e.g., Button, TextField)";
        },
      },
    ],
    actions: [
      // Create component files
      {
        type: "add",
        path: "packages/core/src/components/{{kebabCase componentName}}/{{componentName}}.vue",
        templateFile: "internals/plop-templates/component/component.vue.hbs",
      },
      {
        type: "add",
        path: "packages/core/src/components/{{kebabCase componentName}}/index.ts",
        templateFile: "internals/plop-templates/component/index.ts.hbs",
      },
      // Create test file
      {
        type: "add",
        path: "packages/core/tests/{{componentName}}.test.ts",
        templateFile: "internals/plop-templates/component/test.ts.hbs",
      },
      // Create story file
      {
        type: "add",
        path: "packages/core/stories/{{componentName}}.stories.ts",
        templateFile: "internals/plop-templates/component/stories.ts.hbs",
      },
      // Add component export to index.ts
      {
        type: "append",
        path: "packages/core/src/index.ts",
        template: 'export * from "./components/{{kebabCase componentName}}";\n',
        separator: "",
      },
    ],
  });
};
