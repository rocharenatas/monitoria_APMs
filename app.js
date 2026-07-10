// ═══════════════════════════════════════════
// i18n
// ═══════════════════════════════════════════
const LANGS = {
  pt:{
    app_title:'Fraud Intelligence Copilot',
    nav_monitoring:'Monitoramento',nav_dashboard:'Dashboard',nav_briefing:'Daily Briefing',
    nav_merchants:'Merchants',nav_trends:'Tendências',nav_risk:'Risco',nav_alerts:'Alertas',
    nav_cpf:'CPFs críticos',nav_emails:'E-mails suspeitos',nav_card:'Cartão',
    nav_copilot:'Copilot Chat',soon:'em breve',live:'ao vivo',refresh:'Atualizar',
    briefing_eyebrow:'AI Daily Briefing',briefing_title:'Resumo da monitoria · 05/07/2026',
    ba_deepen:'Aprofundar ↗',ba_changed:'O que mudou? ↗',ba_priorities:'Prioridades ↗',
    ba_emails:'E-mails suspeitos ↗',ba_summary:'Resumo 5 linhas ↗',
    bm_pe:'PE D-1',bm_due:'Vencem 08/07',bm_up:'Merchants PE ↑',bm_down:'Merchants PE ↓',
    bm_email_multi:'E-mails multi-CPF',bm_alerts:'Alertas ativos',
    hero_eyebrow:'Boletos PE com vencimento futuro · D-1 (05/07/2026)',hero_open:'em aberto',
    hero_d2:'−0,9% vs D-2',hero_d3:'−8,2% vs D-3',hero_new:'clientes novos',
    hs_total_pe:'PE total período',hs_due1:'Vence 07/07 · 2 dias',hs_due2:'Vence 08/07 · 3 dias',
    hs_conv:'Conversão geral',urgent:'urgente',below_target:'abaixo alvo',
    prio_title:'Priorização inteligente · D-1',prio_meta:'ranking automático · ordenado por risco',
    email_title:'E-mails com comportamento fraudulento',email_meta:'extraído da coluna customer_email · base real',
    em_multi_cpf:'E-mails com múltiplos CPFs',em_hd_only:'E-mails 100% HD (≥5 tx)',
    em_multi_names:'E-mails com múltiplos nomes',em_total:'Total de e-mails únicos',
    th_email:'E-mail',th_transactions:'Transações',th_cpfs:'CPFs distintos',th_names:'Nomes',
    th_status:'Status',th_brl:'Valor BRL',th_pattern:'Padrão',th_alert:'Alerta',
    th_merchant:'Merchant',th_total:'Total',th_conv:'Conversão',th_risk:'Risco',th_qty:'Qtd',
    merch_d1_title:'PE por merchant · D-1 vs D-2',
    period_filter:'Período de análise',pd1:'D-1',p7d:'Últimos 7 dias',p14d:'Últimos 14 dias',pcustom:'Período completo',
    kpi_title:'Visão geral · últimos 7 dias',kpi_total:'Total de boletos',kpi_financial:'Volume financeiro',
    kpi_hd:'Em hold (HD)',kpi_hd_sub:'bloqueado antifraude',kpi_conv:'Conversão',high_risk:'risco elevado',
    chart_daily:'PE diário · últimos 7 dias',chart_status:'Status do período',
    chart_merch_comp:'PE por merchant · D-1 vs D-2',chart_conv:'Conversão por merchant',
    merch_table_title:'Detalhamento por merchant',
    cpf_title:'CPFs com concentração anômala',cpf_crit_label:'fraude de identidade em escala',
    insights_title:'Insights automáticos',bpdr_title:'Recusas BP-DR',senior_title:'Senioridade',
    senior_old:'Antigo (>30d)',senior_new:'Novo (≤30d)',score_title:'Fraud risk score',
    anomaly_text:'<b>Anomalia — 04 e 05/07:</b> CO caiu de ~450/dia para 24 em 04/07 e <b>zero</b> em 05/07. Validar com time operacional.',
    agent_name:'Fraud Intelligence Copilot',agent_sub:'Pergunte em linguagem natural · dados reais',
    q_changed:'O que mudou? ↗',q_priorities:'Prioridades ↗',q_email:'E-mail suspeito ↗',
    q_email_cpf:'233 multi-CPF ↗',q_wish:'Wish +267% ↗',q_monday:'Incidente Monday ↗',
    q_summary:'Resumo 5 linhas ↗',q_trends:'Tendências ↗',
    input_placeholder:'Ex: O que mudou ontem? Quais e-mails investigar?',send:'Enviar',
    period_label:'Período:',updated:'Atualizado:',
  },
  en:{
    app_title:'Fraud Intelligence Copilot',
    nav_monitoring:'Monitoring',nav_dashboard:'Dashboard',nav_briefing:'Daily Briefing',
    nav_merchants:'Merchants',nav_trends:'Trends',nav_risk:'Risk',nav_alerts:'Alerts',
    nav_cpf:'Critical CPFs',nav_emails:'Suspicious Emails',nav_card:'Card',
    nav_copilot:'Copilot Chat',soon:'coming soon',live:'live',refresh:'Refresh',
    briefing_eyebrow:'AI Daily Briefing',briefing_title:'Monitoring summary · 07/05/2026',
    ba_deepen:'Deep dive ↗',ba_changed:'What changed? ↗',ba_priorities:'Priorities ↗',
    ba_emails:'Suspicious emails ↗',ba_summary:'5-line summary ↗',
    bm_pe:'PE D-1',bm_due:'Due 07/08',bm_up:'Merchants PE ↑',bm_down:'Merchants PE ↓',
    bm_email_multi:'Multi-CPF emails',bm_alerts:'Active alerts',
    hero_eyebrow:'PE boletos with future due date · D-1 (07/05/2026)',hero_open:'outstanding',
    hero_d2:'−0.9% vs D-2',hero_d3:'−8.2% vs D-3',hero_new:'new customers',
    hs_total_pe:'Total PE period',hs_due1:'Due 07/07 · 2 days',hs_due2:'Due 07/08 · 3 days',
    hs_conv:'Overall conversion',urgent:'urgent',below_target:'below target',
    prio_title:'Smart prioritization · D-1',prio_meta:'auto ranking · sorted by risk',
    email_title:'Emails with fraudulent behavior',email_meta:'from customer_email column · real data',
    em_multi_cpf:'Emails with multiple CPFs',em_hd_only:'100% HD emails (≥5 tx)',
    em_multi_names:'Emails with multiple names',em_total:'Total unique emails',
    th_email:'Email',th_transactions:'Transactions',th_cpfs:'Distinct CPFs',th_names:'Names',
    th_status:'Status',th_brl:'BRL Amount',th_pattern:'Pattern',th_alert:'Alert',
    th_merchant:'Merchant',th_total:'Total',th_conv:'Conversion',th_risk:'Risk',th_qty:'Qty',
    merch_d1_title:'PE by merchant · D-1 vs D-2',
    period_filter:'Analysis period',pd1:'D-1',p7d:'Last 7 days',p14d:'Last 14 days',pcustom:'Full period',
    kpi_title:'Overview · last 7 days',kpi_total:'Total boletos',kpi_financial:'Financial volume',
    kpi_hd:'On hold (HD)',kpi_hd_sub:'blocked by antifraud',kpi_conv:'Conversion',high_risk:'high risk',
    chart_daily:'Daily PE · last 7 days',chart_status:'Period status',
    chart_merch_comp:'PE by merchant · D-1 vs D-2',chart_conv:'Conversion by merchant',
    merch_table_title:'Merchant breakdown',
    cpf_title:'CPFs with anomalous concentration',cpf_crit_label:'identity fraud at scale',
    insights_title:'Automatic insights',bpdr_title:'BP-DR refusals',senior_title:'Seniority',
    senior_old:'Old (>30d)',senior_new:'New (≤30d)',score_title:'Fraud risk score',
    anomaly_text:'<b>Anomaly — 07/04 and 07/05:</b> CO dropped from ~450/day to 24 on 07/04 and <b>zero</b> on 07/05. Validate with operations.',
    agent_name:'Fraud Intelligence Copilot',agent_sub:'Ask in natural language · real monitoring data',
    q_changed:'What changed? ↗',q_priorities:'Priorities ↗',q_email:'Suspicious email ↗',
    q_email_cpf:'233 multi-CPF ↗',q_wish:'Wish +267% ↗',q_monday:'Monday incident ↗',
    q_summary:'5-line summary ↗',q_trends:'Trends ↗',
    input_placeholder:'E.g.: What changed yesterday? Which emails to investigate?',send:'Send',
    period_label:'Period:',updated:'Updated:',
  },
  es:{
    app_title:'Fraud Intelligence Copilot',
    nav_monitoring:'Monitoreo',nav_dashboard:'Dashboard',nav_briefing:'Informe Diario',
    nav_merchants:'Merchants',nav_trends:'Tendencias',nav_risk:'Riesgo',nav_alerts:'Alertas',
    nav_cpf:'CPFs críticos',nav_emails:'Emails sospechosos',nav_card:'Tarjeta',
    nav_copilot:'Copilot Chat',soon:'próximamente',live:'en vivo',refresh:'Actualizar',
    briefing_eyebrow:'AI Informe Diario',briefing_title:'Resumen del monitoreo · 05/07/2026',
    ba_deepen:'Profundizar ↗',ba_changed:'¿Qué cambió? ↗',ba_priorities:'Prioridades ↗',
    ba_emails:'Emails sospechosos ↗',ba_summary:'Resumen 5 líneas ↗',
    bm_pe:'PE D-1',bm_due:'Vencen 08/07',bm_up:'Merchants PE ↑',bm_down:'Merchants PE ↓',
    bm_email_multi:'Emails multi-CPF',bm_alerts:'Alertas activas',
    hero_eyebrow:'Boletos PE con vencimiento futuro · D-1 (05/07/2026)',hero_open:'pendiente',
    hero_d2:'−0,9% vs D-2',hero_d3:'−8,2% vs D-3',hero_new:'clientes nuevos',
    hs_total_pe:'PE total período',hs_due1:'Vence 07/07 · 2 días',hs_due2:'Vence 08/07 · 3 días',
    hs_conv:'Conversión general',urgent:'urgente',below_target:'bajo objetivo',
    prio_title:'Priorización inteligente · D-1',prio_meta:'ranking automático · ordenado por riesgo',
    email_title:'Emails con comportamiento fraudulento',email_meta:'columna customer_email · datos reales',
    em_multi_cpf:'Emails con múltiples CPFs',em_hd_only:'Emails 100% HD (≥5 tx)',
    em_multi_names:'Emails con múltiples nombres',em_total:'Total emails únicos',
    th_email:'Email',th_transactions:'Transacciones',th_cpfs:'CPFs distintos',th_names:'Nombres',
    th_status:'Estado',th_brl:'Valor BRL',th_pattern:'Patrón',th_alert:'Alerta',
    th_merchant:'Merchant',th_total:'Total',th_conv:'Conversión',th_risk:'Riesgo',th_qty:'Cant',
    merch_d1_title:'PE por merchant · D-1 vs D-2',
    period_filter:'Período de análisis',pd1:'D-1',p7d:'Últimos 7 días',p14d:'Últimos 14 días',pcustom:'Período completo',
    kpi_title:'Visión general · últimos 7 días',kpi_total:'Total boletos',kpi_financial:'Volumen financiero',
    kpi_hd:'En espera (HD)',kpi_hd_sub:'bloqueado antifraude',kpi_conv:'Conversión',high_risk:'riesgo alto',
    chart_daily:'PE diario · últimos 7 días',chart_status:'Estado del período',
    chart_merch_comp:'PE por merchant · D-1 vs D-2',chart_conv:'Conversión por merchant',
    merch_table_title:'Detalle por merchant',
    cpf_title:'CPFs con concentración anómala',cpf_crit_label:'fraude de identidad a escala',
    insights_title:'Insights automáticos',bpdr_title:'Rechazos BP-DR',senior_title:'Antigüedad',
    senior_old:'Antiguo (>30d)',senior_new:'Nuevo (≤30d)',score_title:'Fraud risk score',
    anomaly_text:'<b>Anomalía — 04 y 05/07:</b> CO bajó de ~450/día a 24 el 04/07 y <b>cero</b> el 05/07. Validar con operaciones.',
    agent_name:'Fraud Intelligence Copilot',agent_sub:'Pregunte en lenguaje natural · datos reales',
    q_changed:'¿Qué cambió? ↗',q_priorities:'Prioridades ↗',q_email:'Email sospechoso ↗',
    q_email_cpf:'233 multi-CPF ↗',q_wish:'Wish +267% ↗',q_monday:'Incidente Monday ↗',
    q_summary:'Resumen 5 líneas ↗',q_trends:'Tendencias ↗',
    input_placeholder:'Ej: ¿Qué cambió ayer? ¿Qué emails investigar?',send:'Enviar',
    period_label:'Período:',updated:'Actualizado:',
  }
};
let currentLang='pt';
function setLang(lang){
  currentLang=lang;
  document.documentElement.setAttribute('data-lang',lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(LANGS[lang][k]!==undefined) el.innerHTML=LANGS[lang][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k=el.getAttribute('data-i18n-ph');
    if(LANGS[lang][k]) el.placeholder=LANGS[lang][k];
  });
  ['pt','en','es'].forEach(l=>document.getElementById('lb-'+l).classList.toggle('active',l===lang));
  // Update agent welcome
  const welcomes={
    pt:'Olá! Sou o <b>Fraud Intelligence Copilot</b>. D-1 carregado: <b>806 PE · R$ 104.965 · 771 vencem em 08/07 · 2 CRITICAL</b>. Pergunte qualquer coisa.',
    en:'Hello! I\'m the <b>Fraud Intelligence Copilot</b>. D-1 loaded: <b>806 PE · R$ 104,965 · 771 due 07/08 · 2 CRITICAL</b>. Ask me anything.',
    es:'¡Hola! Soy el <b>Fraud Intelligence Copilot</b>. D-1 cargado: <b>806 PE · R$ 104.965 · 771 vencen 08/07 · 2 CRITICAL</b>. Pregunta lo que quieras.'
  };
  const we=document.getElementById('agent-welcome');
  if(we) we.innerHTML=welcomes[lang]||welcomes.pt;
}

