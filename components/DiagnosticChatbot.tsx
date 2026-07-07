import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Calendar, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { trackEvent } from '../src/services/pixelService';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
  options?: { label: string; nextState: string }[];
}

interface ChatState {
  text: string;
  options: { label: string; nextState: string }[];
}

const CHAT_FLOW: Record<string, ChatState> = {
  START: {
    text: "Olá! Seja muito bem-vindo/a à Clínica de Estética Regenerativa da Dra. Giselle. 🌸 Sou a assistente virtual e estou aqui para ajudar a descobrir o tratamento ideal para si, esclarecer preços e guiar no seu agendamento.\n\nComo gostaria de começar hoje?",
    options: [
      { label: "🔍 Diagnóstico Virtual Rápido", nextState: "DIAG_START" },
      { label: "💎 Consultar Tratamentos & Preços", nextState: "PRICES_START" },
      { label: "🎓 Cursos & Formações", nextState: "COURSES_START" },
      { label: "📅 Agendar Consulta diretamente", nextState: "BOOKING_START" }
    ]
  },
  
  // DIAGNOSTIC FLOW
  DIAG_START: {
    text: "Excelente! Vamos fazer um breve diagnóstico estético para perceber as suas necessidades. Qual é a sua principal preocupação com a sua pele ou corpo neste momento?",
    options: [
      { label: "👤 Rugas, linhas de expressão ou flacidez", nextState: "DIAG_RUGAS" },
      { label: "🧴 Qualidade da pele, manchas ou acne", nextState: "DIAG_PELE" },
      { label: "💇 Queda de cabelo ou couro cabeludo", nextState: "DIAG_CAPILAR" },
      { label: "👙 Flacidez corporal, estrias ou celulite", nextState: "DIAG_CORPORAL" },
      { label: "🔙 Voltar ao início", nextState: "START" }
    ]
  },
  DIAG_RUGAS: {
    text: "Compreendo perfeitamente. Para rugas de expressão e perda de firmeza, a Dra. Giselle utiliza tratamentos regenerativos avançados que estimulam o seu colagénio natural.\n\nQual destas áreas gostaria de focar principalmente?",
    options: [
      { label: "💉 Suavizar rugas de expressão (testa, glabela, olhos)", nextState: "DIAG_BOTOX" },
      { label: "✨ Recuperar a firmeza facial (Bioestimulador)", nextState: "DIAG_COLLAGEN" },
      { label: "👄 Volume ou definição (Lábios, Queixo ou Mandíbula)", nextState: "DIAG_HA" },
      { label: "🔙 Voltar atrás", nextState: "DIAG_START" }
    ]
  },
  DIAG_BOTOX: {
    text: "Para atenuar rugas de expressão mantendo a naturalidade, a Toxina Botulínica (Botox) é excelente:\n\n• **Botox 1 zona:** 120 €\n• **Botox 5 zonas** (Testa, glabela, contorno de olhos, nariz e pés de galinha): 300 €\n\nTodos os tratamentos incluem a aplicação personalizada pela Dra. Giselle. Deseja agendar?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "💬 Agendar pelo WhatsApp", nextState: "WHATSAPP_GO" },
      { label: "🔙 Voltar ao diagnóstico", nextState: "DIAG_START" }
    ]
  },
  DIAG_COLLAGEN: {
    text: "Os bioestimuladores de colagénio são maravilhosos pois provocam uma regeneração biológica da própria pele, devolvendo a elasticidade e sustentação:\n\n• **Bioestimulador de colagénio facial:** 350 €\n• **Bioestimulador corporal (por zona):** 400 €\n\nVamos agendar uma consulta para a Dra. Giselle avaliar o seu caso e definir as zonas?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Voltar ao diagnóstico", nextState: "DIAG_START" }
    ]
  },
  DIAG_HA: {
    text: "Para repor volumes perdidos, definir contornos e hidratar intensamente, utilizamos preenchimentos de Ácido Hialurónico de qualidade premium:\n\n• **Preenchimento labial:** 300 €\n• **Contorno mandibular / queixo:** 1000 €\n\nQual destas opções de rejuvenescimento facial prefere agendar?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Voltar ao diagnóstico", nextState: "DIAG_START" }
    ]
  },
  DIAG_PELE: {
    text: "A saúde e o brilho da pele são a base da beleza regenerativa. Qual é o foco que procura para a sua pele?",
    options: [
      { label: "🧼 Limpeza profunda e preparação médica", nextState: "DIAG_PELE_LIMPEZA" },
      { label: "🧪 Manchas, renovação ou Melasma (Peelings)", nextState: "DIAG_PELE_PEELING" },
      { label: "💉 Hidratação profunda (Skinbooster / Microagulhamento)", nextState: "DIAG_PELE_HIDRA" },
      { label: "🔙 Voltar atrás", nextState: "DIAG_START" }
    ]
  },
  DIAG_PELE_LIMPEZA: {
    text: "A limpeza facial médica profunda limpa e desintoxica as camadas da pele, preparando-a para qualquer outro tratamento:\n\n• **Limpeza facial profunda médica:** 80 € a 120 € (conforme o estado da pele)\n\nDeseja agendar com a Dra. Giselle?",
    options: [
      { label: "📅 Agendar Consulta de Avaliação", nextState: "BOOKING_START" },
      { label: "🔙 Voltar ao diagnóstico de pele", nextState: "DIAG_PELE" }
    ]
  },
  DIAG_PELE_PEELING: {
    text: "Os peelings químicos aceleram a renovação celular, sendo fundamentais para tratar manchas, acne e rugas superficiais:\n\n• **Peeling químico superficial:** 120 € – 150 €\n• **Peeling químico médio (controlado):** 220 €\n• **Tratamento de Melasma:** Planos personalizados após avaliação estética.\n\nQual consulta prefere agendar para definir o peeling ideal?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Voltar ao diagnóstico de pele", nextState: "DIAG_PELE" }
    ]
  },
  DIAG_PELE_HIDRA: {
    text: "Estes procedimentos restauram a barreira cutânea, nutrem as células e suavizam cicatrizes de acne ou linhas finas:\n\n• **Skinbooster (hidratação profunda):** 200 €\n• **Microagulhamento regenerativo facial:** 180 € – 250 € (conforme o ativo aplicado: PDRN, Exossomas ou NADH)\n\nQual destas opções gostaria de agendar?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Voltar ao diagnóstico de pele", nextState: "DIAG_PELE" }
    ]
  },
  DIAG_CAPILAR: {
    text: "A terapia capilar regenerativa combate ativamente a queda de cabelo e a fraqueza do couro cabeludo, utilizando ativos de última geração (exossomas e bioestimulação):\n\n• **Consulta de Avaliação Capilar:** Recomendado antes de iniciar as sessões.\n\nQuer agendar a sua avaliação com a Dra. Giselle?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Voltar atrás", nextState: "DIAG_START" }
    ]
  },
  DIAG_CORPORAL: {
    text: "Para combater a flacidez em zonas do corpo, celulite ou estrias, a Dra. Giselle aplica técnicas que restauram a densidade dérmica:\n\n• **Bioestimulador corporal (por zona):** 400 € / sessão\n• **Tratamento regenerativo corporal personalizado:** Definido conforme avaliação física e objetivos.\n\nComo prefere agendar a sua avaliação?",
    options: [
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🔙 Voltar atrás", nextState: "DIAG_START" }
    ]
  },

  // CASCADE INTERACTIVE PRICES FLOW
  PRICES_START: {
    text: "Com certeza! Na nossa clínica em Lisboa, trabalhamos com tratamentos de medicina e estética regenerativa personalizados de excelência.\n\nPara lhe mostrar os valores exatos de forma rápida e clara, que tipo de tratamento gostaria de consultar?",
    options: [
      { label: "🧠 Avaliação & Diagnóstico", nextState: "PRICE_DIAG_MENU" },
      { label: "🌿 Tratamentos Faciais", nextState: "PRICE_FACIAL_MENU" },
      { label: "🌸 Tratamentos Corporais", nextState: "PRICE_CORP_MENU" },
      { label: "🧬 Protocolos Completos", nextState: "PRICE_PROTO_MENU" },
      { label: "👩‍⚕️ Acompanhamento / Consulta", nextState: "PRICE_SEGUIMENTO" },
      { label: "🔙 Voltar ao início", nextState: "START" }
    ]
  },

  // 1. AVALIAÇÃO & DIAGNÓSTICO
  PRICE_DIAG_MENU: {
    text: "A Dra. Giselle realiza avaliações minuciosas com análise microscópica para traçar um protocolo estético regenerativo sob medida.\n\nComo prefere realizar a sua primeira sessão?",
    options: [
      { label: "🌐 Avaliação Online (Videochamada)", nextState: "PRICE_DIAG_ONLINE" },
      { label: "🏥 Consulta Presencial (Na Clínica)", nextState: "PRICE_DIAG_PRESENCIAL" },
      { label: "🔙 Outras categorias", nextState: "PRICES_START" }
    ]
  },
  PRICE_DIAG_ONLINE: {
    text: "💻 **Avaliação Online**:\n• **Preço:** Totalmente **Gratuita** ✨\n\nQuer incluir uma prescrição completa do seu Guia de Skincare personalizado passo a passo para fazer em casa?\n• **Suplemento Skincare:** +15 € (Opcional)",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Apenas)", nextState: "BOOK_ONLINE" },
      { label: "✨ Agendar Avaliação + Guia de Skincare (+15€)", nextState: "BOOK_ONLINE" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_DIAG_PRESENCIAL: {
    text: "🏥 **Avaliação Presencial** (Completa):\n• **Preço:** **25 €** \n\nQuer incluir a prescrição detalhada do seu Guia de Skincare personalizado passo a passo para fazer em casa?\n• **Suplemento Skincare:** +15 € (Opcional)",
    options: [
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "✨ Agendar Consulta + Guia de Skincare (40€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },

  // 2. TRATAMENTOS FACIAIS
  PRICE_FACIAL_MENU: {
    text: "Os tratamentos para o rosto estão organizados por categorias terapêuticas. Que tipo de melhoria gostaria de alcançar no seu rosto?",
    options: [
      { label: "🧼 Limpeza e Preparação profunda", nextState: "PRICE_FACIAL_CLEAN" },
      { label: "🧪 Peelings Químicos (Renovação celular)", nextState: "PRICE_FACIAL_PEEL" },
      { label: "💉 Microagulhamento (Cicatrizes, Poros e Rugas)", nextState: "PRICE_FACIAL_NEEDLE" },
      { label: "✨ Bioestimulação & Injetáveis (Botox, Volume, Colagénio)", nextState: "PRICE_FACIAL_INJ" },
      { label: "🔙 Outras categorias", nextState: "PRICES_START" }
    ]
  },
  PRICE_FACIAL_CLEAN: {
    text: "🧼 **Limpeza & Preparação**:\n\n• **Limpeza Facial Profunda Médica:** **80 € – 120 €** (conforme avaliação das necessidades de extração e ativos regeneradores de suporte).\n\nEste procedimento limpa profundamente, desintoxica e prepara a barreira da pele.\n\nGostaria de agendar?",
    options: [
      { label: "🏥 Agendar Consulta de Avaliação", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Outras categorias", nextState: "PRICE_FACIAL_MENU" }
    ]
  },
  PRICE_FACIAL_PEEL: {
    text: "🧪 **Peelings Químicos**:\nEles renovam a epiderme, tratando manchas, acne e linhas de expressão de forma controlada.\n\nQual o nível de intensidade que lhe interessa saber?",
    options: [
      { label: "Peeling Químico Superficial", nextState: "PRICE_PEEL_SUPER" },
      { label: "Peeling Químico Médio (Controlado)", nextState: "PRICE_PEEL_MED" },
      { label: "🔙 Voltar", nextState: "PRICE_FACIAL_MENU" }
    ]
  },
  PRICE_PEEL_SUPER: {
    text: "🧪 **Peeling Químico Superficial**:\n• **Preço:** **120 € – 150 €** por sessão.\n\nIdeal para renovação ligeira da pele, conferindo um brilho imediato, melhoria de textura e clareamento suave.\n\nQuer agendar uma avaliação?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_PEEL_MED: {
    text: "🧪 **Peeling Químico Médio (Controlado)**:\n• **Preço:** **220 €** por sessão.\n\nExcelente para tratar marcas persistentes, acne ativa, manchas mais profundas e rejuvenescimento estrutural.\n\nVamos marcar a sua avaliação?",
    options: [
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_FACIAL_NEEDLE: {
    text: "💉 **Microagulhamento Regenerativo**:\n• **Preço:** **180 € – 250 €** por sessão.\n\nO valor varia consoante o tipo de ativo regenerador premium que é infundido de forma transdérmica na pele (PDRN, Exossomas ou NADH).\n\nQuer marcar este tratamento?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_FACIAL_INJ: {
    text: "✨ **Bioestimulação & Injetáveis**:\nDispomos das técnicas injetáveis mais modernas para estruturação, hidratação celular e atenuação de rugas.\n\nQual tratamento deseja consultar?",
    options: [
      { label: "💧 Skinbooster (Hidratação profunda celular)", nextState: "PRICE_INJ_BOOSTER" },
      { label: "🧬 Bioestimulador de Colagénio Facial", nextState: "PRICE_INJ_BIO_FACIAL" },
      { label: "💉 Toxina Botulínica (Botox)", nextState: "PRICE_INJ_BOTOX" },
      { label: "👄 Ácido Hialurónico (Preenchimentos)", nextState: "PRICE_INJ_HA" },
      { label: "🔙 Voltar", nextState: "PRICE_FACIAL_MENU" }
    ]
  },
  PRICE_INJ_BOOSTER: {
    text: "💧 **Skinbooster / Hidratação Profunda**:\n• **Preço:** **200 €** por sessão.\n\nAplicação de ácido hialurónico fluido que hidrata as camadas internas e elimina de imediato rugas finas de desidratação.\n\nDeseja realizar?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_INJ_BIO_FACIAL: {
    text: "🧬 **Bioestimulador de Colagénio Facial**:\n• **Preço:** **350 €** por sessão / frasco.\n\nInjeção biológica que induz a produção de colagénio da própria pele ao longo do tempo, gerando sustentação e rejuvenescimento gradual.\n\nQuer agendar?",
    options: [
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_INJ_BOTOX: {
    text: "💉 **Toxina Botulínica (Botox)**:\nAtenua rugas dinâmicas proporcionando uma expressão relaxada e fresca.\n\nQual a modalidade pretendida?",
    options: [
      { label: "Botox 1 zona (120 €)", nextState: "PRICE_BOTOX_1_ZONE" },
      { label: "Botox 5 zonas completo (300 €)", nextState: "PRICE_BOTOX_5_ZONES" },
      { label: "🔙 Voltar", nextState: "PRICE_FACIAL_INJ" }
    ]
  },
  PRICE_BOTOX_1_ZONE: {
    text: "💉 **Botox 1 zona**:\n• **Preço:** **120 €** por sessão.\n\nFocado em atenuar as rugas de uma única área específica do rosto à sua escolha.\n\nGostaria de agendar?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_BOTOX_5_ZONES: {
    text: "💉 **Botox completo (5 zonas)**:\n• **Preço:** **300 €** por sessão.\n\nTratamento integral cobrindo as 5 zonas principais: Testa, glabela, contorno de olhos, nariz e pés de galinha.\n\nVamos fazer o agendamento?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_INJ_HA: {
    text: "👄 **Ácido Hialurónico Premium**:\nExcelente para volumizar, contornar e preencher assimetrias.\n\nQual zona do rosto deseja esculpir?",
    options: [
      { label: "Preenchimento Labial (300 €)", nextState: "PRICE_HA_LIPS" },
      { label: "Contorno Mandibular & Queixo (1000 €)", nextState: "PRICE_HA_MAND" },
      { label: "🔙 Voltar", nextState: "PRICE_FACIAL_INJ" }
    ]
  },
  PRICE_HA_LIPS: {
    text: "👄 **Preenchimento Labial**:\n• **Preço:** **300 €** por sessão.\n\nDesenha o contorno labial e repõe volume de forma proporcional, suave e elegante.\n\nQuer agendar?",
    options: [
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_HA_MAND: {
    text: "📐 **Contorno Mandibular / Queixo**:\n• **Preço:** **1000 €** por sessão.\n\nDesenho mandibular completo e projeção de queixo para uma melhor definição do perfil facial.\n\nDeseja realizar?",
    options: [
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },

  // 3. TRATAMENTOS CORPORAIS
  PRICE_CORP_MENU: {
    text: "🌸 **Tratamentos Corporais**:\n\nA Dra. Giselle tem à disposição tratamentos exclusivos de medicina regenerativa para o corpo.\n\nQual opção gostaria de consultar?",
    options: [
      { label: "👙 Bioestimulador corporal (por zona)", nextState: "PRICE_CORP_BIO" },
      { label: "🌸 Tratamento regenerativo corporal completo", nextState: "PRICE_CORP_COMP" },
      { label: "🔙 Outras categorias", nextState: "PRICES_START" }
    ]
  },
  PRICE_CORP_BIO: {
    text: "👙 **Bioestimulador corporal (por zona)**:\n• **Preço:** **400 €** por sessão.\n\nRecomendado para combater a flacidez dérmica acentuada nas coxas, braços ou abdómen através de estímulo celular.\n\nGostaria de agendar?",
    options: [
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_CORP_COMP: {
    text: "🌸 **Tratamento regenerativo corporal personalizado**:\n• **Preço:** Conforme avaliação física detalhada das necessidades celulares e objetivos de cada corpo.\n\nQuer marcar a sua consulta presencial para obter um orçamento exato?",
    options: [
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },

  // 4. PROTOCOLOS
  PRICE_PROTO_MENU: {
    text: "🧬 **Protocolos Regenerativos**:\nPlanos estruturados a médio-longo prazo para regeneração global profunda e resultados de alto impacto.\n\nQual plano quer conhecer?",
    options: [
      { label: "🧬 Protocolo Regenerativo Personalizado", nextState: "PRICE_PROTO_PERS" },
      { label: "👑 Protocolo Premium Regenerativo (3–6 meses)", nextState: "PRICE_PROTO_PREM" },
      { label: "🔙 Outras categorias", nextState: "PRICES_START" }
    ]
  },
  PRICE_PROTO_PERS: {
    text: "🧬 **Protocolo Regenerativo Personalizado**:\n• **Preço:** Sob avaliação prévia.\n\nUm plano integrado desenhado especificamente para o estado da sua pele e saúde dermo-estética.\n\nDeseja agendar a sua avaliação?",
    options: [
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },
  PRICE_PROTO_PREM: {
    text: "👑 **Protocolo Premium Regenerativo (3 a 6 meses)**:\n• **Preço:** Conforme avaliação inicial.\n\nO expoente máximo do acompanhamento clínico regenerativo profundo em Lisboa. Oferece o acompanhamento da saúde da pele, aplicação combinada de injetáveis e cosmética médica domiciliária.\n\nDeseja iniciar com a sua avaliação?",
    options: [
      { label: "🏥 Agendar Consulta Presencial (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "📅 Agendar Avaliação Gratuita (Online)", nextState: "BOOK_ONLINE" },
      { label: "🔙 Ver outros preços", nextState: "PRICES_START" }
    ]
  },

  // 5. ACOMPANHAMENTO
  PRICE_SEGUIMENTO: {
    text: "👩‍⚕️ **Consulta de Acompanhamento & Seguimento**:\n• **Preço:** **50 €** por consulta.\n\nReservado exclusivamente para pacientes que necessitam de consultas de controlo, acompanhamento continuado ou avaliação pós-tratamento.\n\nDeseja realizar este agendamento?",
    options: [
      { label: "🏥 Agendar Consulta de Seguimento", nextState: "BOOK_PRESENCIAL" },
      { label: "🔙 Voltar ao início", nextState: "START" }
    ]
  },

  // COURSES FLOW
  COURSES_START: {
    text: "🎓 **Formações & Cursos da Dra. Giselle**:\n\nA Dra. Giselle ministra formações exclusivas presenciais em Lisboa. Que tipo de curso lhe interessa?",
    options: [
      { label: "🧴 Workshop de Skincare Consciente (Público)", nextState: "COURSE_WORKSHOP" },
      { label: "🎓 Formações Profissionais (Estética Avançada)", nextState: "COURSE_PROFESSIONAL" },
      { label: "🔙 Voltar ao início", nextState: "START" }
    ]
  },
  COURSE_WORKSHOP: {
    text: "🧴 **Workshop de Skincare Consciente** (Para público final):\n• **Preço:** **120 €**\n• **Duração:** 2 a 3 horas.\n\nAprenda de vez a identificar as carências da sua pele, a ler os rótulos de cosmética e a estruturar a sua própria rotina de forma consciente.\n\nDeseja fazer a sua inscrição?",
    options: [
      { label: "💬 Solicitar Inscrição via WhatsApp", nextState: "WHATSAPP_GO" },
      { label: "📅 Agendar Chamada de Informação Gratuita", nextState: "BOOK_ONLINE" },
      { label: "🔙 Voltar", nextState: "COURSES_START" }
    ]
  },
  COURSE_PROFESSIONAL: {
    text: "🎓 **Formações Profissionais** (2 a 3 dias):\nDisponível nos níveis Inicial, Intermédio e Avançado para profissionais de saúde e estética dermo-capilar.\n\n• **Valores:** **500 €**, **1000 €** ou **1500 €** (consoante o módulo e nível pretendido).\n\nComo gostava de prosseguir para garantir a sua vaga?",
    options: [
      { label: "💬 Solicitar Vaga via WhatsApp", nextState: "WHATSAPP_GO" },
      { label: "📅 Agendar Chamada de Esclarecimento", nextState: "BOOK_ONLINE" },
      { label: "🔙 Voltar", nextState: "COURSES_START" }
    ]
  },

  // BOOKING GENERAL FLOW
  BOOKING_START: {
    text: "Excelente decisão! A sua primeira consulta com a Dra. Giselle servirá para fazer a análise microscópica da pele e definir um plano estético personalizado.\n\nComo prefere iniciar?",
    options: [
      { label: "🌐 Avaliação de Diagnóstico Online (Gratuita)", nextState: "BOOK_ONLINE" },
      { label: "🏥 Consulta Completa Presencial em Lisboa (25€)", nextState: "BOOK_PRESENCIAL" },
      { label: "💬 Agendar / Falar pelo WhatsApp", nextState: "WHATSAPP_GO" },
      { label: "🔙 Voltar ao início", nextState: "START" }
    ]
  },
  BOOK_ONLINE: {
    text: "Perfeito! A **Avaliação Online Gratuita** é realizada por videochamada direta com a Dra. Giselle. Se pretender adicionar o Guia de Skincare personalizado após a chamada, acresce 15 €.\n\nClique no botão abaixo para abrir a nossa agenda oficial online e escolher o seu dia e hora ideal, ou marque por WhatsApp se for mais prático!",
    options: [
      { label: "🗓️ Abrir Calendário de Agendamento", nextState: "OPEN_WIDGET_ACTION" },
      { label: "💬 Agendar pelo WhatsApp", nextState: "WHATSAPP_GO" },
      { label: "🔙 Voltar atrás", nextState: "BOOKING_START" }
    ]
  },
  BOOK_PRESENCIAL: {
    text: "Perfeito! Para realizar a sua **Consulta de Avaliação Presencial** (25 €) na nossa clínica em Lisboa (Amadora), é necessário efetuar primeiro o pagamento de reserva de 25 € através do Stripe.\n\nApós a confirmação do pagamento, poderá aceder à agenda para selecionar o melhor horário para si.\n\nComo gostaria de proceder?",
    options: [
      { label: "💳 Efetuar Pagamento de 25€ (Stripe)", nextState: "PAY_STRIPE_ACTION" },
      { label: "💬 Marcar por WhatsApp", nextState: "WHATSAPP_GO" },
      { label: "🔙 Voltar atrás", nextState: "BOOKING_START" }
    ]
  },
  PRESENCIAL_PAID_CONFIRM: {
    text: "O link de pagamento seguro do Stripe foi aberto numa nova janela para efetuar a transação de 25 €.\n\nAssim que concluir o pagamento, volte aqui e clique em **'Agendar o meu Horário'** para aceder à agenda oficial online e escolher o seu dia e hora!\n\nSe preferir que agendemos por si, pode enviar o comprovativo no WhatsApp. ✨",
    options: [
      { label: "🗓️ Agendar o meu Horário (Já paguei)", nextState: "OPEN_WIDGET_ACTION" },
      { label: "💬 Enviar comprovativo no WhatsApp", nextState: "WHATSAPP_GO" },
      { label: "🔙 Voltar ao início", nextState: "START" }
    ]
  },
  WHATSAPP_GO: {
    text: "Muito bem! Clique no botão abaixo para iniciar uma conversa connosco no WhatsApp (+351 910 166 268). Ajudamos a encontrar o melhor dia e respondemos a qualquer dúvida sobre os tratamentos regenerativos da Dra. Giselle. 💬✨",
    options: [
      { label: "💬 Abrir Conversa no WhatsApp", nextState: "WHATSAPP_ACTION" },
      { label: "🔙 Voltar ao início", nextState: "START" }
    ]
  }
};

export const DiagnosticChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentState, setCurrentState] = useState<string>('START');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Avatar profile of Dra. Giselle
  const doctorAvatar = "https://dra-beleza-pt.b-cdn.net/583095445_18158559397400259_1522235341548302603_n.jpg";

  // Initialize chat messages when chatbot is opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      loadState('START', true);
    }
  }, [isOpen]);

  useEffect(() => {
    (window as any).openDiagnosticChatbot = () => {
      setIsOpen(true);
    };
    return () => {
      delete (window as any).openDiagnosticChatbot;
    };
  }, []);

  // Scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const loadState = (stateKey: string, isInitial = false) => {
    const stateData = CHAT_FLOW[stateKey];
    if (!stateData) return;

    setIsTyping(true);

    // Simulate natural medical assistant typing delays
    const delay = isInitial ? 400 : 700;
    setTimeout(() => {
      setIsTyping(false);
      const newBotMessage: ChatMessage = {
        id: `bot-${Date.now()}-${Math.random()}`,
        sender: 'bot',
        text: stateData.text,
        timestamp: new Date(),
        options: stateData.options
      };
      setMessages(prev => [...prev, newBotMessage]);
      setCurrentState(stateKey);
    }, delay);
  };

  const handleOptionClick = (label: string, nextState: string) => {
    // Add user response bubble
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: label,
      timestamp: new Date()
    };

    setMessages(prev => {
      // Clear options from the previous bot messages to avoid clicking past questions
      const cleaned = prev.map(m => m.sender === 'bot' ? { ...m, options: undefined } : m);
      return [...cleaned, userMsg];
    });

    trackEvent('Contact', { 
      content_name: 'Chatbot Interaction',
      chat_selection: label,
      chat_state: nextState 
    });

    // Special functional triggers
    if (nextState === 'OPEN_WIDGET_ACTION') {
      setIsOpen(false);
      // Open the global booking calendar widget
      if ((window as any).openBookingWidget) {
        (window as any).openBookingWidget();
      } else {
        alert("Agendamento online: Por favor utilize o botão 'Agendar' no menu.");
      }
      return;
    }

    if (nextState === 'PAY_STRIPE_ACTION') {
      window.open('https://buy.stripe.com/00wfZh5LHfGJdqOfXaebu0j', '_blank', 'noopener,noreferrer');
      loadState('PRESENCIAL_PAID_CONFIRM');
      return;
    }

    if (nextState === 'WHATSAPP_ACTION') {
      window.open(CONTACT_INFO.whatsappLink, '_blank', 'noopener,noreferrer');
      return;
    }

    loadState(nextState);
  };

  const resetChat = () => {
    setMessages([]);
    loadState('START');
  };

  return (
    <>
      {/* Chat Dialog Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[240] flex items-end justify-end p-0 sm:p-6 bg-stone-950/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative w-full max-w-md h-[88vh] sm:h-[650px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border-t sm:border border-stone-200 overflow-hidden flex flex-col z-10"
            >
              {/* Chat Header */}
              <div className="p-4 bg-stone-950 text-white flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src={doctorAvatar} 
                      alt="Dra. Giselle" 
                      className="w-10 h-10 rounded-full object-cover object-top border border-brand-400" 
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-stone-950" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-brand-300 leading-tight">Clínica Dra. Beleza</h3>
                    <p className="text-[10px] text-stone-400">Dra. Giselle – Estética Regenerativa</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <button 
                    onClick={resetChat} 
                    title="Reiniciar conversa"
                    className="p-1.5 hover:bg-stone-800 rounded-full text-stone-400 hover:text-white transition-colors"
                  >
                    <RefreshCw size={14} />
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-stone-800 rounded-full text-stone-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Chat Messages Body */}
              <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-stone-50/50">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                  >
                    {msg.sender === 'bot' && (
                      <img 
                        src={doctorAvatar} 
                        alt="Dra. Giselle" 
                        className="w-7 h-7 rounded-full object-cover object-top border border-stone-200 shadow-xs flex-shrink-0 mt-0.5" 
                      />
                    )}
                    
                    <div className="flex flex-col max-w-[85%]">
                      <div 
                        className={`p-3.5 rounded-2xl text-xs md:text-[13px] leading-relaxed whitespace-pre-line shadow-sm ${
                          msg.sender === 'user' 
                            ? 'bg-brand-600 text-white rounded-tr-none font-medium' 
                            : 'bg-white text-stone-800 border border-stone-100 rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className={`text-[9px] text-stone-400 mt-1 px-1 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>

                      {/* Render choice options inside the latest message if present */}
                      {msg.options && (
                        <div className="mt-3.5 space-y-2">
                          {msg.options.map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => handleOptionClick(opt.label, opt.nextState)}
                              className="w-full text-left p-3 rounded-xl bg-white hover:bg-brand-50 hover:text-brand-800 border border-stone-200 hover:border-brand-300 font-medium text-xs text-stone-700 transition-all duration-200 shadow-sm flex items-center justify-between"
                            >
                              <span>{opt.label}</span>
                              <span className="text-stone-400 group-hover:text-brand-600 font-serif text-sm">&rarr;</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Animated Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start gap-2.5">
                    <img 
                      src={doctorAvatar} 
                      alt="Dra. Giselle" 
                      className="w-7 h-7 rounded-full object-cover object-top border border-stone-200 shadow-xs flex-shrink-0 mt-0.5" 
                    />
                    <div className="bg-white border border-stone-100 p-3.5 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Bottom Disclaimer */}
              <div className="p-3 bg-stone-50 border-t border-stone-100 flex items-center gap-2 text-[10px] text-stone-500 font-medium">
                <AlertCircle size={12} className="text-brand-500 flex-shrink-0" />
                <span>Conversa informativa. O diagnóstico definitivo é realizado em consulta pela Dra. Giselle.</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
