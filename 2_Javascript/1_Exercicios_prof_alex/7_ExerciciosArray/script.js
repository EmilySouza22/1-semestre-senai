/* 
    Lista de exercícios - Array 

    11 - 50
*/

/**
 *
 *    - Métodos básicos
 *    push()
 *    pop()
 *    shift()
 *    unshift()
 *
 *    - Métodos intermediários
 *    forEach()
 *    map()
 *    filter()
 *    find()
 *    reduce()
 *    concat()
 *    spread [...]
 *    indexOf()
 *    every()
 *    join()
 *    splice()
 *
 */

console.log('---------------------------------------> Ínicio');

//11. Crie um array com 5 nomes e mostre apenas os que têm mais de 4 letras.
const nomes = ['Ana', 'Emily', 'Rosa', 'Ciara', 'Bia'];
const nomesFiltrados = nomes.filter((nome) => nome.length > 4);
console.log('11. nomesFiltrados:', nomesFiltrados);

//12. Dobre cada número de um array usando .map()
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map((num) => num * 2);
console.log('12. numerosDobrados:', numerosDobrados);

//13. Filtre os números pares de um array com .filter().
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros2.filter((num) => num % 2 === 0);
console.log('13. numerosPares:', numerosPares);

//14. Some todos os números do array com .reduce().
const numerosSomados = numeros.reduce((a, b) => a + b, 0);
console.log('14. numerosSomados:', numerosSomados);

//15. Encontre o maior número de um array.
const maiorNumero = numeros.reduce((a, b) => (a > b ? a : b));
console.log('15. maiorNumero:', maiorNumero);

//16. Encontre o menor número de um array.
const menorNumero = numeros.reduce((a, b) => (a < b ? a : b));
console.log('16. menorNumero:', menorNumero);

//17. Inverta os elementos de um array sem usar .reverse().
const numerosBinarios = [0, 1, 10, 11, 100, 101, 110, 111, 1000];
const numerosBinariosInvertidos = numerosBinarios.reduce((acc, elemento) => {
	acc.unshift(elemento);
	return acc;
}, []);
console.log('17. numerosBinariosInvertidos:', numerosBinariosInvertidos);

//18. Junte dois arrays em um só usando .concat() ou spread [...].
const coresPrimarias = ['azul', 'vermelho', 'amarelo'];
const coresSecundarias = ['laranja', 'verde', 'roxo'];
//com concat;
const cores = coresPrimarias.concat(coresSecundarias);
console.log('18. cores:', cores);
//com spread;
const cores2 = [...coresPrimarias, ...coresSecundarias];
console.log('18. cores2:', cores2);

//19. Ordene um array de strings em ordem alfabética.
const palavras = ['Xis', 'Cachorro-quente', 'Pastel', 'Hambúrguer'];
const palavrasAlfabeticas = palavras.sort();
console.log('19. palavrasAlfabeticas:', palavrasAlfabeticas);

//20. Ordene um array de números do maior para o menor.
const numeros3 = [4, 8, 16, 32, 64, 128, 256];
const numerosDecrescente = numeros3.sort((a, b) => b - a);
console.log('20. numerosDecrescente:', numerosDecrescente);

//21. Remova valores duplicados de um array.

//22. Conte quantas vezes um valor aparece em um array.

//23. Transforme todos os itens do array em uma única string separada por vírgulas com .join().

//24. Substitua todas as ocorrências de "banana" por "maçã" em um array

//25. Encontre o índice de um valor específico com .indexOf().

//26. Crie um novo array contendo apenas as strings de um array com tipos mistos.

//27. Coloque a primeira letra de cada palavra em maiúscula.

//28. Verifique se todos os elementos são números com .every().

//29. Verifique se ao menos um número é maior que 100 usando .some().

//30. "Achatamento": transforme um array com subarrays em um único array plano (um nível só).

//31. A partir de uma lista de idades, retorne apenas os adultos (idade ≥ 18).

//32. Crie uma função que recebe um array de números e retorna a média.

//33. Faça uma função que recebe um array e o devolve na ordem inversa (sem usar .reverse()).

//34. Rotacione os elementos de um array uma posição para a direita.

//35. Remova todos os valores falsos do array (false, 0, "", null, undefined, NaN).

//36. Agrupe os itens de um array por tipo (typeof).

//37. Conte as vogais em cada string de um array.

//38. Gere um array com os 10 primeiros números pares.

//39. Gere um array com os quadrados dos números de 1 a 10.

//40. Compare dois arrays e retorne os elementos que existem em ambos.

//41. Faça um array de objetos com nome e nota, e filtre os aprovados (nota ≥ 7).

//42. Crie uma função que embaralha os elementos de um array.

//43. Verifique se um array está em ordem crescente.

//44. Conte quantas strings têm mais de 5 letras em um array.

//45. Inverta as palavras de cada string de um array.

//46. Crie um array com os dias da semana e exiba apenas os do fim de semana.

//47. Separe os números negativos e positivos de um array.

//48. Crie uma função que retorna o segundo maior número de um array.

//49. Conte quantas vezes cada letra aparece em um array de strings.

//50. Transforme um array de strings em um array de objetos com { valor: string, tamanho: número de caracteres }.
