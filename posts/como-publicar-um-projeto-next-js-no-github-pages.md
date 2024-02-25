---
layout: post
date: 2024-02-25 01:22:43
title: "Como publicar um projeto Next.js no Github Pages "
description: "Neste artigo, vou te orientar no processo de publicação de um
  projeto Next.js no Github Pages "
main-class: js
color: "#D6BA32"
tags:
  - nextjs
  - react
  - deploy
  - github
---
# Como publicar um projeto Next.js no Github Pages

## Neste artigo, vou te orientar no processo de publicação de um projeto Next.js no Github Pages .

Eu trabalho no [Dev em Dobro](https://www.instagram.com/devemdobro/), uma Edtech cuja missão é ajudar devs iniciantes a se sentirem menos perdidos quando começam a aprender programação. Pensando nisso, frequentemente organizamos eventos gratuitos onde ensinamos a criar um site do zero com HTML, CSS e JavaScript. E no final, mostramos como subir seu site para deixá-lo online utilizando o GitHub Pages.

Se você ainda não conhece, o GitHub Pages é uma plataforma de hospedagem gratuita dentro do GitHub que permite aos usuários publicar sites diretamente a partir de um repositório no GitHub. Isso significa que você pode hospedar seu código-fonte no GitHub e transformá-lo em um site acessível para qualquer pessoa na internet. É uma ótima ferramenta para apresentar seus projetos, portfólios ou até mesmo artigos de blog. Além disso, é bastante popular entre os desenvolvedores devido à sua integração com o GitHub e à facilidade de uso.

Este tutorial vai ser muito massa porque vamos integrar as GitHub Actions com o GitHub Pages. Isso significa que você não vai estar apenas publicando sua aplicação Next.js na internet; você vai estar configurando uma pipeline automática. Uma pipeline é um conjunto de processos e ferramentas automatizados, comumente usado em integração contínua e entrega contínua (CI/CD). Nesse contexto, uma pipeline é um processo que guia o desenvolvimento de software através de um caminho de criação, testes e implantação do código. O objetivo da automação do processo é minimizar erros humanos e manter a consistência até a implantação.

Assim, toda vez que você atualizar seu código no seu repositório GitHub, as GitHub Actions entrarão em cena e farão o deploy do seu projeto direto no GitHub Pages. Prático, né?

### Desvendando o mistério:

* **GitHub Actions**: Imagine ter uma equipe de mini robôs dedicados só pra você, sempre de olho no seu repositório. Quando você faz um push, eles saltam para a ação como pequenos heróis do código, realizando tarefas essenciais – eles podem testar seu código para garantir que tudo está nos trinques, verificar a qualidade para que você mantenha seu padrão ou, especificamente para nosso propósito, fazer o deploy do seu projeto automaticamente.
* **GitHub Pages**: Pense nisso como seu próprio espaço de hospedagem web, cortesia do GitHub. É o local ideal para exibir seus projetos de forma profissional, mostrar ao mundo seu portfólio brilhante ou até mesmo compartilhar seus projetos pessoais e experimentos, tudo isso a partir do conforto do seu repositório GitHub.

Aqui uns links caso tenha interesse em se aprofundar:

* [GitHub Actions](https://github.com/features/actions)
* [GitHub Pages](https://pages.github.com)

### Preparação é chave:

Para gente seguir nessa quest, um pouquinho de bagagem é necessário. Um conhecimento introdutório em React e Next.js vai longe – não precisa ser um mestre lvl 80, apenas entender o básico já é suficiente. E, claro, uma noção fundamental de como o GitHub funciona é crucial, afinal, vai ser onde toda a nossa ação vai acontecer.

### Guia Rápido:

1. **Ative o GitHub Pages**: Vá nas configurações do seu repositório, ache a seção do GitHub Pages e configure para usar as GitHub Actions. Você está basicamente dizendo ao GitHub: "Ei, vou automatizar isso, fique de olho".
   ![GitHub Project Settings](/assets/img/passo1.png "GitHub Project Settings")

   ![GitHub Project Settings – GitHub Pages configuration](/assets/img/passo2.png "GitHub Project Settings – GitHub Pages configuration")
2. **Prepare seu App Next.js**: Como o GitHub Pages prefere conteúdo estático, você vai ajustar seu Next.js para saída de páginas estáticas. Você vai mexer no `next.config.js` para garantir que ele exporte seu projeto como arquivos estáticos. Assim, o GitHub pode exibir seu site sem problemas.
3. **Corrija Problemas de Caminho**: Seu projeto pode ter problemas com imagens ou estilos quebrados porque o GitHub Pages coloca ele em um subdiretório. Você vai resolver isso definindo um `basePath` no seu `next.config.js`. Isso diz ao seu app: "Ei, não estamos mais no mesmo lugar; estamos nesse novo endereço".
4. **Configure as GitHub Actions**: Aqui é onde a mágica acontece. Você vai criar duas actions: uma para configurar o Node.js (tipo preparando seu ambiente) e outra para a mágica de publicação (levando seu lindo site estático para o mundo ver).
5. **Faça o Push e Observe**: Depois de fazer essas alterações, quando você fizer o push, as GitHub Actions vão iniciar automaticamente o deploy para o GitHub Pages.

E aí, é só curtir seu projeto rodando liso na web!
