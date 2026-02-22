
import { Syringe, Sparkles, GraduationCap, TrendingUp, Scissors, HeartHandshake, Smartphone } from 'lucide-react';

export const CONTENT = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      stories: 'Histórias',
      services: 'Tratamentos',
      academy: 'Academy',
      events: 'Eventos',
      shop: 'Loja',
      kbeauty: 'K-Beauty',
      club: 'Clube',
      contact: 'Contactos',
    },
    paymentNotice: 'Facilidade de Pagamento: Possibilidade de pagamento faseado nos serviços.',
    promoCalendar: {
      title: '1ª Consulta Online',
      highlight: 'GRATUITA!',
      btn: 'Agendar Oferta'
    },
    promoBanner: {
      text: '1ª CONSULTA DE AVALIAÇÃO ONLINE GRATUITA',
      cta: 'AGENDE AQUI A SUA OFERTA'
    },
    hero: {
      badge: 'ESTÉTICA REGENERATIVA',
      titleStart: 'Ciência, Beleza e',
      titleHighlight: 'Regeneração',
      titleEnd: '',
      description: 'NÃO MUDAMOS O SEU VISUAL, MANTEMOS A SUA NATURALIDADE. Protocolos personalizados que fazem a diferença na sua autoestima. Resultados diferenciadores e duradouros desde a primeira sessão.',
      ctaMain: 'Agendar Avaliação',
      ctaSecondary: 'Conhecer Tratamentos',
      stats: {
        patients: 'Pacientes Fidelizados',
        experience: 'Anos em Portugal' 
      },
      quote: '"Neste espaço, vou ouvir o que a incomoda e oferecer uma solução profunda que não mascare, mas sim rejuvenesça a sua pele."'
    },
    about: {
      titleStart: 'Pioneira na Área',
      titleHighlight: 'Regenerativa',
      p1: 'A marca Dra. Beleza celebra 5 anos de história e um propósito inabalável de levar beleza, saúde e autoestima a todos os cantos.',
      p2: 'Com 8 anos de experiência clínica e pioneira na Estética Regenerativa em Portugal (onde atuo há 6 anos), compreendo que o futuro da Estética é a regeneração celular. Sou uma empreendedora que se recusou a desistir do seu sonho.',
      quote: '"Neste espaço, vou ouvir o que a incomoda e oferecer uma solução profunda que não mascare, mas sim rejuvenesça a sua pele."',
      p3: 'Já contamos com mais de 1000 pacientes fidelizados. A minha missão é oferecer soluções que equilibram corpo e mente, focadas na saúde celular real.',
      stats: {
        totalExp: 'Anos de Experiência', 
        history: 'Anos de História da Marca' 
      }
    },
    testimonials: {
      badge: 'Histórias Reais',
      title: 'Resultados que',
      titleHighlight: 'Inspiram',
      desc: 'Veja como a estética regenerativa transformou a autoestima das nossas pacientes.'
    },
    services: {
      badge: 'Os Nossos Procedimentos',
      title: 'Estética Regenerativa',
      subtitle: 'Selecione uma categoria para ver os protocolos personalizados',
      scheduleBtn: 'Agendar Avaliação',
      viewList: 'Ver lista de tratamentos',
      academyTitle: 'Dra. Beleza Academy',
      academyDesc: 'Formação de alta performance. Partilho os meus 8 anos de experiência para alavancar a sua carreira.',
      academyBtn: 'Candidatar-me à Academy',
      academyNote: 'Vagas limitadas para mentorias exclusivas.',
      data: [
        {
          id: 'facial-corporal',
          title: 'Tratamentos Regenerativos Faciais e Corporais',
          icon: Syringe,
          items: [
            'Plasma Rico em Plaquetas',
            'Microagulhamento regenerativo',
            'Nutrição facial',
            'Hidratação regenerativa (PDRN, EXOSSOMOS, NADH, NCTF)',
            'Toxina Regenerativa',
            'Bioestimuladores de Colagénio',
            'Preenchimento regenerativo',
            'Tratamento de olheiras (flacidez, bolsas, rugas)',
            'Cicatrizes, estrias e gordura localizada',
            'Acompanhamento Pós-Operatório',
            'Peelings personalizados (químico, físico, enzimático)',
            'Tratamento para Melasma (Cosmelan, Peeling e Anti-inflamatório)',
            'Toxina Botulínica por zonas (Rosto, Hiperhidrose, Couro cabeludo)',
            'HiFu ultrassom-microfocado (Lifting não invasivo)',
            'Protocolos Personalizados'
          ]
        },
        {
          id: 'skincare',
          title: 'Cuidados e Limpezas de Pele',
          icon: Sparkles,
          items: [
            'Limpeza de pele profunda',
            'Limpeza facial com extração e ativos personalizados',
            'Limpeza Regenerativa com BioAtivos',
            'Plasma Rico em Plaquetas (Skinbooster Autólogo)',
            'Sessão de manutenção da pele'
          ]
        },
        {
          id: 'capilar',
          title: 'Tratamentos Capilares Regenerativos',
          icon: Scissors,
          items: [
            'Terapia capilar para queda de cabelo',
            'Bioestimulação do couro cabeludo',
            'Terapia Pós-Implante Capilar',
            'Aplicação de Exossomos e fatores de crescimento'
          ]
        },
        {
          id: 'consultoria',
          title: 'Consultoria e Acompanhamento',
          icon: HeartHandshake,
          items: [
            'Consulta Estética e avaliação da pele (1ª Online Gratuita)',
            'Prescrição de rotina de Skincare',
            'Elaboração de protocolo regenerativo personalizado',
            'Acompanhamento pós-tratamento'
          ]
        }
      ],
      education: [
        {
          title: 'Formação Técnica',
          description: 'Dirigida a Esteticistas ou Médicos (segundo certificação)',
          icon: GraduationCap,
          items: [
            'Técnicas de Regeneração da Pele',
            'Injetáveis regenerativos (Apenas Médicos)',
            'Intradermoterapia Regenerativa',
            'Protocolos não invasivos'
          ]
        },
        {
          title: 'Mentoria de Marca Pessoal',
          description: 'Posicionamento e Autoridade',
          icon: TrendingUp,
          items: [
            'Posicionamento e Autoridade',
            'Redes Sociais e Criação de Conteúdo',
            'Funil de Vendas',
            'Planeamento de Escalada',
            'Finanças Pessoais e do Negócio'
          ]
        },
        {
          title: 'Marketing & Estratégia Digital',
          description: 'Negócios e Marcas Comerciais',
          icon: Smartphone,
          items: [
            'Automação e Faturação',
            'Posicionamento Digital',
            'Branding e Identidade Visual',
            'Anúncios que Convertem (Ads)',
            'Estratégias de Lançamento',
            'Página Web'
          ]
        }
      ]
    },
    events: {
      badge: 'Tour Dra. Beleza',
      title: 'Próximos Eventos',
      subtitle: 'Experiências imersivas de conhecimento e beleza. Confira o calendário.',
      calendarTitle: 'Calendário 2025',
      mapTitle: 'Localização',
      mapButton: 'Ver Mapa',
      lisboa: {
        location: 'LISBOA',
        title: 'Masterclass & Experiência',
        date: '15 de Março de 2025',
        month: 'MAR',
        day: '15',
        info: 'Mais Informações',
        btn: 'Pré-Inscrição',
        mapQuery: 'Lisboa, Portugal'
      },
      madeira: {
        location: 'FUNCHAL, MADEIRA',
        title: 'Retiro de Beleza & Bem-Estar',
        date: '12 a 15 de Dezembro 2025',
        month: 'DEZ',
        day: '12',
        info: 'Mais Informações',
        btn: 'Pré-Registo',
        mapQuery: 'Funchal, Madeira'
      }
    },
    shop: {
      badge: 'Loja Dra. Beleza',
      title: 'Produtos & Conhecimento',
      ebook: {
        badge: 'Best-Seller Digital',
        title: 'E-book: Segredos da Beleza Regenerativa',
        desc: 'O guia definitivo para compreender a sua pele. Descubra rituais diários, alimentação estratégica e os segredos que os profissionais não contam para manter a jovialidade naturalmente.',
        btn: 'Comprar E-book (5,00€)'
      },
      kit: {
        badge: 'Protocolo Exclusivo',
        title: 'KIT RETINOL',
        desc: 'A solução completa para renovação celular em casa. Inclui consulta de avaliação.',
        items: [
          'Consulta de Avaliação',
          'Tretinoína de 0.25%',
          'Guia de Utilização Exclusivo'
        ],
        btn: 'Agendar & Adquirir'
      },
      products: {
        badge: 'Skincare & Home Care',
        title: 'Linha Dra. Beleza',
        desc: 'Produtos selecionados rigorosamente para complementar os seus tratamentos em clínica. Potencialize os resultados da regeneração celular no conforto de sua casa.',
        items: ['Personalized Routine', 'Active Serums', 'Sunscreen'],
        btn: 'View Catalog / Order'
      }
    },
    kbeauty: {
      badge: 'COMUNIDADE EXCLUSIVA',
      titleStart: 'Descubra os Segredos do',
      titleHighlight: 'K-Beauty',
      desc: 'Skincare, um espaço para conhecer, aprender e descobrir a filosofia da Coreia do Sul. Junte-se à nossa comunidade.',
      promo: 'EXPLORA A POSSIBILIDADE DE ENTRAR NA EQUIPA E COMEÇAR A MONETIZAR COM O K-BEAUTY DA ATOMY!',
      vipOffer: 'Tenha acesso a um teste VIP gratuito dos produtos.',
      btn: 'Entrar na Comunidade',
      footer: 'Gerido por Lesia - Especialista K-Beauty',
      loading: 'A redirecionar...'
    },
    membership: {
      badge: 'Clube Dra. Beleza',
      title: 'Torne-se um membro VIP',
      desc: 'Receba conteúdos exclusivos, dicas de regeneração celular e descontos especiais diretamente no seu email todos os meses.',
      offer: 'Oferta Especial',
      period: '/mês',
      benefits: [
        'Informação exclusiva mensal',
        'Descontos em tratamentos',
        'Dicas de Skin Care e Nutrição'
      ],
      btn: 'Subscrever Agora',
      delivery: 'Entregue via Email'
    },
    contact: {
      title: 'Vamos conversar?',
      desc: 'Agende a sua consulta ou tire as suas dúvidas. O seu caminho para a beleza regenerativa começa aqui.',
      addressTitle: 'Morada',
      phoneTitle: 'Telefone / WhatsApp',
      instaTitle: 'Instagram',
      whatsappBtn: 'Falar no WhatsApp',
      footerRights: 'Todos os direitos reservados.',
      footerTagline: 'Estética Regenerativa.',
      links: {
        terms: 'Termos e Condições',
        privacy: 'Política de Privacidade',
        cookies: 'Política de Cookies',
        ral: 'Resolução de Litígios',
        livro: 'Livro de Reclamações'
      }
    },
    form: {
      title: 'Fale Connosco',
      subtitle: 'Preencha o formulário para agendamentos ou dúvidas.',
      successTitle: 'Pedido Recebido!',
      successDesc: 'Obrigada pelo seu contacto. A equipa Dra. Beleza irá responder ao seu pedido sobre',
      successDescEnd: 'muito em breve. Foi enviado um email de confirmação.',
      newMsgBtn: 'Enviar nova mensagem',
      error: 'Erro ao enviar. Por favor tente novamente ou contacte via WhatsApp.',
      name: 'Nome Completo',
      phone: 'Telemóvel',
      email: 'Email',
      interest: 'Assunto / Interesse',
      message: 'Mensagem (Opcional)',
      messagePlaceholder: 'Dúvidas específicas ou horário preferencial...',
      privacy: 'Concordo com o processamento dos meus dados pessoais para efeitos de contacto e comunicação de serviços da Dra. Beleza.',
      btnSubmit: 'Enviar Pedido',
      btnSending: 'A Guardar...',
      security: 'Os seus dados estão protegidos e seguros.',
      options: {
        group1: 'Clínica & Consultas',
        opt1: 'Consulta Estética / Avaliação',
        opt2: 'Botox / Harmonização',
        opt3: 'Tratamento Corporal',
        group2: 'Eventos & Workshops',
        opt4: 'Evento Presencial - Lisboa',
        opt5: 'Evento Presencial - Madeira',
        group3: 'Loja & Produtos',
        opt6: 'Dúvidas sobre E-book',
        opt7: 'Encomendar Produtos',
        optKit: 'Kit Retinol',
        group4: 'Outros',
        opt8: 'Mentoria / Academy',
        opt9: 'Comunidade K-Beauty',
        opt10: 'Clube Dra. Beleza (Subscrição)'
      }
    },
    cookies: {
      text: 'Utilizamos cookies para personalizar a sua experiência e para fins de marketing. Ao continuar, aceita a nossa política de privacidade.',
      accept: 'Aceitar',
      decline: 'Recusar'
    },
    legal: {
      privacy: 'Política de Privacidade: Respeitamos a sua privacidade. Todos os dados recolhidos são processados de acordo com o RGPD e usados exclusivamente para comunicação de serviços solicitados. Não partilhamos dados com terceiros sem consentimento.',
      terms: 'Termos e Condições: O uso deste site implica a aceitação das regras de utilização. Os serviços médicos e estéticos requerem avaliação prévia presencial.',
      ral: 'Entidade de Resolução Alternativa de Litígios (RAL): Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo. Consulte o rodapé para mais informações.',
      ers: 'Entidade Reguladora da Saúde (ERS): Estabelecimento registado. Direção Clínica: Dra. Beleza.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      stories: 'Stories',
      services: 'Treatments',
      academy: 'Academy',
      events: 'Events',
      shop: 'Shop',
      kbeauty: 'K-Beauty',
      club: 'Club',
      contact: 'Contact',
    },
    paymentNotice: 'Payment Options: Installment payment available for services.',
    promoCalendar: {
      title: '1st Online Consult',
      highlight: 'FREE!',
      btn: 'Book Offer'
    },
    promoBanner: {
      text: '1st FREE ONLINE EVALUATION CONSULTATION',
      cta: 'BOOK YOUR OFFER HERE'
    },
    hero: {
      badge: 'REGENERATIVE AESTHETICS',
      titleStart: 'Science, Beauty and',
      titleHighlight: 'Regeneration',
      titleEnd: '',
      description: 'WE DO NOT CHANGE YOUR LOOK, WE MAINTAIN YOUR NATURALNESS. Personalized protocols that make a difference in your self-esteem. Differentiating and lasting results from the first session.',
      ctaMain: 'Schedule Evaluation',
      ctaSecondary: 'View Treatments',
      stats: {
        patients: 'Loyal Patients',
        experience: 'Years in Portugal'
      },
      quote: '"Our philosophy is that you become your best version."'
    },
    about: {
      titleStart: 'Pioneer in',
      titleHighlight: 'Regenerative Area',
      p1: 'The Dra. Beleza brand celebrates 5 years of history and an unwavering purpose of bringing beauty, health, and self-esteem to every corner.',
      p2: 'With 8 years of clinical experience and being a pioneer in Regenerative Aesthetics in Portugal (where I have been practicing for 6 years), I understand that the future of Aesthetics is cellular regeneration. I am an entrepreneur who refused to give up on her dream.',
      quote: '"In this space, I will hear what bothers you and offer you a deep solution that does not mask, but rejuvenates your skin."',
      p3: 'We already count with more than 1000 loyal patients. My mission is to offer solutions that balance body and mind, focused on real cellular health.',
      stats: {
        totalExp: 'Years of Experience',
        history: 'Years of Brand History'
      }
    },
    testimonials: {
      badge: 'Real Stories',
      title: 'Results that',
      titleHighlight: 'Inspire',
      desc: 'See how regenerative aesthetics transformed the self-esteem of our patients.'
    },
    services: {
      badge: 'Our Procedures',
      title: 'Regenerative Aesthetics',
      subtitle: 'Select a category to see personalized protocols',
      scheduleBtn: 'Schedule Evaluation',
      viewList: 'View treatment list',
      academyTitle: 'Dra. Beleza Academy',
      academyDesc: 'High-performance training. I share my 8 years of experience to boost your career.',
      academyBtn: 'Apply to Academy',
      academyNote: 'Limited spots for exclusive mentorships.',
      data: [
        {
          id: 'facial-corporal',
          title: 'Regenerative Facial and Body Treatments',
          icon: Syringe,
          items: [
            'Platelet Rich Plasma (PRP)',
            'Regenerative Microneedling',
            'Facial Nutrition',
            'Regenerative Hydration (PDRN, EXOSOMES, NADH, NCTF)',
            'Regenerative Toxin',
            'Collagen Biostimulators',
            'Regenerative Filler',
            'Dark Circle Treatment (flaccidity, bags, wrinkles)',
            'Scars, Stretch Marks and Localized Fat',
            'Post-Operative Follow-up',
            'Personalized Peels (chemical, physical, enzymatic)',
            'Melasma Treatment (Cosmelan, Peeling and Anti-inflammatory)',
            'Botulinum Toxin by zones (Face, Hyperhidrosis, Scalp)',
            'HiFu Micro-focused Ultrasound (Non-invasive Lifting)',
            'Personalized Protocols'
          ]
        },
        {
          id: 'skincare',
          title: 'Skincare and Cleansing',
          icon: Sparkles,
          items: [
            'Deep Skin Cleansing',
            'Facial Cleansing with extraction and personalized actives',
            'Regenerative Cleansing with BioActives',
            'Platelet Rich Plasma (Autologous Skinbooster)',
            'Skin Maintenance Session'
          ]
        },
        {
          id: 'capilar',
          title: 'Regenerative Hair Treatments',
          icon: Scissors,
          items: [
            'Hair Therapy for Hair Loss',
            'Scalp Biostimulation',
            'Post Hair Implant Therapy',
            'Application of Exosomes and Growth Factors'
          ]
        },
        {
          id: 'consultoria',
          title: 'Consultancy and Follow-up',
          icon: HeartHandshake,
          items: [
            'Aesthetic Consultation and Skin Evaluation (1st Online Free)',
            'Skincare Routine Prescription',
            'Development of Personalized Regenerative Protocol',
            'Post-treatment Follow-up'
          ]
        }
      ],
      education: [
        {
          title: 'Technical Training',
          description: 'Directed to Beauticians or Doctors (according to certification)',
          icon: GraduationCap,
          items: [
            'Skin Regeneration Techniques',
            'Regenerative Injectables (Doctors Only)',
            'Regenerative Intradermotherapy',
            'Non-invasive Protocols'
          ]
        },
        {
          title: 'Personal Brand Mentorship',
          description: 'Positioning and Authority',
          icon: TrendingUp,
          items: [
            'Positioning and Authority',
            'Social Media and Content Creation',
            'Sales Funnel',
            'Scaling Planning',
            'Personal and Business Finance'
          ]
        },
        {
          title: 'Marketing & Digital Strategy',
          description: 'Business and Commercial Brands',
          icon: Smartphone,
          items: [
            'Automation and Billing',
            'Digital Positioning',
            'Branding and Visual Identity',
            'Ads that Convert',
            'Launch Strategies',
            'Web Page'
          ]
        }
      ]
    },
    events: {
      badge: 'Dra. Beleza Tour',
      title: 'Upcoming Events',
      subtitle: 'Immersive experiences of knowledge and beauty. Check the calendar.',
      calendarTitle: '2025 Calendar',
      mapTitle: 'Location',
      mapButton: 'View Map',
      lisboa: {
        location: 'LISBON',
        title: 'Masterclass & Experience',
        date: 'March 15, 2025',
        month: 'MAR',
        day: '15',
        info: 'More Information',
        btn: 'Pre-Register',
        mapQuery: 'Lisbon, Portugal'
      },
      madeira: {
        location: 'FUNCHAL, MADEIRA',
        title: 'Beauty & Wellness Retreat',
        date: 'December 12-15, 2025',
        month: 'DEC',
        day: '12',
        info: 'More Information',
        btn: 'Pre-Register',
        mapQuery: 'Funchal, Madeira'
      }
    },
    shop: {
      badge: 'Dra. Beleza Shop',
      title: 'Products & Knowledge',
      ebook: {
        badge: 'Digital Best-Seller',
        title: 'E-book: Secrets of Regenerative Beauty',
        desc: 'The definitive guide to understanding your skin. Discover daily rituals, strategic nutrition, and secrets that professionals don\'t tell to maintain joviality naturally.',
        btn: 'Buy E-book (5,00€)'
      },
      kit: {
        badge: 'Exclusive Protocol',
        title: 'RETINOL KIT',
        desc: 'The complete solution for home cellular renewal. Includes evaluation consultation.',
        items: [
          'Evaluation Consultation',
          'Tretinoin 0.25%',
          'Exclusive Usage Guide'
        ],
        btn: 'Schedule & Acquire'
      },
      products: {
        badge: 'Skincare & Home Care',
        title: 'Dra. Beleza Line',
        desc: 'Rigorously selected products to complement your clinical treatments. Boost cellular regeneration results in the comfort of your home.',
        items: ['Personalized Routine', 'Active Serums', 'Sunscreen'],
        btn: 'View Catalog / Order'
      }
    },
    kbeauty: {
      badge: 'EXCLUSIVE COMMUNITY',
      titleStart: 'Discover the Secrets of',
      titleHighlight: 'K-Beauty',
      desc: 'Skincare, a space to know, learn and discover the philosophy of South Korea. Join our community.',
      promo: 'EXPLORE THE POSSIBILITY OF JOINING THE TEAM AND START MONETIZING WITH ATOMY K-BEAUTY!',
      vipOffer: 'Get access to a free VIP product test.',
      btn: 'Join Community',
      footer: 'Managed by Lesia - K-Beauty Specialist',
      loading: 'Redirecting...'
    },
    membership: {
      badge: 'Dra. Beleza Club',
      title: 'Become a VIP Member',
      desc: 'Receive exclusive content, cellular regeneration tips, and special discounts directly to your email every month.',
      offer: 'Special Offer',
      period: '/month',
      benefits: [
        'Exclusive Monthly Information',
        'Discounts on Treatments',
        'Skin Care and Nutrition Tips'
      ],
      btn: 'Subscribe Now',
      delivery: 'Delivered via Email'
    },
    contact: {
      title: 'Let\'s talk?',
      desc: 'Schedule your consultation or ask your questions. Your path to regenerative beauty starts here.',
      addressTitle: 'Address',
      phoneTitle: 'Phone / WhatsApp',
      instaTitle: 'Instagram',
      whatsappBtn: 'Chat on WhatsApp',
      footerRights: 'All rights reserved.',
      footerTagline: 'Regenerative Aesthetics.',
      links: {
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
        cookies: 'Cookie Policy',
        ral: 'Dispute Resolution',
        livro: 'Complaints Book'
      }
    },
    form: {
      title: 'Contact Us',
      subtitle: 'Fill out the form for appointments or questions.',
      successTitle: 'Request Received!',
      successDesc: 'Thank you for contacting us. The Dra. Beleza team will respond to your request regarding',
      successDescEnd: 'very soon. A confirmation email has been sent.',
      newMsgBtn: 'Send new message',
      error: 'Error sending. Please try again or contact via WhatsApp.',
      name: 'Full Name',
      phone: 'Mobile Phone',
      email: 'Email',
      interest: 'Subject / Interest',
      message: 'Message (Optional)',
      messagePlaceholder: 'Specific questions or preferred time...',
      privacy: 'I agree to the processing of my personal data for contact purposes and communication of Dra. Beleza services.',
      btnSubmit: 'Send Request',
      btnSending: 'Saving...',
      security: 'Your data is protected and safe.',
      options: {
        group1: 'Clinic & Appointments',
        opt1: 'Aesthetic Consultation / Evaluation',
        opt2: 'Botox / Harmonization',
        opt3: 'Body Treatment',
        group2: 'Events & Workshops',
        opt4: 'In-Person Event - Lisbon',
        opt5: 'In-Person Event - Madeira',
        group3: 'Shop & Products',
        opt6: 'Questions about E-book',
        opt7: 'Order Products',
        optKit: 'Retinol Kit',
        group4: 'Others',
        opt8: 'Mentorship / Academy',
        opt9: 'K-Beauty Community',
        opt10: 'Dra. Beleza Club (Subscription)'
      }
    },
    cookies: {
      text: 'We use cookies to personalize your experience and for marketing purposes. By continuing, you accept our privacy policy.',
      accept: 'Accept',
      decline: 'Decline'
    },
    legal: {
      privacy: 'Privacy Policy: We respect your privacy. All collected data is processed according to GDPR and used exclusively for communicating requested services. We do not share data with third parties without consent.',
      terms: 'Terms and Conditions: Use of this site implies acceptance of usage rules. Medical and aesthetic services require prior in-person evaluation.',
      ral: 'Alternative Dispute Resolution (RAL): In case of dispute, the consumer may resort to an Alternative Consumer Dispute Resolution Entity. See footer for more information.',
      ers: 'Health Regulatory Entity (ERS): Registered establishment. Clinical Direction: Dra. Beleza.'
    }
  }
};
