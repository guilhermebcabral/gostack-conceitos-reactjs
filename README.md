Configurando Babel

Comandos:

yarn init -y
yarn add react react-dom
yarn add @babel/code @babel/preset-env @babel/preset-react webpack webpack-cli
yarn add @babel/cli

Babel: Converter (transpilar) código do React para um código que o Browser entenda.

Webpack: Pra cada tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneira diferente.

Loaders: babel-loader, css-loader, image-loader, file-loader

Configurando Webpack

Comandos:

yarn add babel-loader
yarn add webpack-dev-server -D

para criar o bundle -> yarn webpack-dev-server --mode development

Importando CSS e imagens

Comandos:

yarn add style-loader css-loader
yarn add file-loader

Listando Projetos da API

Comandos:

yarn add axios
yarn add @babel/plugin-transform-runtime -D