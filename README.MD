# Base para sites
> Projeto destinado para ser a base de todos os projetos HTML/ CSS/ JavaScript usando o Sass, Pug, Gulp.js.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]    
<!-- [![Boostrap Version][boostrap-image]][bootstrap-url] - v4.3.1 -->


Projeto usando o Gulp.js como bundle manager a fim de tornar mais ágil o desenvolvimento Front-End usando HTML, CSS e JavaScript.  

Ele foi desenvolvido visto que o processo de desenvolvimento front-end em HTML e CSS puro, sem algum Package Manager, em algumas situações, no caso de um sistema com várias páginas e funcionalidades, tornava-se muito trabalhoso e repetitivo.  

Nele foi implementado o gulp-sass como transpilador scss -> css a fim de tornar possível o uso de algumas funcionalidades, todas dependendo do desenvolvedor, como a separação em arquivos scss e compilado em um único final CSS, assim facilitando a manutenção e desenvolvimento do layout. 
  
Também foi implementado o gulp-concat a fim de tornar possível a concatenação de vários arquivos js em um único arquivo js, dessa forma tornando mais fácil futuras alterações em códigos javascript e manutenção.  
  
Ainda foi implementado o Pug.js a fim de tornar o desenvolvimento do projeto em pug mais próximo aos frameworks, mas ainda assim mais simples que os mesmos, como exemplo, a criação de componentes, mixins e iterações.
  
Além de outras funcionalidades implementadas para facilitar e agilizar o desenvolvimento Front-End.  

Nesse projeto foi utilizado a versão 10.16.3 do Nodejs e a versão 6.9.0 do NPM.  

<!-- ![](./header.png) -->
   
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
├── pug  
│   └── components --> componentes utilizados no projeto .pug  
│   └── index.pug --> arquivo compilado para index.html        
    
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

git checkout [NomeDaBranch] - alterar branch do projeto

git add . - adcionar todos os arquivos ao repositório

git commit -m "MinhaMensagemAqui " - Realizar o comitar informando mensagem

git push  origin [NomeDaBranch] - Enviar arquivos/diretórios para o repositório

git pull - Atualizar os arquivos no branch atual

```

## Exemplo de uso

- Para criar componentes CSS separe-os em modulos.    
Por exemplo: _footer.scss    
  
Importe-os no styles.scss usando o comando @import 'footer'; sem o underline ( _ )    
e seja feliz usando seu novo componente CSS!!          
_Para mais exemplos, consulte a [Wiki][wiki]._  

- Para criar componentes .pug separe-os em arquivos diferentes.  
Por exemplo: header.pug  

Importe-o no index.pug usando o comando extends components/header.pug; usando o caminho relativo da pasta.  
Não esqueça de olhar a documentação do [pug][pug] para saber mais sobre importações de componentes, procure saber mais sobre o 'block'  
    
## Configuração para Desenvolvimento

1. Clone o repósitio na sua pasta, entre na pasta do arquivo, execute o comando npm install na pasta raiz do projeto, onde se encontra o arquivos 'package.json' para instalar todas as dependências do projeto.    
2. ainda na pasta raiz do projeto, use o comando gulp no terminal para rodar o localhost na porta 3000 e ativar o live-loader.          

```sh

npm install    

gulp

```

<!-- ## Histórico de lançamentos

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
    * Trabalho em andamento -->

## Meta

Wendell Eloi da Silva – [@wendelleloi](https://github.com/wendelleloi) – wendelleloi2@gmail.com

Distribuído sob a licença XYZ. Veja `LICENSE` para mais informações.

[https://github.com/wendelleloi](https://github.com/wendelleloi)

## Contributing

1. Faça o _fork_ do projeto (<https://github.com/wendelleloi/Base-sites>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/gulp
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/wendelleloi/Base-sites/wiki
[pug]: https://pugjs.org/language/inheritance.html

