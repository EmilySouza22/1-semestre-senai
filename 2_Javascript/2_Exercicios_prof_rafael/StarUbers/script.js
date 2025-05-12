/*

1 ETAPA
Ler a distancia da próxima corrida e dizer quanto tempo vai levar.
1 dado de entrada: distancia (em km).
1 dado de saída: tempo de viagem (em segs).

- velocidade da luz = 300000

*/ 

let velocidadeLuz = 300000
let distanciaKm = Number(prompt("Qual a distância do trajeto? (KM)?"));
let distanciaSegundos = distanciaKm / velocidadeLuz;

/*

2 ETAPA
O tempo de viagem já é apresentado em segundos...
Caso este tempo seja maior que um minuto, apresentar este valor também em minutos.
Caso seja maior que uma hora, apresentar também em horas;
Caso seja maior que um dia, apresentar também em dias;
Caso seja maior que 30 dias, apresentar também em meses
Caso seja maior que 12 meses, apresentar também em anos

*/

if(distanciaSegundos >= 60 && distanciaSegundos < 3600){
    let distanciaMinutos = distanciaSegundos / 60
    distanciaMinutos = distanciaMinutos.toFixed(2)
    alert("O tempo de viagem, em minutos, será aproximadamente: " + distanciaMinutos);

} else if(distanciaSegundos >= 3600 && distanciaSegundos < 86400){
    let distanciaHoras = distanciaSegundos / 3600
    distanciaHoras = distanciaHoras.toFixed(2)
    alert("O tempo de viagem, em horas, será aproximadamente: " + distanciaHoras);

}else if(distanciaSegundos >= 86400 && distanciaSegundos < 2592000){
    let distanciaDias = distanciaSegundos / 86400
    distanciaDias = distanciaDias.toFixed(2)
    alert("O tempo de viagem, em dias, será aproximadamente: " + distanciaDias);

}else if(distanciaSegundos >= 2592000 && distanciaSegundos < 31536000){
    let distanciaMeses = distanciaSegundos / 2592000
    distanciaMeses = distanciaMeses.toFixed(2)
    alert("O tempo de viagem, em meses, será aproximadamente: " + distanciaMeses);

}else if(distanciaSegundos >= 31536000){
    let distanciaAnos = distanciaSegundos / 31536000
    distanciaAnos = distanciaAnos.toFixed(2)
    alert("O tempo de viagem, em anos, será aproximadamente: " + distanciaAnos);

}else{
    alert("O tempo de viagem, em segundos, será aproximadamente: " + distanciaSegundos);
}