// ═══════════════════════════════════════════
// Clock
// ═══════════════════════════════════════════
function tick(){const n=new Date();document.getElementById('hdr-clock').textContent=n.toLocaleTimeString('pt-BR');document.getElementById('sb-time').textContent=n.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});}
tick();setInterval(tick,1000);
function toggleSb(){document.getElementById('sb').classList.toggle('open');document.getElementById('overlay').classList.toggle('open');}
function refreshUI(){const b=document.querySelector('.btn-ref');b.style.opacity='.4';setTimeout(()=>b.style.opacity='1',800);}

// ═══════════════════════════════════════════
// Period filter
// ═══════════════════════════════════════════
const PERIOD_DATA={
  'd1':{label:'D-1 · 05/07/2026',total:882,brl:'R$ 107k',hd:73,conv:'—',info:'05/07/2026 · 882 transações'},
  '7d':{label:'Últimos 7 dias · 29/06–05/07',total:4962,brl:'R$ 641k',hd:2128,conv:'34,5%',info:'29/06 – 05/07/2026 · 4.962 transações'},
  '14d':{label:'Últimos 14 dias · 22/06–05/07',total:21036,brl:'R$ 2,57M',hd:5031,conv:'34,5%',info:'22/06 – 05/07/2026 · 21.036 transações'},
  'custom':{label:'Período completo · 22/06–05/07',total:21036,brl:'R$ 2,57M',hd:5031,conv:'34,5%',info:'22/06 – 05/07/2026 · 21.036 transações (período completo)'}
};
function setPeriod(p,btn){
  document.querySelectorAll('.p-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const d=PERIOD_DATA[p];
  document.getElementById('period-info').textContent=d.info;
  document.getElementById('merch-period-badge').textContent=d.info;
  document.getElementById('kv-total').textContent=d.total.toLocaleString('pt-BR');
  document.getElementById('kv-brl').textContent=d.brl;
  document.getElementById('kv-hd').textContent=d.hd.toLocaleString('pt-BR');
  document.getElementById('kv-conv').textContent=d.conv;
}

// ═══════════════════════════════════════════
// Data
// ═══════════════════════════════════════════
const D1=[
  {n:'Alipay',pe:544,brl:79507,prev:551,conv:39.0,risk:'MEDIUM',rc:'b-med'},
  {n:'Kwai APMs',pe:123,brl:3506,prev:124,conv:12.9,risk:'CRITICAL',rc:'b-crit'},
  {n:'Temu.com',pe:28,brl:3358,prev:29,conv:11.5,risk:'CRITICAL',rc:'b-crit'},
  {n:'CamelPay',pe:27,brl:6953,prev:57,conv:26.2,risk:'HIGH',rc:'b-high'},
  {n:'Wish',pe:22,brl:3550,prev:6,conv:18.2,risk:'HIGH',rc:'b-high'},
  {n:'Gisele IWS',pe:18,brl:920,prev:10,conv:22.6,risk:'MEDIUM',rc:'b-med'},
  {n:'TikTok Live',pe:16,brl:1477,prev:20,conv:29.3,risk:'MEDIUM',rc:'b-med'},
  {n:'Blanche IWS',pe:14,brl:605,prev:10,conv:29.9,risk:'MEDIUM',rc:'b-med'},
  {n:'TradeInn',pe:14,brl:5090,prev:6,conv:27.5,risk:'HIGH',rc:'b-high'},
];
const MERCHANTS=[
  {n:'Alipay',tot:16090,pe:5201,co:4642,hd:4202,ca:2045,conv:39.0,brl:'R$ 2,1M',risk:'MEDIUM',rc:'b-med'},
  {n:'Kwai APMs',tot:1563,pe:1011,co:199,hd:16,ca:337,conv:12.9,brl:'R$ 97k',risk:'CRITICAL',rc:'b-crit'},
  {n:'Wish',tot:1349,pe:371,co:149,hd:531,ca:298,conv:18.2,brl:'R$ 65k',risk:'HIGH',rc:'b-high'},
  {n:'CamelPay',tot:672,pe:264,co:122,hd:206,ca:80,conv:26.2,brl:'R$ 110k',risk:'HIGH',rc:'b-high'},
  {n:'Temu.com',tot:516,pe:314,co:59,hd:1,ca:142,conv:11.5,brl:'R$ 63k',risk:'CRITICAL',rc:'b-crit'},
  {n:'TikTok Live',tot:351,pe:171,co:99,hd:13,ca:68,conv:29.3,brl:'R$ 37k',risk:'MEDIUM',rc:'b-med'},
  {n:'TradeInn',tot:189,pe:78,co:49,hd:11,ca:51,conv:27.5,brl:'R$ 61k',risk:'HIGH',rc:'b-high'},
  {n:'Blanche IWS',tot:155,pe:70,co:38,hd:28,ca:19,conv:29.9,brl:'R$ 6k',risk:'MEDIUM',rc:'b-med'},
  {n:'Gisele IWS',tot:138,pe:73,co:26,hd:23,ca:16,conv:22.6,brl:'R$ 6k',risk:'MEDIUM',rc:'b-med'},
  {n:'Temu Brazil',tot:13,pe:10,co:0,hd:0,ca:3,conv:0,brl:'R$ 1k',risk:'HIGH',rc:'b-high'},
];

// ═══════════════════════════════════════════
// Priorização
// ═══════════════════════════════════════════
const PRIO=[
  {rank:1,emoji:'🔴',pc:'pl-c',item:'crit',name:'marcos.vfferrari@gmail.com',reason:'2.069 tx · 1.998 CPFs distintos · 1.998 nomes · 100% HD · R$0 convertido · automação massiva confirmada',tags:[{t:'2069 HD',c:'pt-hd'},{t:'1998 CPFs',c:'pt-up'},{t:'email CRITICAL',c:'pt-email'}]},
  {rank:2,emoji:'🔴',pc:'pl-c',item:'crit',name:'CPF 863.457.610-87 — Alipay',reason:'738 tx · 100% HD · 678 nomes distintos · fraude de identidade via CPF comprometido',tags:[{t:'738 HD',c:'pt-hd'},{t:'678 nomes',c:'pt-up'},{t:'CRITICAL',c:'pt-up'}]},
  {rank:3,emoji:'🔴',pc:'pl-c',item:'crit',name:'233 e-mails com múltiplos CPFs',reason:'E-mails usados com diferentes documentos de identidade — padrão de fraude de identidade em escala',tags:[{t:'233 emails',c:'pt-email'},{t:'múltiplos CPFs',c:'pt-up'},{t:'HIGH',c:'pt-up'}]},
  {rank:4,emoji:'🟠',pc:'pl-h',item:'high',name:'Kwai APMs — conversão 12,9%',reason:'Pior conversão da base · CPF 339.122.641-2 com R$17.191 em PE · e-mail h1786@gmail.com com 77 tx',tags:[{t:'conv 12,9%',c:'pt-up'},{t:'PE 123',c:'pt-pe'},{t:'HIGH',c:'pt-up'}]},
  {rank:5,emoji:'🟠',pc:'pl-h',item:'high',name:'Wish — PE +267% em D-1',reason:'PE saltou de 6 para 22 em D-1 · HD=39% no período · aumento abrupto sem histórico',tags:[{t:'PE +267%',c:'pt-up'},{t:'HD 39%',c:'pt-hd'},{t:'HIGH',c:'pt-up'}]},
  {rank:6,emoji:'🟠',pc:'pl-h',item:'high',name:'TradeInn — PE +133% em D-1',reason:'PE saltou de 6 para 14 · ticket médio R$364 · aumento incomum para merchant pequeno',tags:[{t:'PE +133%',c:'pt-up'},{t:'R$ 5.090',c:'pt-pe'},{t:'HIGH',c:'pt-up'}]},
];
const pl=document.getElementById('prio-list');
PRIO.forEach(p=>{
  pl.innerHTML+=`<div class="prio-item ${p.item}">
    <span class="p-rank">${p.rank}</span>
    <div class="p-lvl ${p.pc}">${p.emoji}</div>
    <div class="p-body"><div class="p-name">${p.name}</div><div class="p-reason">${p.reason}</div></div>
    <div class="p-tags">${p.tags.map(t=>`<span class="pt ${t.c}">${t.t}</span>`).join('')}</div>
  </div>`;
});

// ═══════════════════════════════════════════
// Email fraud table
// ═══════════════════════════════════════════
const EMAILS=[
  {em:'marcos.vfferrari@gmail.com',ct:2069,cpfs:1998,names:1998,status:'100% HD',brl:'R$ 0',pattern:'Automação massiva',risk:'b-crit',lbl:'CRITICAL'},
  {em:'rafael.pomtes2509@gmail.com',ct:738,cpfs:1,names:678,status:'100% HD',brl:'R$ 0',pattern:'Mult. nomes, 1 CPF',risk:'b-crit',lbl:'CRITICAL'},
  {em:'julianasantossccp@gmail.com',ct:59,cpfs:9,names:9,status:'85% PE',brl:'R$ 11.865',pattern:'Multi-CPF',risk:'b-high',lbl:'HIGH'},
  {em:'contato.samice@gmail.com',ct:55,cpfs:1,names:46,status:'78% PE',brl:'R$ 3.660',pattern:'46 nomes, 1 CPF',risk:'b-high',lbl:'HIGH'},
  {em:'consultorialorraine@gmail.com',ct:84,cpfs:3,names:2,status:'89% HD',brl:'R$ 102',pattern:'Multi-CPF + HD',risk:'b-high',lbl:'HIGH'},
  {em:'h79037000@gmail.com',ct:52,cpfs:1,names:2,status:'54% PE',brl:'R$ 21.525',pattern:'Sem vogal · suspeito',risk:'b-high',lbl:'HIGH'},
  {em:'gestao.rosacoral@gmail.com',ct:31,cpfs:31,names:30,status:'100% CO',brl:'R$ 23.985',pattern:'Multi-CPF · 31 docs',risk:'b-med',lbl:'MEDIUM'},
  {em:'andradesadvocacia123@gmail.com',ct:28,cpfs:28,names:28,status:'100% PE',brl:'R$ 1.244',pattern:'Multi-CPF · advocacia',risk:'b-med',lbl:'MEDIUM'},
  {em:'fr2113140@gmail.com',ct:44,cpfs:1,names:2,status:'98% HD',brl:'R$ 57',pattern:'Sem vogal · 98% HD',risk:'b-med',lbl:'MEDIUM'},
  {em:'dhg_test_buyer@dhgate.com',ct:19,cpfs:1,names:1,status:'100% HD',brl:'R$ 0',pattern:'E-mail de teste',risk:'b-med',lbl:'MEDIUM'},
];
const etb=document.getElementById('email-tbody');
EMAILS.forEach(e=>{
  const nc=e.cpfs>100?'color:#ef4444;font-weight:700':e.cpfs>5?'color:#f59e0b;font-weight:600':'color:var(--txt3)';
  const nn=e.names>50?'color:#ef4444;font-weight:700':e.names>10?'color:#f59e0b;font-weight:600':'color:var(--txt3)';
  etb.innerHTML+=`<tr>
    <td style="font-family:monospace;font-size:10.5px;max-width:200px;overflow:hidden;text-overflow:ellipsis">${e.em}</td>
    <td style="font-weight:600">${e.ct}</td>
    <td style="${nc}">${e.cpfs}</td>
    <td style="${nn}">${e.names}</td>
    <td style="font-size:10.5px;color:var(--txt2)">${e.status}</td>
    <td style="font-size:11px">${e.brl}</td>
    <td><span class="email-pattern-tag ep-${e.risk==='b-crit'?'crit':e.risk==='b-high'?'high':'med'}">${e.pattern}</span></td>
    <td><span class="badge ${e.risk}">${e.lbl}</span></td>
  </tr>`;
});

// ═══════════════════════════════════════════
// Merchant PE cards D-1
// ═══════════════════════════════════════════
const mpc=document.getElementById('mpc-grid');
D1.forEach(m=>{
  const d=(m.pe-m.prev)/m.prev*100;
  const dc=d>15?'md-up':d<-10?'md-down':'md-neu';
  const darr=d>15?'↑':d<-10?'↓':'→';
  mpc.innerHTML+=`<div class="mpc"><div class="mpc-name" title="${m.n}">${m.n}</div><div class="mpc-pe">${m.pe}</div><div class="mpc-brl">R$ ${m.brl.toLocaleString('pt-BR')}</div><div class="mpc-delta ${dc}">${darr} ${d>=0?'+':''}${d.toFixed(1)}%</div><div><span class="badge ${m.rc}">${m.risk}</span></div></div>`;
});

// ═══════════════════════════════════════════
// Merchant table
// ═══════════════════════════════════════════
const g='#1c2030',tm='#555870',ts='#8b8fa8';
const mtb=document.getElementById('merch-tbody');
MERCHANTS.forEach(m=>{
  const cc=m.conv<15?'#ef4444':m.conv<25?'#f59e0b':'#22c55e';
  mtb.innerHTML+=`<tr><td style="font-weight:500">${m.n}</td><td>${m.tot.toLocaleString('pt-BR')}</td><td><span class="badge b-pe">${m.pe.toLocaleString('pt-BR')}</span></td><td><span class="badge b-co">${m.co.toLocaleString('pt-BR')}</span></td><td><span class="badge b-hd">${m.hd.toLocaleString('pt-BR')}</span></td><td><span class="badge b-ca">${m.ca.toLocaleString('pt-BR')}</span></td><td><div class="conv-c"><span style="font-weight:600;color:${cc}">${m.conv.toFixed(1)}%</span><div class="conv-track"><div class="conv-fill" style="width:${Math.min(m.conv*2,100)}%;background:${cc}"></div></div></div></td><td style="font-size:11px;color:${ts}">${m.brl}</td><td><span class="badge ${m.rc}">${m.risk}</span></td></tr>`;
});

// ═══════════════════════════════════════════
// CPF table
// ═══════════════════════════════════════════
const CPFS=[
  {cpf:'863.457.610-87',ct:738,nomes:678,status:'100% HD',risk:'b-crit',lbl:'CRITICAL'},
  {cpf:'107.538.026-00',ct:195,nomes:2,status:'96% HD',risk:'b-high',lbl:'HIGH'},
  {cpf:'247.493.970-9',ct:190,nomes:1,status:'29% HD',risk:'b-high',lbl:'HIGH'},
  {cpf:'398.992.177',ct:150,nomes:10,status:'80% HD',risk:'b-high',lbl:'HIGH'},
  {cpf:'339.122.641-2',ct:77,nomes:1,status:'87% PE',risk:'b-med',lbl:'MEDIUM'},
  {cpf:'452.872.868-05',ct:71,nomes:5,status:'61% HD',risk:'b-med',lbl:'MEDIUM'},
];
const ctb=document.getElementById('cpf-tbody');
CPFS.forEach(c=>{
  const nc=c.nomes>10?'color:#ef4444;font-weight:700':c.nomes>3?'color:#f59e0b;font-weight:600':'color:var(--txt3)';
  ctb.innerHTML+=`<tr><td style="font-family:monospace;font-size:11px">${c.cpf}</td><td style="font-weight:600">${c.ct}</td><td style="${nc}">${c.nomes}</td><td style="font-size:10.5px;color:${ts}">${c.status}</td><td><span class="badge ${c.risk}">${c.lbl}</span></td></tr>`;
});

// ═══════════════════════════════════════════
// BP-DR, Scores, Insights
// ═══════════════════════════════════════════
[{code:'BP-DR-18',desc:'cliente desabilitado',ct:3021},{code:'BP-DR-602',desc:'sem motivo',ct:1755},{code:'BP-DR-40',desc:'limite mensal',ct:97},{code:'BP-DR-600',desc:'desabilitado v2',ct:79},{code:'BP-DR-113',desc:'inválido',ct:55},{code:'BP-DR-23',desc:'CPF inválido',ct:20}]
.forEach(b=>{document.getElementById('bpdr-list').innerHTML+=`<div class="bpdr-i"><span class="bpdr-code">${b.code}</span><span class="bpdr-desc">${b.desc}</span><div class="bpdr-track"><div class="bpdr-fill" style="width:${Math.round(b.ct/3021*100)}%"></div></div><span class="bpdr-ct">${b.ct.toLocaleString('pt-BR')}</span></div>`;});

[{n:'marcos.vfferrari — email',s:99,c:'#ef4444'},{n:'CPF 863...087 — Alipay',s:97,c:'#ef4444'},{n:'233 e-mails multi-CPF',s:82,c:'#f97316'},{n:'Kwai APMs — conv 12,9%',s:78,c:'#f97316'},{n:'Wish — PE +267%',s:65,c:'#f59e0b'}]
.forEach(s=>{document.getElementById('score-list').innerHTML+=`<div class="score-i"><span class="score-name">${s.n}</span><div class="score-track"><div class="score-fill" style="width:${s.s}%;background:${s.c}"></div></div><span class="score-val" style="color:${s.c}">${s.s}</span></div>`;});

['806 PE ontem com vencimento futuro. 771 vencem em 08/07 — R$ 100.413. Alipay concentra 67,5%.',
 'marcos.vfferrari@gmail.com: 2.069 tx · 1.998 CPFs · 100% HD · R$0. Maior fraude por e-mail da base.',
 '233 e-mails com múltiplos CPFs distintos — padrão de identidade compartilhada em escala.',
 'Wish: PE +267% D-1 (6→22). TradeInn +133% (6→14). Dois aumentos abruptos simultâneos.',
 'CamelPay: PE −52% D-1 (57→27). Queda positiva mas HD=31% e histórico de fraude persistem.',
 'Anomalia 04–05/07: CO zerado vs média de ~450/dia. Validar causa com time operacional.']
.forEach(t=>{document.getElementById('insights').innerHTML+=`<div class="ins-item"><span class="ins-dot"></span><span>${t}</span></div>`;});

// ═══════════════════════════════════════════
// Charts
// ═══════════════════════════════════════════
const dias=['29/06','30/06','01/07','02/07','03/07','04/07','05/07'];
new Chart(document.getElementById('cDia'),{type:'bar',data:{labels:dias,datasets:[
  {label:'PE',data:[702,810,960,827,878,813,806],backgroundColor:'#4f8ef7bb',borderRadius:3,barPercentage:.8,categoryPercentage:.82},
  {label:'CO',data:[411,582,582,536,386,24,0],backgroundColor:'#22c55ebb',borderRadius:3,barPercentage:.8,categoryPercentage:.82},
  {label:'HD',data:[536,414,391,246,662,354,73],backgroundColor:'#a78bfabb',borderRadius:3,barPercentage:.8,categoryPercentage:.82},
]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{mode:'index',intersect:false,backgroundColor:'#111420',borderColor:'#1c2030',borderWidth:1,padding:10,titleColor:'#e4e6f0',bodyColor:'#8b8fa8'}},scales:{x:{stacked:true,ticks:{color:tm,font:{size:10}},grid:{display:false},border:{display:false}},y:{stacked:true,ticks:{color:tm,font:{size:10}},grid:{color:g},border:{display:false}}}}});

