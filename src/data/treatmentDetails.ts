export interface TreatmentDetail {
  title: string;
  scientificDesc: string;
  benefits: string[];
  whyDoctor: string;
  duration: string;
  recovery: string;
}

export const TREATMENT_DETAILS_PT: Record<string, TreatmentDetail> = {
  // --- FACIAL E CORPORAL ---
  'Plasma Rico em Plaquetas': {
    title: 'Plasma Rico em Plaquetas (PRP)',
    scientificDesc: 'Tratamento autólogo regenerativo de última geração. Consiste na colheita e centrifugação de uma pequena amostra do sangue do próprio paciente para isolar as plaquetas concentradas, ricas em fatores de crescimento celulares. Estes fatores estimulam intensamente a regeneração dos tecidos, a neocolagénese e a angiogénese.',
    benefits: [
      'Estimulação natural e profunda da síntese de colagénio e elastina.',
      'Melhoria visível da textura, firmeza, densidade e luminosidade global da pele.',
      'Aceleração da regeneração celular e atenuação de rídulas superficiais.',
      'Risco nulo de rejeição ou reação alérgica por se tratar de um composto 100% autólogo.'
    ],
    whyDoctor: 'A Dra. Beleza domina a técnica de centrifugação e aplicação intradérmica precisa, garantindo a máxima viabilidade das plaquetas e fatores de crescimento. Além disso, personaliza a profundidade da aplicação em função da espessura da pele do paciente, otimizando os resultados de rejuvenescimento de forma segura.',
    duration: '45 a 60 minutos',
    recovery: 'Retorno imediato às atividades normais. Ligeiro eritema (vermelhidão) ou pequenos pontos de pressão que desaparecem em 24-48 horas.'
  },
  'Microagulhamento regenerativo': {
    title: 'Microagulhamento Regenerativo Avançado',
    scientificDesc: 'Procedimento baseado na indução percutânea de colagénio por meio de microagulhas estéreis ultra-finas. Estas agulhas realizam milhares de microperfurações controladas na epiderme e derme, ativando a cascata inflamatória natural de cicatrização e regeneração. É combinado com a aplicação de princípios ativos biológicos (mesoterapia transdérmica) de alta absorção.',
    benefits: [
      'Indução poderosa de novas fibras de colagénio (neocolagénese).',
      'Suavização progressiva de cicatrizes de acne, poros dilatados e estrias.',
      'Aumento exponencial da permeabilidade cutânea para absorção de ativos regeneradores.',
      'Uniformização da textura cutânea e atenuação de rugas finas.'
    ],
    whyDoctor: 'A Dra. Beleza utiliza exclusivamente agulhas médicas estéreis e de altíssima precisão com velocidade ajustada, o que minimiza o desconforto e garante a integridade da pele. A sua seleção personalizada de cocktails biológicos (aminoácidos, vitaminas e péptidos) aplicados durante o procedimento assegura que cada tipo de pele recebe exatamente o que necessita.',
    duration: '45 minutos',
    recovery: 'Eritema moderado por 24 a 48 horas. Recomenda-se hidratação intensiva e uso rigoroso de protetor solar mineral.'
  },
  'Nutrição facial': {
    title: 'Nutrição Facial Celular Profunda',
    scientificDesc: 'Protocolo de microinjeção ou aplicação transdérmica de micronutrientes essenciais diretamente na derme. Esta terapia fornece um cocktail ultra-nutritivo de aminoácidos, coenzimas, minerais, antioxidantes e ácido hialurónico de baixo peso molecular, combatendo o stress oxidativo e a desidratação celular.',
    benefits: [
      'Hidratação imediata de dentro para fora, restaurando o brilho natural.',
      'Prevenção ativa contra os primeiros sinais de envelhecimento cutâneo.',
      'Neutralização de radicais livres gerados pela poluição e radiação UV.',
      'Revitalização da pele cansada, desidratada ou sem brilho.'
    ],
    whyDoctor: 'Em vez de usar fórmulas genéricas, a Dra. Beleza avalia o nível de stress oxidativo, desidratação e idade biológica da sua pele para formular uma combinação única de nutrientes. A sua abordagem foca-se na saúde celular real, devolvendo uma luminosidade natural que os cremes superficiais não conseguem atingir.',
    duration: '30 a 45 minutos',
    recovery: 'Imediata. Permite retomar a rotina social e profissional logo após o procedimento.'
  },
  'Hidratação regenerativa (PDRN, EXOSSOMOS, NADH, NCTF)': {
    title: 'Hidratação Regenerativa de Alta Performance',
    scientificDesc: 'A vanguarda da estética regenerativa. Consiste na infusão de agentes biológicos altamente avançados: PDRN (polidesoxirribonucleotídeo derivado do salmão que repara o DNA celular), Exossomos (vesículas extracelulares que comunicam instruções de regeneração às células), NADH (coenzima essencial na produção de energia celular) e complexos de polirevitalização como o NCTF.',
    benefits: [
      'Reparação profunda do DNA celular e aceleração do turn-over da pele.',
      'Efeito anti-inflamatório potente, ideal para peles sensíveis ou envelhecidas.',
      'Hidratação extrema de longa duração e restauração da elasticidade cutânea.',
      'Rejuvenescimento biológico real através da reprogramação celular.'
    ],
    whyDoctor: 'A Dra. Beleza é pioneira em Portugal na aplicação de bioestimulação avançada com Exossomos e PDRN purificados. Sob a sua direção clínica, estes bioativos premium são injetados nas camadas exatas da pele onde as células estaminais locais podem ser despertadas, alcançando uma regeneração biológica verdadeiramente incomparável.',
    duration: '45 a 60 minutos',
    recovery: 'Mínimo inchaço ou pequenos relevos transitórios nos pontos de injeção que se dissolvem completamente nas primeiras 12 a 24 horas.'
  },
  'Toxina Regenerativa': {
    title: 'Toxina Botulínica Regenerativa e Natural',
    scientificDesc: 'Técnica avançada de modulação neuromuscular. Consiste na aplicação precisa e em microdoses de toxina botulínica purificada para relaxar temporariamente os músculos hipercinéticos responsáveis pelas rugas de expressão, sem congelar a expressão facial ou alterar a dinâmica natural do rosto.',
    benefits: [
      'Suavização imediata de rugas na testa, glabela (entre as sobrancelhas) e pés de galinha.',
      'Prevenção ativa de rugas estáticas profundas e permanentes na pele.',
      'Abertura subtil e rejuvenescimento do olhar com efeito de descanso.',
      'Resultados elegantes e preservação total das expressões naturais.'
    ],
    whyDoctor: 'A Dra. Beleza opõe-se firmemente ao aspeto artificial e "congelado". A sua técnica baseia-se num estudo anatómico minucioso e individualizado da força muscular de cada paciente. A aplicação é feita de forma ultra-precisa para manter a naturalidade e a harmonia das suas expressões originais, garantindo segurança e discrição absolutas.',
    duration: '20 a 30 minutos',
    recovery: 'Imediata. Apenas se recomenda não praticar exercício físico intenso ou deitar-se nas 4 horas seguintes à aplicação.'
  },
  'Bioestimuladores de Colagénio': {
    title: 'Bioestimuladores de Colagénio (Hidroxiapatite de Cálcio e Ácido Polilático)',
    scientificDesc: 'Injeção na derme profunda de substâncias biocompatíveis e totalmente reabsorvíveis que atuam como potentes indutores biológicos de colagénio. Estas substâncias desencadeiam uma resposta de regeneração tecidular controlada que estimula os fibroblastos a produzir colagénio tipo I e III ao longo de vários meses.',
    benefits: [
      'Efeito lifting progressivo e redefinição dos contornos faciais sem cirurgia.',
      'Melhoria marcante da flacidez facial e corporal (braços, coxas, abdómen).',
      'Aumento sustentado da espessura, sustentação e firmeza cutânea.',
      'Resultados graduais, extremamente naturais e com duração superior a 18 meses.'
    ],
    whyDoctor: 'A aplicação de bioestimuladores exige um conhecimento tridimensional profundo dos vetores de tração facial. A Dra. Beleza utiliza técnicas avançadas com microcânula macia para distribuir o produto de forma uniforme e indolor, garantindo um resultado de reestruturação firme, sem nódulos e com simetria perfeita.',
    duration: '45 a 60 minutos',
    recovery: 'Retorno imediato ao quotidiano. Recomenda-se uma massagem suave na área tratada de acordo com as instruções clínicas fornecidas.'
  },
  'Preenchimento regenerativo': {
    title: 'Preenchimento e Reestruturação Ácido Hialurónico',
    scientificDesc: 'Aplicação estratégica de gel de ácido hialurónico altamente purificado e biocompatível de densidades variáveis. É utilizado para repor volumes perdidos devido ao processo de envelhecimento (reabsorção óssea e de gordura) ou para estruturar pontos chave de suporte facial como as maçãs do rosto, queixo ou mandíbula.',
    benefits: [
      'Reposição imediata e harmoniosa dos volumes faciais perdidos.',
      'Suavização de sulcos profundos como o "sulco nasogeniano" (bigode chinês).',
      'Hidratação profunda e aumento da elasticidade tecidular local.',
      'Estruturação dos contornos faciais respeitando as proporções de ouro individuais.'
    ],
    whyDoctor: 'A Dra. Beleza rejeita a volumização excessiva. A sua filosofia baseia-se na reestruturação e suporte ósseo profundo, em vez de simplesmente "preencher a pele". Isto devolve a jovialidade original ao rosto sem alterar as feições naturais, evitando o aspeto artificial ou sobrecarregado (conhecido como "overfilled face").',
    duration: '30 a 45 minutos',
    recovery: 'Ligeiro edema (inchaço) ou possibilidade de pequenos hematomas transitórios que podem ser facilmente disfarçados. Atividades quotidianas imediatas.'
  },
  'Tratamento de olheiras (flacidez, bolsas, rugas)': {
    title: 'Protocolo Integrado para Rejuvenescimento de Olheiras',
    scientificDesc: 'Combinação personalizada de técnicas dermo-regenerativas para tratar a complexa zona periocular. Consoante o diagnóstico, associa-se ácido hialurónico ultra-fluido específico para olheiras, mesoterapia de drenagem/despigmentação, péptidos tensores ou microagulhamento fracionado.',
    benefits: [
      'Atenuação da coloração escura (vascular ou melânica) da olheira.',
      'Preenchimento do sulco lacrimal profundo e redução de aspeto cansado.',
      'Firmeza e retração da pele flácida das pálpebras inferiores.',
      'Drenagem linfática local para reduzir bolsas de congestão matinal.'
    ],
    whyDoctor: 'A zona periocular é uma das áreas mais delicadas e complexas da face, exigindo precisão absoluta. A Dra. Beleza realiza um diagnóstico minucioso para diferenciar se a olheira é pigmentar, estrutural ou vascular, aplicando a técnica exata com microcânula de ponta romba para garantir segurança máxima e conforto absoluto.',
    duration: '30 a 45 minutos',
    recovery: 'Edema ligeiro durante as primeiras 24-48 horas. Recomenda-se aplicação de compressas frias e hidratação periocular específica.'
  },
  'Cicatrizes, estrias e gordura localizada': {
    title: 'Correção de Cicatrizes, Estrias e Remodelação Localizada',
    scientificDesc: 'Abordagem combinada de remodelação tecidular profunda. Para cicatrizes e estrias, recorre-se à subcisão, microagulhamento médico com fatores de crescimento ou peelings regeneradores para romper o tecido fibroso e induzir pele nova. Para a gordura localizada, aplicam-se lipolíticos biológicos que destroem as membranas dos adipócitos.',
    benefits: [
      'Alisamento visível de cicatrizes tróficas e cicatrizes de acne.',
      'Redução da largura e aspeto esbranquiçado/avermelhado de estrias faciais ou corporais.',
      'Redução controlada de pequenos depósitos de gordura persistente (papada, flancos, abdómen).',
      'Melhoria simultânea da flacidez sobreposta na zona tratada.'
    ],
    whyDoctor: 'A Dra. Beleza combina múltiplos tratamentos no mesmo plano terapêutico para atuar em diferentes profundidades da derme e do tecido subcutâneo. Os seus protocolos são altamente individualizados, assegurando resultados reais onde outros tratamentos isolados falharam.',
    duration: '45 minutos',
    recovery: 'Ligeira sensibilidade local, edema ou pequenos hematomas na zona tratada. Recomenda-se evitar exposição solar direta na área corporal durante o processo.'
  },
  'Acompanhamento Pós-Operatório': {
    title: 'Reabilitação e Acompanhamento Pós-Operatório Especializado',
    scientificDesc: 'Protocolo especializado desenhado para acelerar a recuperação tecidular, controlar o edema e prevenir cicatrizes hipertróficas ou fibroses após cirurgia plástica facial ou corporal. Associa drenagem linfática manual altamente técnica, luz LED terapêutica e infiltração precoce de ativos regenerativos se necessário.',
    benefits: [
      'Redução acelerada do inchaço (edema) e alívio da dor pós-cirúrgica.',
      'Prevenção ativa de fibroses subcutâneas e aderências tecidulares.',
      'Aceleração da cicatrização das incisões, tornando-as mais finas e impercetíveis.',
      'Recuperação da sensibilidade cutânea normal na área intervencionada.'
    ],
    whyDoctor: 'A Dra. Beleza compreende a fisiologia cirúrgica ao pormenor. O seu acompanhamento é extremamente delicado e coordenado, adaptando a pressão das mãos e as tecnologias regeneradoras de acordo com o dia pós-operatório exato do paciente, maximizando o resultado estético final da cirurgia.',
    duration: '45 a 60 minutos',
    recovery: 'Protocolo desenhado especificamente para proporcionar conforto e repouso ativo ao tecido em cicatrização.'
  },
  'Peelings personalizados (químico, físico, enzimático)': {
    title: 'Peelings Médicos Personalizados',
    scientificDesc: 'Aplicação controlada de agentes químicos (como ácido glicólico, salicílico, mandélico ou lático) ou complexos enzimáticos biológicos para promover a esfoliação programada da epiderme. Este processo acelera a renovação celular, remove células mortas pigmentadas e estimula a regeneração das camadas inferiores.',
    benefits: [
      'Aumento imediato da luminosidade e suavidade da pele.',
      'Controlo eficaz da oleosidade e diminuição de poros obstruídos ou acne ativa.',
      'Atenuação de manchas superficiais e uniformização do tom cutâneo.',
      'Estímulo indireto de colagénio, suavizando rugas superficiais.'
    ],
    whyDoctor: 'Os peelings não podem ser padronizados. A Dra. Beleza analisa o fototipo de pele, o grau de sensibilidade e as preocupações estéticas do paciente para criar uma combinação precisa de ácidos e tempos de exposição. Isto assegura uma descamação controlada, segura e sem risco de hiperpigmentação pós-inflamatória.',
    duration: '30 minutos',
    recovery: 'Desde descamação invisível até descamação ligeira por 3 a 5 dias. Uso obrigatório de protetor solar de alto espetro.'
  },
  'Tratamento para Melasma (Cosmelan, Peeling e Anti-inflamatório)': {
    title: 'Protocolo Avançado Despigmentante de Melasma',
    scientificDesc: 'Terapia integrada multialvo para controlo do melasma. Consiste na aplicação de potentes inibidores da tirosinase (enzima responsável pela produção de melanina) associados a ativos anti-inflamatórios e regeneradores vasculares, atuando tanto na eliminação do pigmento existente como na regulação do melanócito hiperativo.',
    benefits: [
      'Clareamento significativo e progressivo de manchas escuras e melasmas resistentes.',
      'Controlo da inflamação dérmica de base, prevenindo o efeito ricochete.',
      'Uniformização global do tom da pele e melhoria da qualidade do tecido cutâneo.',
      'Nutrição profunda que apoia a barreira natural da pele contra novos estímulos.'
    ],
    whyDoctor: 'O melasma não tem cura, mas tem controlo altamente eficaz. A Dra. Beleza desenvolve um protocolo que vai muito além de descamar a pele; ela trata a inflamação subjacente que ativa o melanócito. O seu acompanhamento domiciliar e clínico rigoroso garante que a pele clareia com segurança, mantendo-se saudável e protegida a longo prazo.',
    duration: '45 a 60 minutos',
    recovery: 'Descamação moderada e sensibilidade cutânea temporária durante a primeira semana. Recomenda-se restrição estrita de exposição solar direta.'
  },
  'Toxina Botulínica por zonas (Rosto, Hiperhidrose, Couro cabeludo)': {
    title: 'Toxina Botulínica por Áreas e Indicações Clínicas',
    scientificDesc: 'Aplicação de toxina botulínica adaptada a necessidades específicas. Além do tratamento estético facial clássico, a toxina é aplicada nas glândulas sudoríparas (hiperidrose axilar ou palmar) para bloquear os sinais químicos do suor, ou no couro cabeludo para controlo de oleosidade severa ou alívio de cefaleias tencionais.',
    benefits: [
      'Eliminação completa do suor excessivo (hiperidrose) com conforto duradouro (6-9 meses).',
      'Controlo profundo da produção sebácea excessiva no couro cabeludo.',
      'Relaxamento de zonas musculares específicas com máxima precisão diagnóstica.',
      'Melhoria drástica na qualidade de vida e autoconfiança diária do paciente.'
    ],
    whyDoctor: 'A Dra. Beleza aplica técnicas médicas avançadas de mapeamento térmico e de suor para injetar o produto na profundidade e dosagem exatas. O procedimento é rápido, seguro, realizado sob métodos anestésicos locais de alta tolerância e entrega um alívio real e duradouro das preocupações do paciente.',
    duration: '30 a 45 minutos',
    recovery: 'Imediata. Sem necessidade de repouso ou ausência laboral.'
  },
  'HiFu ultrassom-microfocado (Lifting não invasivo)': {
    title: 'HiFu - Ultrassom Focalizado de Alta Intensidade',
    scientificDesc: 'Tecnologia não invasiva que emite ondas de ultrassom concentradas que penetram profundamente na derme e no SMAS (Sistema Aponeurótico Muscular Superficial) - a mesma camada muscular tratada nas cirurgias de facelift. A energia cria pontos de coagulação térmica gerando uma contração imediata das fibras e estimulando a neocolagénese contínua ao longo de 3 a 6 meses.',
    benefits: [
      'Lifting facial e do pescoço visível sem agulhas, cortes ou anestesia geral.',
      'Redefinição marcante da linha mandibular e redução do duplo queixo (papada).',
      'Retração imediata da pele flácida e aumento da densidade da derme.',
      'Procedimento de sessão única anual com resultados progressivos e altamente duradouros.'
    ],
    whyDoctor: 'A eficácia do HiFu depende exclusivamente do correto posicionamento das linhas de disparos e da seleção da profundidade dos cartuchos. A Dra. Beleza realiza um mapeamento anatómico rigoroso antes de iniciar, garantindo que a energia atinge exatamente o SMAS sem danificar tecidos adjacentes, alcançando o máximo efeito tensor clínico.',
    duration: '60 a 90 minutos',
    recovery: 'Imediata. Pode ocorrer uma ligeira sensação de tensão muscular ou sensibilidade ao toque nas áreas ósseas por alguns dias, perfeitamente tolerável.'
  },
  'Protocolos Personalizados': {
    title: 'Protocolos de Assinatura Dra. Beleza',
    scientificDesc: 'A sinergia perfeita da medicina estética integrativa. Neste protocolo de autoridade, a Dra. Beleza combina de forma sequencial ou simultânea diferentes tecnologias (Hifu, Microagulhamento) com injetáveis regenerativos (Exossomos, PRP ou Ácido Hialurónico), tratando todas as camadas da pele num único plano contínuo.',
    benefits: [
      'Abordagem global e tridimensional do envelhecimento cutâneo.',
      'Resultados excecionais e visivelmente superiores a tratamentos isolados.',
      'Otimização de tempo com planos de tratamento condensados de alta eficácia.',
      'Pele rejuvenescida, firme, intensamente hidratada e com aspeto saudável.'
    ],
    whyDoctor: 'Este é o verdadeiro selo de excelência da Dra. Beleza. Com base na sua vasta experiência clínica e visão artística, desenha um plano exclusivo baseado nas prioridades biológicas da sua pele. Nenhum protocolo é igual a outro, garantindo exclusividade, naturalidade extrema e resultados que duram no tempo.',
    duration: '60 a 90 minutos',
    recovery: 'Variável de acordo com os tratamentos combinados, sempre planeada para o menor impacto possível na sua rotina.'
  },

  // --- SKINCARE & LIMPEZAS ---
  'Limpeza de pele profunda': {
    title: 'Limpeza de Pele Profunda Clínica',
    scientificDesc: 'Procedimento clínico de higienização cutânea profunda. Inclui etapas de higienização, peeling enzimático suave para desobstrução, vaporização ou emoliência térmica para dilatação de poros, extração manual minuciosa de comedões (pontos negros) e milium, seguida de alta frequência bactericida e aplicação de máscara calmante regeneradora.',
    benefits: [
      'Eliminação completa de impurezas, resíduos de poluição e células mortas.',
      'Prevenção ativa do aparecimento de acne, pontos negros e inflamações cutâneas.',
      'Desobstrução de poros, permitindo uma oxigenação celular correta.',
      'Preparação perfeita da pele para maximizar a eficácia de tratamentos posteriores.'
    ],
    whyDoctor: 'Na nossa clínica, a limpeza de pele é encarada como um procedimento de saúde cutânea. A extração é realizada com técnica estéril e pressão controlada para evitar marcas, cicatrizes ou ruturas de vasos capilares. Além disso, utilizamos ativos de alta qualidade dermo-cosmética que restabelecem o pH e acalmam a pele de imediato.',
    duration: '60 a 75 minutos',
    recovery: 'A pele pode apresentar um ligeiro eritema nas primeiras horas devido à extração, recuperando total suavidade e luminosidade no dia seguinte.'
  },
  'Limpeza facial com extração e ativos personalizados': {
    title: 'Limpeza de Pele Avançada com Ativos Personalizados',
    scientificDesc: 'Evolução da limpeza clássica. Após a extração manual estéril de todas as impurezas, a pele é infundida com princípios ativos ionizáveis selecionados (como ácido salicílico para peles acneicas, ácido hialurónico para desidratadas ou vitamina C pura para peles oxidadas), potencializados por fototerapia LED.',
    benefits: [
      'Higienização profunda associada a tratamento ativo direcionado à sua queixa principal.',
      'Ação anti-inflamatória e calmante imediata potenciada pela fototerapia LED.',
      'Controlo da oleosidade e brilho excessivos ou hidratação de zonas ressequidas.',
      'Pele visivelmente equilibrada, purificada e com textura acetinada.'
    ],
    whyDoctor: 'A Dra. Beleza seleciona pessoalmente os princípios ativos médicos e os comprimentos de onda do LED aplicados após a sua limpeza. Isto garante que a barreira protetora da sua pele é reestruturada de imediato, acelerando a cicatrização e tratando condições como acne ou sensibilidade extrema no mesmo momento.',
    duration: '75 minutos',
    recovery: 'Mínima vermelhidão transitória. Luminosidade e frescura imediatas.'
  },
  'Limpeza Regenerativa com BioAtivos': {
    title: 'Limpeza Regenerativa Celular com BioAtivos',
    scientificDesc: 'Protocolo exclusivo que funde a limpeza clínica profunda com a infusão de bioativos regeneradores de alta tecnologia. Após a purificação da pele, aplica-se uma máscara de fatores de crescimento epidérmico e péptidos biomiméticos, selados com terapia de oxigénio hiperbárico ou massagem de drenagem facial.',
    benefits: [
      'Estímulo precoce da reparação dérmica e síntese de colagénio durante a limpeza.',
      'Nutrição intensiva que repara instantaneamente peles agredidas ou fatigadas.',
      'Efeito descongestionante e tensor suave imediato.',
      'Tez ultra-luminosa, revitalizada e rejuvenescida com efeito de "pele de porcelana".'
    ],
    whyDoctor: 'Este tratamento de assinatura une o melhor dos dois mundos: a higiene cutânea clínica e a bioestimulação celular ativa. A Dra. Beleza desenhou este protocolo para pacientes que exigem uma pele perfeita, radiante e protegida contra o envelhecimento, utilizando tecnologia de infusão de ativos sem agulhas.',
    duration: '75 a 90 minutos',
    recovery: 'Imediata. Ideal para realizar antes de eventos especiais devido ao seu extraordinário efeito de luminosidade instantânea.'
  },
  'Plasma Rico em Plaquetas (Skinbooster Autólogo)': {
    title: 'Skinbooster Autólogo (PRP)',
    scientificDesc: 'Aplicação de plasma rico em plaquetas em micro-injeções superficiais e uniformes por todo o rosto, pescoço e decote. Atua como um hidratante biológico injetável profundo (skinbooster), ativando os recetores celulares de hidratação e reparando as micro-rugas induzidas pela desidratação.',
    benefits: [
      'Hidratação dérmica biológica profunda impossível de atingir com cosmética tópica.',
      'Atenuação de micro-rugas finas e aspeto "crepe" da pele fina.',
      'Melhoria global da elasticidade, turgor e brilho interno da pele.',
      'Resultados 100% naturais sem alteração de volumes faciais.'
    ],
    whyDoctor: 'A Dra. Beleza domina a técnica de micropuntura uniforme, garantindo uma distribuição homogénea do seu próprio plasma em toda a face. A sua mão precisa e delicada minimiza qualquer desconforto, tornando a sessão segura e altamente eficaz na estimulação do seu colagénio natural.',
    duration: '45 a 60 minutos',
    recovery: 'Ligeiras pápulas (pequenas elevações) nos locais de injeção que se dissolvem de forma totalmente natural em poucas horas.'
  },
  'Sessão de manutenção da pele': {
    title: 'Sessão de Manutenção e Proteção Dérmica',
    scientificDesc: 'Protocolo preventivo periódico desenvolvido para monitorizar a saúde da pele, realizar uma microdermoabrasão suave ou peeling superficial enzimático, aplicar antioxidantes de alta potência e reajustar a rotina de cuidados diários em casa de acordo com as mudanças de estação do ano.',
    benefits: [
      'Manutenção contínua da saúde, frescura e juventude cutânea.',
      'Prevenção da acumulação de danos oxidativos e manchas solares.',
      'Ajuste terapêutico constante dos cosméticos de uso diário em casa.',
      'Garantia de que a barreira da pele se mantém forte e saudável todo o ano.'
    ],
    whyDoctor: 'A constância é o verdadeiro segredo de uma pele jovem. Nesta consulta periódica, a Dra. Beleza avalia a evolução da sua derme e ajusta cirurgicamente a sua rotina home-care. Isto evita gastos desnecessários com produtos inadequados e garante que a sua pele está sempre a receber o estímulo correto de acordo com o clima e o seu estado hormonal.',
    duration: '45 minutos',
    recovery: 'Imediata. Saída da clínica com pele protegida, hidratada e radiante.'
  },

  // --- CAPILAR ---
  'Terapia capilar para queda de cabelo': {
    title: 'Terapia Capilar Avançada Antiqueda',
    scientificDesc: 'Injeção intradérmica (mesoterapia capilar) de compostos farmacológicos ativos de alta eficácia diretamente no couro cabeludo. O cocktail combina vasodilatadores, vitaminas do complexo B, coenzimas, minerais e bloqueadores hormonais locais (como a finasterida ou dutasterida, se clinicamente indicado) para travar a queda ativa.',
    benefits: [
      'Bloqueio direto dos mecanismos hormonais e metabólicos responsáveis pela queda de cabelo.',
      'Aumento imediato da microcirculação local, nutrindo a raiz do folículo piloso.',
      'Redução da queda ativa em poucas semanas de tratamento.',
      'Aumento da resistência e vitalidade da haste capilar.'
    ],
    whyDoctor: 'A queda de cabelo exige um diagnóstico clínico exato (diferenciando eflúvio telógeno de alopécia androgenética). A Dra. Beleza realiza uma avaliação capilar minuciosa para prescrever a combinação exata de ativos injetáveis e orais necessária, atuando na causa biológica real do problema com total rigor clínico.',
    duration: '30 minutos',
    recovery: 'Imediata. Recomenda-se apenas não lavar a cabeça nas 12 horas seguintes para permitir a absorção total dos ativos.'
  },
  'Bioestimulação do couro cabeludo': {
    title: 'Bioestimulação Capilar com Fatores de Crescimento',
    scientificDesc: 'Protocolo regenerativo focado no fortalecimento e nascimento de novos fios de cabelo. Utiliza técnicas de micropuntura associadas à infusão de Plasma Rico em Plaquetas (PRP) capilar ou fatores de crescimento recombinantes de alta concentração para reativar folículos que estão em fase de latência (adormecidos).',
    benefits: [
      'Reativação de folículos capilares latentes, promovendo o nascimento de novos fios.',
      'Engrossamento visível de cabelos finos, fracos e miniaturizados.',
      'Aumento drástico da densidade capilar e preenchimento de zonas ralas.',
      'Nutrição celular profunda que prolonga a fase de crescimento (anágena) do cabelo.'
    ],
    whyDoctor: 'A Dra. Beleza utiliza protocolos combinados que aceleram os resultados de densidade capilar de forma notável. A sua aplicação é feita com agulhas de calibre médico ultra-fino e técnicas de controlo de desconforto, proporcionando uma sessão tranquila, segura e com resultados cientificamente comprovados.',
    duration: '45 minutos',
    recovery: 'Imediata. Retorno imediato à rotina social e profissional.'
  },
  'Terapia Pós-Implante Capilar': {
    title: 'Protocolo de Sucesso Pós-Transplante Capilar',
    scientificDesc: 'Protocolo especializado desenvolvido para garantir a máxima taxa de sobrevivência dos folículos transplantados e acelerar a cicatrização da zona dadora e recetora. Associa sessões de fototerapia LED de baixa intensidade para controlo da inflamação e infiltração suave de fatores de crescimento capilar após o período inicial de integração.',
    benefits: [
      'Aumento significativo da taxa de fixação e sobrevivência das unidades foliculares implantadas.',
      'Cicatrização acelerada das microferidas, reduzindo crostas, vermelhidão e prurido.',
      'Prevenção do eflúvio pós-traumático (queda temporária dos fios não transplantados).',
      'Estímulo ao crescimento precoce, forte e saudável dos novos cabelos.'
    ],
    whyDoctor: 'Fazer um transplante capilar é um investimento importante. A Dra. Beleza trabalha em conjunto com as melhores diretrizes clínicas de transplante para apoiar a fase mais crítica da cirurgia: a sobrevivência folicular. O seu protocolo suave e focado garante que o seu investimento se traduz numa densidade capilar extraordinária e numa cicatrização rápida.',
    duration: '30 a 45 minutos',
    recovery: 'Protocolo desenhado para ser totalmente confortável, indolor e seguro para os novos enxertos.'
  },
  'Aplicação de Exossomos e fatores de crescimento': {
    title: 'Terapia Capilar de Vanguarda com Exossomos',
    scientificDesc: 'O tratamento capilar mais avançado do mundo. Utiliza exossomos purificados que contêm milhares de moléculas de sinalização, proteínas e fatores de crescimento específicos. Estes bioativos comunicam diretamente com as células estaminais do folículo capilar, revertendo o processo de miniaturização e ativando a regeneração capilar a nível molecular.',
    benefits: [
      'Sinalização celular ultra-potente que reverte o afinamento capilar severo.',
      'Aceleração massiva do crescimento do cabelo e aumento do diâmetro de cada fio.',
      'Forte ação anti-inflamatória que trata a microinflamação do couro cabeludo.',
      'Resultados excecionais em casos onde os tratamentos tradicionais estabilizaram.'
    ],
    whyDoctor: 'A Dra. Beleza é uma das raras especialistas em Portugal certificada na aplicação de terapias regenerativas com exossomos biológicos aplicados à alopécia. A sua prática clínica rigorosa assegura a utilização de produtos de qualidade médica internacional com pureza certificada, proporcionando o que há de mais moderno na ciência capilar mundial.',
    duration: '45 minutos',
    recovery: 'Imediata. Pode retomar o seu dia de imediato.'
  },

  // --- CONSULTORIA & CONSULTAS ---
  'Consulta Estética e avaliação da pele (1ª Online Gratuita)': {
    title: 'Consulta de Avaliação Clínico-Estética Personalizada',
    scientificDesc: 'Consulta médica-estética integral. Consiste na análise detalhada do tipo e estado de pele, avaliação do grau de envelhecimento cutâneo, mapeamento anatómico facial, histórico clínico e metabólico do paciente. É desenhado um plano de tratamento personalizado a curto, médio e longo prazo.',
    benefits: [
      'Diagnóstico clínico rigoroso das necessidades reais da sua derme.',
      'Identificação de contraindicações e avaliação de segurança pré-tratamento.',
      'Planeamento de um cronograma financeiro e de sessões totalmente transparente.',
      'Primeira abordagem virtual gratuita para facilitar o seu primeiro contacto.'
    ],
    whyDoctor: 'A Dra. Beleza acredita que uma boa estética começa sempre num diagnóstico perfeito. Ela dedica tempo para ouvir as suas preocupações, analisar o seu estilo de vida e compreender o que realmente a incomoda. Isto garante que não faz tratamentos desnecessários e que o plano desenhado é perfeitamente seguro e eficaz para si.',
    duration: '30 a 45 minutos',
    recovery: 'Consulta de diagnóstico, sem necessidade de recuperação.'
  },
  'Prescrição de rotina de Skincare': {
    title: 'Prescrição de Rotina Home-Care Científica',
    scientificDesc: 'Desenho individualizado da sua rotina diária de cuidados com a pele (skincare). A Dra. Beleza seleciona de forma científica e independente os melhores ativos dermo-cosméticos (limpeza, antioxidantes, ácidos de renovação, hidratantes e protetores) adaptados ao seu orçamento e tipo de pele.',
    benefits: [
      'Eliminação de gastos desnecessários com cosméticos que não funcionam para a sua pele.',
      'Introdução de ativos na ordem, concentração e pH corretos para resultados reais.',
      'Tratamento diário e contínuo de manchas, acne, sensibilidade ou envelhecimento.',
      'Rotina prática, sustentável e fácil de manter no seu dia a dia.'
    ],
    whyDoctor: 'Diferente das prescrições comerciais patrocinadas, a Dra. Beleza é totalmente independente. Ela escolhe fórmulas com base na evidência científica dos ingredientes ativos e na compatibilidade com o seu tipo de pele. O seu objetivo é construir uma barreira cutânea forte, luminosa e saudável com o menor número de passos possível.',
    duration: '30 minutos',
    recovery: 'Imediata. Receção do guia digital completo de utilização da rotina.'
  },
  'Elaboração de protocolo regenerativo personalizado': {
    title: 'Conceção de Protocolo Regenerativo de Assinatura',
    scientificDesc: 'Elaboração de um plano clínico exclusivo que combina tratamentos em gabinete e cuidados de manutenção em casa. O plano foca-se na prevenção do envelhecimento celular, na reestruturação do colagénio e no rejuvenescimento natural e elegante, de forma faseada.',
    benefits: [
      'Planeamento estratégico de tratamentos que se complementam mutuamente.',
      'Resultados muito mais expressivos e duradouros ao longo do ano.',
      'Prevenção ativa e planeada do envelhecimento cutâneo de forma contínua.',
      'Acompanhamento contínuo com registo fotográfico profissional de evolução.'
    ],
    whyDoctor: 'Para a Dra. Beleza, cada paciente é uma obra de arte única. Ela desenha o seu protocolo não para a transformar noutra pessoa, mas para resgatar a sua melhor versão. A sua visão de estética regenerativa integrada garante resultados de alto padrão técnico, com total segurança médica e elegância estética.',
    duration: '30 a 45 minutos',
    recovery: 'Procedimento de planeamento clínico.'
  },
  'Acompanhamento pós-tratamento': {
    title: 'Suporte e Acompanhamento Clínico Contínuo',
    scientificDesc: 'Consulta de revisão e suporte pós-procedimento. Inclui a avaliação clínica da evolução da pele após tratamentos injetáveis ou de alta tecnologia, registo fotográfico comparativo, esclarecimento de dúvidas e ajuste das recomendações pós-tratamento.',
    benefits: [
      'Segurança e tranquilidade absolutas em todas as fases pós-procedimento.',
      'Monitorização clínica rigorosa dos resultados obtidos.',
      'Ajustes oportunos na rotina domiciliária para potenciar os efeitos obtidos.',
      'Canal de comunicação direta com a clínica para qualquer dúvida imediata.'
    ],
    whyDoctor: 'A relação da Dra. Beleza com os seus pacientes não termina quando o tratamento acaba. O acompanhamento pós-procedimento é rigoroso e humanizado. Ela faz questão de avaliar pessoalmente cada resultado, garantindo que o processo decorre com o máximo conforto, segurança e satisfação total do paciente.',
    duration: '20 a 30 minutos',
    recovery: 'Sessão de suporte e revisão clínica.'
  }
};

