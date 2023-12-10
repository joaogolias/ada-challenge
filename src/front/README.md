# Desafio Técnico - Ada Tech - Frontend

## Tecnologias
- Node v21.2.0
- Typescript
- Next
- React
- Tailwind
- MUI
- Prettier
- Eslint

## Arquitetura

A arquitetura usada é baseada nas arquiteturas mais clássicas e recomendadas para projetos de React com Next:

1. A camada principal é a `app`, onde ficam as definições das páginas. 
- O arquivo `layout.tsx` é o arquivo inicial que possui as configurações gerais do projeto
- Como foi solicitado no enunciado do desafio que se fizesse apenas uma página, ela se encontra no arquivo único `page.tsx`

2. Na pasta `components`, encontram-se todos os componentes do projeto, que são usados diretamente na página principal

3. Os hooks estão na pasta `hooks` e estão responsáveis por concentrar algumas operações necessárias em cima das informações do `state` da página

4. Em `models`, encontram-se os modelos da aplicação. No caso, há apenas a `CardModel`

5. A pasta `api` concnetra as requisições necessárias para a API do projeto.
- Os códigos das requisições em si encontram-se dentro da pasta `fetch`. Há exatamente 5 arquivos: um para cada endpoint do servidor
- Os arquivos `mountAuthCookies` e `mountAuthHeaders` auxiliam a montar os headers necessários para autenticação. Praticamente, o que acontece é: o site verifica se há cookie salvos na chave `AUTH_TOKEN`. Se não houver, realiza uma requisição para o endpoint de login e guarda a informação nos cookies. Se houver, apenas utiliza o valor armazenado nas requisições.

## Rodando

**Localmente**

Instale as dependências e rode o projeto localmente com:
```
yarn 
yarn dev
```
