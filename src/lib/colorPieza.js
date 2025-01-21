
// Función para obtener un color aleatorio para cada pieza

const colorPieza = (numero) => {
  switch (numero) {
    case 0:
      return "bg-black"; // Vacío
    case 1:
      return "bg-secondary"; // Bordes
    case 2:
      return "bg-primary"; // Pieza tipo Ele
    case 3:
      return "bg-warning"; // Pieza tipo T
    case 4:
      return "bg-danger"; // Pieza tipo L
    case 5:
      return "bg-success"; // Pieza tipo Z
    case 6:
      return "bg-info"; // Pieza tipo S
    case 7:
      return "bg-light"; // Pieza tipo O
    case 8:
      return "bg-dark"; // Pieza tipo I
    default:
      return "bg-black"; // Color por defecto
  }
};

export default colorPieza;
