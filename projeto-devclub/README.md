# Cadastro de Usuários

Este projeto é uma aplicação web desenvolvida em React que permite o cadastro e a visualização de usuários. Os usuários podem ser adicionados, e a lista de usuários cadastrados pode ser visualizada, permitindo também a exclusão de usuários.

## Sobre

Este projeto é uma aplicação de cadastro de usuários onde os dados são armazenados em uma API. O usuário pode cadastrar novos usuários, visualizar a lista de usuários cadastrados e excluir usuários da lista.

## Funcionalidades

- Cadastro de novos usuários com nome, idade e e-mail.
- Listagem de usuários cadastrados com a possibilidade de exclusão.
- Interface responsiva com estilo moderno.

## Tecnologias Utilizadas

- React
- Axios (para requisições HTTP)
- React Router (para navegação)
- Styled Components (para estilização)

## Estrutura do Código

### 1. Componentes Principais

- **ListUsers.js**: 
  - Componente que lista todos os usuários cadastrados.
  - Realiza requisições para buscar e excluir usuários da API.
  
- **Home.js**: 
  - Componente principal que contém o formulário de cadastro de novos usuários.
  - Utiliza referências (`useRef`) para gerenciar os inputs do formulário.

### 2. Funcionalidades do Código

- **Cadastro de Usuários**: 
  - O formulário captura nome, idade e e-mail do usuário e envia os dados para a API através de uma requisição POST.

- **Listagem e Exclusão**: 
  - A lista de usuários é renderizada a partir de um estado que contém os dados obtidos da API. 
  - A exclusão de um usuário é feita através de uma requisição DELETE.

### Como Usar
- Acesse a aplicação no navegador, geralmente em http://localhost:3000.
- Preencha os campos do formulário para cadastrar um novo usuário.
- Após o cadastro, a lista de usuários será atualizada automaticamente.
- Clique no ícone de lixeira ao lado de um usuário para excluí-lo da lista.
- Utilize o botão "Ver Lista de Usuários" para navegar até a página da lista.

##Contribuição
Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/andresilva05/PORTFOLIO/blob/master/LICENSE) 
