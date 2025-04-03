import { dataBloque } from "../../data/data.js";
import { crearItemBloque} from "./itemBloque.js";  


export function cargarBloque() {
       const bloque = document.getElementById("root");

    if (bloque) {
        bloque.innerHTML = ""; 

        if (!Array.isArray(dataBloque)|| dataBloque.length === 0) {
            console.error("dataBloque está vacío o no es un array válido.");
            return;
        }

        const ul = document.createElement("ul");

       
        for (let i = 0; i < 12; i++) {
            const bloque = dataBloque [i% dataBloque.length];
           
       
            const itemBloque = crearItemBloque(bloque);

            ul.appendChild(itemBloque);
       }

        
        bloque.appendChild(ul);
    } else {
        console.error("No se encontró el contenedor 'root' para los bloques.");
    }
}
