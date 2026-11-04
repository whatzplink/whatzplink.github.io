export const languages = {
  en: { name: 'English', code: 'EN', flag: '🇺🇸', dir: 'ltr', ogLocale: 'en_US' },
  es: { name: 'Español', code: 'ES', flag: '🇪🇸', dir: 'ltr', ogLocale: 'es_ES' },
  pt: { name: 'Português', code: 'PT', flag: '🇧🇷', dir: 'ltr', ogLocale: 'pt_BR' },
  de: { name: 'Deutsch', code: 'DE', flag: '🇩🇪', dir: 'ltr', ogLocale: 'de_DE' },
  fr: { name: 'Français', code: 'FR', flag: '🇫🇷', dir: 'ltr', ogLocale: 'fr_FR' },
  ja: { name: '日本語', code: 'JA', flag: '🇯🇵', dir: 'ltr', ogLocale: 'ja_JP' },
  zh: { name: '中文', code: 'ZH', flag: '🇨🇳', dir: 'ltr', ogLocale: 'zh_CN' },
  ru: { name: 'Русский', code: 'RU', flag: '🇷🇺', dir: 'ltr', ogLocale: 'ru_RU' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const CORE_SEO_KEYWORDS =
  'whatsapp link generator, create whatsapp link, wa link, wa.me link, whatsapp chat link, https wa me whatsapp number link, whatsapp me link, whatsapp click to chat url, how create whatsapp link, how to create link whatsapp, how to create whatsapp link, create link for whatsapp, how to create a whatsapp link, how to create link for whatsapp, whatsapp number link, create my whatsapp link, create whatsapp business link, create whatsapp chat link, how to create my whatsapp link, create whatsapp link with phone number, create qr code from link, how to create whatsapp link for business, whatsapp link with phone number, create whatsapp link for my number, how to create a link on whatsapp, create whatsapp message link, how to create whatsapp chat link, how to get whatsapp link, how to create link on whatsapp business, how to create business link on whatsapp, how do i create a whatsapp link, whatsapp link creator, how to create whatsapp link for my number, create whatsapp link with number, walink, whatsapp url link, create wa link, how to create a whatsapp link for my number';

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    brand: string;
    languageLabel: string;
    themeToggleLabel: string;
    installPwa: string;
    installPwaAria: string;
    installPwaToast: string;
    supportDev: string;
    supportDevAria: string;
  };
  breadcrumbs: {
    home: string;
    tools: string;
    generator: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    modeCreate: string;
    modeTemplates: string;
    modeHistory: string;
  };
  generator: {
    step1Label: string;
    countrySearchPlaceholder: string;
    phonePlaceholder: string;
    validationReady: string;
    validationCleaned: string;
    validationEmpty: string;
    validationInvalid: string;
    step2Label: string;
    messagePlaceholder: string;
    quickChipsLabel: string;
    chipOrder: string;
    chipOrderText: string;
    chipInfo: string;
    chipInfoText: string;
    chipBook: string;
    chipBookText: string;
    chipQuote: string;
    chipQuoteText: string;
    templatesHeading: string;
    templatesSubheading: string;
    templateOrderTitle: string;
    templateOrderDesc: string;
    templateSupportTitle: string;
    templateSupportDesc: string;
    templateBookingTitle: string;
    templateBookingDesc: string;
    templateQuoteTitle: string;
    templateQuoteDesc: string;
    useTemplateBtn: string;
    historyHeading: string;
    historySubheading: string;
    historyEmpty: string;
    historyClearBtn: string;
    historyLoadBtn: string;
    historyCopyBtn: string;
    previewTitle: string;
    previewOnline: string;
    previewPlaceholderBubble: string;
    previewRecipientLabel: string;
    qrTitle: string;
    qrSubtitle: string;
    readoutLabel: string;
    copyLinkBtn: string;
    copiedLinkBtn: string;
    downloadQrPngBtn: string;
    downloadQrSvgBtn: string;
    testWhatsappBtn: string;
  };
  howTo: {
    schemaName: string;
    heading: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  seoGuide: {
    heading: string;
    subtitle: string;
    article1Title: string;
    article1Body: string;
    article2Title: string;
    article2Body: string;
    article3Title: string;
    article3Body: string;
  };
  comparison: {
    heading: string;
    subtitle: string;
    colFeature: string;
    colWhatzpLink: string;
    colManual: string;
    colShorteners: string;
    row1Feature: string;
    row1Whatzp: string;
    row1Manual: string;
    row1Short: string;
    row2Feature: string;
    row2Whatzp: string;
    row2Manual: string;
    row2Short: string;
    row3Feature: string;
    row3Whatzp: string;
    row3Manual: string;
    row3Short: string;
    row4Feature: string;
    row4Whatzp: string;
    row4Manual: string;
    row4Short: string;
  };
  faq: {
    heading: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  footer: {
    tagline: string;
    privacyNote: string;
    copyright: string;
  };
}

export const ui: Record<Lang, TranslationDictionary> = {
  en: {
    meta: {
      // 59 characters (< 60 chars)
      title: 'WhatsApp Link Generator | Create Free wa.me Chat Links & QR',
      // 148 characters (< 155 chars)
      description: 'Create free wa.me click-to-chat links & high-res QR codes with pre-filled messages. 100% private, zero-upload WhatsApp link generator for business.',
      keywords: CORE_SEO_KEYWORDS,
    },
    nav: {
      brand: 'WhatzpLink',
      languageLabel: 'Select Language',
      themeToggleLabel: 'Toggle Light or Dark Mode',
      installPwa: 'Add to Home Screen',
      installPwaAria: 'Add WhatzpLink to Home Screen',
      installPwaToast: 'Press Ctrl+D (or Share → Add to Home Screen on mobile) to install WhatzpLink!',
      supportDev: 'Support the Developer',
      supportDevAria: 'Support the Developer on Gumroad',
    },
    breadcrumbs: {
      home: 'Home',
      tools: 'Business Tools',
      generator: 'WhatsApp Link Generator',
    },
    hero: {
      h1: 'Free WhatsApp Link Generator',
      subtitle: 'Enter your phone number & custom message to generate an instant wa.me link and high-resolution QR code.',
      modeCreate: 'Create wa.me Link & QR',
      modeTemplates: 'Quick Business Templates',
      modeHistory: 'Saved Links History',
    },
    generator: {
      step1Label: '1. Select Country Code & Enter WhatsApp Number',
      countrySearchPlaceholder: 'Search country or +code...',
      phonePlaceholder: 'e.g. 77 123 4567',
      validationReady: 'Valid WhatsApp number — sanitized & ready',
      validationCleaned: 'Auto-stripped spaces, symbols & leading zeros',
      validationEmpty: 'Type your phone number to generate your live link',
      validationInvalid: 'Enter at least 6 digits for a valid phone number',
      step2Label: '2. Custom Pre-filled Message (Optional)',
      messagePlaceholder: 'Hi! I would like to inquire about your services...',
      quickChipsLabel: '1-Click Message Chips:',
      chipOrder: 'Hi! I want to order...',
      chipOrderText: 'Hi! I want to order your product. Could you share availability and details?',
      chipInfo: 'Can I get more info?',
      chipInfoText: 'Hi there! Can I get more info about your offerings?',
      chipBook: 'Book an appointment',
      chipBookText: 'Hello! I would like to book an appointment. What times are available?',
      chipQuote: 'Request a price quote',
      chipQuoteText: 'Hello! Could I please get a price quote for my project?',
      templatesHeading: '1-Click Business Message Templates',
      templatesSubheading: 'Click any industry template below to populate your message and switch back to the live generator.',
      templateOrderTitle: 'Order Inquiry',
      templateOrderDesc: 'Ideal for e-commerce stores, Instagram shops, and catalog orders.',
      templateSupportTitle: 'Customer Support',
      templateSupportDesc: 'Fast helpdesk greeting for troubleshooting and order tracking.',
      templateBookingTitle: 'Appointment Booking',
      templateBookingDesc: 'Perfect for clinics, salons, consultants, and service bookings.',
      templateQuoteTitle: 'Price Quote Request',
      templateQuoteDesc: 'Designed for agencies, freelancers, and B2B wholesale inquiries.',
      useTemplateBtn: 'Apply Template',
      historyHeading: 'Last 5 Generated WhatsApp Links',
      historySubheading: 'Stored privately in your browser LocalStorage. Never sent to any server.',
      historyEmpty: 'No links saved yet. Copy or test a link to save it to your local history!',
      historyClearBtn: 'Clear History',
      historyLoadBtn: 'Load in Editor',
      historyCopyBtn: 'Copy',
      previewTitle: 'Live WhatsApp Chat Bubble Preview',
      previewOnline: 'online • wa.me instant chat',
      previewPlaceholderBubble: 'Your pre-filled message will appear here inside the customer chat bubble...',
      previewRecipientLabel: 'Recipient:',
      qrTitle: 'Instant High-Res QR Code',
      qrSubtitle: 'Scan with any camera to open WhatsApp chat directly',
      readoutLabel: 'Your Generated WhatsApp Link:',
      copyLinkBtn: 'Copy WhatsApp Link',
      copiedLinkBtn: 'Copied to Clipboard!',
      downloadQrPngBtn: 'Download QR Code (PNG)',
      downloadQrSvgBtn: 'Download SVG',
      testWhatsappBtn: 'Test Link in WhatsApp',
    },
    howTo: {
      schemaName: 'How to Create a WhatsApp Link for Your Phone Number',
      heading: 'How to Create a WhatsApp Link for Your Phone Number',
      subtitle: 'Zero registration, zero redirects, 100% official wa.me click-to-chat URL format.',
      step1Title: '1. Select Country Code & Enter Phone Number',
      step1Desc: 'Select your country code and enter your WhatsApp phone number. WhatzpLink automatically removes spaces, brackets, dashes, and leading zeros.',
      step2Title: '2. Add a Pre-filled Welcome Message',
      step2Desc: 'Type an optional pre-filled welcome message for your customers or select a 1-click business chip.',
      step3Title: '3. Copy WhatsApp Link or Download QR Code',
      step3Desc: "Click 'Copy WhatsApp Link' or download the instant QR code to share anywhere on Instagram, TikTok, websites, or print media.",
    },
    seoGuide: {
      heading: 'Complete Guide: How to Create a WhatsApp Business Link & Click-to-Chat URL',
      subtitle: 'Turn social media visitors into instant WhatsApp conversations without forcing customers to save your phone number first.',
      article1Title: 'What is an Official https://wa.me/ Click-to-Chat URL?',
      article1Body: 'When searching for how to create a WhatsApp link for your number, the official WhatsApp click to chat URL standard uses https://wa.me/ followed by your international dial code and sanitized phone number. Our WhatsApp link creator automatically strips invalid symbols and encodes your custom message with standard URI encoding so every wa.me link opens seamlessly on iOS, Android, and WhatsApp Web.',
      article2Title: 'Why Create a WhatsApp Business Link with Pre-Filled Messages?',
      article2Body: 'When you create a WhatsApp Business link with a pre-filled greeting, customers never face a blank screen. Whether you want to create a WhatsApp chat link for Instagram bios, TikTok profiles, Google Business listings, or Facebook Ads, pre-filled message links boost conversion rates and let your sales team know exactly which product a lead is asking about.',
      article3Title: 'Create a QR Code from Your WhatsApp Link Instantly',
      article3Body: 'Alongside your whatsapp url link, WhatzpLink lets you create a QR code from your link in real time. Download crisp 1024px PNG images or scalable vector SVG files ready for restaurant menus, product packaging, storefront windows, and business cards.',
    },
    comparison: {
      heading: 'WhatzpLink vs. Manual Typing vs. Paid URL Shorteners',
      subtitle: 'Why businesses prefer generating direct official wa.me links client-side.',
      colFeature: 'Feature',
      colWhatzpLink: 'WhatzpLink (Free)',
      colManual: 'Manual URL Typing',
      colShorteners: 'Paid Shorteners (walink / bitly)',
      row1Feature: 'Auto Phone Sanitization & URL Encoding',
      row1Whatzp: '100% Automatic & Instant',
      row1Manual: 'Error-prone (%20 manual encoding)',
      row1Short: 'Yes (Requires account)',
      row2Feature: 'Link Expiration & Redirects',
      row2Whatzp: 'Never Expires (Direct wa.me)',
      row2Manual: 'Never Expires',
      row2Short: 'May expire or show ads',
      row3Feature: 'Privacy & Data Storage',
      row3Whatzp: '100% Client-Side (Zero upload)',
      row3Manual: 'Private',
      row3Short: 'Stored on 3rd-party servers',
      row4Feature: 'High-Res PNG & Vector SVG QR Code',
      row4Whatzp: 'Included Free (Instant Download)',
      row4Manual: 'Not included',
      row4Short: 'Paid upgrade required',
    },
    faq: {
      heading: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about how to create a WhatsApp link with a phone number and QR code.',
      q1: 'How do I create a WhatsApp link with a phone number?',
      a1: 'Select your country dial code, type your phone number without leading zeros or special characters, add an optional custom message, and copy your instant https://wa.me/ click-to-chat URL.',
      q2: 'Is WhatzpLink free and private for WhatsApp Business?',
      a2: 'Yes! WhatzpLink runs 100% locally in your browser. Your phone numbers and messages are never uploaded to or stored on any server, and generated wa.me links never expire.',
      q3: 'Can I create a QR code from my WhatsApp link?',
      a3: 'Yes, WhatzpLink automatically generates a high-resolution, scannable QR code alongside your wa.me link that you can download as a PNG image for flyers, menus, and social media.',
      q4: 'How do I create a link on WhatsApp Business for Instagram or TikTok?',
      a4: 'Enter your WhatsApp Business phone number and a custom welcome message in our generator above, click Copy WhatsApp Link, and paste the wa.me link directly into your Instagram bio or TikTok profile website field.',
    },
    footer: {
      tagline: '100% Client-Side WhatsApp Link & QR Code Engine.',
      privacyNote: 'Zero tracking • Zero server storage • Built for speed.',
      copyright: '© 2026 WhatzpLink. All rights reserved.',
    },
  },
  es: {
    meta: {
      // 57 characters (< 60 chars)
      title: 'Generador de Links WhatsApp | Crear Enlace wa.me y QR',
      // 149 characters (< 155 chars)
      description: 'Crea enlaces oficiales wa.me de WhatsApp y códigos QR gratis con mensajes predefinidos. 100% privado, sin servidores y sin caducidad para negocios.',
      keywords: `${CORE_SEO_KEYWORDS}, generador de enlaces whatsapp, crear link wa.me, codigo qr whatsapp gratis, enlace whatsapp con mensaje`,
    },
    nav: {
      brand: 'WhatzpLink',
      languageLabel: 'Seleccionar idioma',
      themeToggleLabel: 'Cambiar modo claro u oscuro',
      installPwa: 'Añadir a Inicio',
      installPwaAria: 'Instalar aplicación WhatzpLink en la pantalla de inicio',
      installPwaToast: '¡Presiona Ctrl+D (o Compartir → Añadir a pantalla de inicio) para instalar WhatzpLink!',
      supportDev: 'Apoyar al Desarrollador',
      supportDevAria: 'Apoyar al desarrollador en Gumroad',
    },
    breadcrumbs: {
      home: 'Inicio',
      tools: 'Herramientas de Negocios',
      generator: 'Generador de Enlaces de WhatsApp',
    },
    hero: {
      h1: 'Generador de Enlaces de WhatsApp Gratis',
      subtitle: 'Ingresa tu número y mensaje personalizado para obtener tu enlace wa.me y código QR al instante.',
      modeCreate: 'Crear Enlace wa.me y QR',
      modeTemplates: 'Plantillas de Negocios',
      modeHistory: 'Historial Guardado',
    },
    generator: {
      step1Label: '1. Selecciona el Código de País e Ingresa tu Número',
      countrySearchPlaceholder: 'Buscar país o +código...',
      phonePlaceholder: 'ej. 612 345 678',
      validationReady: 'Número de WhatsApp válido y optimizado',
      validationCleaned: 'Espacios, símbolos y ceros iniciales eliminados',
      validationEmpty: 'Escribe tu número de teléfono para generar tu enlace en vivo',
      validationInvalid: 'Ingresa al menos 6 dígitos para un número válido',
      step2Label: '2. Mensaje Predefinido Personalizado (Opcional)',
      messagePlaceholder: '¡Hola! Me gustaría recibir más información sobre sus servicios...',
      quickChipsLabel: 'Mensajes en 1 Clic:',
      chipOrder: '¡Hola! Quiero hacer un pedido...',
      chipOrderText: '¡Hola! Quiero hacer un pedido de su producto. ¿Podrían darme detalles y disponibilidad?',
      chipInfo: '¿Me dan más información?',
      chipInfoText: '¡Hola! ¿Podrían brindarme más información sobre sus servicios?',
      chipBook: 'Reservar una cita',
      chipBookText: '¡Hola! Me gustaría reservar una cita. ¿Qué horarios tienen disponibles?',
      chipQuote: 'Solicitar presupuesto',
      chipQuoteText: '¡Hola! ¿Podrían enviarme una cotización para mi proyecto?',
      templatesHeading: 'Plantillas de Mensajes para Negocios en 1 Clic',
      templatesSubheading: 'Haz clic en cualquier plantilla para rellenar tu mensaje y volver al generador en vivo.',
      templateOrderTitle: 'Consulta de Pedido',
      templateOrderDesc: 'Ideal para tiendas online, catálogos y ventas por Instagram.',
      templateSupportTitle: 'Soporte al Cliente',
      templateSupportDesc: 'Saludo rápido para asistencia técnica y seguimiento de envíos.',
      templateBookingTitle: 'Reserva de Citas',
      templateBookingDesc: 'Perfecto para clínicas, salones, consultores y reservas.',
      templateQuoteTitle: 'Solicitud de Cotización',
      templateQuoteDesc: 'Diseñado para agencias, freelancers y ventas B2B.',
      useTemplateBtn: 'Usar Plantilla',
      historyHeading: 'Últimos 5 Enlaces de WhatsApp Generados',
      historySubheading: 'Guardados de forma privada en tu navegador. Nunca se envían a ningún servidor.',
      historyEmpty: 'Aún no hay enlaces guardados. ¡Copia o prueba un enlace para guardarlo en tu historial!',
      historyClearBtn: 'Borrar Historial',
      historyLoadBtn: 'Cargar en Editor',
      historyCopyBtn: 'Copiar',
      previewTitle: 'Vista Previa del Chat de WhatsApp en Vivo',
      previewOnline: 'en línea • chat directo wa.me',
      previewPlaceholderBubble: 'Tu mensaje personalizado aparecerá aquí dentro de la burbuja de chat...',
      previewRecipientLabel: 'Destinatario:',
      qrTitle: 'Código QR de Alta Resolución',
      qrSubtitle: 'Escanea con cualquier cámara para abrir el chat en WhatsApp',
      readoutLabel: 'Tu Enlace de WhatsApp Generado:',
      copyLinkBtn: 'Copiar Enlace de WhatsApp',
      copiedLinkBtn: '¡Copiado al Portapapeles!',
      downloadQrPngBtn: 'Descargar Código QR (PNG)',
      downloadQrSvgBtn: 'Descargar SVG',
      testWhatsappBtn: 'Probar Enlace en WhatsApp',
    },
    howTo: {
      schemaName: 'Cómo Crear un Enlace de WhatsApp para tu Número de Teléfono',
      heading: 'Cómo Crear un Enlace de WhatsApp para tu Número de Teléfono',
      subtitle: 'Sin registro, sin redirecciones, formato oficial wa.me 100% directo.',
      step1Title: '1. Selecciona tu País y Número de Teléfono',
      step1Desc: 'Selecciona el código de tu país e ingresa tu número de teléfono de WhatsApp sin ceros iniciales.',
      step2Title: '2. Añade un Mensaje de Bienvenida',
      step2Desc: 'Escribe un mensaje personalizado opcional para tus clientes o elige una plantilla rápida.',
      step3Title: '3. Copia el Enlace o Descarga el Código QR',
      step3Desc: 'Haz clic en Copiar Enlace de WhatsApp o descarga el código QR instantáneo para compartir donde quieras.',
    },
    seoGuide: {
      heading: 'Guía Completa: Cómo Crear un Enlace de WhatsApp Business y URL Clic para Chatear',
      subtitle: 'Convierte visitantes de redes sociales en conversaciones inmediatas sin obligar al cliente a guardar tu contacto.',
      article1Title: '¿Qué es una URL Oficial https://wa.me/ Clic para Chatear?',
      article1Body: 'Al buscar cómo crear un link de WhatsApp con tu número de teléfono, el estándar oficial utiliza https://wa.me/ seguido del prefijo internacional. Nuestro generador limpia símbolos automáticamente y codifica tu mensaje para que funcione en iOS, Android y WhatsApp Web.',
      article2Title: 'Ventajas de Crear un Link de WhatsApp Business con Mensaje',
      article2Body: 'Crear un enlace de chat de WhatsApp con un saludo predefinido aumenta las conversiones en biografías de Instagram, TikTok, Google Maps y anuncios de Facebook.',
      article3Title: 'Crea un Código QR desde tu Enlace de WhatsApp al Instante',
      article3Body: 'Además de tu enlace wa.me, WhatzpLink genera un código QR en alta resolución (PNG y SVG vectorial) listo para menús, tarjetas de presentación y carteles.',
    },
    comparison: {
      heading: 'WhatzpLink vs. Escritura Manual vs. Acortadores de Pago',
      subtitle: 'Por qué las empresas prefieren generar enlaces oficiales wa.me directamente en su navegador.',
      colFeature: 'Característica',
      colWhatzpLink: 'WhatzpLink (Gratis)',
      colManual: 'Escritura Manual',
      colShorteners: 'Acortadores de Pago',
      row1Feature: 'Limpieza de Número y Codificación URL',
      row1Whatzp: '100% Automático e Instantáneo',
      row1Manual: 'Propenso a errores (%20 manual)',
      row1Short: 'Sí (Requiere cuenta)',
      row2Feature: 'Caducidad del Enlace',
      row2Whatzp: 'Nunca Caduca (wa.me directo)',
      row2Manual: 'Nunca Caduca',
      row2Short: 'Puede caducar o mostrar anuncios',
      row3Feature: 'Privacidad de Datos',
      row3Whatzp: '100% en tu Navegador (Cero subida)',
      row3Manual: 'Privado',
      row3Short: 'Guardado en servidores externos',
      row4Feature: 'Código QR en PNG HD y Vector SVG',
      row4Whatzp: 'Incluido Gratis al Instante',
      row4Manual: 'No incluido',
      row4Short: 'Requiere plan de pago',
    },
    faq: {
      heading: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre cómo crear un enlace de WhatsApp con tu número y código QR.',
      q1: '¿Cómo creo un enlace de WhatsApp con un número de teléfono?',
      a1: 'Selecciona el código de tu país, escribe tu número sin ceros iniciales ni caracteres especiales, añade un mensaje opcional y copia tu URL instantánea https://wa.me/.',
      q2: '¿Es WhatzpLink gratis y privado para WhatsApp Business?',
      a2: '¡Sí! WhatzpLink se ejecuta 100% localmente en tu navegador. Tus números y mensajes nunca se suben a ningún servidor y los enlaces wa.me nunca caducan.',
      q3: '¿Puedo crear un código QR desde mi enlace de WhatsApp?',
      a3: 'Sí, WhatzpLink genera automáticamente un código QR escaneable de alta resolución junto a tu enlace wa.me que puedes descargar en PNG o SVG.',
      q4: '¿Cómo poner un link de WhatsApp Business en Instagram o TikTok?',
      a4: 'Ingresa tu número de WhatsApp Business y mensaje arriba, pulsa Copiar Enlace de WhatsApp y pégalo directamente en el campo de sitio web de tu perfil de Instagram o TikTok.',
    },
    footer: {
      tagline: 'Motor 100% en el navegador para enlaces y códigos QR de WhatsApp.',
      privacyNote: 'Cero rastreo • Cero servidores • Diseñado para máxima velocidad.',
      copyright: '© 2026 WhatzpLink. Todos los derechos reservados.',
    },
  },
  pt: {
    meta: {
      // 56 characters (< 60 chars)
      title: 'Gerador de Link WhatsApp | Criar Link wa.me e QR Grátis',
      // 147 characters (< 155 chars)
      description: 'Crie links oficiais wa.me para WhatsApp e QR Codes de alta resolução com mensagem pronta. 100% grátis, privado e sem cadastro para o seu negócio.',
      keywords: `${CORE_SEO_KEYWORDS}, gerador de link whatsapp, criar link wa.me, gerador qr code whatsapp, link whatsapp com mensagem pronta`,
    },
    nav: {
      brand: 'WhatzpLink',
      languageLabel: 'Selecionar idioma',
      themeToggleLabel: 'Alternar modo claro ou escuro',
      installPwa: 'Adicionar à Tela Inicial',
      installPwaAria: 'Instalar aplicativo WhatzpLink na tela inicial',
      installPwaToast: 'Pressione Ctrl+D (ou Compartilhar → Adicionar à Tela de Início) para instalar o WhatzpLink!',
      supportDev: 'Apoie o Desenvolvedor',
      supportDevAria: 'Apoie o desenvolvedor no Gumroad',
    },
    breadcrumbs: {
      home: 'Início',
      tools: 'Ferramentas de Negócios',
      generator: 'Gerador de Link para WhatsApp',
    },
    hero: {
      h1: 'Gerador de Link para WhatsApp Grátis',
      subtitle: 'Digite seu número e mensagem personalizada para gerar seu link wa.me e QR Code na hora.',
      modeCreate: 'Criar Link wa.me e QR',
      modeTemplates: 'Modelos para Negócios',
      modeHistory: 'Histórico de Links',
    },
    generator: {
      step1Label: '1. Selecione o DDI do País e Digite seu WhatsApp',
      countrySearchPlaceholder: 'Buscar país ou +DDI...',
      phonePlaceholder: 'ex: 11 98765 4321',
      validationReady: 'Número de WhatsApp válido e pronto para uso',
      validationCleaned: 'Espaços, símbolos e zeros à esquerda removidos',
      validationEmpty: 'Digite seu número de telefone para gerar o link ao vivo',
      validationInvalid: 'Digite pelo menos 6 dígitos para um número válido',
      step2Label: '2. Mensagem Personalizada Pronta (Opcional)',
      messagePlaceholder: 'Olá! Gostaria de saber mais informações sobre seus serviços...',
      quickChipsLabel: 'Mensagens em 1 Clique:',
      chipOrder: 'Olá! Quero fazer um pedido...',
      chipOrderText: 'Olá! Quero fazer um pedido do seu produto. Poderia informar disponibilidade e detalhes?',
      chipInfo: 'Pode me dar mais informações?',
      chipInfoText: 'Olá! Poderia me passar mais informações sobre seus produtos e serviços?',
      chipBook: 'Agendar um horário',
      chipBookText: 'Olá! Gostaria de agendar um horário. Quais são as opções disponíveis?',
      chipQuote: 'Solicitar orçamento',
      chipQuoteText: 'Olá! Poderia me enviar um orçamento para o meu projeto?',
      templatesHeading: 'Modelos de Mensagens Comerciais em 1 Clique',
      templatesSubheading: 'Clique em qualquer modelo abaixo para preencher sua mensagem automaticamente.',
      templateOrderTitle: 'Pedido de Compra',
      templateOrderDesc: 'Ideal para lojas virtuais, vendas no Instagram e catálogos.',
      templateSupportTitle: 'Suporte ao Cliente',
      templateSupportDesc: 'Atendimento rápido para dúvidas e rastreamento de pedidos.',
      templateBookingTitle: 'Agendamento de Horário',
      templateBookingDesc: 'Perfeito para clínicas, salões, consultorias e serviços.',
      templateQuoteTitle: 'Pedido de Orçamento',
      templateQuoteDesc: 'Feito para agências, freelancers e cotações B2B.',
      useTemplateBtn: 'Aplicar Modelo',
      historyHeading: 'Últimos 5 Links do WhatsApp Gerados',
      historySubheading: 'Salvos localmente no seu navegador com total privacidade.',
      historyEmpty: 'Nenhum link salvo ainda. Copie ou teste um link para salvá-lo no histórico!',
      historyClearBtn: 'Limpar Histórico',
      historyLoadBtn: 'Carregar no Editor',
      historyCopyBtn: 'Copiar',
      previewTitle: 'Prévia ao Vivo da Conversa no WhatsApp',
      previewOnline: 'online • conversa direta wa.me',
      previewPlaceholderBubble: 'Sua mensagem pronta aparecerá aqui dentro do balão do WhatsApp...',
      previewRecipientLabel: 'Destinatário:',
      qrTitle: 'QR Code em Alta Resolução',
      qrSubtitle: 'Aponte a câmera do celular para abrir a conversa no WhatsApp',
      readoutLabel: 'Seu Link do WhatsApp Gerado:',
      copyLinkBtn: 'Copiar Link do WhatsApp',
      copiedLinkBtn: 'Copiado com Sucesso!',
      downloadQrPngBtn: 'Baixar QR Code (PNG)',
      downloadQrSvgBtn: 'Baixar SVG',
      testWhatsappBtn: 'Testar Link no WhatsApp',
    },
    howTo: {
      schemaName: 'Como Criar um Link do WhatsApp para o Seu Número de Telefone',
      heading: 'Como Criar um Link do WhatsApp para o Seu Número',
      subtitle: 'Sem cadastro, sem intermediários, 100% no padrão oficial wa.me.',
      step1Title: '1. Escolha o País e Digite seu Número',
      step1Desc: 'Selecione o código do país e digite seu DDD + número. O WhatzpLink remove espaços, traços, parênteses e zeros extras automaticamente.',
      step2Title: '2. Adicione uma Mensagem Personalizada',
      step2Desc: 'Escreva uma saudação opcional ou clique em um botão rápido para facilitar o contato do cliente.',
      step3Title: '3. Copie o Link ou Baixe o QR Code',
      step3Desc: 'Clique em Copiar Link do WhatsApp ou baixe o QR Code instantâneo para compartilhar no Instagram, site ou impressos.',
    },
    seoGuide: {
      heading: 'Guia Completo: Como Criar Link para WhatsApp Business e URL Click-to-Chat',
      subtitle: 'Transforme seguidores em clientes no WhatsApp sem que precisem salvar seu número na agenda.',
      article1Title: 'O que é o Link Oficial https://wa.me/ do WhatsApp?',
      article1Body: 'Ao pesquisar como criar um link do WhatsApp com seu número, o formato oficial usa https://wa.me/ seguido do DDI + DDD + número. Nosso gerador limpa símbolos inválidos e codifica sua mensagem automaticamente.',
      article2Title: 'Por que Criar um Link WhatsApp Business com Mensagem Pronta?',
      article2Body: 'Um link para WhatsApp com mensagem personalizada na bio do Instagram, TikTok ou anúncios aumenta a taxa de resposta e agiliza o atendimento comercial.',
      article3Title: 'Crie um QR Code a partir do seu Link do WhatsApp',
      article3Body: 'Junto com seu link wa.me, você pode baixar um QR Code de alta definição em PNG ou SVG vetorial para cardápios, embalagens e cartões de visita.',
    },
    comparison: {
      heading: 'WhatzpLink vs. Digitação Manual vs. Encurtadores Pagos',
      subtitle: 'Veja por que criar links wa.me diretos no navegador é mais seguro e rápido.',
      colFeature: 'Recurso',
      colWhatzpLink: 'WhatzpLink (Grátis)',
      colManual: 'Digitação Manual',
      colShorteners: 'Encurtadores Pagos',
      row1Feature: 'Limpeza de Número e Codificação URL',
      row1Whatzp: '100% Automático e Instantâneo',
      row1Manual: 'Sujeito a erros (%20 manual)',
      row1Short: 'Sim (Exige cadastro)',
      row2Feature: 'Validade do Link',
      row2Whatzp: 'Nunca Expira (wa.me direto)',
      row2Manual: 'Nunca Expira',
      row2Short: 'Pode expirar ou exibir anúncios',
      row3Feature: 'Privacidade e Segurança',
      row3Whatzp: '100% Local no Navegador',
      row3Manual: 'Privado',
      row3Short: 'Salvo em servidores externos',
      row4Feature: 'QR Code PNG Alta Resolução e SVG',
      row4Whatzp: 'Grátis e Imediato',
      row4Manual: 'Não incluso',
      row4Short: 'Requer assinatura paga',
    },
    faq: {
      heading: 'Perguntas Frequentes (FAQ)',
      subtitle: 'Tire todas as suas dúvidas sobre como criar link do WhatsApp com número e QR Code.',
      q1: 'Como faço para criar um link do WhatsApp com meu número?',
      a1: 'Selecione o código do país, digite seu DDD e número sem zeros à esquerda, adicione uma mensagem opcional e copie sua URL instantânea https://wa.me/.',
      q2: 'O WhatzpLink é gratuito e privado para WhatsApp Business?',
      a2: 'Sim! O WhatzpLink roda 100% localmente no seu navegador. Seus números e mensagens nunca são enviados para nenhum servidor e os links wa.me nunca expiram.',
      q3: 'Posso criar um QR Code a partir do meu link do WhatsApp?',
      a3: 'Sim, o WhatzpLink gera automaticamente um QR Code de alta resolução junto com seu link wa.me para baixar em PNG ou SVG.',
      q4: 'Como colocar link do WhatsApp Business na bio do Instagram?',
      a4: 'Gere seu link wa.me acima, clique em Copiar Link do WhatsApp e cole no campo Site ao editar seu perfil no Instagram ou TikTok.',
    },
    footer: {
      tagline: 'Gerador 100% Client-Side de Links e QR Codes para WhatsApp.',
      privacyNote: 'Zero rastreamento • Zero banco de dados externo • Ultra rápido.',
      copyright: '© 2026 WhatzpLink. Todos os direitos reservados.',
    },
  },
  de: {
    meta: {
      // 58 characters (< 60 chars)
      title: 'WhatsApp Link Generator | Kostenlos wa.me Link & QR-Code',
      // 149 characters (< 155 chars)
      description: 'Erstellen Sie kostenlose wa.me WhatsApp-Chat-Links & hochauflösende QR-Codes mit Nachricht. 100% privat im Browser ohne Anmeldung für Ihr Business.',
      keywords: `${CORE_SEO_KEYWORDS}, whatsapp link generator deutsch, wa.me link erstellen, whatsapp qr code erstellen`,
    },
    nav: {
      brand: 'WhatzpLink',
      languageLabel: 'Sprache auswählen',
      themeToggleLabel: 'Hell- oder Dunkelmodus umschalten',
      installPwa: 'Zum Startbildschirm',
      installPwaAria: 'WhatzpLink App zum Startbildschirm hinzufügen',
      installPwaToast: 'Drücken Sie Strg+D (oder Teilen → Zum Home-Bildschirm), um WhatzpLink zu installieren!',
      supportDev: 'Entwickler unterstützen',
      supportDevAria: 'Entwickler auf Gumroad unterstützen',
    },
    breadcrumbs: {
      home: 'Startseite',
      tools: 'Business-Tools',
      generator: 'WhatsApp Link Generator',
    },
    hero: {
      h1: 'Kostenloser WhatsApp Link Generator',
      subtitle: 'Geben Sie Ihre Telefonnummer und Nachricht ein, um sofort Ihren wa.me-Link und QR-Code zu erstellen.',
      modeCreate: 'wa.me Link & QR erstellen',
      modeTemplates: 'Business-Vorlagen',
      modeHistory: 'Gespeicherter Verlauf',
    },
    generator: {
      step1Label: '1. Ländervorwahl wählen & WhatsApp-Nummer eingeben',
      countrySearchPlaceholder: 'Land oder +Vorwahl suchen...',
      phonePlaceholder: 'z.B. 151 23456789',
      validationReady: 'Gültige WhatsApp-Nummer — bereinigt & bereit',
      validationCleaned: 'Leerzeichen, Sonderzeichen & führende Nullen entfernt',
      validationEmpty: 'Geben Sie Ihre Telefonnummer ein, um den Live-Link zu generieren',
      validationInvalid: 'Bitte mindestens 6 Ziffern für eine gültige Nummer eingeben',
      step2Label: '2. Vorgefertigte Nachricht (Optional)',
      messagePlaceholder: 'Hallo! Ich interessiere mich für Ihre Dienstleistungen...',
      quickChipsLabel: '1-Klick-Nachrichten:',
      chipOrder: 'Hallo! Ich möchte bestellen...',
      chipOrderText: 'Hallo! Ich möchte Ihr Produkt bestellen. Können Sie mir Details zur Verfügbarkeit senden?',
      chipInfo: 'Kann ich mehr Infos bekommen?',
      chipInfoText: 'Hallo! Könnte ich bitte weitere Informationen zu Ihrem Angebot erhalten?',
      chipBook: 'Termin vereinbaren',
      chipBookText: 'Hallo! Ich möchte gerne einen Termin vereinbaren. Welche Zeiten sind frei?',
      chipQuote: 'Preisangebot anfordern',
      chipQuoteText: 'Hallo! Könnten Sie mir bitte ein unverbindliches Preisangebot erstellen?',
      templatesHeading: '1-Klick Business-Nachrichtenvorlagen',
      templatesSubheading: 'Klicken Sie auf eine Vorlage, um den Text direkt in den Generator zu übernehmen.',
      templateOrderTitle: 'Bestellanfrage',
      templateOrderDesc: 'Optimal für Online-Shops, Instagram-Verkäufe und Produktkataloge.',
      templateSupportTitle: 'Kundensupport',
      templateSupportDesc: 'Schnelle Begrüßung für Support-Tickets und Sendungsverfolgung.',
      templateBookingTitle: 'Terminbuchung',
      templateBookingDesc: 'Perfekt für Praxen, Salons, Berater und Dienstleister.',
      templateQuoteTitle: 'Angebotsanfrage',
      templateQuoteDesc: 'Entwickelt für Agenturen, Freelancer und B2B-Anfragen.',
      useTemplateBtn: 'Vorlage nutzen',
      historyHeading: 'Die letzten 5 generierten WhatsApp-Links',
      historySubheading: 'Lokal und privat in Ihrem Browser gespeichert. Keine Serverübertragung.',
      historyEmpty: 'Noch keine Links gespeichert. Kopieren oder testen Sie einen Link, um ihn hier zu sichern!',
      historyClearBtn: 'Verlauf löschen',
      historyLoadBtn: 'Im Editor öffnen',
      historyCopyBtn: 'Kopieren',
      previewTitle: 'Live WhatsApp-Chatblasen-Vorschau',
      previewOnline: 'online • wa.me Direktchat',
      previewPlaceholderBubble: 'Ihre vorgefertigte Nachricht erscheint hier live in der WhatsApp-Chatblase...',
      previewRecipientLabel: 'Empfänger:',
      qrTitle: 'Sofortiger High-Res QR-Code',
      qrSubtitle: 'Mit jeder Smartphone-Kamera scannen, um den Chat zu öffnen',
      readoutLabel: 'Ihr generierter WhatsApp-Link:',
      copyLinkBtn: 'WhatsApp-Link kopieren',
      copiedLinkBtn: 'In die Zwischenablage kopiert!',
      downloadQrPngBtn: 'QR-Code herunterladen (PNG)',
      downloadQrSvgBtn: 'SVG herunterladen',
      testWhatsappBtn: 'Link in WhatsApp testen',
    },
    howTo: {
      schemaName: 'So erstellen Sie einen WhatsApp-Link für Ihre Telefonnummer',
      heading: 'So erstellen Sie einen WhatsApp-Link für Ihre Telefonnummer',
      subtitle: 'Keine Registrierung, keine Weiterleitungen, 100% offizielles wa.me-Format.',
      step1Title: '1. Ländervorwahl & Telefonnummer eingeben',
      step1Desc: 'Wählen Sie Ihre Ländervorwahl und geben Sie Ihre WhatsApp-Nummer ein. Führende Nullen und Sonderzeichen werden automatisch entfernt.',
      step2Title: '2. Vorgefertigte Nachricht hinzufügen',
      step2Desc: 'Tippen Sie eine optionale Begrüßungsnachricht für Ihre Kunden ein.',
      step3Title: '3. WhatsApp-Link kopieren oder QR-Code laden',
      step3Desc: 'Klicken Sie auf WhatsApp-Link kopieren oder laden Sie den QR-Code als PNG/SVG herunter.',
    },
    seoGuide: {
      heading: 'Leitfaden: WhatsApp Business Link & Click-to-Chat URL erstellen',
      subtitle: 'Starten Sie Kundenchats mit einem Klick, ohne dass Ihre Nummer zuerst gespeichert werden muss.',
      article1Title: 'Was ist ein offizieller https://wa.me/ Click-to-Chat-Link?',
      article1Body: 'Der offizielle WhatsApp Click-to-Chat-Standard nutzt https://wa.me/ gefolgt von Ländervorwahl und Rufnummer. Unser Generator bereinigt Ihre Eingabe automatisch und kodiert Ihren Nachrichtentext fehlerfrei.',
      article2Title: 'Warum einen WhatsApp Business Link mit Textvorlage nutzen?',
      article2Body: 'Mit einer vorausgefüllten Nachricht wissen Kunden sofort, was sie senden können – ideal für Instagram-Profile, Webseiten und Werbeanzeigen.',
      article3Title: 'QR-Code aus Ihrem WhatsApp-Link generieren',
      article3Body: 'Erstellen Sie parallel zum wa.me-Link einen hochauflösenden QR-Code als PNG oder Vektor-SVG für Visitenkarten, Flyer und Verpackungen.',
    },
    comparison: {
      heading: 'WhatzpLink vs. Manuelle Erstellung vs. Bezahlte Kurzlinks',
      subtitle: 'Darum setzen Unternehmen auf direkte, clientseitige wa.me-Links.',
      colFeature: 'Funktion',
      colWhatzpLink: 'WhatzpLink (Kostenlos)',
      colManual: 'Manuelle Eingabe',
      colShorteners: 'Bezahlte Kurzlinks',
      row1Feature: 'Rufnummern-Bereinigung & URL-Encoding',
      row1Whatzp: '100% Automatisch & Sofort',
      row1Manual: 'Fehleranfällig (%20 manuell)',
      row1Short: 'Ja (Konto erforderlich)',
      row2Feature: 'Gültigkeit & Weiterleitungen',
      row2Whatzp: 'Läuft nie ab (Direktes wa.me)',
      row2Manual: 'Läuft nie ab',
      row2Short: 'Kann ablaufen',
      row3Feature: 'Datenschutz & Privatsphäre',
      row3Whatzp: '100% Lokal im Browser',
      row3Manual: 'Privat',
      row3Short: 'Drittanbieter-Server',
      row4Feature: 'High-Res PNG & SVG QR-Code',
      row4Whatzp: 'Kostenlos inklusive',
      row4Manual: 'Nicht enthalten',
      row4Short: 'Kostenpflichtiges Upgrade',
    },
    faq: {
      heading: 'Häufig gestellte Fragen (FAQ)',
      subtitle: 'Alles Wissenswerte über WhatsApp Click-to-Chat-Links und QR-Codes.',
      q1: 'Wie erstelle ich einen WhatsApp-Link mit einer Telefonnummer?',
      a1: 'Wählen Sie Ihre Ländervorwahl, geben Sie Ihre Telefonnummer ein, fügen Sie optional eine Nachricht hinzu und kopieren Sie Ihre https://wa.me/ Click-to-Chat-URL.',
      q2: 'Ist WhatzpLink kostenlos und sicher für WhatsApp Business?',
      a2: 'Ja! WhatzpLink läuft zu 100 % lokal in Ihrem Browser. Ihre Telefonnummern und Nachrichten werden niemals auf einen Server hochgeladen und wa.me-Links laufen nie ab.',
      q3: 'Kann ich aus meinem WhatsApp-Link einen QR-Code erstellen?',
      a3: 'Ja, WhatzpLink erstellt automatisch einen hochauflösenden QR-Code zu Ihrem wa.me-Link, den Sie als PNG oder SVG herunterladen können.',
      q4: 'Wie füge ich meinen WhatsApp-Link bei Instagram oder auf meiner Website ein?',
      a4: 'Kopieren Sie den generierten wa.me-Link mit einem Klick und fügen Sie ihn direkt in Ihre Instagram-Bio oder als Button-Link auf Ihrer Website ein.',
    },
    footer: {
      tagline: '100% Client-Side WhatsApp-Link- & QR-Code-Generator.',
      privacyNote: 'Kein Tracking • Keine Server-Speicherung • Blitzschnell.',
      copyright: '© 2026 WhatzpLink. Alle Rechte vorbehalten.',
    },
  },
  fr: {
    meta: {
      // 58 characters (< 60 chars)
      title: 'Générateur de Lien WhatsApp | Créer Lien wa.me & Code QR',
      // 149 characters (< 155 chars)
      description: 'Créez gratuitement des liens wa.me WhatsApp et QR codes HD avec message pré-rempli. 100% privé, sans serveur et sans expiration pour votre entreprise.',
      keywords: `${CORE_SEO_KEYWORDS}, générateur de lien whatsapp, créer lien wa.me, générateur qr code whatsapp`,
    },
    nav: {
      brand: 'WhatzpLink',
      languageLabel: 'Choisir la langue',
      themeToggleLabel: 'Basculer le mode clair ou sombre',
      installPwa: 'Ajouter à l’accueil',
      installPwaAria: 'Installer WhatzpLink sur l’écran d’accueil',
      installPwaToast: 'Appuyez sur Ctrl+D (ou Partager → Sur l’écran d’accueil) pour installer WhatzpLink !',
      supportDev: 'Soutenir le Développeur',
      supportDevAria: 'Soutenir le développeur sur Gumroad',
    },
    breadcrumbs: {
      home: 'Accueil',
      tools: 'Outils Pro',
      generator: 'Générateur de Lien WhatsApp',
    },
    hero: {
      h1: 'Générateur de Lien WhatsApp Gratuit',
      subtitle: 'Saisissez votre numéro et votre message personnalisé pour générer instantanément votre lien wa.me et votre QR code.',
      modeCreate: 'Créer Lien wa.me & QR',
      modeTemplates: 'Modèles Professionnels',
      modeHistory: 'Historique Enregistré',
    },
    generator: {
      step1Label: '1. Choisissez l’Indicatif Pays & Entrez votre Numéro',
      countrySearchPlaceholder: 'Rechercher pays ou +indicatif...',
      phonePlaceholder: 'ex. 6 12 34 56 78',
      validationReady: 'Numéro WhatsApp valide — nettoyé et prêt',
      validationCleaned: 'Espaces, symboles et zéros initiaux supprimés',
      validationEmpty: 'Entrez votre numéro de téléphone pour générer votre lien en direct',
      validationInvalid: 'Entrez au moins 6 chiffres pour un numéro valide',
      step2Label: '2. Message Pré-rempli Personnalisé (Optionnel)',
      messagePlaceholder: 'Bonjour ! Je souhaiterais en savoir plus sur vos services...',
      quickChipsLabel: 'Messages en 1 Clic :',
      chipOrder: 'Bonjour ! Je veux commander...',
      chipOrderText: 'Bonjour ! Je souhaite commander votre produit. Pouvez-vous me confirmer la disponibilité ?',
      chipInfo: 'Puis-je avoir plus d’infos ?',
      chipInfoText: 'Bonjour ! Pourrais-je obtenir plus d’informations sur vos offres ?',
      chipBook: 'Prendre rendez-vous',
      chipBookText: 'Bonjour ! Je souhaiterais prendre rendez-vous. Quels sont vos créneaux disponibles ?',
      chipQuote: 'Demander un devis',
      chipQuoteText: 'Bonjour ! Pourriez-vous m’envoyer un devis pour mon projet ?',
      templatesHeading: 'Modèles de Messages Professionnels en 1 Clic',
      templatesSubheading: 'Cliquez sur un modèle ci-dessous pour pré-remplir votre message instantanément.',
      templateOrderTitle: 'Demande de Commande',
      templateOrderDesc: 'Idéal pour les boutiques e-commerce, Instagram et catalogues.',
      templateSupportTitle: 'Support Client',
      templateSupportDesc: 'Accueil rapide pour l’assistance technique et le suivi de colis.',
      templateBookingTitle: 'Prise de Rendez-vous',
      templateBookingDesc: 'Parfait pour les cabinets, salons, consultants et réservations.',
      templateQuoteTitle: 'Demande de Devis',
      templateQuoteDesc: 'Conçu pour les agences, freelances et demandes B2B.',
      useTemplateBtn: 'Appliquer le Modèle',
      historyHeading: 'Les 5 Derniers Liens WhatsApp Générés',
      historySubheading: 'Stockés localement dans votre navigateur. Aucune donnée envoyée sur un serveur.',
      historyEmpty: 'Aucun lien enregistré. Copiez ou testez un lien pour le sauvegarder ici !',
      historyClearBtn: 'Effacer l’historique',
      historyLoadBtn: 'Charger dans l’éditeur',
      historyCopyBtn: 'Copier',
      previewTitle: 'Aperçu en Direct de la Bulle WhatsApp',
      previewOnline: 'en ligne • discussion directe wa.me',
      previewPlaceholderBubble: 'Votre message pré-rempli apparaîtra ici dans la bulle de discussion...',
      previewRecipientLabel: 'Destinataire :',
      qrTitle: 'QR Code Haute Résolution Instantané',
      qrSubtitle: 'Scannez avec n’importe quel appareil photo pour ouvrir WhatsApp',
      readoutLabel: 'Votre Lien WhatsApp Généré :',
      copyLinkBtn: 'Copier le Lien WhatsApp',
      copiedLinkBtn: 'Copié dans le Presse-papiers !',
      downloadQrPngBtn: 'Télécharger le QR Code (PNG)',
      downloadQrSvgBtn: 'Télécharger SVG',
      testWhatsappBtn: 'Tester le Lien sur WhatsApp',
    },
    howTo: {
      schemaName: 'Comment Créer un Lien WhatsApp pour Votre Numéro de Téléphone',
      heading: 'Comment Créer un Lien WhatsApp pour Votre Numéro',
      subtitle: 'Sans inscription, sans redirection, format officiel wa.me 100% direct.',
      step1Title: '1. Sélectionnez votre Pays et Numéro',
      step1Desc: 'Choisissez votre indicatif international et tapez votre numéro. WhatzpLink supprime automatiquement le zéro initial et les espaces.',
      step2Title: '2. Ajoutez un Message Pré-rempli',
      step2Desc: 'Rédigez un message d’accueil optionnel pour vos clients ou choisissez un modèle en 1 clic.',
      step3Title: '3. Copiez le Lien ou Téléchargez le QR Code',
      step3Desc: 'Cliquez sur Copier le Lien WhatsApp ou téléchargez le QR code instantané en PNG ou SVG.',
    },
    seoGuide: {
      heading: 'Guide Complet : Créer un Lien WhatsApp Business & URL Click-to-Chat',
      subtitle: 'Permettez à vos clients de vous contacter en un clic sans enregistrer votre numéro.',
      article1Title: 'Qu’est-ce qu’une URL Officielle https://wa.me/ ?',
      article1Body: 'Le format officiel WhatsApp Click-to-Chat utilise https://wa.me/ suivi de votre indicatif pays et numéro nettoyé. Notre générateur encode automatiquement votre message.',
      article2Title: 'Pourquoi Créer un Lien WhatsApp Business avec Message ?',
      article2Body: 'Un lien wa.me avec message pré-rempli augmente vos conversions sur Instagram, TikTok, Facebook Ads et votre site web.',
      article3Title: 'Créer un QR Code à partir de votre Lien WhatsApp',
      article3Body: 'Téléchargez instantanément un QR Code haute résolution en PNG ou SVG vectoriel pour vos cartes de visite, menus et vitrines.',
    },
    comparison: {
      heading: 'WhatzpLink vs. Saisie Manuelle vs. Raccourcisseurs Payants',
      subtitle: 'Pourquoi les entreprises préfèrent générer des liens officiels wa.me côté client.',
      colFeature: 'Fonctionnalité',
      colWhatzpLink: 'WhatzpLink (Gratuit)',
      colManual: 'Saisie Manuelle',
      colShorteners: 'Raccourcisseurs Payants',
      row1Feature: 'Nettoyage Numéro & Encodage URL',
      row1Whatzp: '100% Automatique & Instantané',
      row1Manual: 'Source d’erreurs (%20 manuel)',
      row1Short: 'Oui (Compte requis)',
      row2Feature: 'Expiration du Lien',
      row2Whatzp: 'N’expire Jamais (wa.me direct)',
      row2Manual: 'N’expire Jamais',
      row2Short: 'Peut expirer',
      row3Feature: 'Confidentialité des Données',
      row3Whatzp: '100% Local dans le Navigateur',
      row3Manual: 'Privé',
      row3Short: 'Serveurs tiers',
      row4Feature: 'QR Code PNG HD & SVG Vectoriel',
      row4Whatzp: 'Inclus Gratuitement',
      row4Manual: 'Non inclus',
      row4Short: 'Option payante',
    },
    faq: {
      heading: 'Questions Fréquemment Posées (FAQ)',
      subtitle: 'Tout savoir sur la création de liens WhatsApp Click-to-Chat et de QR codes.',
      q1: 'Comment créer un lien WhatsApp avec un numéro de téléphone ?',
      a1: 'Sélectionnez l’indicatif de votre pays, entrez votre numéro sans le zéro initial, ajoutez un message optionnel et copiez votre URL https://wa.me/ instantanée.',
      q2: 'WhatzpLink est-il gratuit et privé pour WhatsApp Business ?',
      a2: 'Oui ! WhatzpLink fonctionne à 100 % localement dans votre navigateur. Vos numéros et messages ne sont jamais envoyés sur un serveur et vos liens wa.me n’expirent jamais.',
      q3: 'Puis-je créer un QR code à partir de mon lien WhatsApp ?',
      a3: 'Oui, WhatzpLink génère automatiquement un QR code haute résolution téléchargeable en PNG ou SVG pour vos supports imprimés et réseaux sociaux.',
      q4: 'Comment ajouter mon lien WhatsApp Business sur Instagram ?',
      a4: 'Copiez votre lien wa.me généré ci-dessus et collez-le dans le champ Site web de votre biographie Instagram ou TikTok.',
    },
    footer: {
      tagline: 'Générateur de Liens et QR Codes WhatsApp 100% Client-Side.',
      privacyNote: 'Zéro pistage • Zéro stockage serveur • Ultra-rapide.',
      copyright: '© 2026 WhatzpLink. Tous droits réservés.',
    },
  },
  ja: {
    meta: {
      // 42 characters (< 60 chars)
      title: 'WhatsAppリンク生成ツール | 無料wa.meチャットURL＆QRコード作成',
      // 116 characters (< 155 chars)
      description: '定型文付きの公式 https://wa.me/ WhatsAppチャットリンクと高解像度QRコードを無料で即時作成。登録不要・100%ブラウザ完結で安全なビジネス向けツール。',
      keywords: `${CORE_SEO_KEYWORDS}, whatsapp リンク作成, wa.me リンク生成, whatsapp qrコード 作成`,
    },
    nav: {
      brand: 'WhatzpLink',
      languageLabel: '言語を選択',
      themeToggleLabel: 'ライト・ダークモード切替',
      installPwa: 'ホーム画面に追加',
      installPwaAria: 'WhatzpLinkをホーム画面にインストール',
      installPwaToast: 'Ctrl+D（モバイルでは共有→ホーム画面に追加）でWhatzpLinkをインストールできます！',
      supportDev: '開発者を支援する',
      supportDevAria: 'Gumroadで開発者を支援する',
    },
    breadcrumbs: {
      home: 'ホーム',
      tools: 'ビジネスツール',
      generator: 'WhatsAppリンク生成ツール',
    },
    hero: {
      h1: '無料WhatsAppリンク生成ツール',
      subtitle: '電話番号とメッセージを入力するだけで、wa.meリンクと高解像度QRコードを瞬時に作成します。',
      modeCreate: 'wa.meリンク＆QR作成',
      modeTemplates: 'ビジネステンプレート',
      modeHistory: '作成履歴',
    },
    generator: {
      step1Label: '1. 国番号を選択してWhatsApp電話番号を入力',
      countrySearchPlaceholder: '国名または+国番号を検索...',
      phonePlaceholder: '例: 90 1234 5678',
      validationReady: '有効なWhatsApp番号 — 自動整形済み',
      validationCleaned: 'スペース・ハイフン・先頭の0を自動削除しました',
      validationEmpty: '電話番号を入力するとリアルタイムでリンクが生成されます',
      validationInvalid: '6桁以上の有効な電話番号を入力してください',
      step2Label: '2. 自動入力メッセージ（任意）',
      messagePlaceholder: 'こんにちは！サービスについて詳しく知りたいのですが...',
      quickChipsLabel: 'ワンクリック定型文:',
      chipOrder: '注文したいです...',
      chipOrderText: 'こんにちは！商品の注文を希望しています。在庫状況や詳細を教えていただけますか？',
      chipInfo: '詳細を教えてください',
      chipInfoText: 'こんにちは！サービスの詳細について教えていただけますでしょうか？',
      chipBook: '予約をしたいです',
      chipBookText: 'こんにちは！予約を取りたいのですが、空いている日時を教えてください。',
      chipQuote: '見積もりを依頼する',
      chipQuoteText: 'こんにちは！プロジェクトの見積もりをお願いできますでしょうか？',
      templatesHeading: 'ワンクリック・ビジネスメッセージテンプレート',
      templatesSubheading: 'テンプレートをクリックするとメッセージ欄に自動反映されます。',
      templateOrderTitle: '商品の注文・在庫確認',
      templateOrderDesc: 'ネットショップ、Instagram販売、カタログ注文に最適。',
      templateSupportTitle: 'カスタマーサポート',
      templateSupportDesc: 'お問い合わせ対応や配送状況の確認をスムーズに。',
      templateBookingTitle: '来店・サロン予約',
      templateBookingDesc: 'クリニック、美容室、コンサルティングの予約受付に。',
      templateQuoteTitle: 'お見積もり依頼',
      templateQuoteDesc: '制作会社、フリーランス、法人向けB2B取引に最適。',
      useTemplateBtn: 'テンプレートを適用',
      historyHeading: '最近作成した5件のWhatsAppリンク',
      historySubheading: 'お使いのブラウザ内にのみ安全に保存されます（サーバー送信なし）。',
      historyEmpty: '保存された履歴はまだありません。リンクをコピーまたはテストするとここに自動保存されます！',
      historyClearBtn: '履歴を消去',
      historyLoadBtn: 'エディタに読み込む',
      historyCopyBtn: 'コピー',
      previewTitle: 'WhatsAppチャット画面リアルタイムプレビュー',
      previewOnline: 'オンライン • wa.me ダイレクトチャット',
      previewPlaceholderBubble: '入力したメッセージがここにリアルタイムで表示されます...',
      previewRecipientLabel: '宛先:',
      qrTitle: '高解像度QRコード（即時生成）',
      qrSubtitle: 'スマホのカメラで読み取るだけでWhatsAppチャットが開きます',
      readoutLabel: '生成されたWhatsAppリンク:',
      copyLinkBtn: 'WhatsAppリンクをコピー',
      copiedLinkBtn: 'コピーしました！',
      downloadQrPngBtn: 'QRコードを保存 (PNG)',
      downloadQrSvgBtn: 'SVGを保存',
      testWhatsappBtn: 'WhatsAppでリンクをテスト',
    },
    howTo: {
      schemaName: '電話番号からWhatsAppリンクを作成する方法',
      heading: '電話番号からWhatsAppリンクを作成する3ステップ',
      subtitle: '会員登録不要・リダイレクトなし・100%公式のwa.meフォーマット。',
      step1Title: '1. 国番号を選び電話番号を入力',
      step1Desc: '国番号を選択して電話番号を入力します。先頭の「0」やハイフン、スペースは自動的に除去されます。',
      step2Title: '2. 定型メッセージを入力',
      step2Desc: 'お客様がすぐに送信できる挨拶メッセージを任意で入力します。',
      step3Title: '3. リンクをコピーまたはQRコードを保存',
      step3Desc: '「WhatsAppリンクをコピー」をクリックするか、高解像度QRコードをダウンロードして共有します。',
    },
    seoGuide: {
      heading: '完全ガイド：WhatsAppビジネスリンク（wa.me）とQRコードの作り方',
      subtitle: '連絡先登録の手間を省き、SNSやWebサイトからワンクリックでWhatsAppチャットへ誘導。',
      article1Title: '公式 https://wa.me/ クリック・トゥ・チャットURLとは？',
      article1Body: 'WhatsAppの公式仕様では https://wa.me/ の後に国番号と電話番号を続けることでダイレクトチャットリンクを作成できます。当ツールは先頭の0や記号を自動除去し、日本語メッセージも正確にURLエンコードします。',
      article2Title: '定型文付きWhatsAppビジネスリンクのメリット',
      article2Body: 'InstagramのプロフィールやWebサイトに定型文付きリンクを設置すると、顧客が最初のメッセージに迷わず問い合わせ率が向上します。',
      article3Title: 'リンクから高解像度QRコードを即時作成',
      article3Body: '生成したwa.meリンクと同時に、名刺・チラシ・店舗メニューにそのまま使える高解像度PNGおよびベクターSVG形式のQRコードをダウンロードできます。',
    },
    comparison: {
      heading: 'WhatzpLink vs 手動作成 vs 有料短縮URLサービス',
      subtitle: '多くのビジネスにブラウザ完結型の公式wa.meリンク生成が選ばれる理由。',
      colFeature: '機能比較',
      colWhatzpLink: 'WhatzpLink (無料)',
      colManual: '手動でのURL入力',
      colShorteners: '有料短縮サービス',
      row1Feature: '電話番号の自動整形＆URLエンコード',
      row1Whatzp: '100%自動・リアルタイム',
      row1Manual: '入力ミスが起きやすい',
      row1Short: '対応（要アカウント登録）',
      row2Feature: 'リンクの有効期限',
      row2Whatzp: '無期限（公式wa.me直リンク）',
      row2Manual: '無期限',
      row2Short: '期限切れや広告表示あり',
      row3Feature: 'プライバシー・安全性',
      row3Whatzp: '100%ブラウザ完結（送信なし）',
      row3Manual: '安全',
      row3Short: '外部サーバーに保存',
      row4Feature: '高解像度PNG＆SVG QRコード',
      row4Whatzp: '無料で即時ダウンロード',
      row4Manual: '非対応',
      row4Short: '有料プラン限定',
    },
    faq: {
      heading: 'よくある質問（FAQ）',
      subtitle: '電話番号を使ったWhatsAppリンク作成とQRコードに関する疑問にお答えします。',
      q1: '電話番号からWhatsAppリンクを作成するにはどうすればいいですか？',
      a1: '国番号を選択し、先頭の0を除いた電話番号を入力して任意のメッセージを追加するだけで、即座に https://wa.me/ チャットURLをコピーできます。',
      q2: 'WhatzpLinkはWhatsAppビジネスでも無料かつ安全に使えますか？',
      a2: 'はい！WhatzpLinkはお使いのブラウザ内で100%ローカル動作します。電話番号やメッセージがサーバーに送信・保存されることはなく、生成したwa.meリンクは永久に使えます。',
      q3: 'WhatsAppリンクからQRコードを作成できますか？',
      a3: 'はい、wa.meリンクと同時に高解像度のQRコードが自動生成され、チラシやSNS用にPNGまたはSVG画像としてダウンロードできます。',
      q4: 'InstagramやWebサイトにWhatsAppリンクを貼る方法は？',
      a4: '当ツールで生成したリンクをコピーし、InstagramプロフィールのWebサイト欄やホームページのボタンリンクにそのまま貼り付けてください。',
    },
    footer: {
      tagline: '100%ブラウザ完結型 WhatsAppリンク＆QRコード生成エンジン',
      privacyNote: 'トラッキングなし • サーバー保存なし • 超高速動作',
      copyright: '© 2026 WhatzpLink. All rights reserved.',
    },
  },
  zh: {
    meta: {
      // 38 characters (< 60 chars)
      title: 'WhatsApp链接生成器 | 免费创建wa.me聊天链接与二维码',
      // 102 characters (< 155 chars)
      description: '免费即时生成带预设消息的官方 https://wa.me/ WhatsApp 聊天链接与高清 PNG/SVG 二维码。100% 浏览器本地运行，零上传更私密，外贸与跨境电商必备工具。',
      keywords: `${CORE_SEO_KEYWORDS}, whatsapp链接生成器, wa.me链接制作, whatsapp二维码生成, 外贸whatsapp链接`,
    },
    nav: {
      brand: 'WhatzpLink',
      languageLabel: '选择语言',
      themeToggleLabel: '切换浅色或深色模式',
      installPwa: '添加到主屏幕',
      installPwaAria: '将 WhatzpLink 安装到主屏幕',
      installPwaToast: '按 Ctrl+D（或手机端点击分享 → 添加到主屏幕）即可安装 WhatzpLink！',
      supportDev: '支持开发者',
      supportDevAria: '在 Gumroad 上支持开发者',
    },
    breadcrumbs: {
      home: '首页',
      tools: '商业工具',
      generator: 'WhatsApp 链接生成器',
    },
    hero: {
      h1: '免费 WhatsApp 链接生成器',
      subtitle: '输入您的电话号码和预设消息，立即生成官方 wa.me 链接与高清二维码。',
      modeCreate: '创建 wa.me 链接与二维码',
      modeTemplates: '快捷商务模板',
      modeHistory: '历史保存记录',
    },
    generator: {
      step1Label: '1. 选择国家区号并输入 WhatsApp 号码',
      countrySearchPlaceholder: '搜索国家或 +区号...',
      phonePlaceholder: '例如 138 0013 8000',
      validationReady: '有效的 WhatsApp 号码 — 已自动清理并就绪',
      validationCleaned: '已自动去除空格、符号和前导零',
      validationEmpty: '输入您的电话号码即可实时生成链接',
      validationInvalid: '请输入至少 6 位数字的有效电话号码',
      step2Label: '2. 自定义预设消息（可选）',
      messagePlaceholder: '您好！我想咨询一下贵公司的服务详情...',
      quickChipsLabel: '一键快捷短语：',
      chipOrder: '您好！我想订购...',
      chipOrderText: '您好！我想订购您的产品，请问有现货吗？可以发一下详情吗？',
      chipInfo: '能了解更多信息吗？',
      chipInfoText: '您好！请问可以发一下更多关于产品的资料吗？',
      chipBook: '预约时间',
      chipBookText: '您好！我想预约一下服务时间，请问最近哪些时段有空？',
      chipQuote: '获取价格报价',
      chipQuoteText: '您好！请问可以针对我的需求提供一份报价单吗？',
      templatesHeading: '一键商务消息模板',
      templatesSubheading: '点击下方任意行业模板即可自动填入消息并返回生成器。',
      templateOrderTitle: '订单与库存咨询',
      templateOrderDesc: '非常适合跨境电商、独立站、Instagram 店铺及目录询盘。',
      templateSupportTitle: '客户售后支持',
      templateSupportDesc: '快速响应客户技术支持与物流状态查询。',
      templateBookingTitle: '服务与门店预约',
      templateBookingDesc: '适用于诊所、美容院、顾问咨询及各类预约场景。',
      templateQuoteTitle: '外贸与项目询价',
      templateQuoteDesc: '专为外贸工厂、B2B 批发商、代理商及自由职业者设计。',
      useTemplateBtn: '应用此模板',
      historyHeading: '最近生成的 5 条 WhatsApp 链接',
      historySubheading: '仅保存在您的本地浏览器 LocalStorage 中，绝不上传任何服务器。',
      historyEmpty: '暂无保存记录。复制或测试链接后将自动保存在这里！',
      historyClearBtn: '清空历史记录',
      historyLoadBtn: '加载到编辑器',
      historyCopyBtn: '复制',
      previewTitle: 'WhatsApp 聊天窗口实时预览',
      previewOnline: '在线 • wa.me 直达聊天',
      previewPlaceholderBubble: '您输入的预设消息将实时显示在此聊天气泡中...',
      previewRecipientLabel: '接收号码：',
      qrTitle: '即时高清二维码',
      qrSubtitle: '使用手机相机扫码即可直接唤起 WhatsApp 对话',
      readoutLabel: '为您生成的 WhatsApp 链接：',
      copyLinkBtn: '复制 WhatsApp 链接',
      copiedLinkBtn: '已复制到剪贴板！',
      downloadQrPngBtn: '下载二维码 (PNG)',
      downloadQrSvgBtn: '下载矢量 SVG',
      testWhatsappBtn: '在 WhatsApp 中测试链接',
    },
    howTo: {
      schemaName: '如何用电话号码创建 WhatsApp 聊天链接',
      heading: '如何用电话号码创建 WhatsApp 聊天链接',
      subtitle: '无需注册、无第三方跳转、100% 官方 wa.me 标准格式。',
      step1Title: '1. 选择国家区号并输入号码',
      step1Desc: '选择您的国家代码并输入 WhatsApp 电话号码，系统会自动过滤空格、横线和前导零。',
      step2Title: '2. 添加预设欢迎消息',
      step2Desc: '输入可选的客户欢迎语，或点击一键商务快捷短语。',
      step3Title: '3. 复制链接或下载高清二维码',
      step3Desc: '点击“复制 WhatsApp 链接”或下载即时生成的二维码，随时分享到任何平台。',
    },
    seoGuide: {
      heading: '完整指南：如何创建 WhatsApp Business 链接与一键聊天 URL',
      subtitle: '让海外客户无需保存通讯录即可一键向您发起 WhatsApp 询盘对话。',
      article1Title: '什么是官方 https://wa.me/ 一键聊天链接？',
      article1Body: '当您搜索如何用手机号创建 WhatsApp 链接时，官方标准采用 https://wa.me/ 加上国际区号与电话号码。我们的生成器会自动清理多余符号并对预设文字进行标准 URL 编码。',
      article2Title: '为什么要创建带预设消息的 WhatsApp 商业链接？',
      article2Body: '在独立站、Instagram 简介、TikTok 主页和 Facebook 广告中使用带预设问候语的 wa.me 链接，可以显著提高外贸客户询盘转化率。',
      article3Title: '从您的 WhatsApp 链接即时生成高清二维码',
      article3Body: '在生成链接的同时，WhatzpLink 支持一键导出 1024px 高清 PNG 与矢量 SVG 二维码，完美适配展会海报、名片与产品包装印刷。',
    },
    comparison: {
      heading: 'WhatzpLink vs 手动拼接链接 vs 付费短链平台',
      subtitle: '为什么跨境卖家与外贸企业更青睐纯前端生成的官方 wa.me 链接。',
      colFeature: '功能对比',
      colWhatzpLink: 'WhatzpLink (免费)',
      colManual: '手动拼接 URL',
      colShorteners: '付费第三方短链',
      row1Feature: '号码自动清理与 URL 编码',
      row1Whatzp: '100% 自动且实时响应',
      row1Manual: '极易出错（需手动转义 %20）',
      row1Short: '支持（需注册账号）',
      row2Feature: '链接有效期与跳转',
      row2Whatzp: '永久有效（官方 wa.me 直连）',
      row2Manual: '永久有效',
      row2Short: '可能过期或插入广告',
      row3Feature: '数据隐私与安全性',
      row3Whatzp: '100% 浏览器本地运行',
      row3Manual: '私密',
      row3Short: '保存在第三方服务器',
      row4Feature: '高清 PNG 与矢量 SVG 二维码',
      row4Whatzp: '免费即时下载',
      row4Manual: '不支持',
      row4Short: '需付费升级',
    },
    faq: {
      heading: '常见问题解答 (FAQ)',
      subtitle: '关于如何用电话号码创建 WhatsApp 链接与二维码的常见疑问。',
      q1: '如何用电话号码创建 WhatsApp 链接？',
      a1: '选择您的国家区号，输入不含前导零或特殊符号的电话号码，添加可选的预设消息，即可一键复制您的 https://wa.me/ 聊天链接。',
      q2: 'WhatzpLink 对 WhatsApp Business 完全免费且保护隐私吗？',
      a2: '是的！WhatzpLink 100% 在您的浏览器本地运行，您的电话号码与消息绝不会上传或存储在任何服务器上，生成的 wa.me 链接永久有效。',
      q3: '我可以从 WhatsApp 链接生成二维码吗？',
      a3: '可以，WhatzpLink 会在生成 wa.me 链接的同时自动生成高分辨率二维码，您可以直接下载 PNG 或 SVG 格式用于宣传册、菜单和社交媒体。',
      q4: '如何把 WhatsApp Business 链接放到 Instagram 或独立站？',
      a4: '在上方生成器中复制生成的 wa.me 链接，直接粘贴到 Instagram 个人主页的网站栏或独立站的联系按钮中即可。',
    },
    footer: {
      tagline: '100% 纯前端 WhatsApp 链接与二维码生成引擎。',
      privacyNote: '零追踪 • 零服务器存储 • 极致响应速度。',
      copyright: '© 2026 WhatzpLink. 保留所有权利。',
    },
  },
  ru: {
    meta: {
      // 56 characters (< 60 chars)
      title: 'Генератор Ссылок WhatsApp | Создать wa.me и QR Бесплатно',
      // 149 characters (< 155 chars)
      description: 'Создавайте бесплатные ссылки wa.me для WhatsApp и QR-коды с готовым текстом. 100% приватно в браузере, без регистрации и без срока действия ссылок.',
      keywords: `${CORE_SEO_KEYWORDS}, генератор ссылок whatsapp, создать ссылку wa.me, qr код whatsapp бесплатно`,
    },
    nav: {
      brand: 'WhatzpLink',
      languageLabel: 'Выбрать язык',
      themeToggleLabel: 'Переключить светлую или тёмную тему',
      installPwa: 'На главный экран',
      installPwaAria: 'Установить приложение WhatzpLink на главный экран',
      installPwaToast: 'Нажмите Ctrl+D (или Поделиться → На экран «Домой»), чтобы установить WhatzpLink!',
      supportDev: 'Поддержать Автора',
      supportDevAria: 'Поддержать разработчика на Gumroad',
    },
    breadcrumbs: {
      home: 'Главная',
      tools: 'Бизнес-Инструменты',
      generator: 'Генератор Ссылок WhatsApp',
    },
    hero: {
      h1: 'Бесплатный Генератор Ссылок WhatsApp',
      subtitle: 'Введите номер телефона и текст сообщения, чтобы мгновенно получить ссылку wa.me и чёткий QR-код.',
      modeCreate: 'Создать Ссылку и QR',
      modeTemplates: 'Бизнес-Шаблоны',
      modeHistory: 'История Ссылок',
    },
    generator: {
      step1Label: '1. Выберите Код Страны и Введите Номер WhatsApp',
      countrySearchPlaceholder: 'Поиск страны или +кода...',
      phonePlaceholder: 'напр. 912 345 67 89',
      validationReady: 'Номер WhatsApp корректен — очищен и готов',
      validationCleaned: 'Пробелы, скобки, дефисы и лишние нули удалены',
      validationEmpty: 'Введите номер телефона для мгновенного создания ссылки',
      validationInvalid: 'Введите минимум 6 цифр для корректного номера',
      step2Label: '2. Готовый Текст Сообщения (Необязательно)',
      messagePlaceholder: 'Здравствуйте! Я хочу узнать подробнее о ваших услугах...',
      quickChipsLabel: 'Быстрые фразы в 1 клик:',
      chipOrder: 'Хочу сделать заказ...',
      chipOrderText: 'Здравствуйте! Я хочу заказать ваш товар. Подскажите наличие и условия доставки?',
      chipInfo: 'Можно узнать подробнее?',
      chipInfoText: 'Здравствуйте! Могу ли я получить больше информации о ваших услугах?',
      chipBook: 'Записаться на приём',
      chipBookText: 'Здравствуйте! Я хотел(а) бы записаться на приём. Какое время свободно?',
      chipQuote: 'Запросить расчёт стоимости',
      chipQuoteText: 'Здравствуйте! Рассчитайте, пожалуйста, стоимость для моего проекта.',
      templatesHeading: 'Готовые Бизнес-Шаблоны Сообщений в 1 Клик',
      templatesSubheading: 'Нажмите на любой шаблон ниже, чтобы автоматически подставить текст в генератор.',
      templateOrderTitle: 'Запрос на Заказ',
      templateOrderDesc: 'Идеально для интернет-магазинов, Instagram-витрин и каталогов.',
      templateSupportTitle: 'Поддержка Клиентов',
      templateSupportDesc: 'Быстрое приветствие для техподдержки и проверки статуса заказа.',
      templateBookingTitle: 'Запись и Бронирование',
      templateBookingDesc: 'Отлично подходит для клиник, салонов красоты и консультантов.',
      templateQuoteTitle: 'Запрос Коммерческого Предложения',
      templateQuoteDesc: 'Создано для агентств, фрилансеров и оптовых B2B-заказов.',
      useTemplateBtn: 'Применить Шаблон',
      historyHeading: 'Последние 5 Созданных Ссылок WhatsApp',
      historySubheading: 'Хранятся локально в браузере (LocalStorage). Данные не передаются на сервер.',
      historyEmpty: 'История пока пуста. Скопируйте или протестируйте ссылку, чтобы сохранить её!',
      historyClearBtn: 'Очистить Историю',
      historyLoadBtn: 'Загрузить в Редактор',
      historyCopyBtn: 'Копировать',
      previewTitle: 'Живой Предпросмотр Чата WhatsApp',
      previewOnline: 'в сети • прямой чат wa.me',
      previewPlaceholderBubble: 'Ваш заготовленный текст появится здесь внутри облачка сообщения...',
      previewRecipientLabel: 'Получатель:',
      qrTitle: 'Мгновенный QR-код Высокого Разрешения',
      qrSubtitle: 'Наведите камеру смартфона, чтобы сразу открыть чат WhatsApp',
      readoutLabel: 'Ваша Готовая Ссылка WhatsApp:',
      copyLinkBtn: 'Скопировать Ссылку WhatsApp',
      copiedLinkBtn: 'Скопировано в Буфер!',
      downloadQrPngBtn: 'Скачать QR-код (PNG)',
      downloadQrSvgBtn: 'Скачать SVG',
      testWhatsappBtn: 'Проверить Ссылку в WhatsApp',
    },
    howTo: {
      schemaName: 'Как Создать Ссылку WhatsApp для Вашего Номера Телефона',
      heading: 'Как Создать Ссылку на WhatsApp для Вашего Номера',
      subtitle: 'Без регистрации, без редиректов, 100% официальный формат wa.me.',
      step1Title: '1. Выберите Страну и Введите Номер',
      step1Desc: 'Выберите код страны и введите номер WhatsApp. Пробелы, тире, скобки и ведущие нули удаляются автоматически.',
      step2Title: '2. Добавьте Приветственное Сообщение',
      step2Desc: 'Введите необязательный готовый текст сообщения для ваших клиентов.',
      step3Title: '3. Скопируйте Ссылку или Скачайте QR-код',
      step3Desc: 'Нажмите «Скопировать Ссылку WhatsApp» или скачайте готовый QR-код в PNG/SVG.',
    },
    seoGuide: {
      heading: 'Полное Руководство: Как Создать Ссылку WhatsApp Business и QR-код',
      subtitle: 'Позвольте клиентам писать вам в WhatsApp в один клик без сохранения номера в телефонную книгу.',
      article1Title: 'Что такое официальная ссылка https://wa.me/ Click-to-Chat?',
      article1Body: 'Официальный стандарт ссылок WhatsApp использует https://wa.me/ с международным кодом страны и очищенным номером телефона. Наш генератор автоматически кодирует ваш текст.',
      article2Title: 'Зачем нужна ссылка WhatsApp Business с готовым сообщением?',
      article2Body: 'Ссылка с предзаполненным приветствием в шапке профиля Instagram, TikTok или на сайте повышает конверсию обращений клиентов.',
      article3Title: 'Мгновенное создание QR-кода из ссылки WhatsApp',
      article3Body: 'Вместе со ссылкой wa.me вы можете скачать чёткий QR-код в формате PNG (1024px) или векторном SVG для визиток, меню и упаковки.',
    },
    comparison: {
      heading: 'WhatzpLink vs Ручной Ввод vs Платные Сокращатели Ссылок',
      subtitle: 'Почему бизнес выбирает прямые официальные ссылки wa.me на стороне браузера.',
      colFeature: 'Характеристика',
      colWhatzpLink: 'WhatzpLink (Бесплатно)',
      colManual: 'Ручной Ввод URL',
      colShorteners: 'Платные Сервисы',
      row1Feature: 'Очистка Номера и Кодирование URL',
      row1Whatzp: '100% Автоматически и Мгновенно',
      row1Manual: 'Риск ошибок (%20 вручную)',
      row1Short: 'Да (Нужен аккаунт)',
      row2Feature: 'Срок Действия Ссылки',
      row2Whatzp: 'Бессрочно (Прямая wa.me)',
      row2Manual: 'Бессрочно',
      row2Short: 'Может истечь',
      row3Feature: 'Конфиденциальность Данных',
      row3Whatzp: '100% Локально в Браузере',
      row3Manual: 'Приватно',
      row3Short: 'Хранение на чужом сервере',
      row4Feature: 'QR-код Высокого Разрешения PNG и SVG',
      row4Whatzp: 'Бесплатно и Сразу',
      row4Manual: 'Нет',
      row4Short: 'Платный тариф',
    },
    faq: {
      heading: 'Часто Задаваемые Вопросы (FAQ)',
      subtitle: 'Всё о создании прямых ссылок и QR-кодов для WhatsApp по номеру телефона.',
      q1: 'Как создать ссылку на WhatsApp с номером телефона?',
      a1: 'Выберите телефонный код страны, введите номер без ведущих нулей и спецсимволов, добавьте сообщение и скопируйте готовую ссылку https://wa.me/.',
      q2: 'WhatzpLink бесплатен и безопасен для WhatsApp Business?',
      a2: 'Да! WhatzpLink работает на 100% локально в вашем браузере. Ваши номера и сообщения никогда не загружаются на сервер, а ссылки wa.me работают бессрочно.',
      q3: 'Могу ли я создать QR-код из моей ссылки WhatsApp?',
      a3: 'Да, WhatzpLink автоматически создаёт QR-код высокого разрешения вместе со ссылкой wa.me, который можно скачать в PNG или SVG для визиток, меню и соцсетей.',
      q4: 'Как добавить ссылку WhatsApp Business в шапку профиля Instagram?',
      a4: 'Скопируйте сгенерированную ссылку wa.me выше и вставьте её в поле «Сайт» в настройках профиля Instagram или TikTok.',
    },
    footer: {
      tagline: '100% Клиентский Генератор Ссылок и QR-кодов WhatsApp.',
      privacyNote: 'Без трекинга • Без хранения на сервере • Мгновенная работа.',
      copyright: '© 2026 WhatzpLink. Все права защищены.',
    },
  },
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang): TranslationDictionary {
  return ui[lang] || ui[defaultLang];
}

export function getLocalizedPath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
