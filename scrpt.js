const inputBox = document.getElementById("input-box");
const contenedorLista = document.getElementById("contenedor-lista");

function agregarTarea() {
    if(inputBox.value === '') {
        alert("Tienes que escribir algo")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        contenedorLista.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    guardarInformacion();
}

contenedorLista.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        guardarInformacion();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        guardarInformacion();
    }
}, false);

function guardarInformacion() {
    localStorage.setItem("informacion", contenedorLista.innerHTML);
}

function mostrarTarea() {
    contenedorLista.innerHTML = localStorage.getItem("informacion");
}
mostrarTarea();