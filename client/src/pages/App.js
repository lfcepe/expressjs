import { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

function App() {
  const [mensaje, setMensaje] = useState('');

  const obtenerHolaMundo = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3001/api/holamundo');
      setMensaje(respuesta.data.mensaje);
    } catch (error) {
      console.error('Error al obtener la informacion del backend:', error);
      setMensaje('Error al conectar con el backend');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Boton Hola Mundo</h1>
      <button className='button' onClick={obtenerHolaMundo}>Mostrar saludo</button>
      {mensaje && <p className='message'> {mensaje}</p>}
    </div>
  );
}

export default App;
