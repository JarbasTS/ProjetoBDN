const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Bloco de Notas')
})

app.listen(8080, () => {
  console.log('🚀O pai tá On !!✔')
})
