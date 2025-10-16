const express = require('express');
const app = express();
const PORT = 3000;

// =========================================================================
// FUNÇÃO CENTRAL DE CÁLCULO (COM TRATAMENTO DE ERRO)
// =========================================================================

function calcular(operacao, a, b) {
    const num1 = parseInt(a);
    const num2 = parseInt(b);

    // 1. Verifica se os valores são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        // Lança um erro que será pego pelo 'catch' na rota
        throw new Error("Valores inválidos. Certifique-se de que 'numUm' e 'numDois' são números.");
    }

    // 2. Realiza a operação
    switch (operacao) {
        case 'soma':
        case 'adicao':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            if (num2 === 0) {
                // Lança um erro específico para divisão por zero
                throw new Error("Divisão por zero não é permitida.");
            }
            return num1 / num2;
        default:
            throw new Error(`Operação inválida: ${operacao}`);
    }
}

// =========================================================================
// ROTAS - USANDO try...catch EM CADA UMA
// =========================================================================

// TAREFA 1 & 3: Rota usando Path Parameters para tudo
// Exemplo de chamada: GET /soma/10/5 ou GET /divisao/100/4
app.get('/:operacao/:numUm/:numDois', (req, res) => {
    try {
        // Pega os parâmetros do caminho (path)
        const { operacao, numUm, numDois } = req.params;

        // Tenta calcular
        const resultado = calcular(operacao, numUm, numDois);

        // Sucesso
        res.send(`Resultado da ${operacao}: ${resultado}`);

    } catch (error) {
        // ERRO: Pega o erro e retorna status 400 (Bad Request)
        res.status(400).send(`Erro na operação: ${error.message}`);
    }
});


// TAREFA 2: Rota usando Query Parameters
// Exemplo de chamada: GET /calculadora?operacao=multiplicacao&numUm=4&numDois=6
app.get('/calculadora', (req, res) => {
    try {
        // Pega os parâmetros da query (após o ?)
        const { operacao, numUm, numDois } = req.query;

        // Validação simples
        if (!operacao || !numUm || !numDois) {
            throw new Error("Parâmetros 'operacao', 'numUm' e 'numDois' são obrigatórios.");
        }

        // Tenta calcular
        const resultado = calcular(operacao, numUm, numDois);

        // Sucesso
        res.send(`Resultado: ${resultado}`);

    } catch (error) {
        // ERRO: Pega o erro e retorna status 400 (Bad Request)
        res.status(400).send(`Erro na requisição: ${error.message}`);
    }
});


// =========================================================================
// INICIALIZAÇÃO DO SERVIDOR
// =========================================================================

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log("--- Testes ---");
    console.log("1. Path: http://localhost:3000/soma/10/5");
    console.log("2. Query: http://localhost:3000/calculadora?operacao=subtracao&numUm=20&numDois=7");
    console.log("3. Erro: http://localhost:3000/divisao/10/0");
});