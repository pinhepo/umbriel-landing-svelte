// Lista de domínios de email temporário/descartável mais comuns
const DISPOSABLE_EMAIL_DOMAINS = [
  // Serviços populares de email temporário
  '10minutemail.com',
  '10minutemail.net',
  '2prong.com',
  '33mail.com',
  'guerrillamail.com',
  'guerrillamail.org',
  'guerrillamail.net',
  'guerrillamail.biz',
  'guerrillamail.info',
  'mailinator.com',
  'mailinator.net',
  'mailinator.org',
  'maildrop.cc',
  'tempmail.org',
  'temp-mail.org',
  'throwaway.email',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
  'cool.fr.nf',
  'jetable.fr.nf',
  'nospam.ze.tc',
  'nomail.xl.cx',
  'mega.zik.dj',
  'speed.1s.fr',
  'fast.1s.fr',
  'urgentmail.fr',
  'ptpnote.com',
  'e4ward.com',
  'getnada.com',
  'dispostable.com',
  'spam4.me',
  'tmpemail.net',
  'emailondeck.com',
  'fakeinbox.com',
  'tempmailo.com',
  'ethereal.email',
  'mohmal.com',
  'trbvm.com',
  'correotemporal.org',
  'sharklasers.com',
  'grr.la',
  'armyspy.com',
  'cuvox.de',
  'dayrep.com',
  'einrot.com',
  'fleckens.hu',
  'gustr.com',
  'jourrapide.com',
  'rhyta.com',
  'superrito.com',
  'teleworm.us',
  'dalesam.com',
  'botox.bz',
  'spambox.us',
  'spaml.de',
  'spamfree24.org',
  'temporary-mail.net',
  'tr8.cc',
  'milanoporto.info',
  'hmamail.com',
  '0-mail.com',
  '0815.ru',
  '10mail.org',
  '20minutemail.com',
  '30minutemail.com',
  '60minutemail.com',
  'anonmails.de',
  'anonymbox.com',
  'bspamfree.org',
  'bugmenot.com',
  'deadaddress.com',
  'despam.it',
  'disposemail.com',
  'disposemails.com',
  'disposeamail.com',
  'dumpyemail.com',
  'e-mail.org',
  'emailtemporanea.net',
  'emailtemporanea.com',
  'emltmp.com',
  'fakemail.fr',
  'fastmail.fm',
  'filzmail.com',
  'fudgerub.com',
  'getonemail.com',
  'haltospam.com',
  'incognitomail.org',
  'junk1e.com',
  'koszmail.pl',
  'kurzepost.de',
  'lifebyfood.com',
  'lookugly.com',
  'miaferrari.com',
  'nobulk.com',
  'nowmymail.com',
  'objectmail.com',
  'pookmail.com',
  'proxymail.eu',
  'punkass.com',
  'putthisinyourspamdatabase.com',
  'quickinbox.com',
  'safe-mail.net',
  'sneakemail.com',
  'sofort-mail.de',
  'sogetthis.com',
  'spambog.com',
  'spambog.de',
  'spambog.ru',
  'spamex.com',
  'spamfree24.de',
  'spamgourmet.com',
  'spamgourmet.net',
  'spamgourmet.org',
  'spamhole.com',
  'spamify.com',
  'spammotel.com',
  'spaml.com',
  'spamthis.co.uk',
  'spamthisplease.com',
  'speed.1s.fr',
  'supermailer.jp',
  'superrito.com',
  'tempalias.com',
  'tempemail.biz',
  'tempemail.com',
  'tempinbox.com',
  'tempymail.com',
  'thankyou2010.com',
  'thisisnotmyrealemail.com',
  'tradermail.info',
  'trash-amil.com',
  'trash-mail.com',
  'trashdevil.com',
  'trashinbox.com',
  'trashymail.com',
  'tyldd.com',
  'uggsrock.com',
  'webemail.me',
  'weg-werf-email.de',
  'wegwerfmail.de',
  'wegwerfmail.net',
  'wegwerfmail.org',
  'willhackforfood.biz',
  'willselldrugs.com',
  'xoxy.net',
  'yuurok.com',
  'zoemail.org',
  // Domínios suspeitos adicionais
  'inbox.lv',
  'guerrillamailblock.com',
  'pokemail.net',
  'spam.la',
  'suremail.info',
  'tmail.ws',
  'mailforspam.com',
  'mt2014.com',
  'mt2015.com',
  'mytrashmail.com',
  'thankyou2010.com',
  'trash2009.com',
  'mt2009.com',
  'trashmail.at',
  'kurzepost.de',
  'objectmail.com',
  'proxymail.eu',
  'rcpt.at',
  'trash-mail.at',
  'trashmail.at',
  'trashmail.me',
  'trashmail.net',
  'wegwerfmail.de',
  'wegwerfmail.net'
];

export interface EmailValidationResult {
  isValid: boolean;
  error?: string;
  suggestion?: string;
}

export function validateEmail(email: string): EmailValidationResult {
  // Verificar formato básico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address'
    };
  }

  // Extrair domínio
  const domain = email.toLowerCase().split('@')[1];
  
  // Verificar se é domínio temporário
  if (DISPOSABLE_EMAIL_DOMAINS.includes(domain)) {
    return {
      isValid: false,
      error: 'Temporary email addresses are not allowed. Please use a permanent email address.',
      suggestion: 'Try using Gmail, Outlook, Yahoo, or your company email instead.'
    };
  }

  // Verificar domínios suspeitos por padrões
  const suspiciousPatterns = [
    /^temp/i,
    /^fake/i,
    /^throw/i,
    /^trash/i,
    /^spam/i,
    /^test/i,
    /^demo/i,
    /disposable/i,
    /temporary/i,
    /^\d+mail/i, // 10mail, 20mail, etc.
    /mail\d+/i,  // mail10, mail20, etc.
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(domain)) {
      return {
        isValid: false,
        error: 'This email provider is not allowed. Please use a permanent email address.',
        suggestion: 'Try using Gmail, Outlook, Yahoo, or your company email instead.'
      };
    }
  }

  // Verificar comprimento do domínio (domínios muito curtos são suspeitos)
  if (domain.length < 4) {
    return {
      isValid: false,
      error: 'Please use a valid email provider',
      suggestion: 'Try using Gmail, Outlook, Yahoo, or your company email instead.'
    };
  }

  return {
    isValid: true
  };
}

// Função para sugerir alternativas
export function getEmailSuggestions(): string[] {
  return [
    'gmail.com',
    'outlook.com',
    'hotmail.com',
    'yahoo.com',
    'icloud.com',
    'protonmail.com'
  ];
}

// Função para verificar se um domínio está na lista de bloqueados
export function isDisposableEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  return DISPOSABLE_EMAIL_DOMAINS.includes(domain);
} 