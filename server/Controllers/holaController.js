const getHola = (req, res) => {
    res.json({ mensaje: "Hola mundo" });
  };
  
module.exports = { getHola };