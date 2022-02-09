let frutas = ["mango", "kiwi", 'frutilla', "platano"];
// inicio- limite- avance
for(let inicio=frutas.length ; inicio>=0;inicio--){ //sentencia ciclica
    console.log(inicio,frutas[inicio])
}

if((frutas.includes("frutilla") && frutas.includes('palta')) || frutas.includes('platano')){
    console.log("Una de tus frutas favoritas se encuentra aca :)")
}

else if (frutas.includes("frutilla") || frutas.includes('palta') ){
    console.log("Una de tus frutas favoritas se encuentra aca :)")
}
else{
    console.log("perdoname hermanito te lo juro que pense que tenia lo que querias :c")
}

let computador = {
    //llave:valor
    procesador: "AMD Ryzen 5 3600XT",
    RAM:16,
    video: "Amd Radeon Rx 580 8gb",
    ventiladores: {entrada: "fan", cantidad:4, rgb:true}, //verdado y falso son booleanos
    juegosSteam:['They are Billions', 'L4D', 'Dota', "Doki doki"]
}
/*                        0    1       2          3 */
let muchosComputadores = [2.2,"A",22, "aeropuerto"];// n=4
let numero =2;
if(numero <muchosComputadores.length){
     console.log(muchosComputadores[2])
 }
else{
     console.log(numero,"excede el maximo")
}

console.log(muchosComputadores[1]> "Mucho texto");

console.log( !true); // !false it's funy because it's true

console.log(computador.RAM ==="16");

//quiero que mi objeto computador se le agregue un ventilador más
computador.ventiladores.cantidad=5
