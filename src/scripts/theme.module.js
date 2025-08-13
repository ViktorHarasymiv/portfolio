class ThemeSwitcher {
  selectors = {
    switchThemeButton: '[data-js-theme-switcher]',
  };

  themes = {
    dark: 'dark',
    light: 'light',
  };

  stateClasses = {
    isDarkTheme: 'is-dark-theme',
  };

  storageKey = 'theme';

  constructor() {
    this.switchThemeButtonElement = document.querySelector(
      this.selectors.switchThemeButton
    );
    this.setInitialTheme();
    this.bindEvents();
  }

  get isDarkThemeCached() {
    return localStorage.getItem(this.storageKey) === this.themes.dark;
  }

  setInitialTheme() {
    document.documentElement.classList.toggle(
      this.stateClasses.isDarkTheme,
      this.isDarkThemeCached
    );
  }

  onClick = () => {
    localStorage.setItem(
      this.storageKey,
      this.isDarkThemeCached ? this.themes.light : this.themes.dark
    );
    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme);
  };

  bindEvents() {
    this.switchThemeButtonElement.addEventListener('click', this.onClick);
  }
}

new ThemeSwitcher();

const themeIcon = document.querySelector('.theme_ico');
const switchButton = document.querySelector('.switch');

let isDark = true;

switchButton.addEventListener('click', () => {
  if (isDark) {
    themeIcon.src = '../image/icons/switcher-light.svg';
    switchButton.appendChild('Light');
    // Зробити білим
    themeIcon.style.filter =
      'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)';
  } else {
    themeIcon.src = '../image/icons/switcher-dark.svg';
  }
  isDark = !isDark;
});
