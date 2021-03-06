#!/usr/bin/env node
"use strict";

const fs = require('fs');
const inquirer = require('inquirer')
const questions = require('./lib/questions')

// const knex_files = require('./lib/scaffolds/knexjs.scaffold');
// const obj_files = require('./lib/scaffolds/objectionjs.scaffold');
//
// const shared_files = require('./lib/scaffolds/shared.scaffold');
const help_data = require('./lib/help_blurb');
// const util_files = require('./lib/util_files');
const builders = require('./lib/builders')


if(process.argv.includes('--help')) {
  console.log("\x1b[36m", help_data.help);
} else {
  inquirer.prompt(questions).then(answers => {
    builders(answers)
  });
}

//   if(process.argv[2].toLowerCase() === 'objectionjs') {
//     if(process.argv[3].toLowerCase() === 'scaffold') {
//       fs.mkdirSync(`./${directoryName}`);
//       console.log("\x1b[36m", `Created ./${directoryName}`);
//       fs.mkdirSync(`./${directoryName}/views`);
//       console.log("\x1b[36m", `Created ./${directoryName}/views`);
//       fs.writeFileSync(`./${directoryName}/views/index.ejs`, shared_files.indexView);
//       console.log("\x1b[36m", `Created ./${directoryName}/views/index.ejs`);
//       fs.writeFileSync(`${directoryName}/objfile.js`, obj_files.objfile);
//       console.log("\x1b[36m", `Created ./objfile.js`);
//       fs.writeFileSync(`${directoryName}/server.js`, obj_files.server);
//       console.log("\x1b[36m", `Created ./server.js`);
//       fs.writeFileSync(`${directoryName}/package.json`, shared_files.packagejson);
//       console.log("\x1b[36m", `Created ./package.json`);
//       fs.writeFileSync(`${directoryName}/.gitignore`, util_files.gitignore);
//       console.log("\x1b[36m", `Created ./.gitignore`);
//       fs.writeFileSync(`${directoryName}/README.md`, knex_files.knexReadme);
//       console.log("\x1b[36m", `Created ./README.md`);
//     } else if(process.argv[3].toLowerCase() === `simple`) {
//       fs.writeFileSync(`./objfile.js`, obj_files.objfile);
//       console.log("\x1b[36m", "\x1b[36m", 'Created ./objfile.js');
//     }
//   }
// }
