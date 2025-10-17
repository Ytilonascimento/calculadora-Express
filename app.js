const express = require('express');
const app = express();
const PORT = 3000;




// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

