# Boleto Fraud Monitor — EBANX Fraud Prevention

Dashboard profissional de monitoramento de fraude em boletos com agente de IA integrado.

## Stack

- HTML5 + CSS3 + JavaScript ES6 puro
- Chart.js 4.4 (gráficos)
- Claude API (agente de análise)
- GitHub Pages (hospedagem)

## Estrutura

```
/
├── index.html   # tudo em um único arquivo
└── README.md
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `boleto-fraud-monitor`)
2. Faça upload do `index.html` e `README.md`
3. Vá em **Settings → Pages**
4. Em **Source**, selecione `Deploy from a branch` → `main` → `/ (root)`
5. Clique em **Save**
6. Aguarde ~1 minuto. A URL será: `https://seu-usuario.github.io/boleto-fraud-monitor`

## Como atualizar os dados

Os dados estão hardcoded no `index.html` (seção `<script>`).

Para atualizar após nova query no BigQuery:

1. Rode a query SQL no BigQuery
2. Exporte para Google Sheets
3. Atualize as variáveis no `script.js` interno:
   - `const dias` — datas dos últimos 7 dias
   - `const dPE, dCO, dHD, dCA` — volumes diários
   - `const merchants` — array de merchants
   - `const bpdrs` — contagem BP-DR
   - `const cpfs` — CPFs críticos

## Agente Claude

O chat de IA usa a API da Anthropic diretamente do browser.
Para usar em produção, configure um proxy backend para não expor a chave.

No modo atual (GitHub Pages), o agente funciona via chamada direta à API.

## Dados da base atual

- Período: 22/06/2026 – 05/07/2026
- Planilha: results-20260706-171755
- ID: 1wXxByzKuhbxl7k_qSHjXUnu0g98jXJBXzOYBqXlcN2o
- Total: 21.036 transações · 10 merchants · Brasil
