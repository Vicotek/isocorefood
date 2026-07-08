import { setAuthToken } from '../services/authService.js';

const STORAGE_KEY = 'isocore_home_user';
const BACKEND_BASE_URL = 'https://n8n.srv1569124.hstgr.cloud/webhook';
const LEGACY_USER_KEY = 'icf_user';
const LEGACY_TOKEN_KEY = 'icf_token';

// ── Endpoints ──────────────────────────────────────────
const API = {
  login:       `${BACKEND_BASE_URL}/login`,
  register:    `${BACKEND_BASE_URL}/registro`,
  recover:     `${BACKEND_BASE_URL}/reset-password`,
  home:        `${BACKEND_BASE_URL}/home`,
  center:      `${BACKEND_BASE_URL}/center`,
  modules:     `${BACKEND_BASE_URL}/modules`,
  resources:   `${BACKEND_BASE_URL}/resources`,
  recipes:     `${BACKEND_BASE_URL}/recipes`,
  supplements: `${BACKEND_BASE_URL}/supplements`,
  profile:     `${BACKEND_BASE_URL}/profile`,
  logout:      `${BACKEND_BASE_URL}/logout`,
};
// ───────────────────────────────────────────────────────
const LANGUAGE_KEY = 'isocore_home_language';
const supportedLanguages = ['es', 'en', 'ca'];
const languageCodes = {
  es: 'ES',
  en: 'EN',
  ca: 'CA'
};
const languageNames = {
  es: 'Español',
  en: 'English',
  ca: 'Català'
};

