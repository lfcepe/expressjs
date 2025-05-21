const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

const holaRoutes = require('./Routes/holaRoute')

app.use(cors());
app.use(express.json());

app.use('/api', holaRoutes);

app.listen(PORT, () => {
  console.log(`Conectado a: http://localhost:${PORT}`);
  console.log('Hola a todos!\nEsta es nuestra exposición de Express\nEspero que les guste');
});