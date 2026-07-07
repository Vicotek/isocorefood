const STORAGE_KEY = 'isocore_home_user';
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
    brandSubtitle: 'NUTRICIÓN',
    productLabel: 'NUTRICIÓN',
    languageLabel: 'ES',
    headerEyebrow: 'Editor de decisiones',
    title: 'Tu espacio de nutrición con evidencia, protocolos y seguimiento.',
    copy: 'Accede a fichas de suplementos, planes personalizados y materiales de referencia para aplicar en cada caso.',
    features: [
      {
        icon: '📘',
        title: 'Centro Inteligente',
        description: 'Consulta protocolos clínicos y respuestas directas sin ruido ni entradas largas.'
      },
      {
        icon: '🧠',
        title: 'Mi Plan',
        description: 'Visualiza objetivos nutricionales y ajustes semanales con foco en resultados reales.'
      },
      {
        icon: '🔒',
        title: 'Módulos bloqueados',
        description: 'Desbloquea funciones con progreso claro y muestra qué parte del producto está disponible.'
      }
    ],
    summaryLabel: 'Versión actual',
    summaryTitle: 'Home de producto operativo.',
    summaryText: 'Interfaz construida para uso real: ingreso persistente, navegación clara y coherencia visual del sistema IsoCore.',
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
    brandSubtitle: 'NUTRITION',
    productLabel: 'NUTRITION',
    languageLabel: 'EN',
    headerEyebrow: 'Decision editor',
    title: 'Your nutrition workspace with evidence, protocols and follow-up.',
    copy: 'Access supplement profiles, personalized plans and reference material for practical use.',
    features: [
      {
        icon: '📘',
        title: 'Smart Center',
        description: 'Consult clinical protocols and direct answers without noise or long introductions.'
      },
      {
        icon: '🧠',
        title: 'My Plan',
        description: 'View nutritional objectives and weekly adjustments focused on real results.'
      },
      {
        icon: '🔒',
        title: 'Locked modules',
        description: 'Unlock features with clear progress and understand which product areas are available.'
      }
    ],
    summaryLabel: 'Current version',
    summaryTitle: 'Operational product home.',
    summaryText: 'Interface built for real use: persistent login, clear navigation and IsoCore visual coherence.',
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
    brandSubtitle: 'NUTRICIÓ',
    productLabel: 'NUTRICIÓ',
    languageLabel: 'CA',
    headerEyebrow: 'Editor de decisions',
    title: 'El teu espai de nutrició amb evidència, protocols i seguiment.',
    copy: 'Accedeix a fitxes de suplements, plans personalitzats i materials de referència per aplicar en cada cas.',
    features: [
      {
        icon: '📘',
        title: 'Centre intel·ligent',
        description: 'Consulta protocols clínics i respostes directes sense soroll ni introduccions llargues.'
      },
      {
        icon: '🧠',
        title: 'El meu Pla',
        description: 'Visualitza objectius nutricionals i ajustos setmanals amb focus en resultats reals.'
      },
      {
        icon: '🔒',
        title: 'Mòduls bloquejats',
        description: 'Desbloca funcions amb progrés clar i mostra quina part del producte està disponible.'
      }
    ],
    summaryLabel: 'Versió actual',
    summaryTitle: 'Home de producte operatiu.',
    summaryText: 'Interfície construïda per a ús real: accés permanent, navegació clara i coherència visual del sistema IsoCore.',
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
      <p class="home-brand-tag">ISOCORE</p>
      <p class="home-brand-subtitle">${t.brandSubtitle}</p>
    </div>
  `;
}

function createFeatureCard(feature) {
  return `
    <article class="feature-card">
      <div class="feature-icon">${feature.icon}</div>
      <div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </div>
    </article>
  `;
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
}

function clearStoredUser() {
  window.localStorage.removeItem(STORAGE_KEY);
}

function renderLoginState(user, t) {
  const loginState = document.querySelector('.home-login-state');
  const userName = document.getElementById('homeUserName');
  const userEmail = document.getElementById('homeUserEmail');
  const userLabel = document.getElementById('homeUserLabel');
  const userWelcome = document.getElementById('homeUserWelcome');
  const loginForm = document.getElementById('homeLoginForm');
  const logoutButton = document.getElementById('homeLogoutButton');
  const loginPanelIntro = document.getElementById('homeLoginPanelIntro');

  if (!loginState) return;

  if (user && user.name) {
    loginState.classList.add('home-user-logged');
    userLabel.textContent = user.name;
    userWelcome.textContent = `${t.welcomeGreeting} ${user.name.split(' ')[0]}`;
    userName.value = user.name;
    userEmail.value = user.email;
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

  loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('homeUserName')?.value?.trim();
    const email = document.getElementById('homeUserEmail')?.value?.trim();

    if (!name || !email) {
      showLockedNotice(t.loginValidation);
      return;
    }

    const user = { name, email, loggedAt: new Date().toISOString() };
    storeUser(user);
    renderHomePage();
    showLockedNotice(t.loginSuccess);
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
      <div class="home-header">
        ${createBrandSection(t)}
        <div class="home-nav">
          <span class="home-nav-item" data-i18n="productLabel">${t.productLabel}</span>
          <button id="languageToggle" class="language-toggle" type="button" aria-live="polite">${languageCodes[language]}</button>
        </div>
      </div>

      <section class="home-grid">
        <div class="home-panel home-panel-left">
          <div class="home-hero">
            <p class="eyebrow" data-i18n="headerEyebrow">${t.headerEyebrow}</p>
            <h1 data-i18n="title">${t.title}</h1>
            <p class="home-copy" data-i18n="copy">${t.copy}</p>
          </div>

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
              <span>65/35</span>
              <span>Identidad única</span>
              <span>Diseño coherente</span>
            </div>
          </div>
        </div>

        <aside class="home-panel home-panel-right">
          <div class="home-card home-login-card home-login-state">
            <div class="home-login-heading">
              <p class="eyebrow" data-i18n="loginHeading">${t.loginHeading}</p>
            </div>
            <p id="homeLoginPanelIntro" class="home-login-copy" data-i18n="loginIntro">${t.loginIntro}</p>
            <form id="homeLoginForm" class="home-login-form">
              <label class="input-group">
                <span data-i18n="nameLabel">${t.nameLabel}</span>
                <input id="homeUserName" type="text" placeholder="${t.nameLabel}" data-placeholder-i18n="nameLabel" autocomplete="name" />
              </label>
              <label class="input-group">
                <span data-i18n="emailLabel">${t.emailLabel}</span>
                <input id="homeUserEmail" type="email" placeholder="${t.emailPlaceholder}" data-placeholder-i18n="emailPlaceholder" autocomplete="email" />
              </label>
              <button type="submit" class="primary-button" data-i18n="loginButton">${t.loginButton}</button>
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
    </main>
  `;

  const persistedUser = getStoredUser();
  renderLoginState(persistedUser, t);
  initHomeInteractions(t);
  updateLanguageToggle(language);
}