const translations = {
  es: {
    brandTag: 'ISOCORE',
    brandSubtitle: 'NUTRICIÓN',
    headerLogoText: 'ISOCORE',
    headerLogoUrl: './src/assets/isocore-logo.png',
    headerLogoAlt: 'IsoCore logo',
    headerCompanyModuleA: 'Nutrición',
    headerCompanyModuleB: 'Suplementos',
    productLabel: 'NUTRICIÓN',
    languageLabel: 'ES',
    headerEyebrow: 'Editor de decisiones',
    title: 'Tu espacio de nutrición con evidencia, protocolos y seguimiento.',
    copy: 'Accede a fichas de suplementos, planes personalizados y materiales de referencia para aplicar en cada caso.',
    features: [
      {
        icon: './src/assets/icon-center.png',
        title: 'Centro Inteligente',
        description: 'Consulta protocolos clínicos y respuestas directas sin ruido ni entradas largas.'
      },
      {
        icon: './src/assets/icon-plan.png',
        title: 'Mi Plan',
        description: 'Visualiza objetivos nutricionales y ajustes semanales con foco en resultados reales.'
      },
      {
        icon: './src/assets/icon-lock.png',
        title: 'Módulos bloqueados',
        description: 'Desbloquea funciones con progreso claro y muestra qué parte del producto está disponible.'
      }
    ],
    summaryLabel: 'Versión actual',
    summaryTitle: 'Home de producto operativo.',
    summaryText: 'Interfaz construida para uso real: ingreso persistente, navegación clara y coherencia visual del sistema IsoCore.',
    footerEmailTitle: 'Correo electrónico',
    footerEmailValue: 'contacto@isocore.com',
    footerPhoneTitle: 'Teléfono',
    footerPhoneValue: '+34 600 000 000',
    footerAboutTitle: 'Sobre IsoCore',
    footerAboutText: 'Soluciones de nutrición práctica con enfoque clínico y premium.',
    footerPolicyTitle: 'Políticas',
    footerPolicyLink: 'Ver documento',
    footerPolicyUrl: '#',
    footerBottomText: '© 2026 ISOCORE. Todos los derechos reservados.',
    quickLoginButton: 'Iniciar sesión',
    passwordLabel: 'Contraseña',
    passwordPlaceholder: '••••••••',
    loginAuthFailed: 'Email o contraseña incorrectos.',
    loginConnectionError: 'Error de conexión. Inténtalo de nuevo.',
    registerSuccess: 'Cuenta creada. Inicia sesión para continuar.',
    passwordMismatch: 'Las contraseñas no coinciden.',
    passwordTooShort: 'La contraseña debe tener al menos 8 caracteres.',
    recoverSuccess: 'Revisa tu email para restablecer tu contraseña.',
    linkForgot: '¿Olvidaste tu contraseña?',
    linkBackLogin: '← Volver al login',
    recoverDesc: 'Introduce tu email y te enviaremos un enlace para restablecer tu contraseña.',
    summaryPointA: 'Igualdad',
    summaryPointB: 'Identidad',
    summaryPointC: 'Consistencia',
    loginHeading: 'Inicia sesión en ISOCORE.',
    loginIntro: 'Ingresa para acceder a tus protocolos, casos y recomendaciones nutricionales.',
    nameLabel: 'Nombre',
    emailLabel: 'Correo',
    emailPlaceholder: 'usuario@ejemplo.com',
    loginButton: 'Entrar',
    sessionActive: 'Sesión activa',
    welcomeGreeting: 'Bienvenido de nuevo,',
    modulesTitle: 'Módulos',
    modulesCopy: 'Los módulos se presentan aquí como parte del producto. La navegación es clara y el acceso se desbloquea de forma controlada.',
    resourceTitle: 'Recursos',
    resourceDesc: 'Explora artículos, guías y protocolos cuidadosamente seleccionados.',
    supplementTitle: 'Suplementos',
    supplementDesc: 'Analiza suplementos con evidencia, contexto y recomendaciones clínicas.',
    lockedBadge: 'BLOQUEADO',
    previewButton: 'Vista previa',
    logoutButton: 'Cerrar sesión',
    lockNotice: 'Selecciona un módulo para ver más.',
    lockedAction: 'Este módulo está bloqueado. Completa la experiencia inicial para desbloquearlo.',
    loginSuccess: 'Has iniciado sesión. Tu acceso permanece activo en esta pantalla.',
    logoutNotice: 'Has cerrado sesión. Puedes iniciar sesión de nuevo en cualquier momento.',
    loginValidation: 'Completa el nombre y el correo para iniciar sesión.',
    languageDropdownLabel: 'Elige idioma'
  },
  en: {
    brandTag: 'ISOCORE',
    brandSubtitle: 'NUTRITION',
    headerLogoText: 'ISOCORE',
    headerLogoUrl: './src/assets/isocore-logo.png',
    headerLogoAlt: 'IsoCore logo',
    headerCompanyModuleA: 'Nutrition',
    headerCompanyModuleB: 'Supplements',
    productLabel: 'NUTRITION',
    languageLabel: 'EN',
    headerEyebrow: 'Decision editor',
    title: 'Your nutrition workspace with evidence, protocols and follow-up.',
    copy: 'Access supplement profiles, personalized plans and reference material for practical use.',
    features: [
      {
        icon: './src/assets/icon-center.png',
        title: 'Smart Center',
        description: 'Consult clinical protocols and direct answers without noise or long introductions.'
      },
      {
        icon: './src/assets/icon-plan.png',
        title: 'My Plan',
        description: 'View nutritional objectives and weekly adjustments focused on real results.'
      },
      {
        icon: './src/assets/icon-lock.png',
        title: 'Locked modules',
        description: 'Unlock features with clear progress and understand which product areas are available.'
      }
    ],
    summaryLabel: 'Current version',
    summaryTitle: 'Operational product home.',
    summaryText: 'Interface built for real use: persistent login, clear navigation and IsoCore visual coherence.',
    footerEmailTitle: 'Email',
    footerEmailValue: 'contact@isocore.com',
    footerPhoneTitle: 'Phone',
    footerPhoneValue: '+34 600 000 000',
    footerAboutTitle: 'About IsoCore',
    footerAboutText: 'Practical nutrition solutions with clinical and premium focus.',
    footerPolicyTitle: 'Policies',
    footerPolicyLink: 'View document',
    footerPolicyUrl: '#',
    footerBottomText: '© 2026 ISOCORE. All rights reserved.',
    quickLoginButton: 'Enter',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    loginAuthFailed: 'Email or password is incorrect.',
    loginConnectionError: 'Connection error. Please try again.',
    registerSuccess: 'Account created. Login to continue.',
    passwordMismatch: 'Passwords do not match.',
    passwordTooShort: 'Password must be at least 8 characters.',
    recoverSuccess: 'Check your email to reset your password.',
    linkForgot: 'Forgot your password?',
    linkBackLogin: '← Back to login',
    recoverDesc: 'Enter your email and we will send you a password reset link.',
    summaryPointA: 'Equality',
    summaryPointB: 'Identity',
    summaryPointC: 'Consistency',
    loginHeading: 'Sign in to ISOCORE.',
    loginIntro: 'Log in to access your protocols, cases and nutritional recommendations.',
    nameLabel: 'Name',
    emailLabel: 'Email',
    emailPlaceholder: 'user@example.com',
    loginButton: 'Enter',
    sessionActive: 'Active session',
    welcomeGreeting: 'Welcome back,',
    modulesTitle: 'Modules',
    modulesCopy: 'Modules are presented here as part of the product. Navigation is clear and access unlocks in a controlled way.',
    resourceTitle: 'Resources',
    resourceDesc: 'Explore selected articles, guides and protocols.',
    supplementTitle: 'Supplements',
    supplementDesc: 'Analyze supplements with evidence, context and clinical recommendations.',
    lockedBadge: 'LOCKED',
    previewButton: 'Preview',
    logoutButton: 'Sign out',
    lockNotice: 'Select a module to see more.',
    lockedAction: 'This module is locked. Complete the initial experience to unlock it.',
    loginSuccess: 'You are signed in. Your access remains active on this screen.',
    logoutNotice: 'You have signed out. You can log in again at any time.',
    loginValidation: 'Complete name and email to sign in.',
    languageDropdownLabel: 'Choose language'
  },
  ca: {
    brandTag: 'ISOCORE',
    brandSubtitle: 'NUTRICIÓ',
    headerLogoText: 'ISOCORE',
    headerLogoUrl: './src/assets/isocore-logo.png',
    headerLogoAlt: 'IsoCore logo',
    headerCompanyModuleA: 'Nutrició',
    headerCompanyModuleB: 'Suplements',
    productLabel: 'NUTRICIÓ',
    languageLabel: 'CA',
    headerEyebrow: 'Editor de decisions',
    title: 'El teu espai de nutrició amb evidència, protocols i seguiment.',
    copy: 'Accedeix a fitxes de suplements, plans personalitzats i materials de referència per aplicar en cada cas.',
    features: [
      {
        icon: './src/assets/icon-center.png',
        title: 'Centre intel·ligent',
        description: 'Consulta protocols clínics i respostes directes sense soroll ni introduccions llargues.'
      },
      {
        icon: './src/assets/icon-plan.png',
        title: 'El meu Pla',
        description: 'Visualitza objectius nutricionals i ajustos setmanals amb focus en resultats reals.'
      },
      {
        icon: './src/assets/icon-lock.png',
        title: 'Mòduls bloquejats',
        description: 'Desbloca funcions amb progrés clar i mostra quina part del producte està disponible.'
      }
    ],
    summaryLabel: 'Versió actual',
    summaryTitle: 'Home de producte operatiu.',
    summaryText: 'Interfície construïda per a ús real: accés permanent, navegació clara i coherència visual del sistema IsoCore.',
    footerEmailTitle: 'Correu electrònic',
    footerEmailValue: 'contacte@isocore.com',
    footerPhoneTitle: 'Telèfon',
    footerPhoneValue: '+34 600 000 000',
    footerAboutTitle: 'Sobre IsoCore',
    footerAboutText: 'Solucions de nutrició pràctica amb enfoc clínic i premium.',
    footerPolicyTitle: 'Polítiques',
    footerPolicyLink: 'Veure document',
    footerPolicyUrl: '#',
    footerBottomText: '© 2026 ISOCORE. Tots els drets reservats.',
    quickLoginButton: 'Entrar',
    passwordLabel: 'Contrasenya',
    passwordPlaceholder: '••••••••',
    loginAuthFailed: 'Email o contrasenya incorrectes.',
    loginConnectionError: 'Error de connexió. Intenta-ho de nou.',
    registerSuccess: 'Compte creada. Inicia sessió per continuar.',
    passwordMismatch: 'Les contrasenyes no coincideixen.',
    passwordTooShort: 'La contrasenya ha de tenir almenys 8 caràcters.',
    recoverSuccess: 'Revisa el teu email per restablir la contrasenya.',
    linkForgot: 'Has oblidat la contrasenya?',
    linkBackLogin: '← Tornar al login',
    recoverDesc: 'Introdueix el teu email i t’enviarem un enllaç per restablir la contrasenya.',
    summaryPointA: 'Igualtat',
    summaryPointB: 'Identitat',
    summaryPointC: 'Consistència',
    loginHeading: 'Inicia sessió a ISOCORE.',
    loginIntro: 'Accedeix per entrar als teus protocols, casos i recomanacions nutricionals.',
    nameLabel: 'Nom',
    emailLabel: 'Correu',
    emailPlaceholder: 'usuari@exemple.com',
    loginButton: 'Entrar',
    sessionActive: 'Sessió activa',
    welcomeGreeting: 'Benvingut de nou,',
    modulesTitle: 'Mòduls',
    modulesCopy: 'Els mòduls es presenten aquí com a part del producte. La navegació és clara i l’accés es desbloqueja de forma controlada.',
    resourceTitle: 'Recursos',
    resourceDesc: 'Explora articles, guies i protocols seleccionats.',
    supplementTitle: 'Suplements',
    supplementDesc: 'Analitza suplements amb evidència, context i recomanacions clíniques.',
    lockedBadge: 'BLOQUEJAT',
    previewButton: 'Previsualitza',
    logoutButton: 'Tanca sessió',
    lockNotice: 'Selecciona un mòdul per veure més.',
    lockedAction: 'Aquest mòdul està bloquejat. Completa l’experiència inicial per desbloquejar-lo.',
    loginSuccess: 'Has iniciat sessió. El teu accés roman actiu en aquesta pantalla.',
    logoutNotice: 'Has tancat sessió. Pots iniciar sessió de nou en qualsevol moment.',
    loginValidation: 'Completa el nom i el correu per iniciar sessió.',
    languageDropdownLabel: 'Tria idioma'
  }
};

