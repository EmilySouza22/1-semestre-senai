/*
6. Um robô serve café conforme o pedido. Ele só aceita "café", "capuccino" ou
"expresso". Qualquer outro pedido, ele responde educadamente.

Responda com:
"Servindo café ☕"
"Servindo capuccino 🧋"
"Servindo expresso 🔥"
"Desculpe, não temos esse tipo de café 😔"
*/

let pedido = prompt("Cardápio: (cafe), (capuccino) e (expresso)")

if(pedido == "cafe"){
    console.log("Servindo café...☕")
} else if(pedido == "capuccino"){
    console.log("Servindo capuccino...🧋")
} else if(pedido == "expresso"){
    console.log("Servindo expresso...🔥")
}else{
    console.log("Desculpe, não temos esse tipo de café 😔")
}


