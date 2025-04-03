 export function crearItemBloque(bloque){
    let li = document.createElement("li");

    let img = document.createElement("img");
    img.setAttribute("src", "https://th.bing.com/th/id/OIP.4AArYTY-NyxBSktZ8TPJLAHaGS?rs=1&pid=ImgDetMain");
    img.setAttribute("alt", bloque.nombre);

    let divBloqueInfo = document.createElement("div");
    divBloqueInfo.classList.add("bloque-info");

    let spanNombre = document.createElement("span");
    spanNombre.textContent = bloque.nombre;

    let spanPrecio = document.createElement("span");
    spanPrecio.textContent = bloque.precio;

    let buttonEliminar = document.createElement("button");
    buttonEliminar.setAttribute("data-id", bloque.id);
    buttonEliminar.textContent = "x";

    divBloqueInfo.appendChild(spanNombre);
    divBloqueInfo.appendChild(spanPrecio);
    divBloqueInfo.appendChild(buttonEliminar);
    li.appendChild(img);
    li.appendChild(divBloqueInfo);

    let eliminarBtn = buttonEliminar;
    eliminarBtn.addEventListener("click", () => {
        eliminarBloque(bloque.id);
    });

    return li;
}

    export function eliminarBloque(id){
    console.log(`Elimina id: ${id}`);

    let lista = document.querySelector("ul");
    if (lista) {
        let item = [...lista.children].find(li => li.querySelector("button").getAttribute("data-id") === String(id));

        if (item) {
            lista.removeChild(item); 
            console.log(` con id: ${id} eliminado.`);
           
        } else {
            console.error(`No se encontró el id: ${id}`);
        }
    } else {
        console.error("No se encontró la lista.");
    }
}



