import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP.

const api = axios.create({
    // Cria uma instância do Axios com configurações personalizadas.
    baseURL: 'http://localhost:3001' // Define a URL base para as requisições. Neste caso, todas as requisições usarão este URL como base.
});

export default api; // Exporta a instância configurada do Axios para que possa ser utilizada em outras partes da aplicação.


// Explicação do Código:
// Importação:

// A primeira linha importa a biblioteca Axios, que é uma biblioteca popular para fazer requisições HTTP. Ela simplifica o processo de comunicação com APIs, permitindo o envio de requisições e o tratamento de respostas de forma mais eficiente.
// Criação da Instância API:

// const api = axios.create({ ... }): Esta linha cria uma nova instância do Axios. Essa instância pode ser configurada com opções personalizadas que se aplicam a todas as requisições feitas com ela.
// baseURL: 'http://localhost:3001': A propriedade baseURL define a URL base para todas as requisições. Isso significa que, ao fazer uma requisição, você pode especificar apenas o caminho relativo, e o Axios automaticamente concatenará esse caminho com a baseURL. Por exemplo, uma requisição para api.get('/usuarios') resultaria em uma chamada para http://localhost:3001/usuarios.
// Exportação:

// export default api;: Esta linha exporta a instância api criada. Isso permite que outros módulos ou componentes da aplicação importem esta instância e utilizem-na para realizar requisições HTTP, mantendo a configuração centralizada.
// Resumo
// O código configura uma instância do Axios com uma URL base, permitindo que requisições HTTP sejam feitas de forma simplificada e organizada. Essa instância pode ser facilmente importada e utilizada em diferentes partes da aplicação, o que promove a reutilização do código e a manutenção de uma estrutura consistente nas chamadas à API.