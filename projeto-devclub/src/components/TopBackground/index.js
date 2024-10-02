import UsersImage from "../../assets/users.png"; // Importa uma imagem de usuários localizada na pasta 'assets'.
import { Background } from "./styles"; // Importa o componente de estilo 'Background' de um arquivo de estilos.

function TopBackground() {
    // Define o componente funcional TopBackground.

    return (
        <Background>
            {/* Renderiza o componente Background como um contêiner para a imagem */}
            <img src={UsersImage} alt="imagem-usuarios" />
            {/* Renderiza a imagem importada, com um texto alternativo descritivo. */}
        </Background>
    );
}

export default TopBackground; // Exporta o componente TopBackground para ser utilizado em outras partes da aplicação.


// Explicação do Código:
// Importações:

// A primeira linha importa uma imagem chamada users.png da pasta assets. Essa imagem será usada como parte da renderização do componente.
// A segunda linha importa o componente estilizado Background de um arquivo de estilos. Este componente pode aplicar estilos personalizados ao contêiner que envolverá a imagem.
// Definição do Componente:

// O componente TopBackground é uma função que não aceita props. Ele é responsável por renderizar um fundo com uma imagem.
// Renderização:

// O componente retorna um elemento Background, que funciona como um contêiner estilizado. Isso pode incluir estilos como tamanho, cores, ou posicionamento.
// Dentro do Background, é renderizado um elemento <img> que exibe a imagem importada. A propriedade src é definida como UsersImage, e a propriedade alt fornece uma descrição alternativa da imagem, que é importante para acessibilidade e SEO.
// Exportação:

// Por fim, o componente é exportado como padrão, permitindo que seja importado e utilizado em outros componentes ou arquivos da aplicação.
// Resumo
// O componente TopBackground serve como um contêiner que exibe uma imagem (neste caso, de usuários) dentro de um fundo estilizado. Ele é simples e cumpre a função de apresentar uma imagem de forma organizada e estilizada. A inclusão de um texto alternativo (alt) para a imagem garante que informações sobre a imagem sejam acessíveis a tecnologias assistivas.x