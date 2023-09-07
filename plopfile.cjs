// eslint-disable-next-line no-undef
module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/styles/{{dashCase name}}-styles.scss',
                templateFile: 'templates/styles.scss.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/widgets/{{pascalCase name}}Widget.tsx',
                templateFile: 'templates/widget.tsx.hbs',
            },
        ],
    })

    plop.setGenerator('module', {
        description: 'Create a new module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your module name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/modules/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/modules/{{pascalCase name}}/styles/{{dashCase name}}-styles.scss',
                templateFile: 'templates/styles.scss.hbs',
            },
            {
                type: 'add',
                path: 'src/modules/{{pascalCase name}}/widgets/{{pascalCase name}}Widget.tsx',
                templateFile: 'templates/widget.tsx.hbs',
            },
        ],
    })

    plop.setGenerator('api-service', {
        description: 'Create a new service',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your service name?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/api/{{kebabCase name}}-api.ts',
                templateFile: 'templates/service-api.tsx.hbs'
            }
        ]
    });

}
