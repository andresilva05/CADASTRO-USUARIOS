import React from 'react'; // Importa a biblioteca React.
import ReactDOM from 'react-dom/client'; // Importa o módulo 'react-dom/client' para renderização em árvore.
import { GlobalStyle } from './styles'; // Importa os estilos globais definidos em um arquivo de estilos.
import { RouterProvider } from 'react-router-dom'; // Importa o RouterProvider para gerenciar a navegação.
import router from './routes'; // Importa as rotas definidas para a aplicação.

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz do aplicativo apontando para o elemento com id 'root'.
root.render(
  <React.StrictMode> {/* Envolve a aplicação em modo estrito para detectar problemas de forma mais eficaz */}
    <GlobalStyle/> {/* Aplica os estilos globais à aplicação */}
    <RouterProvider router={router}/> {/* Configura o roteamento da aplicação usando as rotas definidas */}
  </React.StrictMode>
);



// Explicação do Código:
// Importações:

// O código começa importando os módulos necessários:
// React: A biblioteca principal para criar componentes e gerenciar o estado.
// ReactDOM: Utilizado para manipular o DOM da aplicação, agora atualizado para usar a nova API do react-dom/client.
// GlobalStyle: Um componente que aplica estilos globais a toda a aplicação.
// RouterProvider: Um componente que gerencia a navegação na aplicação, permitindo que os usuários naveguem entre diferentes páginas.
// router: Importa as definições de rotas da aplicação.
// Criação da Raiz do Aplicativo:

// ReactDOM.createRoot(document.getElementById('root')): Esta linha cria um ponto de entrada para a aplicação, selecionando o elemento com o id 'root' no HTML. Isso é onde a aplicação React será renderizada.
// Renderização da Aplicação:

// O método root.render() é chamado para renderizar a árvore de componentes da aplicação.
// Dentro dele, React.StrictMode é utilizado. Este modo é uma ferramenta de desenvolvimento que ajuda a identificar problemas no aplicativo, como componentes que usam APIs obsoletas.
// O GlobalStyle é adicionado para garantir que os estilos definidos sejam aplicados a toda a aplicação.
// RouterProvider é configurado com o router, permitindo que a navegação entre as diferentes rotas da aplicação funcione corretamente.
// Resumo
// Este código configura o ponto de entrada da aplicação React, aplicando estilos globais e habilitando a navegação usando o react-router-dom. Ele segue boas práticas ao envolver a aplicação em modo estrito, permitindo uma melhor detecção de problemas durante o desenvolvimento. A estrutura modular do código facilita a manutenção e a escalabilidade da aplicação.