import { useRef } from "react"; // Importa o hook useRef do React para manipular referências de elementos DOM.
import api from "../src/services/api"; // Importa a instância configurada do Axios para fazer requisições à API.
import { 
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
  GlobalStyle,
} from "./styles"; // Importa componentes estilizados definidos em um arquivo de estilos.

import Button from "./components/Button/styles"; // Importa o componente Button.
import TopBackground from "./components/TopBackground"; // Importa o componente TopBackground.
import { useNavigate } from "react-router-dom";

function Home() {
  // Define referências para os campos do formulário.
  const inputName = useRef(); // Ref para o campo de nome.
  const inputAge = useRef(); // Ref para o campo de idade.
  const inputEmail = useRef(); // Ref para o campo de e-mail.

  const navigate = useNavigate()

  // Função assíncrona que será chamada ao clicar no botão de cadastro.
  async function registerNewUser() {
    try {
      // Envia uma requisição POST para cadastrar um novo usuário.
      const data = await api.post('/usuarios', {
        email: inputEmail.current.value, // Obtém o valor do campo de e-mail.
        age: parseInt(inputAge.current.value), // Converte o valor da idade para inteiro.
        name: inputName.current.value, // Obtém o valor do campo de nome.
      });
      console.log(data); // Exibe os dados retornados pela API no console.

      // Limpa os inputs após o cadastro
      inputName.current.value = ""; // Limpa o campo de nome
      inputAge.current.value = ""; // Limpa o campo de idade
      inputEmail.current.value = ""; // Limpa o campo de e-mail
      
    } catch (error) {
      // Captura e exibe qualquer erro que ocorra durante a requisição.
      console.error("Erro ao cadastrar usuário:", error);
      // Aqui você pode adicionar feedback para o usuário.
    }
  }

  // Função para lidar com a tecla pressionada nos inputs
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é Enter
      registerNewUser(); // Chama a função de cadastro
    }
  }
  
  return (
    <>
      <GlobalStyle /> {/* Aplica os estilos globais da aplicação */}
      <Container> {/* Componente que envolve todo o conteúdo do formulário */}
        <TopBackground/> {/* Componente de fundo superior */}

        <Form>
          <Title>Cadastrar Usuário</Title> {/* Título do formulário */}
          <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span> {/* Indica que o campo é obrigatório */}
              </InputLabel>
              <Input 
                type="text" 
                placeholder="Nome do usuário" 
                ref={inputName} 
                onKeyDown={handleKeyDown} // Adiciona o evento onKeyDown
              /> {/* Campo de entrada para nome */}
            </div>

            <div>
              <InputLabel>
                Idade<span> *</span> {/* Indica que o campo é obrigatório */}
              </InputLabel>
              <Input 
                type="number" 
                placeholder="Idade do usuário" 
                ref={inputAge} 
                onKeyDown={handleKeyDown} // Adiciona o evento onKeyDown
              /> {/* Campo de entrada para idade */}
            </div>
          </ContainerInputs>
          <div style={{ width: '100%' }}>
            <InputLabel>
              E-mail<span> *</span> {/* Indica que o campo é obrigatório */}
            </InputLabel>
            <Input 
              type="email" 
              placeholder="E-mail do usuário" 
              ref={inputEmail} 
              onKeyDown={handleKeyDown} // Adiciona o evento onKeyDown
            /> {/* Campo de entrada para e-mail */}
          </div>
          <Button type='button' onClick={registerNewUser} theme={"primary"}>Cadastrar Usuário</Button> {/* Botão para enviar os dados */}
        </Form>

        <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
      </Container>
    </>
  );
}

export default Home; // Exporta o componente Home para que possa ser utilizado em outras partes da aplicação.


// Explicação do Código:
// Importações:

// O código importa os módulos necessários do React e outras bibliotecas, incluindo o Axios para interagir com a API e componentes estilizados para a interface.
// Referências com useRef:

// useRef é usado para acessar os valores dos campos de entrada (nome, idade e e-mail) sem a necessidade de criar estados para cada um deles. Isso é útil para formulários, pois simplifica o gerenciamento dos valores dos inputs.
// Função registerNewUser:

// Esta função é chamada quando o botão de cadastrar usuário é clicado. Ela faz uma requisição POST para a API, enviando os dados do usuário (nome, idade e e-mail).
// O uso do try...catch permite capturar erros que possam ocorrer durante a requisição, como falhas de conexão ou problemas no servidor, proporcionando um tratamento adequado de erros.
// Renderização do Formulário:

// O componente retorna JSX que representa a estrutura do formulário. Ele inclui um título, campos de entrada para nome, idade e e-mail, além de um botão para cadastrar o usuário.
// O componente TopBackground é renderizado para fornecer um fundo, e os estilos globais são aplicados com o GlobalStyle.
// Exportação do Componente:

// O componente Home é exportado como padrão para que possa ser utilizado em outras partes da aplicação, como o arquivo principal de rotas.
// Resumo
// Este código configura um formulário de cadastro de usuários, gerencia as entradas com referências do React e envia os dados para uma API usando Axios. A estrutura é clara e modular, permitindo fácil manutenção e compreensão.