new Chart(document.getElementById('cStatus'),{type:'doughnut',data:{labels:['PE 36%','CO 26%','HD 24%','CA 15%'],datasets:[{data:[7563,5383,5031,3059],backgroundColor:['#4f8ef7','#22c55e','#a78bfa','#555870'],borderWidth:0,hoverOffset:6}]},options:{responsive:true,maintainAspectRatio:false,cutout:'60%',plugins:{legend:{display:true,position:'bottom',labels:{color:ts,font:{size:11},boxWidth:10,padding:12}},tooltip:{backgroundColor:'#111420',borderColor:'#1c2030',borderWidth:1,padding:10}}}});

const mns=D1.map(m=>m.n.length>10?m.n.slice(0,10)+'…':m.n);
new Chart(document.getElementById('cMerchComp'),{type:'bar',data:{labels:mns,datasets:[{label:'D-1',data:D1.map(m=>m.pe),backgroundColor:'#4f8ef7bb',borderColor:'#4f8ef7',borderWidth:1,borderRadius:3,barPercentage:.42},{label:'D-2',data:D1.map(m=>m.prev),backgroundColor:'#55587088',borderColor:'#555870',borderWidth:1,borderRadius:3,barPercentage:.42}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true,labels:{color:ts,font:{size:10},boxWidth:10,padding:10}},tooltip:{backgroundColor:'#111420',borderColor:'#1c2030',borderWidth:1,padding:10}},scales:{x:{ticks:{color:tm,font:{size:9},maxRotation:35},grid:{display:false},border:{display:false}},y:{ticks:{color:tm,font:{size:10}},grid:{color:g},border:{display:false}}}}});

