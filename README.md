<h1 align="center">
  🎓 Controle de Matrículas
</h1>
<p align="center">Gerencie matrículas de uma universidade, cadastrando novas turmas, incluindo suas respectivas disciplinas, professores e alunos.</p>

<div align="center">
  <img src="https://img.shields.io/badge/Angular-11.0.4-c3002f"> 
  <img src="https://img.shields.io/badge/POUI-4.2.0-c93b85">
</div>

## Development Server

Rode `npm run start` ou `yarn start` para um servidor de desenvolvimento. Navegue para `http://localhost:4200/`.

## Development API

Rode `npm run server` ou `yarn server` para iniciar uma api fake para consumo e inserção de dados. Você pode ver os endpoints disponíveis navegando até `http://localhost:1080/`.

## Build

Rode `npm run build` ou `yarn build` para buildar o projeto. O build vai ser armazenado no diretório `dist/`. Use a flag `--prod` para o build de produção.

## Testes Unitários

Rode `npm run test` ou `yarn test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Testes de Integração

Navegue para a pasta /mockserver e rode `npm run prod` para inicializar o servidor mockado com os serviços http.

Rode `npm run e2e` ou `yarn e2e` para executar os testes de integração via [Protractor](http://www.protractortest.org/).
