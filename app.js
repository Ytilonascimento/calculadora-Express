const express = require('express');
const app = express();
const PORT = 3000;

app.get ("/soma/:numUm/:numDois", (req,res) =>{
    try {
        const {numUm , numDois} = req.params;

        if (isNaN(numUm) || isNaN(numDois) || numUm == "" || numDois == "" || numUm == undefined || numDois == undefined){
            return res.status(400).send('Dado inválido')
        }
        const result = parseFloat(numUm) + parseFloat(numDois);

        res.status(200).send(`O resultado da soma é: ${result}`);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno no servidor");
    }
});

app.get ("/subtracao/:numUm/:numDois", (req,res) =>{
    try {
        const {numUm , numDois} = req.params;

        if (isNaN(numUm) || isNaN(numDois) || numUm == "" || numDois == "" || numUm == undefined || numDois == undefined){
            return res.status(400).send('Dado inválido')
        }
        const result = parseFloat(numUm) - parseFloat(numDois);

        res.status(200).send(`O resultado da subtração é: ${result}`);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno no servidor");
    }
});

app.get ("/multiplicacao/:numUm/:numDois", (req,res) =>{
    try {
        const {numUm , numDois} = req.params;

        if (isNaN(numUm) || isNaN(numDois) || numUm == "" || numDois == "" || numUm == undefined || numDois == undefined){
            return res.status(400).send('Dado inválido')
        }
        const result = parseFloat(numUm) * parseFloat(numDois);

        res.status(200).send(`O resultado da multiplicação é: ${result}`);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno no servidor");
    }
});

app.get ("/divisao/:numUm/:numDois", (req,res) =>{
    try {
        const {numUm , numDois} = req.params;

        if (isNaN(numUm) || isNaN(numDois) || numUm == "" || numDois == "" || numUm == undefined || numDois == undefined){
            return res.status(400).send('Dado inválido')
        }
        const result = parseFloat(numUm) / parseFloat(numDois);

        res.status(200).send(`O resultado da divisão é: ${result}`);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno no servidor");
    }
});


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