function getCurrentLanguage() {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
  return supportedLanguages.includes(storedLanguage) ? storedLanguage : 'es';
}

function setCurrentLanguage(language) {
  const selectedLanguage = supportedLanguages.includes(language) ? language : 'es';
  window.localStorage.setItem(LANGUAGE_KEY, selectedLanguage);
}

function getTranslation() {
  return translations[getCurrentLanguage()] || translations.es;
}

function getNextLanguage(current) {
  const currentIndex = supportedLanguages.indexOf(current);
  return supportedLanguages[(currentIndex + 1) % supportedLanguages.length];
}

function updateLanguageToggle(language) {
  const toggle = document.getElementById('languageToggle');
  if (!toggle) return;
  toggle.textContent = languageCodes[language] || language.toUpperCase();
  toggle.setAttribute(
    'aria-label',
    `Change language to ${languageNames[getNextLanguage(language)] || 'next'}`
  );
}

function renderFeatureCards(t) {
  const details = document.querySelector('.home-details');
  if (!details) return;
  details.innerHTML = t.features.map(createFeatureCard).join('');
}

function renderModuleCards(t) {
  const moduleGrid = document.querySelector('.module-grid');
  if (!moduleGrid) return;
  moduleGrid.innerHTML = `
      ${createModuleCard(t.resourceTitle, t.resourceDesc, true, t)}
      ${createModuleCard(t.supplementTitle, t.supplementDesc, true, t)}
    `;
}

