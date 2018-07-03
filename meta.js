module.exports = {
    prompts: {
      name: {
        type: 'string',
        name: 'name',
        required: true,
        message: 'Project name'
      },
      description: {
        type: 'string',
        name: 'description',
        message: 'Project description',
        default: 'A Koa2 project'
      },
      author: {
        type: 'string',
        name: 'author',
        message: 'Author'
      },
      view: {
        type: 'list',
        name: 'view',
        choices: [
          'nunjucks',
          'ejs',
          'pug'
        ]
      },
      lint: {
        type: 'confirm',
        name: 'lint',
        message: 'Use ESLint to lint your code?'
      },
      lintConfig: {
        when: 'lint',
        name: 'lintConfig',
        type: 'list',
        message: 'Pick an ESLint preset',
        choices: [
          {
            name: 'Standard (https://github.com/standard/standard)',
            value: 'standard',
            short: 'Standard'
          },
          {
            name: 'Airbnb (https://github.com/airbnb/javascript)',
            value: 'airbnb',
            short: 'Airbnb'
          }
        ]
      }
    },
    filters: {
      '.eslintrc': 'lint',
      '.eslintignore': 'lint'
    }
  }
  