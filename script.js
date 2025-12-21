'use strict';

/* --- LÓGICA DA CALCULADORA DE ECONOMIA --- */

// 1. Pegamos os elementos da tela
const input = document.getElementById('amountInput');
const bankResult = document.getElementById('bankResult');
const innovaResult = document.getElementById('innovaResult');
const savingsResult = document.getElementById('savingsResult');

// 2. Definição de taxas (Simulação)
const cotacaoDolar = 5.00; 
const taxaBancoComum = 0.04; // 4% Spread (Banco comum)
const taxaInnova = 0.01;     // 1% Spread (InnovaBank)

// 3. Função de Cálculo
function calcular() {
    // Garante que o input exista antes de tentar ler o valor
    if (!input) return;

    let valorDolar = parseFloat(input.value) || 0;

    // Cálculos
    let totalBanco = valorDolar * cotacaoDolar * (1 - taxaBancoComum);
    let totalInnova = valorDolar * cotacaoDolar * (1 - taxaInnova);
    let economia = totalInnova - totalBanco;

    // Formatação para Real Brasileiro (BRL)
    const formatBRL = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    bankResult.innerText = formatBRL(totalBanco);
    innovaResult.innerText = formatBRL(totalInnova);
    savingsResult.innerText = formatBRL(economia);
}

// 4. Inicialização
// Adiciona o ouvinte de evento apenas se o elemento existir na página
if (input) {
    input.addEventListener('input', calcular);
    // Roda o cálculo inicial ao carregar a página
    calcular();
}