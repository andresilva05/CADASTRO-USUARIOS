import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para navegação
import api from "../services/api";

import Button from "../components/Button/styles"; // Importa o componente de botão estilizado.
import TopBackground from "../components/TopBackground/styles"; // Importa o componente TopBackground estilizado.
import Trash from '../assets/trash.svg';
import AvatarUser from '../ListUsers'

import { Container, Title, ContainerUsers, CardUsers, TrashIcon } from "./styles"; // Certifique-se de que está importando do local correto

function ListUsers() {
    // Define o componente funcional ListUsers.
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const navigate = useNavigate(); // Inicializa o hook de navegação

    useEffect(() => {
        async function getUsers() {
            try {
                const { data } = await api.get("/usuarios");
                setUsers(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
                // Aqui você pode adicionar lógica para exibir uma mensagem de erro, se desejar.
            } finally {
                setLoading(false); // Indica que o carregamento terminou
            }
        }
        getUsers();
    }, []);

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const usuariosAtualizados = users.filter(user => user.id !== id)

        setUsers(usuariosAtualizados)
    }

    return (
        <Container>
            {/* Renderiza um contêiner div para o conteúdo da página */}
            <TopBackground />{" "}
            {/* Renderiza o componente TopBackground para exibir um fundo estilizado */}
            <Title>Lista de Usuários</Title> {/* Título da página */}
            {loading ? ( // Exibe mensagem de carregamento enquanto busca os dados
                <p>Carregando...</p>
            ) : (
                <ContainerUsers>
                    {users.map((user) => (
                        <CardUsers key={user.id}> {/* Chave agora está no CardUsers */}
                            {/* <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/> */}
                            <div>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                                <p>{user.age}</p>
                            </div>
                            <TrashIcon src={Trash} alt="Excluir usuário" onClick={() => deleteUsers(user.id)} /> {/* Alt descritivo */}
                        </CardUsers>
                    ))}
                </ContainerUsers>
            )}
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button> {/* Navega para a página anterior */}
        </Container>
    );
}

export default ListUsers; // Exporta o componente ListUsers para que possa ser utilizado em outras partes da aplicação.
