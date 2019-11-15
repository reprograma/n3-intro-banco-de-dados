const comidas = [
  'Batata frita',
  'Hamburguer',
  'Sorvete de chocolate',
  'Saladinha delicia'
]

// 01: Selecione apenas a batatinha
const batatinha = comidas.find(c => c === "Batata frita")
console.log('*** batatinha:', batatinha)

// 02: Selecione apenas as comidas que comecem com `s` ou `b`
const comidasComSOuB = comidas.filter(c => (/^s|^b/i).test(c))
console.log('*** comidasComSOuB:', comidasComSOuB)

// 03: transforme a lista de comidas em comidas
// divertidas (adicione uma carinha feliz nelas)
const comidasDivertidas = comidas.map(c => c + ' :D o/ sextou ^.^')
console.log('*** comidasDivertidas:', comidasDivertidas)

// --------------------
const comidas2 = [
  { nome: 'Batata frita', vegano: true },
  { nome: 'Hamburguer', vegano: false },
  { nome: 'Sorvete de chocolate', vegano: false },
  { nome: 'Saladinha delicia', vegano: true }
]

// 04: Selecione apenas as comidinhas veganas.

// 05: Selecione apenas a primeira comidinhas vegana do cardápio.

// --------------------
const comidas3 = [
  { nome: 'Batata frita', vegano: true, preco: 10.90 },
  { nome: 'Hamburguer', vegano: false, preco: 19.80 },
  { nome: 'Sorvete de chocolate', vegano: false, preco: 7 },
  { nome: 'Saladinha delicia', vegano: true, preco: 12 }
]

// 06: Calcule o valor total desse cardapio
