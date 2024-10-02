const reportWebVitals = onPerfEntry => { // Função que aceita um callback 'onPerfEntry' para reportar as métricas de desempenho
  // Verifica se 'onPerfEntry' é uma função válida
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinamicamente a biblioteca 'web-vitals'
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama cada uma das funções de métrica, passando 'onPerfEntry' como callback
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals; // Exporta a função para uso em outras partes da aplicação


// Explicação do Código:
// Definição da Função:

// A função reportWebVitals é definida para receber um parâmetro chamado onPerfEntry. Este parâmetro deve ser uma função que será chamada com os valores das métricas de desempenho.
// Verificação do Parâmetro:

// A condição if (onPerfEntry && onPerfEntry instanceof Function) verifica se onPerfEntry foi passado e se realmente é uma função. Isso garante que a função só será chamada se um callback válido for fornecido.
// Importação Dinâmica:

// A linha import('web-vitals') usa a sintaxe de importação dinâmica, que permite carregar o módulo web-vitals somente quando necessário. Isso é útil para otimizar o desempenho inicial do aplicativo, já que as métricas só são medidas após a carga da aplicação.
// Extração e Chamada das Métricas:

// Após a importação bem-sucedida, o código usa a desestruturação para extrair funções específicas de métricas de desempenho:
// getCLS: Medida de mudança de layout cumulativa (Cumulative Layout Shift).
// getFID: Medida de atraso na primeira interação (First Input Delay).
// getFCP: Medida do tempo até a primeira pintura de conteúdo (First Contentful Paint).
// getLCP: Medida do tempo até a maior pintura de conteúdo (Largest Contentful Paint).
// getTTFB: Medida do tempo até o primeiro byte (Time to First Byte).
// Cada uma dessas funções é chamada com onPerfEntry como argumento, reportando as métricas de desempenho coletadas.
// Exportação:

// export default reportWebVitals; exporta a função reportWebVitals, permitindo que outras partes do aplicativo a utilizem para medir e reportar métricas de desempenho.
// Resumo
// Esse código é uma implementação padrão para medir o desempenho de uma aplicação React utilizando a biblioteca web-vitals. Ele permite que o desenvolvedor colete e reporta informações sobre a performance do aplicativo, o que é essencial para melhorar a experiência do usuário. As métricas fornecidas ajudam a identificar áreas que podem ser otimizadas para uma melhor performance.