function updateTexts(t) {
  document.documentElement.lang = getCurrentLanguage();

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!key || t[key] === undefined) return;
    element.textContent = t[key];
  });

  document.querySelectorAll('[data-placeholder-i18n]').forEach((element) => {
    const key = element.dataset.placeholderI18n;
    if (!key || t[key] === undefined) return;
    element.placeholder = t[key];
  });

  renderFeatureCards(t);
  renderModuleCards(t);

  const persistedUser = getStoredUser();
  renderLoginState(persistedUser, t);
}

function createBrandSection(t) {
  return `
    <div class="home-brand">
      <p class="home-brand-tag">${t.brandTag}</p>
      <p class="home-brand-subtitle">${t.brandSubtitle}</p>
    </div>
  `;
}

function createFeatureCard(feature) {
  return `
    <article class="feature-card">
      <div class="feature-icon">${getFeatureIcon(feature)}</div>
      <div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </div>
    </article>
  `;
}

function getFeatureIcon(feature) {
  if (feature && typeof feature.icon === 'string' && feature.icon.endsWith('.png')) {
    return `<img src="${feature.icon}" alt="${feature.title} icon" class="feature-icon-image" />`;
  }
  return getIconSVG(feature.title);
}

function getIconSVG(title) {
  const key = (title || '').toLowerCase();
  if (key.includes('centro') || key.includes('center')) {
    return `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.5" fill="none" />
        <path d="M7 9h10M7 12h10M7 15h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
  }
  if (key.includes('plan') || key.includes('plan')) {
    return `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" stroke-width="1.5" fill="none" />
        <path d="M8 8v8l4-2 4 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
  }
  if (key.includes('módul') || key.includes('locked') || key.includes('bloque')) {
    return `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none" />
        <path d="M8 11V9a4 4 0 118 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
  }
  // fallback simple circle
  return `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>`;
}

function createModuleCard(title, description, locked = true, t) {
  return `
    <article class="module-card ${locked ? 'module-locked' : ''}">
      <div>
        <h4>${title}</h4>
        <p>${description}</p>
      </div>
      <div class="module-footer">
        <span class="module-badge">${locked ? t.lockedBadge : 'ACTIVO'}</span>
        <button type="button" class="secondary-button module-action" data-locked="${locked}">${locked ? t.previewButton : 'Entrar'}</button>
      </div>
    </article>
  `;
}

function getStoredUser() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    return null;
  }
}

function storeUser(user) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  window.localStorage.setItem(LEGACY_USER_KEY, JSON.stringify(user));
}

function clearStoredUser() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(LEGACY_USER_KEY);
  window.localStorage.removeItem(LEGACY_TOKEN_KEY);
}

function renderLoginState(user, t) {
  const loginState = document.querySelector('.home-login-state');
  const userEmail = document.getElementById('homeUserEmail');
  const userLabel = document.getElementById('homeUserLabel');
  const userWelcome = document.getElementById('homeUserWelcome');
  const loginForm = document.getElementById('homeLoginForm');
  const logoutButton = document.getElementById('homeLogoutButton');
  const loginPanelIntro = document.getElementById('homeLoginPanelIntro');

  if (!loginState) return;

  if (user && user.name) {
    loginState.classList.add('home-user-logged');
    if (userLabel) userLabel.textContent = user.name;
    if (userWelcome) userWelcome.textContent = `${t.welcomeGreeting} ${user.name.split(' ')[0]}`;
    if (userEmail) userEmail.value = user.email;
    loginForm.classList.add('hidden');
    logoutButton.classList.remove('hidden');
    loginPanelIntro.textContent = t.loginIntro;
  } else {
    loginState.classList.remove('home-user-logged');
    loginForm.classList.remove('hidden');
    logoutButton.classList.add('hidden');
    loginPanelIntro.textContent = t.loginIntro;
  }
}

function showLockedNotice(message) {
  const notice = document.getElementById('homeLockedNotice');
  if (!notice) return;
  notice.textContent = message;
  notice.classList.add('visible');
  window.clearTimeout(showLockedNotice.timeoutId);
  showLockedNotice.timeoutId = window.setTimeout(() => {
    notice.classList.remove('visible');
  }, 3600);
}

function initHomeInteractions(t) {
  const loginForm = document.getElementById('homeLoginForm');
  const logoutButton = document.getElementById('homeLogoutButton');
  const lockedButtons = Array.from(document.querySelectorAll('.module-action'));
  const languageToggle = document.getElementById('languageToggle');
  const registerForm = document.getElementById('homeRegisterForm');
  const recoverForm = document.getElementById('homeRecoveryForm');
  const authTabs = Array.from(document.querySelectorAll('.auth-tab'));
  const forgotLink = document.getElementById('homeLinkForgot');
  const backLoginLink = document.getElementById('homeLinkBackLogin');

  function setAuthTab(tab) {
    authTabs.forEach((button) => button.classList.toggle('active', button.dataset.tab === tab));
    document.getElementById('homeLoginForm')?.classList.toggle('hidden', tab !== 'login');
    registerForm?.classList.toggle('hidden', tab !== 'registro');
    recoverForm?.classList.toggle('hidden', tab !== 'recuperar');
  }

  authTabs.forEach((button) => {
    button.addEventListener('click', () => {
      setAuthTab(button.dataset.tab);
    });
  });

  forgotLink?.addEventListener('click', (event) => {
    event.preventDefault();
    setAuthTab('recuperar');
  });

  backLoginLink?.addEventListener('click', (event) => {
    event.preventDefault();
    setAuthTab('login');
  });

  loginForm?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('homeUserEmail')?.value?.trim();
      const password = document.getElementById('homeUserPassword')?.value || '';

      if (!email || !password) {
        showLockedNotice(t.loginValidation);
        return;
      }

      try {
        const response = await fetch(API.login, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        if (!response.ok || !data.success) {
          showLockedNotice(data.mensaje || t.loginAuthFailed);
          return;
        }

        if (data.token) {
          setAuthToken(data.token);
          localStorage.setItem(LEGACY_TOKEN_KEY, data.token);
        }

        const user = {
          name: data.nombre || email.split('@')[0],
          email: data.email || email,
          plan: data.plan || null,
          loggedAt: new Date().toISOString()
        };

        storeUser(user);
        renderHomePage();
        showLockedNotice(t.loginSuccess);
      } catch (error) {
        showLockedNotice(t.loginConnectionError);
      }
  });

  registerForm?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.getElementById('homeRegisterName')?.value?.trim();
      const email = document.getElementById('homeRegisterEmail')?.value?.trim();
      const password = document.getElementById('homeRegisterPassword')?.value || '';
      const password2 = document.getElementById('homeRegisterPassword2')?.value || '';

      if (!name || !email || !password || !password2) {
        showLockedNotice(t.loginValidation);
        return;
      }
      if (password !== password2) {
        showLockedNotice(t.passwordMismatch);
        return;
      }
      if (password.length < 8) {
        showLockedNotice(t.passwordTooShort);
        return;
      }

      const terms = document.getElementById('homeRegisterTerms')?.checked;
      if (!terms) {
        showLockedNotice(t.termsRequired || 'Debes aceptar los términos y condiciones.');
        return;
      }

      try {
        const response = await fetch(API.register, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre: name, email, password })
        });
        const data = await response.json();

        if (!response.ok || !data.success) {
          showLockedNotice(data.mensaje || t.loginAuthFailed);
          return;
        }

        showLockedNotice(data.mensaje || t.registerSuccess);
        setAuthTab('login');
      } catch (error) {
        showLockedNotice(t.loginConnectionError);
      }
  });

  recoverForm?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('homeRecoverEmail')?.value?.trim();
      if (!email) {
        showLockedNotice(t.loginValidation);
        return;
      }

      try {
        const response = await fetch(API.recover, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        const data = await response.json();

        if (!response.ok || !data.success) {
          showLockedNotice(data.mensaje || t.loginAuthFailed);
          return;
        }

        showLockedNotice(data.mensaje || t.recoverSuccess);
      } catch (error) {
        showLockedNotice(t.loginConnectionError);
      }
  });

  logoutButton?.addEventListener('click', () => {
    clearStoredUser();
    renderHomePage();
    showLockedNotice(t.logoutNotice);
  });

  lockedButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isLocked = button.dataset.locked === 'true';
      if (isLocked) {
        showLockedNotice(t.lockedAction);
        return;
      }
      showLockedNotice(t.lockNotice);
    });
  });

  languageToggle?.addEventListener('click', () => {
    const nextLanguage = getNextLanguage(getCurrentLanguage());
    setCurrentLanguage(nextLanguage);
    const nextTranslation = getTranslation();
    updateLanguageToggle(nextLanguage);
    updateTexts(nextTranslation);
  });

}

export function renderHomePage() {
  const appRoot = document.getElementById('app');
  const t = getTranslation();
  const language = getCurrentLanguage();

    appRoot.innerHTML = `
      <main class="home-root page-shell">
        <header class="home-header">
          <div class="header-block header-logo">
            ${t.headerLogoUrl ? `<img src="${t.headerLogoUrl}" alt="${t.headerLogoAlt}" class="header-logo-image" />` : `<span class="header-logo-text" data-i18n="headerLogoText">${t.headerLogoText}</span>`}
          </div>
          <div class="header-block header-module">
            <span class="header-label" data-i18n="headerCompanyModuleA">${t.headerCompanyModuleA}</span>
          </div>
          <div class="header-block header-module">
            <span class="header-label" data-i18n="headerCompanyModuleB">${t.headerCompanyModuleB}</span>
          </div>
          <div class="header-block header-actions">
            <button id="languageToggle" class="language-toggle" type="button" aria-live="polite">${languageCodes[language]}</button>
          </div>
        </header>
        <section class="home-grid">
          <div class="home-panel home-panel-left">
            <div class="home-left-top">
              ${createBrandSection(t)}
            </div>

            <div class="home-hero">
              <p class="eyebrow" data-i18n="headerEyebrow">${t.headerEyebrow}</p>
              <h1 data-i18n="title">${t.title}</h1>
              <p class="home-copy" data-i18n="copy">${t.copy}</p>
            </div>

            <div class="home-brief">
              ${t.features.slice(0,1).map(createFeatureCard).join('')}
            </div>
          </div>

          <div class="home-panel home-panel-center">
            <div class="home-details">
              ${t.features.map(createFeatureCard).join('')}
            </div>

            <div class="home-summary-card">
              <div>
                <p class="summary-label" data-i18n="summaryLabel">${t.summaryLabel}</p>
                <h2 data-i18n="summaryTitle">${t.summaryTitle}</h2>
                <p data-i18n="summaryText">${t.summaryText}</p>
              </div>
              <div class="summary-keypoints">
                <span data-i18n="summaryPointA">${t.summaryPointA}</span>
                <span data-i18n="summaryPointB">${t.summaryPointB}</span>
                <span data-i18n="summaryPointC">${t.summaryPointC}</span>
              </div>
            </div>
          </div>

          <aside class="home-panel home-panel-right">
            <div class="home-card home-login-card home-login-state">
              <div class="home-login-heading">
                <p class="eyebrow" data-i18n="loginHeading">${t.loginHeading}</p>
              </div>
              <p id="homeLoginPanelIntro" class="home-login-copy" data-i18n="loginIntro">${t.loginIntro}</p>
              <div class="auth-tabs">
                <button type="button" class="auth-tab active" data-tab="login">${t.loginButton}</button>
                <button type="button" class="auth-tab" data-tab="registro">${t.registerButton || 'Registrarse'}</button>
              </div>
              <form id="homeLoginForm" class="home-login-form">
                <label class="input-group">
                  <span data-i18n="emailLabel">${t.emailLabel}</span>
                  <input id="homeUserEmail" type="email" placeholder="${t.emailPlaceholder}" data-placeholder-i18n="emailPlaceholder" autocomplete="email" />
                </label>
                <label class="input-group">
                  <span data-i18n="passwordLabel">${t.passwordLabel}</span>
                  <input id="homeUserPassword" type="password" placeholder="${t.passwordPlaceholder}" data-placeholder-i18n="passwordPlaceholder" autocomplete="current-password" />
                </label>
                <div class="form-footer">
                  <button id="homeLinkForgot" type="button" class="link-button">${t.linkForgot}</button>
                </div>
                <button type="submit" class="primary-button" data-i18n="loginButton">${t.loginButton}</button>
              </form>
              <form id="homeRegisterForm" class="home-login-form hidden">
                <label class="input-group">
                  <span data-i18n="nameLabel">${t.nameLabel}</span>
                  <input id="homeRegisterName" type="text" placeholder="${t.nameLabel}" autocomplete="name" />
                </label>
                <label class="input-group">
                  <span data-i18n="emailLabel">${t.emailLabel}</span>
                  <input id="homeRegisterEmail" type="email" placeholder="${t.emailPlaceholder}" autocomplete="email" />
                </label>
                <label class="input-group">
                  <span data-i18n="passwordLabel">${t.passwordLabel}</span>
                  <input id="homeRegisterPassword" type="password" placeholder="${t.passwordPlaceholder}" autocomplete="new-password" />
                </label>
                <label class="input-group">
                  <span data-i18n="label_pass2">${t.passwordLabel} 2</span>
                  <input id="homeRegisterPassword2" type="password" placeholder="${t.passwordPlaceholder}" autocomplete="new-password" />
                </label>
                <label class="input-group input-check">
                  <input id="homeRegisterTerms" type="checkbox" />
                  <span>${t.termsLabel || 'Acepto los <a href="#">términos y condiciones</a>'}</span>
                </label>
                <button type="submit" class="primary-button">${t.registerButton || 'Registrarse'}</button>
              </form>
              <form id="homeRecoveryForm" class="home-login-form hidden">
                <p class="home-login-copy">${t.recoverDesc}</p>
                <label class="input-group">
                  <span data-i18n="emailLabel">${t.emailLabel}</span>
                  <input id="homeRecoverEmail" type="email" placeholder="${t.emailPlaceholder}" autocomplete="email" />
                </label>
                <button type="submit" class="primary-button">${t.btnRecover || 'Enviar enlace'}</button>
                <button id="homeLinkBackLogin" type="button" class="ghost-button">${t.linkBackLogin}</button>
              </form>
              <div class="home-user-card hidden" aria-live="polite">
                <p class="eyebrow">${t.sessionActive}</p>
                <h3 id="homeUserLabel">Usuario</h3>
                <p id="homeUserWelcome">${t.loginSuccess}</p>
              </div>
              <button id="homeLogoutButton" class="ghost-button hidden" type="button">${t.logoutButton}</button>
            </div>

            <div class="home-card home-lock-card">
              <div class="home-lock-header">
                <h3>${t.modulesTitle}</h3>
                <span class="status-pill">${t.lockedBadge}</span>
              </div>
              <p class="module-copy">${t.modulesCopy}</p>
              <div class="module-grid">
                ${createModuleCard(t.resourceTitle, t.resourceDesc, true, t)}
                ${createModuleCard(t.supplementTitle, t.supplementDesc, true, t)}
              </div>
            </div>

            <div id="homeLockedNotice" class="home-locked-notice">${t.lockNotice}</div>
          </aside>

        </section>
      <footer class="home-footer">
        <div class="footer-grid">
          <div class="footer-col footer-field">
            <h4 data-i18n="footerEmailTitle">Correo electrónico</h4>
            <p><a href="mailto:${t.footerEmailValue}" class="footer-link" data-i18n="footerEmailValue">${t.footerEmailValue}</a></p>
          </div>
          <div class="footer-col footer-field">
            <h4 data-i18n="footerPhoneTitle">Teléfono</h4>
            <p><a href="tel:${t.footerPhoneValue}" class="footer-link" data-i18n="footerPhoneValue">${t.footerPhoneValue}</a></p>
          </div>
          <div class="footer-col footer-field">
            <h4 data-i18n="footerAboutTitle">Sobre IsoCore</h4>
            <p data-i18n="footerAboutText">${t.footerAboutText}</p>
          </div>
          <div class="footer-col footer-field">
            <h4 data-i18n="footerPolicyTitle">Políticas</h4>
            <p><a href="${t.footerPolicyUrl}" target="_blank" rel="noopener noreferrer" class="footer-link" data-i18n="footerPolicyLink">${t.footerPolicyLink}</a></p>
          </div>
        </div>
        <div class="footer-bottom" data-i18n="footerBottomText">${t.footerBottomText}</div>
      </footer>
      </main>
    `;

  const persistedUser = getStoredUser();
  renderLoginState(persistedUser, t);
  initHomeInteractions(t);
  updateLanguageToggle(language);
}
