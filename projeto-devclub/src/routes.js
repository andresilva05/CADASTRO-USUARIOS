import { createBrowserRouter } from "react-router-dom"; // Importa a função createBrowserRouter da biblioteca react-router-dom
import Home from './Home'; // Importa o componente Home
import ListUsers from "./ListUsers"; // Importa o componente ListUsers

// Cria o roteador do aplicativo, definindo as rotas
const router = createBrowserRouter([
    {
        path: '/', // Caminho da rota raiz
        element: <Home /> // Componente que será renderizado na rota raiz
    },
    {
        path: '/lista-de-usuarios', // Caminho da rota para listar usuários
        element: <ListUsers /> // Componente que será renderizado na rota de lista de usuários
    }
]);

export default router; // Exporta o objeto de roteamento para uso em outras partes da aplicação



  