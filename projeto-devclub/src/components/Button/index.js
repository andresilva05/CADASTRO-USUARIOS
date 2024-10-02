import PropTypes from 'prop-types'; // Importa a biblioteca PropTypes para validação de props.

import { Button } from "../../styles"; // Importa o componente Button de um arquivo de estilos.

function DefaultButton({ children, theme, ...props }) {
    // DefaultButton é um componente funcional que recebe 'children' e outras props (restantes) através do spread operator.
    // 'children' representa o conteúdo que será renderizado dentro do botão.

    return (
        <Button {...props} theme={theme}>{children}</Button>
        // Renderiza o componente Button, passando todas as props recebidas (exceto 'children') através do spread operator {...props}.
        // O conteúdo do botão (o que será exibido) é definido por 'children', que é inserido entre as tags do Button.
    );
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired, // Define que a prop 'children' deve ser um nó React e é obrigatória.
    // 'node' permite que 'children' seja qualquer coisa que possa ser renderizada, como string, número, ou outro componente.
    theme: PropTypes.string 
};

export default DefaultButton; // Exporta o componente DefaultButton para ser utilizado em outras partes da aplicação.


// Explicação do Código:
// Importações:

// O código começa importando o PropTypes para que possamos validar as props que o componente irá receber.
// Em seguida, ele importa o componente Button, que provavelmente é estilizado e definido em um arquivo de estilos.
// Definição do Componente:

// O componente DefaultButton é uma função que aceita um objeto de props. A desestruturação é utilizada para extrair a prop children e reunir todas as outras props em um objeto props.
// O children é uma prop especial em React que representa o conteúdo que é passado para o componente quando ele é usado, como texto ou outros elementos.
// Renderização:

// O componente retorna um elemento Button, passando as props restantes para ele usando o spread operator ({...props}). Isso permite que qualquer prop adicional que seja passada para DefaultButton seja repassada ao componente Button.
// O children é inserido como o conteúdo do Button, o que significa que qualquer coisa que esteja entre as tags do componente DefaultButton será exibido dentro do botão.
// Validação de Props:

// A seção DefaultButton.propTypes define as regras de validação para as props do componente. Aqui, é especificado que children deve ser um nó React e é obrigatório (isRequired).
// Isso ajuda a garantir que o componente seja utilizado corretamente e que não haja erros devido à falta de conteúdo.
// Exportação:

// Finalmente, o componente é exportado como padrão, permitindo que seja importado e utilizado em outras partes da aplicação.
// Resumo
// Esse componente é um botão reutilizável que aceita conteúdo dinâmico através da prop children e permite a passagem de outras propriedades para personalizar seu comportamento e estilo. A validação de children assegura que o componente sempre receberá um conteúdo que pode ser renderizado, ajudando a evitar erros durante o desenvolvimento.