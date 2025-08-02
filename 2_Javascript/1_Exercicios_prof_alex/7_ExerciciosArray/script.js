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
console.log('18.1. cores:', cores);

//com spread;
const cores2 = [...coresPrimarias, ...coresSecundarias];
console.log('18.2. cores2:', cores2);

//19. Ordene um array de strings em ordem alfabética.
const palavras = ['Xis', 'Cachorro-quente', 'Pastel', 'Hambúrguer'];
const palavrasAlfabeticas = palavras.sort();
console.log('19. palavrasAlfabeticas:', palavrasAlfabeticas);

//20. Ordene um array de números do maior para o menor.
const numeros3 = [4, 8, 16, 32, 64, 128, 256];
const numerosDecrescente = numeros3.sort((a, b) => b - a);
console.log('20. numerosDecrescente:', numerosDecrescente);

//21. Remova valores duplicados de um array.
const arrayDuplicados = [1, 1, 2, 2, 3, 4, 5, 4, 2, 3, 6];

//com Set
const arrayUnicos = [...new Set(arrayDuplicados)];
console.log('21.1. arrayUnicos:', arrayUnicos);

//com filter
const arrayUnicos2 = arrayDuplicados.filter(
	(item, index, array) => array.indexOf(item) === index
);
console.log('21.2. arrayUnicos2:', arrayUnicos2);

//22. Conte quantas vezes um valor aparece em um array.
const valores = [1.0, 2.5, 1.0, 4.5, 2.0, 1.0, 3.0, 2.5, 1.0];
const quantValores = valores.filter((num) => num === 4.5).length;
console.log('22. quantValores:', quantValores);

//22. Fazer com reduce(valor, contador)

//23. Transforme todos os itens do array em uma única string separada por vírgulas com .join().
const itensdeViagem = ['mala', 'roupas', 'laptop', 'passagem', 'carteira'];
const unicaStringItens = itensdeViagem.join(', ');
console.log('23. unicaStringItens:', unicaStringItens);

//24. Substitua todas as ocorrências de "banana" por "maçã" em um array.
const frutas = ['banana', 'uva', 'banana', 'maçã', 'pera'];
const frutasBananaParaMaca = frutas.map((fruta) => {
	fruta === 'banana' ? (fruta = 'maçã') : fruta;
	return fruta;
});
console.log('24. frutasBananaParaMaca:', frutasBananaParaMaca);

//25. Encontre o índice de um valor específico com .indexOf().
const produtos = ['Melancia', 'Pão', 'Arroz', 'Biscoito', 'Miojo'];
const procurandoIndice = produtos.indexOf('Pão');
console.log('25. procurandoIndice:', procurandoIndice);

//26. Crie um novo array contendo apenas as strings de um array com tipos mistos.
const misto = ['a', 1, 'verdade', 3, 5, 'é', true, 'true', 100];
const justStrings = misto.filter((element) => typeof element === 'string');
console.log('26. justStrings:', justStrings);

//27. Coloque a primeira letra de cada palavra em maiúscula.
const palavras2 = ['joão', 'maria', 'Janaína', 'ana'];
const palavrasMaiuscula = palavras2.map((p) => {
	p = p.split('');
	if (p[0] != p[0].toUpperCase()) {
		p[0] = p[0].toUpperCase();
	}
	return p.join('');
});
console.log('27. palavrasMaiuscula:', palavrasMaiuscula);

//28. Verifique se todos os elementos são números com .every().
const nums = [1, 2, 3, 4, 5];

//Ex. todos são numeros;
const apenasNumeros = nums.every((value) => typeof value === 'number');
console.log('28.1. apenasNumeros:', apenasNumeros);

//Ex. string e numeros;
const misturados = ['Chocolate', 1, 5, 'Doces', 8, 0];
const apenasNumeros2 = misturados.every((value) => typeof value === 'number');
console.log('28.2. apenasNumeros2:', apenasNumeros2);

//29. Verifique se ao menos um número é maior que 100 usando .some().
const nums2 = [1, 11, 110, 1, 1, 11, 100];
const someNumGreaterThan100 = nums2.some((num) => num > 100);
console.log('29. someNumGreaterThan100:', someNumGreaterThan100);

//30. "Achatamento": transforme um array com subarrays em um único array plano (um nível só).
const arrayComSubarrays = [1, 2, 3, 4, [5, 6, [8, 9, 10], 11], 12, [13, 14]];
const arrayAchatado = arrayComSubarrays.flat(1);
console.log('30. arrayAchatado:', arrayAchatado);

//31. A partir de uma lista de idades, retorne apenas os adultos (idade ≥ 18).
const idades = [12, 17, 67, 18, 21, 30, 50, 1];
const apenasAdultos = idades.filter((idade) => idade >= 18);
console.log('31. apenasAdultos:', apenasAdultos);

//32. Crie uma função que recebe um array de números e retorna a média.
const notas = [7.5, 8.0, 10];
const media = notas.reduce((acumulador, valorAtual, index, array) => {
	acumulador = acumulador + valorAtual;
	if (array.indexOf(valorAtual) === array.length - 1) {
		return acumulador / array.length;
	}
	return acumulador;
}, 0);
console.log('32. media:', media);

//33. Faça uma função que recebe um array e o devolve na ordem inversa (sem usar .reverse()).
const numeros4 = [0, 1, 2, 3, 4];
function inverteArray(arr) {
	let novoArr = [];
	for (i = arr.length - 1; i >= 0; i--) {
		novoArr.push(arr[i]);
	}
	return novoArr;
}
console.log('33. inverteArray(numeros4):', inverteArray(numeros4));

//34. Rotacione os elementos de um array uma posição para a direita.
const calcadosLoja = ['sandália', 'havaianas', 'tênis', 'bota'];
let ultimo = calcadosLoja.pop();
const rotacionaCalcadosLoja = calcadosLoja.unshift(ultimo);
console.log('34. calcadosLoja:', calcadosLoja);

//35. Remova todos os valores falsos do array (false, 0, "", null, undefined, NaN).
const falsos = [false, 0, '', null, undefined, NaN, 'string'];
const filtroFalsos = falsos.filter((value) => !!value);
console.log('35. filtroFalsos:', filtroFalsos);

//36. Agrupe os itens de um array por tipo (typeof).

//37. Conte as vogais em cada string de um array.
const words = [
	'flores',
	'coruja',
	'paralelepipedo',
	'pneumoultramicroscopicossilicovulcanoconiótico',
];
const charsetVowels = 'aeiouáéíóúâêîôûãõàèìòùäëïöüAEIOUÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÄËÏÖÜ';
const countVowels = words.map((word) => {
	let count = 0;
	word = word.split('');
	for (i = 0; i <= word.length; i++) {
		if (charsetVowels.includes(word[i])) {
			count++;
		}
	}
	return count;
});
console.log('37. countVowels:', countVowels);

//38. Gere um array com os 10 primeiros números pares.
const numerosUmVinte = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const DezNumsPares = numerosUmVinte.filter((num) => num % 2 === 0).slice(0, 10);
console.log('38. DezNumsPares:', DezNumsPares);

//39. Gere um array com os quadrados dos números de 1 a 10.
const numerosUmDez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosQuadrado = numerosUmDez.map((num) => num * num);
console.log('39. numerosQuadrado:', numerosQuadrado);

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
