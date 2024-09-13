---
layout: post
date: 2024-09-13 05:05:00
title: "Lidando com projetos WordPress quando você não é especialista: WPGraphQL
  ou REST API para Headless WordPress"
description: Imagina que você conseguiu um cliente e esse cliente tem um site
  wordpress, mas você não trabalha com wordpress e ainda assim quer fechar o
  contrato, o que você faz? Bom, foi o que aconteceu comigo e pode acontecer com
  você, então nesse post vamos conversar um pouco sobre esse estudo de caso.
main-class: js
color: "#D6BA32"
tags:
  - javascript
  - wordpress
  - graphql
  - rest
categories:
  - Wordpress
---
* ![]()

  Como eu decidi se valia a pena entrar nessa roubada (spoiler: ta indo!)
* O que eu fiz pra aprender o básico de WordPress rapidinho
* Como eu me virei pra não deixar o cliente na mão
* O que deu certo, o que deu errado, e o que eu aprendi com tudo isso

Se você já se viu numa saia justa parecida, ou só tá curioso pra saber como foi, cola aqui! Vamos trocar uma ideia sobre como a gente pode se virar nos trinta quando aparece um projeto fora da nossa zona de conforto.

Bora lá?

## Como eu decidi se valia a pena entrar nessa roubada

O cliente, que vamos chamar de *N*, tem um site/blog com mais de 15 anos de postagens com muitos acessos diários no dia-a-dia, eu já atendia eles a um tempo para coisas pequenas mas a ideia de desenvolverem um novo site que ja estava sem atualização a anos estava sempre no ar. Foi ai que me chamaram, as negociações começaram e fevereiro de 2024, mas o projeto só começou a acontecer mesmo a alguns meses. O grande problema do cliente era que o site todo era wordpress, ou seja, CMS e templates tudo no mesmo local. Pra quem não sab wordpress é "um programa de código aberto que você pode usar para criar um lindo site, blog ou aplicativo sem dificuldade". O contato que eu tive com wordpress foi só com meu blog da adolescencia onde eu escrevia minhas noias, migrei pra lá após eu deletar sem querer meu blogspot, sim, foi muito clicar sem ler, achei que tava fazendo backup, só não chorei porque eu já tinha chorado naquela mesma semana. Então pra mim esse foi o unico contato que tive com WP, vamos chamar carinhosament de WP; depois que virei desenolvedor eu sempre ouvi falar de WP e sei que grande parte da web hoje em dia ainda utiliza ele, pelo menos 80% da web roda em PHP (pra nossa tristeza né kkkk), mentira, respeito PHP, eu sempre vou respeitar coisas sólidas. Então se tudo tava contra porque raios eu aceitei esse desafio? Simples, porque eu posso e tenho algum "probleminha" na cabeça onde to constantemente me desafiando com as coisas, ja tomei muito no cool por isso mas faz parte do aprendizado. No fim de algumas reuniões decidimos que poderiamos ficar com wordpress mas que tambem poderiamos tentar migrar para alguma stack nova. Ai que começou o desafio porque se vamos manter WP como CMS (content manager system) e vamos fazer um site a parte, como vamos fazer essa comunicação?
O requisito era: "não podemos perder essa base de dados" e eu também não queria fazer uma migração para outro local, o que elevaria os custos pro cliente e o tamanho do esforço de trabalho.
Antes de seguir vou só recapitular como eu consegui chegar nessa solução por conta de outro projeto que me envolvi no passado. Em 2021 um amigo querido meu @felipe marcolin me falou sobre um tema que me encucou na epoca, porque eu sou um cara que ainda vai ficar milionario, pelo menos de espirito kkk, mas eu fiquei muito curioso com o que ele me passou, além da possibilidade de capitalizar em cima disso: [Strapi, "Strapi é um CMS headless de última geração, de código aberto e javascript, que permite que experiências ricas em conteúdo sejam criadas, gerenciadas e expostas a qualquer dispositivo digital."](https://strapi.io/). 
Prestem atenção nas duas palavras chaves "CMS headless" e logo voltamos nisso.
Eu achei a solução tão foda que acabei indo atras de algum curso para dar algumas dicas de como capitalizar, foi ai que cheguei num curso do William Justen em 2022, esse cara é brabo e muito didatido, um diferencial muito grande na comunidade, lá aprendi mais de strapi e da melhor versão do app, hoje em dia na v4 eu não curto muito porque eles fecharam muito o opensource e nao da pra customizar tanto, mas ainda assim é uma solução foda para colocar rapido em produção e o cliente ter um CMS pronto e como você quiser, um perfeito sistema de gerenciamento de conteúdo **headless**, sendo um sistema de gerenciamento de conteúdo da web somente back-end que atua principalmente como um repositório de conteúdo. 
Tradicionalmente, os sistemas de gerenciamento de conteúdo (CMSs) sempre foram integrados, mas isso vinha com muitas limitações, como flexibilidade e escalonamento restritos. No entanto, os CMSs headless modernos capacitam os desenvolvedores a separar o frontend, construído com qualquer framework, do backend por meio de um CMS headless.
Então ai ta nossa lâmpada em cima da cabeça pois eu ja tinha visto em algum lugar alguem mencionar a palavras **WORDPRESS headless**. Agora faz sentido eu ter aceitado o projeto? Espero que sim pois a partir disso eu elaborei uma POC (proof of concept) para o nosso cliente N, para fazer como iriamos ter o nosso backend (o WP) para alimentar nosso frontend (que não mencionei antes, mas vai ser em nextjs para ajudar no SEO que é o nosso grande foco aqui).

E é aqui que iniciamos nosso grande tema de decisão que estaremos discutindo, é um estudo de caso para decidir; - mas decidir o que? decidir se vamos utilizar graphql ou RestAPI para o nosso site. Ta mas porque apareceu graphql só agora? Porque foi o que utilizei na POC para o cliente N na época, isso no inicio das primeiras reuniões.

Para fazer o wordpress ser headless precisamos configurar um plugin chamado [WPGraphQL](https://www.wpgraphql.com/) ou utilizarmos como RestAPI mesmo.

## WordPress headless

O WordPress, em sua forma tradicional, não é inerentemente um CMS headless. O WordPress é um CMS popular e avançado, conhecido por sua facilidade de uso e flexibilidade na criação e no gerenciamento de conteúdo. No entanto, tradicionalmente, combina o gerenciamento de conteúdo e a forma como ele é apresentado em um único sistema.

Hoje em dia, os desenvolvedores criaram implementações do WordPress headless utilizando sua REST API. Nesses casos, o WordPress ainda funciona como o CMS onde você cria, gerencia e armazena conteúdo. No entanto, ao invés de renderizar o frontend ou o site diretamente através dos templates e temas de WordPress, a apresentação do frontend é desacoplada ou separada do backend.

Isso permite que os desenvolvedores construam aplicativos usando diferentes tecnologias e frameworks, enquanto ainda aproveitam as capacidades de gerenciamento de conteúdo do WordPress. É uma maneira de fazer o WordPress funcionar de forma mais headless, embora não seja a configuração padrão.

Este artigo explora duas abordagens para buscar dados do seu CMS WordPress headless para o seu framework de frontend, focando em dois métodos principais: WPGraphQL e REST API.

![]()
