const invalidText = () => {
  Swal.fire({
    title: "Inválido",
    text: "Por favor ingrese un texto válido",
    icon: "warning",
    confirmButtonText: "Entendido",
    background: "rgb(224, 246, 255)",
  });
};

const emptyText = () => {
  Swal.fire({
    title: "No se encontró ningún texto",
    text: "Por favor ingrese el texto",
    icon: "warning",
    confirmButtonText: "Entendido",
    background: "rgb(224, 246, 255)",
  });
};