// Fallback generator if a treatment doesn't match exactly
export function getTreatmentDetail(title: string): TreatmentDetail {
  const normalizedTitle = title.trim();
  
  // Search for an exact match or partial match
  const matchedKey = Object.keys(TREATMENT_DETAILS_PT).find(key => 
    normalizedTitle.toLowerCase().includes(key.toLowerCase()) || 
    key.toLowerCase().includes(normalizedTitle.toLowerCase())
  );

  if (matchedKey && TREATMENT_DETAILS_PT[matchedKey]) {
    return TREATMENT_DETAILS_PT[matchedKey];
  }

  // Elegant default/fallback matching typical high-quality aesthetic treatments
  return {
    title: title,
    scientificDesc: `O tratamento de ${title} é um procedimento personalizado focado na saúde e rejuvenescimento dérmico. Utiliza técnicas avançadas de base clínico-estética para estimular a regeneração celular natural, restaurando o equilíbrio, vitalidade e luminosidade originais da pele sem alterar a fisionomia natural do paciente.`,
    benefits: [
      'Estimulação ativa dos processos biológicos naturais de regeneração da pele.',
      'Melhoria visível da textura, firmeza e hidratação profunda do tecido.',
      'Abordagem preventiva personalizada adaptada às necessidades específicas da sua derme.',
      'Resultados elegantes, discretos e em total harmonia com os seus traços originais.'
    ],
    whyDoctor: 'A Dra. Beleza conta com uma sólida experiência na área da estética regenerativa avançada em Portugal. Cada procedimento é precedido por um diagnóstico minucioso da saúde celular da pele do paciente. A sua aplicação técnica precisa, aliada ao uso exclusivo de bioativos e fórmulas dermo-cosméticas de padrão clínico, garante a máxima eficácia clínica e segurança em cada sessão.',
    duration: '30 a 60 minutos',
    recovery: 'Imediata ou ligeiro eritema transitório perfeitamente expectável, permitindo o retorno célere à rotina profissional e social diária.'
  };
}