const convData=[...D1].sort((a,b)=>b.conv-a.conv);
new Chart(document.getElementById('cConv'),{type:'bar',data:{labels:convData.map(m=>m.n.length>8?m.n.slice(0,8)+'…':m.n),datasets:[{label:'%',data:convData.map(m=>m.conv),backgroundColor:convData.map(m=>m.conv<15?'#ef444499':m.conv<25?'#f59e0b99':'#22c55e99'),borderColor:convData.map(m=>m.conv<15?'#ef4444':m.conv<25?'#f59e0b':'#22c55e'),borderWidth:1,borderRadius:4,barPercentage:.6}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{legend:{display:false},tooltip:{backgroundColor:'#111420',borderColor:'#1c2030',borderWidth:1,padding:10,callbacks:{label:c=>`${c.parsed.x.toFixed(1)}%`}}},scales:{x:{ticks:{color:tm,font:{size:10},callback:v=>v+'%'},grid:{color:g},border:{display:false},max:50},y:{ticks:{color:ts,font:{size:10}},grid:{display:false},border:{display:false}}}}});

// ═══════════════════════════════════════════
// Copilot Agent
// ═══════════════════════════════════════════
const SYS=`Você é o Fraud Intelligence Copilot da EBANX — analista sênior de boleto Brasil.
Responda em linguagem natural, de forma direta, objetiva e acionável.

BASE D-1 (05/07/2026):
PE total: 806 | R$ 104.965 | Vencimentos: 07/07=35 | 08/07=771 (R$100.413)
Status D-1: PE=806 HD=73 CA=3 CO=0

PE por merchant D-1 (vs D-2):
Alipay 544 (prev=551 −1,3%) R$79.507
Kwai APMs 123 (prev=124 −0,8%) R$3.506 CRITICAL conv
Temu.com 28 (prev=29 −3,4%) R$3.358
CamelPay 27 (prev=57 −52,6%) R$6.953 hist.fraude
Wish 22 (prev=6 +266,7%) R$3.550 HIGH
Gisele IWS 18 (prev=10 +80%)
TikTok Live 16 (prev=20 −20%)
Blanche IWS 14 (prev=10 +40%)
TradeInn 14 (prev=6 +133,3%) R$5.090 HIGH

PERÍODO COMPLETO (22/06–05/07):
Total 21.036 | BRL 2.573.772 | conv 34,5%
PE=7563 CO=5383 HD=5031 CA=3059
(HD = boleto bloqueado pelo antifraude antes de ser gerado)

E-MAILS FRAUDULENTOS (da coluna customer_email):
CRITICAL: marcos.vfferrari@gmail.com — 2.069 tx, 1.998 CPFs distintos, 1.998 nomes, 100% HD, R$0. Automação massiva.
CRITICAL: rafael.pomtes2509@gmail.com — 738 tx, 1 CPF, 678 nomes, 100% HD, R$0.
HIGH: julianasantossccp@gmail.com — 59 tx, 9 CPFs, 100% PE, R$11.865.
HIGH: contato.samice@gmail.com — 55 tx, 1 CPF, 46 nomes, 78% PE, R$3.660.
HIGH: consultorialorraine@gmail.com — 84 tx, 3 CPFs, 89% HD, R$102.
HIGH: h79037000@gmail.com — 52 tx, sem vogal (suspeito), 54% PE, R$21.525.
MEDIUM: gestao.rosacoral@gmail.com — 31 CPFs distintos, 100% CO, R$23.985.
MEDIUM: andradesadvocacia123@gmail.com — 28 CPFs, 100% PE, R$1.244.
Totais: 233 emails com múltiplos CPFs | 41 emails 100% HD | 145 emails com múltiplos nomes | 8.584 emails únicos.

CPFs CRÍTICOS:
86345761087: 738tx 100%HD 678nomes Alipay R$0 CRITICAL
10753802600: 195tx 96%HD 2nomes Alipay R$619
247493970: 190tx 29%HD 1nome CamelPay R$26.295
398992177: 150tx 80%HD 10nomes Alipay+Wish R$904
339122641: 77tx 87%PE 1nome Kwai R$17.191

BP-DR: 18=3021, 602=1755, 40=97, 600=79, 113=55, 23=20
Anomalia: 04/07 CO=24, 05/07 CO=0 (média ~450/dia)
Seniority: Antigo 81% | Novo 19%

Volume diário 7 dias:
29/06: PE702 CO411 HD536
30/06: PE810 CO582 HD414
01/07: PE960 CO582 HD391
02/07: PE827 CO536 HD246
03/07: PE878 CO386 HD662
04/07: PE813 CO24 HD354 ← anomalia
05/07: PE806 CO0 HD73 ← CO=0

Nunca invente dados fora da base. Responda em \${currentLang==='en'?'English':currentLang==='es'?'Spanish':'português'}.`;

const msgs=[];
const chat=document.getElementById('agent-msgs');
function addMsg(r,t,l=false){
  const d=document.createElement('div');
  if(l){d.className='msg-load';d.id='lm';d.innerHTML='Analisando <span class="dots"><span>.</span><span>.</span><span>.</span></span>';}
  else{d.className=r==='user'?'msg-u':'msg-a';d.innerHTML=t.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>');}
  chat.appendChild(d);chat.scrollTop=chat.scrollHeight;
}
function rmLoad(){const e=document.getElementById('lm');if(e)e.remove();}
async function callAI(q){
  const langInstruction=currentLang==='en'?'Respond in English.':currentLang==='es'?'Responde en español.':'Responda em português.';
  msgs.push({role:'user',content:q});addMsg('a','',true);
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:1024,system:SYS+'\n\n'+langInstruction,messages:msgs})});
    const d=await r.json();rmLoad();
    const rep=(d.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n')||'Erro.';
    msgs.push({role:'assistant',content:rep});addMsg('a',rep);
  }catch{rmLoad();addMsg('a','Erro de conexão. Tente novamente.');}
}
function sendMsg(){const i=document.getElementById('ai-inp');const t=i.value.trim();if(!t)return;i.value='';addMsg('user',t);callAI(t);}
function sq(q){addMsg('user',q.length>90?q.slice(0,87)+'…':q);callAI(q);}
