document.getElementById('sobre').addEventListener('click', () => {
  document.getElementById('pantalla-inicial').style.display = 'none';
  document.getElementById('formulario-codigo').classList.remove('oculto');
});

document.getElementById('btn-validar').addEventListener('click', () => {
  const codigo = document.getElementById('codigo').value.trim();

  // Simulación: el código correcto es "HP123"
  if (codigo === 'HP123') {
    document.getElementById('formulario-codigo').classList.add('oculto');
    document.getElementById('contenedor-menu').classList.remove('oculto');
  } else {
    alert('Código inválido');
  }
});
