function mostrarSeccion(seccion) {
      document.getElementById('seccionNequi').style.display = seccion === 'nequi' ? 'block' : 'none';
      document.getElementById('seccionTarjeta').style.display = seccion === 'tarjeta' ? 'block' : 'none';

      document.getElementById('alertaProductoNequi').style.display = 'none';
      document.getElementById('alertaProductoTarjeta').style.display = 'none';

      if (seccion !== 'nequi') {
        document.getElementById('qrNequi').style.display = 'none';
      }

      limpiarErrores();
    }

    function seleccionarProducto(nombreProducto) {
      window.productoSeleccionado = nombreProducto;

      document.getElementById('productoNequi').textContent = nombreProducto;
      document.getElementById('productoTarjeta').textContent = nombreProducto;
      document.getElementById('alertaProductoNequi').style.display = 'none';
      document.getElementById('alertaProductoTarjeta').style.display = 'none';
    }

    function generarQR() {
      if (!window.productoSeleccionado) {
        document.getElementById('alertaProductoNequi').style.display = 'block';
        return;
      }
      document.getElementById('qrNequi').style.display = 'block';
    }

    function limpiarErrores() {
      document.getElementById('errorNombre').textContent = '';
      document.getElementById('errorNumero').textContent = '';
      document.getElementById('errorFecha').textContent = '';
      document.getElementById('errorCVV').textContent = '';
    }

    function irAlCheckout() {
      limpiarErrores();

      if (!window.productoSeleccionado) {
        document.getElementById('alertaProductoTarjeta').style.display = 'block';
        return;
      }

      let nombre = document.getElementById('nombreTitular').value.trim();
      let numero = document.getElementById('numeroTarjeta').value.trim();
      let fecha = document.getElementById('fechaVencimiento').value.trim();
      let cvv = document.getElementById('cvv').value.trim();

      let valido = true;

      if (!nombre) {
        document.getElementById('errorNombre').textContent = 'Este campo no puede estar vacío.';
        valido = false;
      }

      if (!numero) {
        document.getElementById('errorNumero').textContent = 'Este campo no puede estar vacío.';
        valido = false;
      }

      if (!fecha) {
        document.getElementById('errorFecha').textContent = 'Este campo no puede estar vacío.';
        valido = false;
      }

      if (!cvv) {
        document.getElementById('errorCVV').textContent = 'Este campo no puede estar vacío.';
        valido = false;
      }

      if (valido) {
        alert('Procesando pago del producto {"$window.productoSeleccionado}"');
      }
    }
  window.productoSeleccionado = null;
