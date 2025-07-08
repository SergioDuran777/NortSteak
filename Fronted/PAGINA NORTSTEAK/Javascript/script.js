function buscar() {
    let input = document.getElementById("search").value.toLowerCase();
    let productos = document.getElementById("productos").getElementsByTagName("li");

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i].textContent.toLowerCase();
        if (producto.includes(input)) {
            productos[i].style.display = "";
        } else {
            productos[i].style.display = "none";
        }
    }
}

