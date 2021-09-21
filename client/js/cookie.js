export default class CookieBanner {
  constructor(root) {
    this.root = root;
    this.createClosingButton();
    setTimeout(this.openBanner.bind(this), 5000);
  }

  closeBanner() {
    this.root.classList.toggle('cookie_closed', true);
  }

  openBanner() {
    this.root.classList.toggle('cookie_closed', false);
  }

  createClosingButton() {
    this.btn = this.root.querySelector('[data-button="cookie-close"]');
    this.btn.onclick = this.closeBanner.bind(this);
  }

  static getAll() {
    const sliders = Array.prototype.slice.call(document.querySelectorAll("[data-widget='cookie-banner']"));
    return sliders.map((t) => new CookieBanner(t));
  }
}
