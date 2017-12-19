# CRDream-front
  O projeto crdream é um sistema web que permite o administrador personalizar uma página web atraves de um painel, alterando posicionamento de elementos visuais, aspectos de cada elemento e tema principal da página.

### components
  O projeto conta com uma estrutura de componentes que se encontra em:
``` /views/components ```
Cada componente é formado por:

* style.scss
* template.dust
* script.js

Para cada item do componente um escopo é passado seguindo o padrão que utiliza o nome do componente. por exemplo:
Dado um componente banner, seu path será ```/views/components/banner```;
A primeira div do template irá conter: ```id="banner"```;
O construtor da função anonima do script receberá como template ```document.getElementById("banner")```;
Dessa forma cada componente trabalhará apenas com o escopo determinado pelo id que dever ser ÚNICO para cada componente.

### Lista de scripts e estilos
Cada componente tem em seu template uma chamada do helper do Dust.js que insere a dependencia do script e estilo do componente em uma lista que será renderizada no final da página.
```{@registerDependencie type="style" src="/css/components/banner/style.css"}{/registerDependencie}```
O registro da dependencia por de ser do tipo "style" ou "script", o path deve seguir o padrão do componente. por exemplo se seu componente se encontra em ```/views/components/banner``` o caminho para seu style e script sera ```/css/components/style.css``` ou ```/js/components/script.js```.

### criando um novo componente
A criação de um novo componente é relativamente simples, básicamente o modelo dos componentes são padrões.
Os passos para criar um novo componente são:
* inserir uma pasta nova dentro de ```/views/components``` com o nome do componente. (componentes devem ter um nome que diga o que ele é, não o que ele faz. Seja sensato).
* Crie os arquivos template.dust, script.js e style.js.
* Crie o id no markup do template, o escopo no construtor do js e a dependencia no style.scss seguindo o id (que deve ter o mesmo nome do componente), conforme explanado no item "Componentes" acima.
* dentro de ```/webpack/assetsFileConfig``` deve ser inserida uma nova linha para compilar o js e o scss do componente:
```sh  
//componenteName
//esse padrão deve ser seguido em todos os componentes. Componentes com o mesmo nome não deve ocorrer.
  'components/componenteName/script': path.join(components_path, 'componenteName', 'script'),
  'components/componenteName/style': path.join(components_path, 'componenteName', 'style.scss'),
``` 
Dessa forma quando voce inserir o caminho no "registerDependencie" dentro do arquivo de template do componente o caminho corresponderá ao mesmo configurado aqui.

* Cada componente pode ter suas configuracoes especificas. para cada componente deve existir um config.json que descreve quais configuracoes possiveis para aquele componente.
```sh  
//Exemplo
//arquivo config.json em views/components/navigation/config.json
{
  "name": "navigation",
  "appearance": ["default", "black"],
  "theme": ["default", "black"],
  "show": ["true", "false"],
  "mobile": [true, false]
}
``` 
E importante essa configuracao pois o sistema disponibiliza uma rota que retorna uma lista de configuracoes de todos os componentes.
(isso sera utilizado para sistemas externos que queiram servir como administrador dos componentes e documentacoes externas).

Rota para obter as configs ```components/get-all-configs```


###
... Read me em construção...
