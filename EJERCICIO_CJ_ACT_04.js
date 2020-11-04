const misNotas = [
    { titulo: "VSCode", cuerpo: "usar snipets" },
    { titulo: "Paseo", cuerpo: "salir a pasear con la familia" },
    { titulo: "Cena", cuerpo: "preparar la cena de hoy" },
    { titulo: "Visita", cuerpo: "Visitar a mis padres mañana" },
    { titulo: "VSCode", cuerpo: "usar snipets" },

]
//crea una nueva nota (return numero de elementos length)
console.log('----------1-----------');
function crearNota(txta, txtb) {
    misNotas.push({ titulo: txta, cuerpo: txtb })
}
//borrar la nota que le pases(la tarea borrada)
function borrarNota(nota, tit) {
    let i = nota.findIndex(function(not){ return not.titulo === tit});
    return nota.splice(i, 1);
}
//en el que le pases
function ordenarNotas(notas, a) {
    if(a === 'titulo'){
    return notas.sort(function (notaA, notaB) {
        if (notaA.titulo.toLowerCase() < notaB.titulo.toLowerCase()) {
            return -1
        } else if (notaA.titulo.toLowerCase() > notaB.titulo.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })}else{
        return notas.sort(function (notaA, notaB) {
            if (notaA.cuerpo.toLowerCase() < notaB.cuerpo.toLowerCase()) {
                return -1
            } else if (notaA.cuerpo.toLowerCase() > notaB.cuerpo.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}
//en todo coje el texto (return tarea)
function buscarTextoEnNotas(nota,txt) {
    return misNotas.findIndex(function(obj){ return obj.cuerpo === txt})
}


console.log('antes',misNotas.length);
crearNota('Dormir','Dormir tranquilo')
console.log('despues',misNotas.length);

console.log('----------2-----------');
console.log(borrarNota(misNotas, "Escalada"));
console.log('------------------');
console.log(misNotas);

console.log('----------3-----------');
console.log(ordenarNotas(misNotas,'titulo'));
console.log('------------------------');
console.log(ordenarNotas(misNotas,'cuerpo'));

console.log('-------4--------');
console.log(buscarTextoEnNotas(misNotas,'cascada'));