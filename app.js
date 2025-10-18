const express = require("express");
const app = express();
const PORT = 3000;

app.get("/operacao/:tipo", (req, res) => {
    try {
        const {tipo } = req.params; // operação matemática (requisição)
        const { numUm, numDois } = req.query;
        let result = 0;
        if (numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)) {
            return res.status(400).send("Dado inválido")
        }
        switch (tipo) {
            case "soma":
                result = parseFloat(numUm) + parseFloat(numDois);
                break;

            case "subtracao":
                result = parseFloat(numUm) - parseFloat(numDois);
                break;

            case "multiplicacao":
                result = parseFloat(numUm) * parseFloat(numDois);
                break;

            case "divisao":
                if (numDois==0){
                    return res.status(400).send("erro: Divisão por zero nao é permitidada");
                }
                result = parseFloat(numUm) / parseFloat(numDois);
                break;

            default:
                return res.status(400).send("Dado inválido")

        }

        return res.status(200).send(`O resultado da operação é: ${result}`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno no servidor");
    }
})


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

