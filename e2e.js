const { exec } = require('child_process');
const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const project = require('./project.json')

function init(){
  compile(webpackConfig)
    .then(startServer)
    .then(runE2ETests)
    .catch(err => console.log(err));
}

function compile(config){
  return new Promise((resolve, reject) => {
    console.log('Compiling application...');
    webpack(config, (compilationErr, stats) => {
      const err = findCompilationErros(compilationErr, stats);
      if(err) {
        reject(err);
      } else {
        console.log('Application successfully compiled!');
        resolve();
      }
    });
  });
}

function findCompilationErros(err, stats){
  if(err)
    return err;
  if(stats.hasErrors())
    return stats.toJson('minimal');
}

function startServer(){
  return new Promise((resolve) => {
    const { port } = project.server;
    app.use(express.static(project.index.dist.root));
    const server = app.listen(port, () => {
      console.log(`Application listening on http://localhost:${port}...`);
      resolve(server);
    });
  });
}

function runE2ETests(server){
  const command = 'node ./node_modules/cypress/bin/cypress run';
  return exec(command, (err, stdout) => {
    terminateProcess(server, buildE2ETestsProcessResult(err, stdout));
  });
}

function  buildE2ETestsProcessResult(err, stdout){
  return err ? { msg: err, code: 1 } : { msg: stdout, code: 0 };
}

function terminateProcess(server, { msg, code }){
  console.log(msg);
  server.close();
  process.exit(code);
}

init();
