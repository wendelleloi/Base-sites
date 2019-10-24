# Base para sites
> Projeto destinado para ser a base de todos os projetos HTML/ CSS/ JavaScript usando o Sass e Gulp.js.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]    
[![Boostrap Version][boostrap-image]][bootstrap-url] - v4.3.1

Versões de alguns frameworks ou modulo de gerênciamento de pacotes.

De um a dois parágrafos sobre o que é seu projeto e o que ele faz.

![](./header.png)
   
## Estrutura do projeto
    
src  
├── css --> arquivos css    
│   └── scss --> arquivos compilados para CSS    
├── index.html    
├── img        
├── gulpfile.js --> tarefas Gulp.js  
├── lib --> arquivos e códigos de terceiros  
├── .gitignore --> lista de arquivos que serão ignorados pelo git  
├── package.json --> arquivo de configuração e dependências do projeto  
    
## Instalação

```sh
npm install 
```

## Obter repositório

```sh
git clone https://github.com/wendelleloi/Base-sites.git
```

## Comandos git úteis

```sh
git clone - Obter repositório.

git status - checar o estado atual do repositório.

git cheout [NomeDaBranch] - alterar branch do projeto

git add . - adcionar todos os arquivos ao repositório

git commit -m "MinhaMensagemAqui " - Realizar o comitar informando mensagem

git push  origin [NomeDaBranch] - Enviar arquivos/diretórios para o repositório

git pull - Atualizar os arquivos no branch atual

```

## Exemplo de uso

Para criar componentes CSS repare-os em modulos.    
Por exemplo: _footer.scss    
e importe-os no styles.scss usando o comando @import 'footer'; sem o underline ( _ )    
e seja feliz usando seu nome componente CSS!!          
_Para mais exemplos, consulte a [Wiki][wiki]._    
    
## Configuração para Desenvolvimento

1. Clone o repósitio na sua pasta, entre na pasta do arquivo, execute o comando npm install na pasta raiz do projeto, onde se encontra o arquivos 'package.json' para instalar todas as dependências do projeto.    
2. ainda na pasta raiz do projeto, use o comando gulp no terminal para rodar o localhost na porta 3000 e ativar o live-loader.          

```sh

npm install    

gulp

```

## Histórico de lançamentos

* 0.2.1
    * MUDANÇA: Atualização de docs (código do módulo permanece inalterado)
* 0.2.0
    * MUDANÇA: Remove `setDefaultXYZ()`
    * ADD: Adiciona `init()`
* 0.1.1
    * CONSERTADO: Crash quando chama `baz()` (Obrigado @NomeDoContribuidorGeneroso!)
* 0.1.0
    * O primeiro lançamento adequado
    * MUDANÇA: Renomeia `foo()` para `bar()`
* 0.0.1
    * Trabalho em andamento

## Meta

Wendell Eloi da Silva – [@wendelleloi](https://github.com/wendelleloi) – wendelleloi2@gmail.com

Distribuído sob a licença XYZ. Veja `LICENSE` para mais informações.

[https://github.com/wendelleloi](https://github.com/wendelleloi)

## Contributing

1. Faça o _fork_ do projeto (https://github.com/wendelleloi/Base-sites>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
