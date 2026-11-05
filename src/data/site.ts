export type Locale = 'pt' | 'en';
export type Page = 'home' | 'about' | 'services' | 'team' | 'contact';

export const brand = {
  name: 'PAR—LE',
  email: 'hello.parlecreative@gmail.com',
  instagram: 'https://www.instagram.com/parlecreative/',
};

export const socialLinks = [
  { name: 'Instagram', icon: 'instagram', href: brand.instagram },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/par—le/' },
  { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@parlecreative' },
] as const;

export const routes: Record<Locale, Record<Page, string>> = {
  pt: { home: '/', about: '/sobre/', services: '/servicos/', team: '/equipa/', contact: '/contactos/' },
  en: { home: '/en/', about: '/en/about/', services: '/en/services/', team: '/en/team/', contact: '/en/contact/' },
};

export const pages = Object.keys(routes.pt) as Page[];
export const locales: Locale[] = ['pt', 'en'];

interface Service { title: string; description: string; deliverables: string[]; }
interface Founder { name: string; role: string; image: string; bio: string; }
interface Copy {
  language: string;
  nav: Record<Page, string>;
  titles: Record<Page, string>;
  descriptions: Record<Page, string>;
  skip: string;
  menu: string;
  close: string;
  agency: string;
  talk: string;
  more: string;
  home: { headline: string[]; introduction: string; imageAlt: string; imageCaption: string; note: string; aboutHeading: string; aboutBody: string; servicesHeading: string; servicesIntro: string; teamHeading: string; teamIntro: string; teamLink: string; };
  about: { heading: string; lead: string; paragraphs: string[]; imageAlt: string; belief: string; values: { title: string; body: string }[]; };
  servicePage: { heading: string; intro: string; deliverables: string; processHeading: string; process: { title: string; body: string }[]; };
  services: Service[];
  team: { heading: string; intro: string; founders: Founder[]; };
  contact: { heading: string; intro: string; emailLabel: string; emailAction: string; social: string; briefHeading: string; brief: string[]; };
  cta: { heading: string; body: string; };
  footer: { line: string; credit: string; };
}

export const content: Record<Locale, Copy> = {
  pt: {
    language: 'Português',
    nav: { home: 'Início', about: 'Sobre nós', services: 'Serviços', team: 'Equipa', contact: 'Contactos' },
    titles: { home: 'Entre a arte e o público', about: 'Sobre nós', services: 'Serviços', team: 'Equipa', contact: 'Vamos conversar' },
    descriptions: {
      home: 'A PAR—LE é uma agência de comunicação cultural e artística. Estratégia, conteúdos e identidade visual para aproximar a cultura das pessoas.',
      about: 'Conhece a PAR—LE e a nossa abordagem à comunicação de projetos, instituições e profissionais da cultura.',
      services: 'Estratégia digital, redes sociais, produção de conteúdos, direção artística, branding, comunicação de eventos e consultoria para arte e cultura.',
      team: 'Conhece Carolina Medeiros e Joana Garcia, as fundadoras da PAR—LE, agência de comunicação cultural e artística.',
      contact: 'Tens um projeto cultural ou artístico para comunicar? Fala com a PAR—LE e conta-nos a tua ideia.',
    },
    skip: 'Saltar para o conteúdo', menu: 'Abrir menu', close: 'Fechar menu',
    agency: 'Agência de comunicação cultural e artística', talk: 'Vamos conversar', more: 'Conhece a PAR—LE',
    home: {
      headline: ['Entre a arte', 'e o público.'],
      introduction: 'Damos voz à cultura. Criamos estratégias, identidades e conteúdos que aproximam a arte das pessoas.',
      imageAlt: 'Visitantes numa galeria de arte, em frente a uma obra de tons vermelhos',
      imageCaption: 'Onde as ideias se cruzam.', note: 'Arte. Cultura. Conversa.',
      aboutHeading: 'A cultura não se comunica de fora.',
      aboutBody: 'A PAR—LE nasce de um olhar que vem de dentro. Cruzamos experiência nas artes com estratégia de comunicação para dar a cada projeto o espaço e a visibilidade que merece.',
      servicesHeading: 'Ideias que dão que falar',
      servicesIntro: 'Da primeira ideia à forma como chega ao público, encontramos a linguagem certa para o teu projeto.',
      teamHeading: 'Duas perspectivas.\nUma visão em comum.',
      teamIntro: 'Da criatividade à par—le, com arte e marketing à mistura',
      teamLink: 'Conhece a equipa',
    },
    about: {
      heading: 'A cultura tem\nmuito para dizer.', lead: 'Nós mostramos-te como.',
      paragraphs: [
        'A PAR–LE nasce para aproximar a cultura às pessoas.',
        'Num mundo cada vez mais digital, contar uma boa história deixou de ser um complemento — é uma necessidade.',
        'Desenvolvemos estratégias de comunicação, identidade visual, gestão de redes sociais e criação de conteúdos que ajudam instituições e profissionais da cultura a comunicar de forma mais clara, relevante e contemporânea.',
        'Mais do que promover projetos, — queremos criar ligações entre a arte e o seu público, dando à cultura o espaço e a visibilidade que merece.',
      ],
      imageAlt: 'Visitante a passar diante de uma obra de arte numa galeria', belief: 'Para lá do visível.',
      values: [
        { title: 'Um olhar de dentro', body: 'A nossa experiência cultural e artística é o ponto de partida. Conhecemos o contexto antes de escolher a mensagem.' },
        { title: 'Identidade própria', body: 'Damos forma ao que distingue cada projeto, com uma linguagem visual e verbal que lhe pertence.' },
        { title: 'Impacto com sentido', body: 'Pensamos para lá dos likes. Procuramos criar oportunidades, envolver públicos e construir relações.' },
      ],
    },
    servicePage: {
      heading: 'Criar, produzir, comunicar.', intro: 'Pensamos a comunicação como um todo. Juntamos sensibilidade artística e estratégia para encontrar o que o teu projeto precisa.',
      deliverables: 'Como podemos ajudar', processHeading: 'Começamos por ouvir.',
      process: [
        { title: 'Conhecer', body: 'Conversamos sobre o projeto, o público e os objetivos. Antes de propor, queremos compreender.' },
        { title: 'Dar forma', body: 'Definimos uma direção e um plano de trabalho, com âmbito, prioridades e entregáveis claros.' },
        { title: 'Criar e acompanhar', body: 'Desenvolvemos a comunicação e acompanhamos a sua evolução, num diálogo conjunto.' },
      ],
    },
    services: [
      { title: 'Estratégia e posicionamento digital', description: 'Construímos uma estratégia alinhada com a identidade da tua marca. Definimos o posicionamento, o tom de voz e os objetivos para comunicar com consistência.', deliverables: ['Estratégia de comunicação', 'Posicionamento e tom de voz', 'Planeamento digital'] },
      { title: 'Redes sociais e conteúdo', description: 'Planeamos, criamos e gerimos conteúdos que refletem a identidade do teu projeto e aproximam a tua marca da comunidade, garantindo uma presença consistente, autêntica e relevante.', deliverables: ['Planeamento editorial', 'Criação de conteúdos', 'Gestão de redes sociais'] },
      { title: 'Produção de conteúdo e direção artística', description: 'Da ideia à execução, desenvolvemos conceitos visuais e conteúdos que dão vida à identidade da marca, com um olhar estético e estratégico.', deliverables: ['Conceitos criativos', 'Direção artística', 'Produção de conteúdos visuais'] },
      { title: 'Branding e identidade visual', description: 'Criamos sistemas visuais que comunicam personalidade e propósito. Uma identidade pensada para acompanhar a marca em cada ponto de contacto.', deliverables: ['Identidade visual', 'Linguagem gráfica', 'Aplicações da marca'] },
      { title: 'Comunicação de eventos e experiências', description: 'Cada evento é uma oportunidade para criar ligação. Desenvolvemos uma comunicação que traduz a essência da experiência e amplifica o seu impacto.', deliverables: ['Estratégia de comunicação do evento', 'Conteúdos de divulgação', 'Comunicação antes, durante e depois'] },
      { title: 'Consultoria', description: 'Ajudamos marcas e projetos a identificar necessidades, definir objetivos e encontrar as melhores soluções de comunicação, através de orientação estratégica e acompanhamento personalizado.', deliverables: ['Orientação estratégica', 'Definição de objetivos', 'Acompanhamento personalizado'] },
    ],
    team: {
      heading: 'As pessoas\npor detrás da conversa.', intro: 'Uma (mini) equipa jovem e multidisciplinar, com formação e experiência nas áreas do marketing, da comunicação e das artes.',
      founders: [
        { name: 'Carolina Medeiros', role: 'Co-founder & Creative Director', image: 'carolina', bio: 'Acredita que as boas histórias começam por um olhar atento. Da interpretação às leiloeiras de arte, passando pelo mestrado em Gestão da Cultura e das Artes, em Bolonha, foi reunindo diferentes formas de compreender pessoas, cultura e comunicação. Hoje, alia essa experiência ao universo digital, onde cria estratégias e conteúdos que ajudam marcas a comunicar com autenticidade.' },
        { name: 'Joana Garcia', role: 'Co-founder & Managing Director', image: 'joana', bio: 'Movida pela arte e pela cultura, encontrou na comunicação uma forma de explorar a criatividade e dar vida a novas ideias. Com um percurso académico entre as artes e o marketing e quatro anos de experiência em mercados de arte e gestão de redes sociais, cruza sensibilidade artística com uma abordagem estratégica à comunicação digital.' },
      ],
    },
    contact: {
      heading: 'Vamos\npar—lar?', intro: 'A tua marca tem mais para dizer. Conta-nos o que tens em mente e vamos descobrir como o podemos comunicar.',
      emailLabel: 'Contacta-nos', emailAction: 'Enviar um email', social: 'A conversa continua nas redes sociais',
      briefHeading: 'Tudo começa com uma ideia', brief: ['Conta-nos mais sobre o teu projeto', 'O que gostarias de comunicar? Para quem?', 'Tens alguma data ou orçamento em mente?'],
    },
    cta: { heading: 'E se deixasse de ser só uma ideia?', body: 'Tens um projeto em mente? Queremos conhecê-lo!' },
    footer: { line: 'Entre a arte e o público.', credit: 'Comunicação com um olhar cultural.' },
  },
  en: {
    language: 'English',
    nav: { home: 'Home', about: 'About us', services: 'Services', team: 'The team', contact: 'Contact' },
    titles: { home: 'Connecting art and its audience', about: 'About us', services: 'Services', team: 'The team', contact: 'Let’s talk' },
    descriptions: {
      home: 'PAR—LE is an arts and culture communications agency. Strategy, content and visual identity that bring cultural projects closer to people.',
      about: 'Discover PAR—LE and our approach to communication for cultural projects, institutions and professionals.',
      services: 'Digital strategy, social media, content production, art direction, branding, event communications and consultancy for arts and culture.',
      team: 'Meet Carolina Medeiros and Joana Garcia, the founders of PAR—LE, an arts and culture communications agency.',
      contact: 'Have an arts or culture project to share? Talk to PAR—LE and tell us about your idea.',
    },
    skip: 'Skip to content', menu: 'Open menu', close: 'Close menu',
    agency: 'Arts and culture communications agency', talk: 'Let’s talk', more: 'Discover PAR—LE',
    home: {
      headline: ['Connecting art', 'and its audience.'],
      introduction: 'We give culture a voice. We create strategies, identities and content that bring art closer to people.',
      imageAlt: 'Visitors in an art gallery standing in front of a red-toned artwork',
      imageCaption: 'Where ideas meet.', note: 'Art. Culture. Conversation.',
      aboutHeading: 'Culture deserves an insider’s perspective.',
      aboutBody: 'PAR—LE starts with a view from within. We bring together experience in the arts and communication strategy to give every project the space and visibility it deserves.',
      servicesHeading: 'Ideas that get people talking',
      servicesIntro: 'From the first idea to the way it reaches people, we find the right language for your project.',
      teamHeading: 'Two perspectives.\nOne shared vision.',
      teamIntro: 'From creativity to par—le, with art and marketing in the mix', teamLink: 'Meet the team',
    },
    about: {
      heading: 'Culture has\na lot to say.', lead: 'We show you how.',
      paragraphs: [
        'PAR—LE was created to bring culture closer to people.',
        'In an increasingly digital world, telling a good story is no longer an extra. It is a necessity.',
        'We develop communication strategies, visual identities, social media management and content creation that help cultural institutions and professionals communicate in a clearer, more relevant and contemporary way.',
        'Beyond promoting projects, we want to build connections between art and its audience, giving culture the space and visibility it deserves.',
      ],
      imageAlt: 'A visitor walking past an artwork in a gallery', belief: 'Beyond the visible.',
      values: [
        { title: 'A view from within', body: 'Our cultural and artistic experience is our starting point. We understand the context before choosing the message.' },
        { title: 'An identity of your own', body: 'We give shape to what makes each project different, with a visual and verbal language that belongs to it.' },
        { title: 'Meaningful impact', body: 'We look beyond likes. We aim to create opportunities, engage audiences and build relationships.' },
      ],
    },
    servicePage: {
      heading: 'Create, produce, communicate.', intro: 'We look at communication as a whole. We bring artistic sensitivity and strategy together to find what your project needs.',
      deliverables: 'How we can help', processHeading: 'We start by listening.',
      process: [
        { title: 'Understand', body: 'We talk about your project, audience and goals. Understanding comes before proposals.' },
        { title: 'Give it shape', body: 'We agree on a direction and a plan, with a clear scope, priorities and deliverables.' },
        { title: 'Create and develop', body: 'We develop your communications and follow their progress, through an ongoing dialogue.' },
      ],
    },
    services: [
      { title: 'Digital strategy and positioning', description: 'We build a strategy around your brand’s identity, defining its positioning, tone of voice and goals for consistent communication.', deliverables: ['Communication strategy', 'Positioning and tone of voice', 'Digital planning'] },
      { title: 'Social media and content', description: 'We plan, create and manage content that reflects your project’s identity and brings your brand closer to its community, ensuring a consistent, authentic and relevant presence.', deliverables: ['Editorial planning', 'Content creation', 'Social media management'] },
      { title: 'Content production and art direction', description: 'From idea to execution, we develop visual concepts and content that bring your brand’s identity to life with an artistic and strategic perspective.', deliverables: ['Creative concepts', 'Art direction', 'Visual content production'] },
      { title: 'Branding and visual identity', description: 'We create visual systems that communicate personality and purpose, giving your brand a consistent identity across every point of contact.', deliverables: ['Visual identity', 'Graphic language', 'Brand applications'] },
      { title: 'Event and experience communications', description: 'Every event is an opportunity to connect. We develop communication that captures the essence of an experience and amplifies its impact.', deliverables: ['Event communication strategy', 'Promotional content', 'Communication before, during and after'] },
      { title: 'Consultancy', description: 'We help brands and projects identify their needs, define goals and find the best communication solutions through strategic guidance and personalised support.', deliverables: ['Strategic guidance', 'Goal setting', 'Personalised support'] },
    ],
    team: {
      heading: 'The people\nbehind the conversation.', intro: 'A young, multidisciplinary (mini) team with education and experience in marketing, communication and the arts.',
      founders: [
        { name: 'Carolina Medeiros', role: 'Co-founder & Creative Director', image: 'carolina', bio: 'She believes good stories begin with an attentive eye. From acting to art auction houses and a master’s degree in Arts and Cultural Management in Bologna, she has explored different ways of understanding people, culture and communication. Today, she brings that experience into the digital world, creating strategies and content that help brands communicate authentically.' },
        { name: 'Joana Garcia', role: 'Co-founder & Managing Director', image: 'joana', bio: 'Inspired by art and culture, she found in communication a way to explore creativity and bring new ideas to life. With an academic background spanning the arts and marketing, and four years of experience in art markets and social media management, she combines artistic sensitivity with a strategic approach to digital communication.' },
      ],
    },
    contact: {
      heading: 'Let’s\npar—le.', intro: 'Your brand has more to say. Tell us what you have in mind and let’s find the right way to share it.',
      emailLabel: 'Contact us', emailAction: 'Send an email', social: 'The conversation continues on social media',
      briefHeading: 'It all starts with an idea', brief: ['Tell us more about your project', 'What would you like to communicate? To whom?', 'Do you have a timeline or budget in mind?'],
    },
    cta: { heading: 'What if it became more than an idea?', body: 'Have a project in mind? We want to hear about it!' },
    footer: { line: 'Connecting art and its audience.', credit: 'Communication with a cultural perspective.' },
  },
};
